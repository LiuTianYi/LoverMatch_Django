use lovermatch;
drop table `user`;
----------------------------
-- create table user
-- ----------------------------
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,#手机号
  `password` varchar(50) DEFAULT NULL,#用户密码

  `name` varchar(50) DEFAULT NULL,#昵称
  `photoAddress` varchar(100) DEFAULT NULL ,#照片id  
  `age` int(2) DEFAULT NULL,#年龄
  `height` int(3) DEFAULT NULL,#身高
  `weight` int(3) DEFAULT NULL,#体重
  `hometownId` int(8) DEFAULT NULL,#家乡id
  `universityId` int(5) DEFAULT NULL,#学校id
  `schoolId` int(5) DEFAULT NULL,#专业id
  `gradeId` int(5) DEFAULT NULL,#年级id
  `constellationId` int(5) DEFAULT NULL,#星座id
  `hobbiesId` varchar(5000) DEFAULT NULL,#java将数组转化为字符串，数组中存储每个hobby的id
  `loverMatch` varchar(5000) DEFAULT NULL,#需要另一个match表存储每两个用户之间的匹配值，将每条匹配的id存到数组中去
  `loverMatched` varchar(5000) DEFAULT NULL,#同LoverMatch
  `verified` tinyint(1) NOT NULL DEFAULT FALSE,#是否被确认
  PRIMARY KEY (`userId`)
--   FOREIGN KEY (`hometownId`) REFERENCES hometown(`hometownId`),
--   FOREIGN KEY (`universityId`) REFERENCES university(`universityId`),
--   FOREIGN KEY (`schoolId`) REFERENCES school(`schoolId`),
--   FOREIGN KEY (`gradeId`) REFERENCES grade(`gradeId`),
--   FOREIGN KEY (`constellationId`) REFERENCES constellation(`constellationId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- insert users
-- ----------------------------
INSERT INTO `user` VALUES (1001, '1001pw', 'zhao','localhost:8080/10001.jpg',19,178,70,10001,10001,10001,1,1,'[1,2,3,4]','[1,2,3,4]', '[5,9,13,17]',false);
INSERT INTO `user` VALUES (1002, '1002pw', 'qian','localhost:8080/10002.jpg',22,176,75,10002,10002,10002,2,2,'[2,5,3,7]','[5,6,7,8]', '[1,10,14,18]',false);
INSERT INTO `user` VALUES (1003, '1003pw', 'sun','localhost:8080/10003.jpg',24,170,72,10003,10003,10003,3,3,'[1,4,3,8]','[9,10,11,12]', '[2,6,15,19]',false);
INSERT INTO `user` VALUES (1004, '1004pw', 'li','localhost:8080/10004.jpg',26,182,66,10004,10004,10004,4,4,'[2,5,3,7]','[13,14,15,16]', '[3,7,11,20]',false);
INSERT INTO `user` VALUES (1005, '1005pw', 'zhou','localhost:8080/10005.jpg',30,167,50,10005,10005,10005,5,5,'[1,4,3,7]','[17,18,19,20]', '[4,8,12,16]',false);
