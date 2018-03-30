using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Xml;
using Swashbuckle.Swagger;

namespace WebApi.SwaggerExtensions
{
    /// <summary>
    /// Swagger缓存适配器
    /// </summary>
    public class CachingSwaggerProvider : ISwaggerProvider
    {
        private static ConcurrentDictionary<string, SwaggerDocument> _cache = new ConcurrentDictionary<string, SwaggerDocument>();

        private readonly ISwaggerProvider _swaggerProvider;
        /// <summary>
        /// 过滤参数
        /// </summary>
        private string[] _filterParm = new[] { "namespace", "id" };

        /// <summary>
        /// 
        /// </summary>
        /// <param name="swaggerProvider"></param>
        public CachingSwaggerProvider(ISwaggerProvider swaggerProvider)
        {
            _swaggerProvider = swaggerProvider;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="rootUrl"></param>
        /// <param name="apiVersion"></param>
        /// <returns></returns>
        public SwaggerDocument GetSwagger(string rootUrl, string apiVersion)
        {
            var cacheKey = string.Format("{0}_{1}", rootUrl, apiVersion);
            SwaggerDocument srcDoc = null;
            if (!_cache.TryGetValue(cacheKey, out srcDoc))
            {
                srcDoc = _swaggerProvider.GetSwagger(rootUrl, apiVersion);
                IDictionary<string, PathItem> dic = new Dictionary<string, PathItem>();
                foreach (var item in srcDoc.paths)
                {
                    bool isExistsId = false;
                    bool isExistsGetId = false;
                    bool isExistsPostId = false;
                    if (item.Value.get != null)
                    {
                        isExistsGetId = IsExistsId(item.Value.get.parameters);
                        item.Value.get.parameters = FilterParam(item.Value.get.parameters);
                    }
                    if (item.Value.post != null)
                    {
                        isExistsPostId = IsExistsId(item.Value.post.parameters);
                        item.Value.post.parameters = FilterParam(item.Value.post.parameters);
                    }
                    if (isExistsGetId)
                    {
                        isExistsId = true;
                    }
                    else if (isExistsPostId)
                    {
                        isExistsId = true;
                    }

                    var key = FilterDicName(item.Key, isExistsId);
                    if (!dic.ContainsKey(key))
                    {
                        dic.Add(key, item.Value);
                    }
                }
                srcDoc.paths = dic;
                srcDoc.vendorExtensions = new Dictionary<string, object>() { { "ControllerDesc", GetControllerDesc() } };
                _cache.TryAdd(cacheKey, srcDoc);
            }
            return srcDoc;
        }

        /// <summary>
        /// 过滤命名空间参数
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        private IList<Parameter> FilterParam(IList<Parameter> list)
        {
            var tempList =
                list.Where(x => (!_filterParm.Contains(x.name) || x.description != null));
            return tempList.Select(x =>
            {
                var temp = x;
                if (x.name == "id")
                {
                    x.@in = "query";
                }
                return temp;
            }).ToList();
        }

        /// <summary>
        /// 过滤字典名
        /// </summary>
        /// <param name="url">url地址</param>
        /// <param name="isExistsId">是否存在ID</param>
        /// <returns></returns>
        private string FilterDicName(string url, bool isExistsId)
        {
            url = url.Replace("/{namespace}", "").Replace(".", "/").Replace("/DefaultAction", "").Replace("/{id}", "");
            if (!isExistsId)
            {
                url = url.Replace("/{id}", "");
            }
            return url;
        }

        /// <summary>
        /// 是否存在ID
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        private bool IsExistsId(IList<Parameter> list)
        {
            return list.Any(x => x.name == "id" && x.description != null);
        }

        /// <summary>
        /// 从API文档中获取控制器描述
        /// </summary>
        /// <returns></returns>
        public static ConcurrentDictionary<string, string> GetControllerDesc()
        {
            string xmlPath = string.Format("{0}/bin/WebApi.XML", System.AppDomain.CurrentDomain.BaseDirectory);
            ConcurrentDictionary<string, string> controllerDescDict = new ConcurrentDictionary<string, string>();
            if (File.Exists(xmlPath))
            {
                XmlDocument xmlDoc = new XmlDocument();
                xmlDoc.Load(xmlPath);
                string type = string.Empty, path = string.Empty, controllerName = string.Empty;

                string[] arrPath;
                int length = -1, cCount = "Controller".Length;
                XmlNode summaryNode = null;
                foreach (XmlNode node in xmlDoc.SelectNodes("//member"))
                {
                    type = node.Attributes["name"].Value;
                    if (type.StartsWith("T:"))
                    {
                        //控制器
                        arrPath = type.Split('.');
                        length = arrPath.Length;
                        controllerName = arrPath[length - 1];
                        if (controllerName.EndsWith("Controller"))
                        {
                            //获取控制器注释
                            summaryNode = node.SelectSingleNode("summary");
                            string key = controllerName;//.Remove(controllerName.Length - cCount, cCount);
                            if (summaryNode != null && !string.IsNullOrEmpty(summaryNode.InnerText) &&
                                !controllerDescDict.ContainsKey(key))
                            {
                                controllerDescDict.TryAdd(key, summaryNode.InnerText.Trim());
                            }
                        }
                    }
                }
            }
            return controllerDescDict;
        }

    }
}