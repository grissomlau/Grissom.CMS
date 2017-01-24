using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace WebApi
{
    public static class XmlHelper
    {
        public static T LoadFromXml<T>(string xml)
        {
            XmlSerializer xmlSerializer = new XmlSerializer(typeof(T));
            byte[] bytes = System.Text.Encoding.UTF8.GetBytes(xml);
            MemoryStream ms = new MemoryStream(bytes, 0, bytes.Length);
            var sqllSetting = xmlSerializer.Deserialize(ms);
            return (T)sqllSetting;
        }

        public static string GetXml(string xml)
        {
            if (xml.EndsWith(".xml", StringComparison.InvariantCultureIgnoreCase))
            {
                using (StreamReader sr = new StreamReader(xml))
                {
                    return sr.ReadToEnd();
                }
            }
            else
            {
                return xml;
            }
        }

        public static string ToXml(object value, Type type)
        {
            StringWriter sw = new StringWriter();
            XmlSerializerNamespaces ns = new XmlSerializerNamespaces();
            ns.Add("", "");  //去除命名空间
            XmlSerializer serializer = new XmlSerializer(type);
            serializer.Serialize(sw, value, ns);
            return sw.ToString();
        }
    }
}
