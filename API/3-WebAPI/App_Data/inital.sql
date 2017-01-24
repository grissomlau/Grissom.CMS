-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        10.0.21-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 video.SysMenu 结构
CREATE TABLE IF NOT EXISTS `SysMenu` (
  `Code` varchar(32) NOT NULL COMMENT '菜单编码',
  `ParentCode` varchar(32) DEFAULT NULL COMMENT '父级菜单编码',
  `Name` varchar(32) NOT NULL COMMENT '菜单名称',
  `Url` varchar(256) DEFAULT NULL COMMENT '菜单链接',
  `Seq` int(11) NOT NULL DEFAULT '0' COMMENT '菜单排序',
  `Icon` varchar(32) DEFAULT NULL COMMENT '菜单icon 样式',
  `Remark` varchar(256) DEFAULT NULL COMMENT '备注',
  `IsDeleted` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否已删除',
  PRIMARY KEY (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统菜单';

-- 正在导出表  video.SysMenu 的数据：~4 rows (大约)
/*!40000 ALTER TABLE `SysMenu` DISABLE KEYS */;
INSERT INTO `SysMenu` (`Code`, `ParentCode`, `Name`, `Url`, `Seq`, `Icon`, `Remark`, `IsDeleted`) VALUES
	('Sys', NULL, '系统管理', NULL, 0, NULL, NULL, b'0'),
	('SysRole', 'Sys', '角色管理', '/sys/role/index.html', 0, NULL, NULL, b'0'),
	('SysUser', 'Sys', '用户管理', '/sys/user/index.html', 0, NULL, NULL, b'0'),
	('Video', NULL, '视频管理', NULL, 0, NULL, NULL, b'0'),
	('VideoMain', 'Video', '视频管理', '/video/main/index.html', 0, NULL, NULL, b'0');
/*!40000 ALTER TABLE `SysMenu` ENABLE KEYS */;

-- 导出  表 video.SysMenuPoint 结构
CREATE TABLE IF NOT EXISTS `SysMenuPoint` (
  `Code` varchar(32) NOT NULL COMMENT '按钮编码',
  `Name` varchar(32) NOT NULL COMMENT '按钮名称',
  `MenuCode` varchar(32) NOT NULL COMMENT '菜单编码',
  `Group` varchar(32) NOT NULL COMMENT '按钮组别',
  `Url` varchar(256) DEFAULT NULL COMMENT '按钮链接',
  `Method` varchar(64) DEFAULT NULL COMMENT '按钮点击触发的js方法',
  `Seq` int(11) NOT NULL DEFAULT '0' COMMENT '按钮排序',
  `Icon` varchar(32) DEFAULT NULL COMMENT '按钮样式',
  `IsHidden` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否隐藏',
  `IsDeleted` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否已删除',
  `WinType` varchar(8) DEFAULT NULL COMMENT '窗体类型',
  PRIMARY KEY (`Code`,`MenuCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='菜单按钮';

-- 正在导出表  video.SysMenuPoint 的数据：~11 rows (大约)
/*!40000 ALTER TABLE `SysMenuPoint` DISABLE KEYS */;
INSERT INTO `SysMenuPoint` (`Code`, `Name`, `MenuCode`, `Group`, `Url`, `Method`, `Seq`, `Icon`, `IsHidden`, `IsDeleted`, `WinType`) VALUES
	('add', '新增', 'SysRole', 'index', '/sys/role/edit.html', NULL, 0, NULL, b'0', b'0', NULL),
	('add', '新增', 'SysUser', 'index', '/sys/user/edit.html', NULL, 0, NULL, b'0', b'0', NULL),
	('add', '新增', 'VideoMain', 'index', '/video/main/edit.html', NULL, 0, NULL, b'0', b'0', NULL),
	('delete', '删除', 'SysRole', 'index', '/sys/role/edit', NULL, 0, NULL, b'0', b'0', NULL),
	('delete', '删除', 'SysUser', 'index', '/sys/user/edit', NULL, 0, NULL, b'0', b'0', NULL),
	('delete', '删除', 'VideoMain', 'index', '/video/main/edit', NULL, 0, NULL, b'0', b'0', NULL),
	('edit', '编辑', 'SysRole', 'index', '/sys/role/edit.html', NULL, 0, NULL, b'0', b'0', NULL),
	('edit', '编辑', 'SysUser', 'index', '/sys/user/edit.html', NULL, 0, NULL, b'0', b'0', NULL),
	('edit', '编辑', 'VideoMain', 'index', '/video/main/edit.html', NULL, 0, NULL, b'0', b'0', NULL),
	('save', '保存', 'SysRole', 'edit', '/sys/role/edit', NULL, 0, NULL, b'0', b'0', NULL),
	('save', '保存', 'SysUser', 'edit', '/sys/user/edit', NULL, 0, NULL, b'0', b'0', NULL),
	('save', '保存', 'VideoMain', 'edit', '/video/main/edit', NULL, 0, NULL, b'0', b'0', NULL);
/*!40000 ALTER TABLE `SysMenuPoint` ENABLE KEYS */;

-- 导出  表 video.SysRole 结构
CREATE TABLE IF NOT EXISTS `SysRole` (
  `Id` bigint(16) NOT NULL AUTO_INCREMENT,
  `Name` varchar(32) NOT NULL COMMENT '名称',
  `IsDeleted` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否已删除',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='角色';

-- 正在导出表  video.SysRole 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `SysRole` DISABLE KEYS */;
INSERT INTO `SysRole` (`Id`, `Name`, `IsDeleted`) VALUES
	(1, 'admin', b'0'),
	(2, 'test', b'0');
/*!40000 ALTER TABLE `SysRole` ENABLE KEYS */;

-- 导出  表 video.SysRoleMenu 结构
CREATE TABLE IF NOT EXISTS `SysRoleMenu` (
  `RoleId` bigint(16) NOT NULL COMMENT '角色id',
  `MenuCode` varchar(32) NOT NULL COMMENT '菜单编码',
  PRIMARY KEY (`RoleId`,`MenuCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色菜单';

-- 正在导出表  video.SysRoleMenu 的数据：~4 rows (大约)
/*!40000 ALTER TABLE `SysRoleMenu` DISABLE KEYS */;
INSERT INTO `SysRoleMenu` (`RoleId`, `MenuCode`) VALUES
	(1, 'Sys'),
	(1, 'SysRole'),
	(1, 'SysUser'),
	(1, 'Video'),
	(1, 'VideoMain');
/*!40000 ALTER TABLE `SysRoleMenu` ENABLE KEYS */;

-- 导出  表 video.SysRoleMenuPoint 结构
CREATE TABLE IF NOT EXISTS `SysRoleMenuPoint` (
  `RoleId` bigint(16) NOT NULL COMMENT '角色id',
  `MenuCode` varchar(32) NOT NULL COMMENT '菜单编码',
  `PointCode` varchar(32) NOT NULL COMMENT '按钮编码',
  PRIMARY KEY (`RoleId`,`MenuCode`,`PointCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色菜单按钮';

-- 正在导出表  video.SysRoleMenuPoint 的数据：~11 rows (大约)
/*!40000 ALTER TABLE `SysRoleMenuPoint` DISABLE KEYS */;
INSERT INTO `SysRoleMenuPoint` (`RoleId`, `MenuCode`, `PointCode`) VALUES
	(1, 'SysRole', 'add'),
	(1, 'SysRole', 'delete'),
	(1, 'SysRole', 'edit'),
	(1, 'SysRole', 'save'),
	(1, 'SysUser', 'add'),
	(1, 'SysUser', 'delete'),
	(1, 'SysUser', 'edit'),
	(1, 'SysUser', 'save'),
	(1, 'VideoMain', 'add'),
	(1, 'VideoMain', 'delete'),
	(1, 'VideoMain', 'edit'),
	(1, 'VideoMain', 'save');
/*!40000 ALTER TABLE `SysRoleMenuPoint` ENABLE KEYS */;

-- 导出  表 video.SysUser 结构
CREATE TABLE IF NOT EXISTS `SysUser` (
  `Id` bigint(16) NOT NULL AUTO_INCREMENT,
  `Name` varchar(32) NOT NULL COMMENT '名称',
  `Account` varchar(32) NOT NULL COMMENT '登录名',
  `Pwd` varchar(32) DEFAULT NULL COMMENT '登录密码',
  `Gender` varchar(8) DEFAULT NULL COMMENT '性别',
  `IsDeleted` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否已删除',
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `UpdatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='系统用户';

-- 正在导出表  video.SysUser 的数据：~3 rows (大约)
/*!40000 ALTER TABLE `SysUser` DISABLE KEYS */;
INSERT INTO `SysUser` (`Id`, `Name`, `Account`, `Pwd`, `Gender`, `IsDeleted`, `CreatedDate`, `UpdatedDate`) VALUES
	(1, 'admin', 'admin', '202CB962AC59075B964B07152D234B70', 'male', b'0', '2017-01-09 23:19:57', '2017-01-23 11:41:03'),
	(4, 'test2', 'test2', '202CB962AC59075B964B07152D234B70', 'male', b'1', '2017-01-22 16:29:17', '2017-01-22 16:30:35'),
	(5, 'test', 'test', NULL, 'female', b'0', '2017-01-22 17:16:26', '2017-01-22 17:16:26');
/*!40000 ALTER TABLE `SysUser` ENABLE KEYS */;

-- 导出  表 video.SysUserRole 结构
CREATE TABLE IF NOT EXISTS `SysUserRole` (
  `UserId` bigint(16) NOT NULL COMMENT '用户id',
  `RoleId` bigint(16) NOT NULL COMMENT '角色id',
  PRIMARY KEY (`UserId`,`RoleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户角色';

-- 正在导出表  video.SysUserRole 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `SysUserRole` DISABLE KEYS */;
INSERT INTO `SysUserRole` (`UserId`, `RoleId`) VALUES
	(1, 1);
/*!40000 ALTER TABLE `SysUserRole` ENABLE KEYS */;

-- 导出  表 video.VideoComment 结构
CREATE TABLE IF NOT EXISTS `VideoComment` (
  `Id` bigint(16) NOT NULL AUTO_INCREMENT,
  `VideoId` bigint(16) NOT NULL COMMENT '视频id',
  `ParentCommentId` bigint(16) NOT NULL COMMENT '回复的评论id',
  `Comment` varchar(1024) NOT NULL COMMENT '评论内容',
  `UpCount` int(11) NOT NULL DEFAULT '0' COMMENT '顶数',
  `DownCount` int(11) NOT NULL DEFAULT '0' COMMENT '踩数',
  `IsDeleted` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否已删除',
  `CreatedUserId` bigint(16) NOT NULL COMMENT '创建人Id',
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='视频评论';

-- 正在导出表  video.VideoComment 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `VideoComment` DISABLE KEYS */;
/*!40000 ALTER TABLE `VideoComment` ENABLE KEYS */;

-- 导出  表 video.VideoCommentUpdown 结构
CREATE TABLE IF NOT EXISTS `VideoCommentUpdown` (
  `Id` bigint(16) NOT NULL AUTO_INCREMENT,
  `CommentId` bigint(16) NOT NULL COMMENT '评论id',
  `IsUp` bit(1) NOT NULL COMMENT '是否为顶',
  `IsDeleted` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否已删除',
  `CreatedUserId` bigint(16) NOT NULL COMMENT '创建人Id',
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='视频顶/踩';

-- 正在导出表  video.VideoCommentUpdown 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `VideoCommentUpdown` DISABLE KEYS */;
/*!40000 ALTER TABLE `VideoCommentUpdown` ENABLE KEYS */;

-- 导出  表 video.VideoMain 结构
CREATE TABLE IF NOT EXISTS `VideoMain` (
  `Id` bigint(16) NOT NULL AUTO_INCREMENT,
  `Name` varchar(64) NOT NULL COMMENT '视频名称',
  `Desc` varchar(256) DEFAULT NULL COMMENT '视频描述',
  `Path` varchar(256) DEFAULT NULL COMMENT '视频地址',
  `Thunbnail` varchar(256) DEFAULT NULL COMMENT '视频小图',
  `TotalMark` tinyint(4) NOT NULL DEFAULT '0' COMMENT '总评分',
  `IsDeleted` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否已删除',
  `CreatedUserId` bigint(16) NOT NULL DEFAULT '0' COMMENT '创建人Id',
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `UpdatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='视频';

-- 正在导出表  video.VideoMain 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `VideoMain` DISABLE KEYS */;
INSERT INTO `VideoMain` (`Id`, `Name`, `Desc`, `Path`, `Thunbnail`, `TotalMark`, `IsDeleted`, `CreatedUserId`, `CreatedDate`, `UpdatedDate`) VALUES
	(1, '如何编写高质量代码', '测试', NULL, NULL, 8, b'0', 0, '2017-01-22 18:39:33', '2017-01-22 18:39:33');
/*!40000 ALTER TABLE `VideoMain` ENABLE KEYS */;

-- 导出  表 video.VideoMark 结构
CREATE TABLE IF NOT EXISTS `VideoMark` (
  `Id` bigint(16) NOT NULL AUTO_INCREMENT,
  `VideoId` bigint(16) NOT NULL COMMENT '视频id',
  `Mark` tinyint(4) NOT NULL COMMENT '分数',
  `IsDeleted` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否已删除',
  `CreatedUserId` bigint(16) NOT NULL COMMENT '创建人Id',
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='评分';

-- 正在导出表  video.VideoMark 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `VideoMark` DISABLE KEYS */;
/*!40000 ALTER TABLE `VideoMark` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
