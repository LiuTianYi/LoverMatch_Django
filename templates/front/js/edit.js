$(function(){
	//load hobby
	$("#hobby").html("");
	for (var i = 0 ;  i < hobbies["hobby"].length ; i++){
		var hb = hobbies["hobby"][i];
		$("#hobby").append('<label class="checkbox-inline" id="hobby-'+i+'"><input type="checkbox" name="checkboxes" id="checkboxes-0" value="1">'+hb+'</label>');
	}

	//load provice
	$("#selectprovince").html("");
	//alert(city["province"].length)
	for (var i = 0 ; i < city["province"].length ; i++){

		var ct = city["province"][i]["p_name"];
		var pid = city["province"][i]["id"];

		$("#selectprovince").append('<option id="province'+pid+'" value="'+pid+'">'+ct+'</option>');
	}

	//alert(city["province"][0]["city"][0]["country"].length);

	loadcity(1);
	//console.log(city["province"][0]["city"][0]["country"].length)
	loadcounty(1,1);
	//load city

	var provinceid;

	$("select#selectprovince").change(function(){
		provinceid = $("#selectprovince option:selected").val();
		
		//alert(city["province"][provinceid]["city"][0]["c_name"]);
		loadcity(provinceid);
		loadcounty(provinceid,1);
	});

	var cityid;


	$("select#city").change(function(){
		cityid = $("#city option:selected").val();
		
		//alert(city["province"][provinceid]["city"][0]["c_name"]);
		//console.log(cityid);
		loadcounty(provinceid,cityid);
	});

	var countyid;
	$("select#county").change(function(){
		countyid = $("#county option:selected").val();
	});	



	$("#editinfo").click(function(){
		if ( provinceid==null){provinceid=1;};
		if (cityid==null){cityid=1;};
		if ( countyid == null) {countyid=1;}
		console.log(provinceid+' '+cityid+' '+countyid);
	});
});

function loadcity(prid){
	//alert("province id from function"+prid);
	$("#city").html("");
	var pid = prid-1;
	for (var i = 0 ; i < city["province"][pid]["city"].length ; i++){
		var ct = city["province"][pid]["city"][i]["c_name"];
		var cid = city["province"][pid]["city"][i]["id"];
		//alert(ct);
		$("#city").append('<option id="province'+cid+'" value="'+cid+'">'+ct+'</option>');

	}

}

function loadcounty(provinceid,cityid){
	$("#county").html("");
	var pid = provinceid-1;
	var cid = cityid-1;
	//console.log(city["province"][pid]["city"][pid]["country"].length);
	for (var i = 0 ; i < city["province"][pid]["city"][cid]["country"].length  ; i++){
		var ct = city["province"][pid]["city"][cid]["country"][i]["cc_name"];
		var ccid = city["province"][pid]["city"][cid]["country"][i]["id"];
		//alert(ct);
		$("#county").append('<option id="province'+ccid+'" value="'+ccid+'">'+ct+'</option>');

	}

}








var city={
    "province": [
        {
            "city": [
                {
                    "c_name": "北京市", 
                    "country": [
                        {
                            "cc_name": "东城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "西城区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "崇文区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "宣武区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "朝阳区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "丰台区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "石景山区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "海淀区", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "门头沟区", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "房山区", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "通州区", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "顺义区", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "昌平区", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "大兴区", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "平谷区", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "怀柔区", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "密云县", 
                            "id": 17
                        }, 
                        {
                            "cc_name": "延庆县", 
                            "id": 18
                        }
                    ], 
                    "id": 1
                }
            ], 
            "id": 1, 
            "p_name": "北京市"
        }, 
        {
            "city": [
                {
                    "c_name": "天津市", 
                    "country": [
                        {
                            "cc_name": "和平区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "河东区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "河西区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "南开区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "河北区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "红桥区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "塘沽区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "汉沽区", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "大港区", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "东丽区", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "西青区", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "津南区", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "北辰区", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "武清区", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "宝坻区", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "宁河县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "静海县", 
                            "id": 17
                        }, 
                        {
                            "cc_name": "蓟县", 
                            "id": 18
                        }
                    ], 
                    "id": 1
                }
            ], 
            "id": 2, 
            "p_name": "天津市"
        }, 
        {
            "city": [
                {
                    "c_name": "石家庄市", 
                    "country": [
                        {
                            "cc_name": "长安区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "桥东区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "桥西区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "新华区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "井陉矿区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "井陉县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "正定县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "栾城县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "行唐县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "灵寿县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "高邑县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "深泽县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "赞皇县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "无极县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "平山县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "元氏县", 
                            "id": 17
                        }, 
                        {
                            "cc_name": "赵县", 
                            "id": 18
                        }, 
                        {
                            "cc_name": "辛集市", 
                            "id": 19
                        }, 
                        {
                            "cc_name": "藁城市", 
                            "id": 20
                        }, 
                        {
                            "cc_name": "晋州市", 
                            "id": 21
                        }, 
                        {
                            "cc_name": "新乐市", 
                            "id": 22
                        }, 
                        {
                            "cc_name": "鹿泉市", 
                            "id": 23
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "唐山市", 
                    "country": [
                        {
                            "cc_name": "路南区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "路北区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "古冶区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "开平区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "新区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "丰润县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "滦县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "滦南县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "乐亭县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "迁西县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "玉田县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "唐海县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "遵化市", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "丰南市", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "迁安市", 
                            "id": 15
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "秦皇岛市", 
                    "country": [
                        {
                            "cc_name": "海港区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "山海关区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "北戴河区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "青龙满族自治县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "昌黎县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "抚宁县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "卢龙县", 
                            "id": 7
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "邯郸市", 
                    "country": [
                        {
                            "cc_name": "邯山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "丛台区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "复兴区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "峰峰矿区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "邯郸县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "临漳县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "成安县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "大名县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "涉县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "磁县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "肥乡县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "永年县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "邱县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "鸡泽县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "广平县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "馆陶县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "魏县", 
                            "id": 17
                        }, 
                        {
                            "cc_name": "曲周县", 
                            "id": 18
                        }, 
                        {
                            "cc_name": "武安市", 
                            "id": 19
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "邢台市", 
                    "country": [
                        {
                            "cc_name": "桥东区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "桥西区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "邢台县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "临城县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "内丘县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "柏乡县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "隆尧县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "任县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "南和县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "宁晋县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "巨鹿县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "新河县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "广宗县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "平乡县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "威县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "清河县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "临西县", 
                            "id": 17
                        }, 
                        {
                            "cc_name": "南宫市", 
                            "id": 18
                        }, 
                        {
                            "cc_name": "沙河市", 
                            "id": 19
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "保定市", 
                    "country": [
                        {
                            "cc_name": "新市区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "北市区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "南市区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "满城县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "清苑县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "涞水县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "阜平县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "徐水县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "定兴县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "唐县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "高阳县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "容城县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "涞源县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "望都县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "安新县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "易县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "曲阳县", 
                            "id": 17
                        }, 
                        {
                            "cc_name": "蠡县", 
                            "id": 18
                        }, 
                        {
                            "cc_name": "顺平县", 
                            "id": 19
                        }, 
                        {
                            "cc_name": "博野县", 
                            "id": 20
                        }, 
                        {
                            "cc_name": "雄县", 
                            "id": 21
                        }, 
                        {
                            "cc_name": "涿州市", 
                            "id": 22
                        }, 
                        {
                            "cc_name": "定州市", 
                            "id": 23
                        }, 
                        {
                            "cc_name": "安国市", 
                            "id": 24
                        }, 
                        {
                            "cc_name": "高碑店市", 
                            "id": 25
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "张家口市", 
                    "country": [
                        {
                            "cc_name": "桥东区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "桥西区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "宣化区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "下花园区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "宣化县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "张北县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "康保县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "沽源县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "尚义县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "蔚县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "阳原县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "怀安县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "万全县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "怀来县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "涿鹿县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "赤城县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "崇礼县", 
                            "id": 17
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "承德市", 
                    "country": [
                        {
                            "cc_name": "双桥区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "双滦区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "鹰手营子矿区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "承德县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "兴隆县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "平泉县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "滦平县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "隆化县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "丰宁满族自治县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "宽城满族自治县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "围场满族蒙古族自治县", 
                            "id": 11
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "沧州市", 
                    "country": [
                        {
                            "cc_name": "新华区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "运河区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "沧县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "青县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "东光县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "海兴县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "盐山县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "肃宁县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "南皮县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "吴桥县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "献县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "孟村回族自治县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "泊头市", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "任丘市", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "黄骅市", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "河间市", 
                            "id": 16
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "廊坊市", 
                    "country": [
                        {
                            "cc_name": "安次区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "固安县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "永清县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "香河县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "大城县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "文安县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "大厂回族自治县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "霸州市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "三河市", 
                            "id": 9
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "衡水市", 
                    "country": [
                        {
                            "cc_name": "桃城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "枣强县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "武邑县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "武强县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "饶阳县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "安平县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "故城县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "景县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "阜城县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "冀州市", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "深州市", 
                            "id": 11
                        }
                    ], 
                    "id": 11
                }
            ], 
            "id": 3, 
            "p_name": "河北省"
        }, 
        {
            "city": [
                {
                    "c_name": "太原市", 
                    "country": [
                        {
                            "cc_name": "小店区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "迎泽区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "杏花岭区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "尖草坪区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "万柏林区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "晋源区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "清徐县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "阳曲县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "娄烦县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "古交市", 
                            "id": 10
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "大同市", 
                    "country": [
                        {
                            "cc_name": "城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "矿区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "南郊区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "新荣区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "阳高县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "天镇县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "广灵县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "灵丘县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "浑源县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "左云县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "大同县", 
                            "id": 11
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "阳泉市", 
                    "country": [
                        {
                            "cc_name": "城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "矿区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "平定县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "盂县", 
                            "id": 5
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "长治市", 
                    "country": [
                        {
                            "cc_name": "城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "长治县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "襄垣县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "屯留县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "平顺县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "黎城县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "壶关县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "长子县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "武乡县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "沁县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "沁源县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "潞城市", 
                            "id": 13
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "晋城市", 
                    "country": [
                        {
                            "cc_name": "城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "沁水县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "阳城县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "陵川县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "泽州县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "高平市", 
                            "id": 6
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "朔州市", 
                    "country": [
                        {
                            "cc_name": "朔城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "平鲁区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "山阴县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "应县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "右玉县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "怀仁县", 
                            "id": 6
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "忻州市", 
                    "country": [
                        {
                            "cc_name": "忻府区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "原平市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "定襄县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "五台县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "代县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "繁峙县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "宁武县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "静乐县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "神池县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "五寨县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "岢岚县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "河曲县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "保德县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "偏关县", 
                            "id": 14
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "吕梁市", 
                    "country": [
                        {
                            "cc_name": "离石区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "孝义市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "汾阳市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "文水县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "交城县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "兴县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "临县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "柳林县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "石楼县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "岚县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "方山县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "中阳县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "交口县", 
                            "id": 13
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "晋中市", 
                    "country": [
                        {
                            "cc_name": "榆次市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "介休市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "榆社县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "左权县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "和顺县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "昔阳县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "寿阳县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "太谷县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "祁县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "平遥县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "灵石县", 
                            "id": 11
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "临汾市", 
                    "country": [
                        {
                            "cc_name": "临汾市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "侯马市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "霍州市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "曲沃县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "翼城县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "襄汾县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "洪洞县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "古县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "安泽县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "浮山县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "吉县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "乡宁县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "蒲县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "大宁县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "永和县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "隰县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "汾西县", 
                            "id": 17
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "运城市", 
                    "country": [
                        {
                            "cc_name": "运城市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "永济市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "河津市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "芮城县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "临猗县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "万荣县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "新绛县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "稷山县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "闻喜县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "夏县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "绛县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "平陆县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "垣曲县", 
                            "id": 13
                        }
                    ], 
                    "id": 11
                }
            ], 
            "id": 4, 
            "p_name": "山西省"
        }, 
        {
            "city": [
                {
                    "c_name": "呼和浩特市", 
                    "country": [
                        {
                            "cc_name": "新城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "回民区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "玉泉区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "土默特左旗", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "托克托县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "和林格尔县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "清水河县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "武川县", 
                            "id": 9
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "包头市", 
                    "country": [
                        {
                            "cc_name": "东河区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "昆都伦区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "青山区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "石拐矿区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "白云矿区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "土默特右旗", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "固阳县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "达尔罕茂明安联合旗", 
                            "id": 9
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "乌海市", 
                    "country": [
                        {
                            "cc_name": "海勃湾区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "海南区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "乌达区", 
                            "id": 3
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "赤峰市", 
                    "country": [
                        {
                            "cc_name": "红山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "元宝山区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "松山区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "阿鲁科尔沁旗", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "巴林左旗", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "巴林右旗", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "林西县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "克什克腾旗", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "翁牛特旗", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "喀喇沁旗", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "宁城县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "敖汉旗", 
                            "id": 12
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "呼伦贝尔市", 
                    "country": [
                        {
                            "cc_name": "海拉尔市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "满洲里市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "扎兰屯市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "牙克石市", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "根河市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "额尔古纳市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "阿荣旗", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "莫力达瓦达斡尔族自治旗", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "鄂伦春自治旗", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "鄂温克族自治旗", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "新巴尔虎右旗", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "新巴尔虎左旗", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "陈巴尔虎旗", 
                            "id": 13
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "兴安盟", 
                    "country": [
                        {
                            "cc_name": "乌兰浩特市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "阿尔山市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "科尔沁右翼前旗", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "科尔沁右翼中旗", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "扎赉特旗", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "突泉县", 
                            "id": 6
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "通辽市", 
                    "country": [
                        {
                            "cc_name": "科尔沁区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "霍林郭勒市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "科尔沁左翼中旗", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "科尔沁左翼后旗", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "开鲁县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "库伦旗", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "奈曼旗", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "扎鲁特旗", 
                            "id": 8
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "锡林郭勒盟", 
                    "country": [
                        {
                            "cc_name": "二连浩特市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "锡林浩特市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "阿巴嘎旗", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "苏尼特左旗", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "苏尼特右旗", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "东乌珠穆沁旗", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "西乌珠穆沁旗", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "太仆寺旗", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "镶黄旗", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "正镶白旗", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "正蓝旗", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "多伦县", 
                            "id": 12
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "乌兰察布盟", 
                    "country": [
                        {
                            "cc_name": "集宁市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "丰镇市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "卓资县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "化德县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "商都县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "兴和县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "凉城县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "察哈尔右翼前旗", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "察哈尔右翼中旗", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "察哈尔右翼后旗", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "四子王旗", 
                            "id": 11
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "伊克昭盟", 
                    "country": [
                        {
                            "cc_name": "东胜市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "达拉特旗", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "准格尔旗", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "鄂托克前旗", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "鄂托克旗", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "杭锦旗", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "乌审旗", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "伊金霍洛旗", 
                            "id": 8
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "巴彦淖尔盟", 
                    "country": [
                        {
                            "cc_name": "临河市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "五原县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "磴口县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "乌拉特前旗", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "乌拉特中旗", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "乌拉特后旗", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "杭锦后旗", 
                            "id": 7
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "阿拉善盟", 
                    "country": [
                        {
                            "cc_name": "阿拉善左旗", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "阿拉善右旗", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "额济纳旗", 
                            "id": 3
                        }
                    ], 
                    "id": 12
                }
            ], 
            "id": 5, 
            "p_name": "内蒙古"
        }, 
        {
            "city": [
                {
                    "c_name": "沈阳市", 
                    "country": [
                        {
                            "cc_name": "和平区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "沈河区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "大东区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "皇姑区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "铁西区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "苏家屯区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "东陵区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "新城子区", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "于洪区", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "辽中县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "康平县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "法库县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "新民市", 
                            "id": 13
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "大连市", 
                    "country": [
                        {
                            "cc_name": "中山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "西岗区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "沙河口区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "甘井子区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "旅顺口区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "金州区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "长海县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "瓦房店市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "普兰店市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "庄河市", 
                            "id": 10
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "鞍山市", 
                    "country": [
                        {
                            "cc_name": "铁东区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "铁西区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "立山区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "千山区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "台安县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "岫岩满族自治县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "海城市", 
                            "id": 7
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "抚顺市", 
                    "country": [
                        {
                            "cc_name": "新抚区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "露天区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "望花区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "顺城区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "抚顺县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "新宾满族自治县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "清原满族自治县", 
                            "id": 7
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "本溪市", 
                    "country": [
                        {
                            "cc_name": "平山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "溪湖区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "明山区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "南芬区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "本溪满族自治县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "桓仁满族自治县", 
                            "id": 6
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "丹东市", 
                    "country": [
                        {
                            "cc_name": "元宝区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "振兴区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "振安区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "宽甸满族自治县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "东港市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "凤城市", 
                            "id": 6
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "锦州市", 
                    "country": [
                        {
                            "cc_name": "古塔区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "凌河区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "太和区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "黑山县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "义县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "凌海市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "北宁市", 
                            "id": 7
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "营口市", 
                    "country": [
                        {
                            "cc_name": "站前区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "西市区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "鲅鱼圈区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "老边区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "盖州市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "大石桥市", 
                            "id": 6
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "阜新市", 
                    "country": [
                        {
                            "cc_name": "海州区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "新邱区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "太平区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "清河门区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "细河区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "阜新蒙古族自治县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "彰武县", 
                            "id": 7
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "辽阳市", 
                    "country": [
                        {
                            "cc_name": "白塔区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "文圣区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "宏伟区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "弓长岭区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "太子河区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "辽阳县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "灯塔市", 
                            "id": 7
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "盘锦市", 
                    "country": [
                        {
                            "cc_name": "双台子区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "兴隆台区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "大洼县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "盘山县", 
                            "id": 4
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "铁岭市", 
                    "country": [
                        {
                            "cc_name": "银州区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "清河区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "铁岭县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "西丰县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "昌图县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "铁法市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "开原市", 
                            "id": 7
                        }
                    ], 
                    "id": 12
                }, 
                {
                    "c_name": "朝阳市", 
                    "country": [
                        {
                            "cc_name": "双塔区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "龙城区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "朝阳县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "建平县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "喀喇沁左翼蒙古族自治县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "北票市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "凌源市", 
                            "id": 7
                        }
                    ], 
                    "id": 13
                }, 
                {
                    "c_name": "葫芦岛市", 
                    "country": [
                        {
                            "cc_name": "连山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "龙港区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "南票区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "绥中县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "建昌县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "兴城市", 
                            "id": 6
                        }
                    ], 
                    "id": 14
                }
            ], 
            "id": 6, 
            "p_name": "辽宁省"
        }, 
        {
            "city": [
                {
                    "c_name": "长春市", 
                    "country": [
                        {
                            "cc_name": "南关区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "宽城区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "朝阳区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "二道区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "绿园区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "双阳区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "农安县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "九台市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "榆树市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "德惠市", 
                            "id": 10
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "吉林市", 
                    "country": [
                        {
                            "cc_name": "昌邑区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "龙潭区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "船营区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "丰满区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "永吉县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "蛟河市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "桦甸市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "舒兰市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "磐石市", 
                            "id": 9
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "四平市", 
                    "country": [
                        {
                            "cc_name": "铁西区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "铁东区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "梨树县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "伊通满族自治县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "公主岭市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "双辽市", 
                            "id": 6
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "辽源市", 
                    "country": [
                        {
                            "cc_name": "龙山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "西安区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "东丰县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "东辽县", 
                            "id": 4
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "通化市", 
                    "country": [
                        {
                            "cc_name": "东昌区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "二道江区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "通化县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "辉南县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "柳河县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "梅河口市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "集安市", 
                            "id": 7
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "白山市", 
                    "country": [
                        {
                            "cc_name": "八道江区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "抚松县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "靖宇县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "长白朝鲜族自治县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "江源县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "临江市", 
                            "id": 6
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "松原市", 
                    "country": [
                        {
                            "cc_name": "宁江区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "前郭尔罗斯蒙古族自治县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "长岭县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "乾安县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "扶余县", 
                            "id": 5
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "白城市", 
                    "country": [
                        {
                            "cc_name": "洮北区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "镇赉县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "通榆县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "洮南市", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "大安市", 
                            "id": 5
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "延边朝鲜族自治州", 
                    "country": [
                        {
                            "cc_name": "延吉市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "图们市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "敦化市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "珲春市", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "龙井市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "和龙市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "汪清县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "安图县", 
                            "id": 8
                        }
                    ], 
                    "id": 9
                }
            ], 
            "id": 7, 
            "p_name": "吉林省"
        }, 
        {
            "city": [
                {
                    "c_name": "哈尔滨市", 
                    "country": [
                        {
                            "cc_name": "道里区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "南岗区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "道外区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "松北区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "香坊区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "阿成区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "平房区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "呼兰区", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "依兰县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "方正县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "宾县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "巴彦县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "木兰县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "通河县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "延寿县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "双城市", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "尚志市", 
                            "id": 17
                        }, 
                        {
                            "cc_name": "五常市", 
                            "id": 18
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "齐齐哈尔市", 
                    "country": [
                        {
                            "cc_name": "龙沙区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "建华区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "铁锋区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "昂昂溪区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "富拉尔基区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "碾子山区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "梅里斯达斡尔族区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "龙江县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "依安县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "泰来县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "甘南县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "富裕县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "克山县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "克东县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "拜泉县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "讷河市", 
                            "id": 16
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "鸡西市", 
                    "country": [
                        {
                            "cc_name": "鸡冠区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "恒山区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "滴道区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "梨树区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "城子河区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "麻山区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "鸡东县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "虎林市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "密山市", 
                            "id": 9
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "鹤岗市", 
                    "country": [
                        {
                            "cc_name": "向阳区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "工农区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "南山区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "兴安区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "东山区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "兴山区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "萝北县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "绥滨县", 
                            "id": 8
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "双鸭山市", 
                    "country": [
                        {
                            "cc_name": "尖山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "岭东区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "四方台区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "宝山区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "集贤县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "友谊县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "宝清县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "饶河县", 
                            "id": 8
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "大庆市", 
                    "country": [
                        {
                            "cc_name": "萨尔图区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "龙凤区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "让胡路区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "红岗区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "大同区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "肇州县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "肇源县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "林甸县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "杜尔伯特蒙古族自治县", 
                            "id": 9
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "伊春市", 
                    "country": [
                        {
                            "cc_name": "伊春区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "南岔区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "友好区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "西林区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "翠峦区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "新青区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "美溪区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "金山屯区", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "五营区", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "乌马河区", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "汤旺河区", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "带岭区", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "乌伊岭区", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "红星区", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "上甘岭区", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "嘉荫县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "铁力市", 
                            "id": 17
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "佳木斯市", 
                    "country": [
                        {
                            "cc_name": "向阳区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "前进区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "东风区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "桦南县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "桦川县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "汤原县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "抚远县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "同江市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "富锦市", 
                            "id": 10
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "七台河市", 
                    "country": [
                        {
                            "cc_name": "新兴区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "桃山区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "茄子河区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "勃利县", 
                            "id": 4
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "牡丹江市", 
                    "country": [
                        {
                            "cc_name": "东安区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "阳明区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "爱民区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "西安区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "东宁县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "林口县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "绥芬河市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "海林市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "宁安市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "穆棱市", 
                            "id": 10
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "黑河市", 
                    "country": [
                        {
                            "cc_name": "爱辉区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "嫩江县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "逊克县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "孙吴县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "北安市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "五大连池市", 
                            "id": 6
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "绥化市", 
                    "country": [
                        {
                            "cc_name": "绥化市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "安达市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "肇东市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "海伦市", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "望奎县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "兰西县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "青冈县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "庆安县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "明水县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "绥棱县", 
                            "id": 10
                        }
                    ], 
                    "id": 12
                }, 
                {
                    "c_name": "大兴安岭地区", 
                    "country": [
                        {
                            "cc_name": "呼玛县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "塔河县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "漠河县", 
                            "id": 3
                        }
                    ], 
                    "id": 13
                }
            ], 
            "id": 8, 
            "p_name": "黑龙江省"
        }, 
        {
            "city": [
                {
                    "c_name": "上海市", 
                    "country": [
                        {
                            "cc_name": "浦东新区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "徐汇区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "黄浦区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "杨浦区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "虹口区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "闵行区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "长宁区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "普陀区", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "宝山区", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "静安区", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "闸北区", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "卢湾区", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "松江区", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "嘉定区", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "南汇区", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "金山区", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "青浦区", 
                            "id": 17
                        }, 
                        {
                            "cc_name": "奉贤区", 
                            "id": 18
                        }, 
                        {
                            "cc_name": "崇明县", 
                            "id": 19
                        }
                    ], 
                    "id": 1
                }
            ], 
            "id": 9, 
            "p_name": "上海市"
        }, 
        {
            "city": [
                {
                    "c_name": "南京市", 
                    "country": [
                        {
                            "cc_name": "玄武区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "白下区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "秦淮区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "建邺区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "鼓楼区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "下关区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "浦口区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "栖霞区", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "雨花台区", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "江宁区", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "六合区", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "溧水县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "高淳县", 
                            "id": 13
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "无锡市", 
                    "country": [
                        {
                            "cc_name": "崇安区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "南长区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "北塘区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "马山区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "江阴市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "宜兴市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "锡山市", 
                            "id": 8
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "徐州市", 
                    "country": [
                        {
                            "cc_name": "鼓楼区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "云龙区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "九里区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "贾汪区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "泉山区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "丰县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "沛县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "铜山县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "睢宁县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "新沂市", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "邳州市", 
                            "id": 11
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "常州市", 
                    "country": [
                        {
                            "cc_name": "天宁区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "钟楼区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "戚墅堰区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "溧阳市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "金坛市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "武进市", 
                            "id": 7
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "苏州市", 
                    "country": [
                        {
                            "cc_name": "沧浪区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "平江区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "金阊区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "常熟市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "张家港市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "昆山市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "吴江市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "太仓市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "吴县市", 
                            "id": 10
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "南通市", 
                    "country": [
                        {
                            "cc_name": "崇川区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "港闸区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "海安县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "如东县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "启东市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "如皋市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "通州市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "海门市", 
                            "id": 8
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "连云港市", 
                    "country": [
                        {
                            "cc_name": "连云区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "云台区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "新浦区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "海州区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "赣榆县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "东海县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "灌云县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "灌南县", 
                            "id": 8
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "淮阴市", 
                    "country": [
                        {
                            "cc_name": "清河区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "清浦区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "淮阴县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "涟水县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "洪泽县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "盱眙县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "金湖县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "淮安市", 
                            "id": 8
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "盐城市", 
                    "country": [
                        {
                            "cc_name": "城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "响水县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "滨海县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "阜宁县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "射阳县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "建湖县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "盐都县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "东台市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "大丰市", 
                            "id": 9
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "扬州市", 
                    "country": [
                        {
                            "cc_name": "广陵区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "宝应县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "邗江县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "仪征市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "高邮市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "江都市", 
                            "id": 7
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "镇江市", 
                    "country": [
                        {
                            "cc_name": "京口区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "润州区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "丹徒县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "丹阳市", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "扬中市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "句容市", 
                            "id": 6
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "泰州市", 
                    "country": [
                        {
                            "cc_name": "海陵区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "高港区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "兴化市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "靖江市", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "泰兴市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "姜堰市", 
                            "id": 6
                        }
                    ], 
                    "id": 12
                }, 
                {
                    "c_name": "宿迁市", 
                    "country": [
                        {
                            "cc_name": "宿城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "宿豫县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "沭阳县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "泗阳县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "泗洪县", 
                            "id": 5
                        }
                    ], 
                    "id": 13
                }
            ], 
            "id": 10, 
            "p_name": "江苏省"
        }, 
        {
            "city": [
                {
                    "c_name": "杭州市", 
                    "country": [
                        {
                            "cc_name": "上城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "下城区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "江干区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "拱墅区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "西湖区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "滨江区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "桐庐县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "淳安县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "萧山市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "建德市", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "富阳市", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "余杭市", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "临安市", 
                            "id": 13
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "宁波市", 
                    "country": [
                        {
                            "cc_name": "海曙区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "江东区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "江北区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "北仑区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "镇海区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "象山县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "宁海县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "鄞县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "余姚市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "慈溪市", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "奉化市", 
                            "id": 11
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "温州市", 
                    "country": [
                        {
                            "cc_name": "鹿城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "龙湾区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "瓯海区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "洞头县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "永嘉县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "平阳县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "苍南县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "文成县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "泰顺县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "瑞安市", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "乐清市", 
                            "id": 11
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "嘉兴市", 
                    "country": [
                        {
                            "cc_name": "秀城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "嘉善县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "海盐县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "海宁市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "平湖市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "桐乡市", 
                            "id": 7
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "湖州市", 
                    "country": [
                        {
                            "cc_name": "吴兴区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "南浔区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "德清县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "长兴县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "安吉县", 
                            "id": 5
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "绍兴市", 
                    "country": [
                        {
                            "cc_name": "越城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "绍兴县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "新昌县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "诸暨市", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "上虞市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "嵊州市", 
                            "id": 6
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "金华市", 
                    "country": [
                        {
                            "cc_name": "婺城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "金华县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "武义县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "浦江县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "磐安县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "兰溪市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "义乌市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "东阳市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "永康市", 
                            "id": 9
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "衢州市", 
                    "country": [
                        {
                            "cc_name": "柯城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "衢县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "常山县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "开化县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "龙游县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "江山市", 
                            "id": 6
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "舟山市", 
                    "country": [
                        {
                            "cc_name": "定海区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "普陀区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "岱山县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "嵊泗县", 
                            "id": 4
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "台州市", 
                    "country": [
                        {
                            "cc_name": "椒江区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "黄岩区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "路桥区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "玉环县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "三门县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "天台县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "仙居县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "温岭市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "临海市", 
                            "id": 9
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "丽水市", 
                    "country": [
                        {
                            "cc_name": "丽水市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "龙泉市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "青田县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "云和县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "庆元县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "缙云县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "遂昌县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "松阳县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "景宁畲族自治县", 
                            "id": 9
                        }
                    ], 
                    "id": 11
                }
            ], 
            "id": 11, 
            "p_name": "浙江省"
        }, 
        {
            "city": [
                {
                    "c_name": "合肥市", 
                    "country": [
                        {
                            "cc_name": "东市区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "中市区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "西市区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "长丰县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "肥东县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "肥西县", 
                            "id": 7
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "芜湖市", 
                    "country": [
                        {
                            "cc_name": "镜湖区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "马塘区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "新芜区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "鸠江区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "芜湖县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "繁昌县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "南陵县", 
                            "id": 7
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "蚌埠市", 
                    "country": [
                        {
                            "cc_name": "东市区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "中市区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "西市区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "怀远县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "五河县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "固镇县", 
                            "id": 7
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "淮南市", 
                    "country": [
                        {
                            "cc_name": "大通区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "田家庵区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "谢家集区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "八公山区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "潘集区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "凤台县", 
                            "id": 6
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "马鞍山市", 
                    "country": [
                        {
                            "cc_name": "金家庄区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "花山区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "雨山区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "当涂县", 
                            "id": 4
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "淮北市", 
                    "country": [
                        {
                            "cc_name": "杜集区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "相山区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "烈山区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "濉溪县", 
                            "id": 4
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "铜陵市", 
                    "country": [
                        {
                            "cc_name": "铜官山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "狮子山区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "铜陵县", 
                            "id": 4
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "安庆市", 
                    "country": [
                        {
                            "cc_name": "迎江区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "大观区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "怀宁县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "枞阳县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "潜山县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "太湖县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "宿松县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "望江县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "岳西县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "桐城市", 
                            "id": 11
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "黄山市", 
                    "country": [
                        {
                            "cc_name": "屯溪区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "黄山区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "徽州区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "歙县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "休宁县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "黟县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "祁门县", 
                            "id": 7
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "滁州市", 
                    "country": [
                        {
                            "cc_name": "琅琊区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "南谯区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "来安县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "全椒县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "定远县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "凤阳县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "天长市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "明光市", 
                            "id": 8
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "阜阳市", 
                    "country": [
                        {
                            "cc_name": "颍州区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "颍东区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "颍泉区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "临泉县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "太和县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "阜南县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "颍上县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "界首市", 
                            "id": 8
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "宿州市", 
                    "country": [
                        {
                            "cc_name": "墉桥区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "砀山县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "萧县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "灵璧县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "泗县", 
                            "id": 5
                        }
                    ], 
                    "id": 12
                }, 
                {
                    "c_name": "六安市", 
                    "country": [
                        {
                            "cc_name": "金安区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "裕安区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "寿县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "霍邱县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "舒城县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "金寨县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "霍山县", 
                            "id": 7
                        }
                    ], 
                    "id": 13
                }, 
                {
                    "c_name": "宣城市", 
                    "country": [
                        {
                            "cc_name": "宣州区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "宁国市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "郎溪县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "广德县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "泾县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "旌德县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "绩溪县", 
                            "id": 7
                        }
                    ], 
                    "id": 14
                }, 
                {
                    "c_name": "巢湖市", 
                    "country": [
                        {
                            "cc_name": "巢湖区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "庐江县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "无为县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "含山县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "和县", 
                            "id": 5
                        }
                    ], 
                    "id": 15
                }, 
                {
                    "c_name": "池州市", 
                    "country": [
                        {
                            "cc_name": "贵池区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "东至县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "石台县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "青阳县", 
                            "id": 4
                        }
                    ], 
                    "id": 16
                }
            ], 
            "id": 12, 
            "p_name": "安徽省"
        }, 
        {
            "city": [
                {
                    "c_name": "福州市", 
                    "country": [
                        {
                            "cc_name": "鼓楼区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "台江区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "仓山区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "马尾区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "晋安区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "闽侯县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "连江县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "罗源县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "闽清县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "永泰县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "平潭县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "福清市", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "长乐市", 
                            "id": 13
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "厦门市", 
                    "country": [
                        {
                            "cc_name": "思明区 ", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "海沧区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "湖里区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "集美区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "同安区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "翔安区", 
                            "id": 6
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "宁德市", 
                    "country": [
                        {
                            "cc_name": "蕉城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "霞浦县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "古田县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "屏南县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "寿宁县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "周宁县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "柘荣县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "福安市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "福鼎市", 
                            "id": 9
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "莆田市", 
                    "country": [
                        {
                            "cc_name": "城厢区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "涵江区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "荔城区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "秀屿区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "仙游县", 
                            "id": 5
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "泉州市", 
                    "country": [
                        {
                            "cc_name": "鲤城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "丰泽区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "洛江区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "泉港区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "惠安县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "安溪县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "永春县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "德化县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "金门县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "石狮市", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "晋江市", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "南安市", 
                            "id": 12
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "漳州市", 
                    "country": [
                        {
                            "cc_name": "芗城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "龙文区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "云霄县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "漳浦县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "诏安县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "长泰县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "东山县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "南靖县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "平和县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "华安县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "龙海市", 
                            "id": 11
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "龙岩", 
                    "country": [
                        {
                            "cc_name": "新罗区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "长汀县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "永定县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "上杭县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "武平县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "连城县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "漳平市", 
                            "id": 7
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "三明市", 
                    "country": [
                        {
                            "cc_name": "梅列区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "三元区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "明溪县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "清流县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "宁化县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "大田县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "尤溪县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "沙县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "将乐县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "泰宁县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "建宁县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "永安市", 
                            "id": 12
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "南平市", 
                    "country": [
                        {
                            "cc_name": "延平区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "顺昌县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "浦城县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "光泽县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "松溪县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "政和县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "邵武市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "武夷山市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "建瓯市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "建阳市", 
                            "id": 10
                        }
                    ], 
                    "id": 9
                }
            ], 
            "id": 13, 
            "p_name": "福建省"
        }, 
        {
            "city": [
                {
                    "c_name": "南昌市", 
                    "country": [
                        {
                            "cc_name": "东湖区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "西湖区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "青云谱区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "湾里区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "南昌县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "新建县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "安义县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "进贤县", 
                            "id": 9
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "景德镇市", 
                    "country": [
                        {
                            "cc_name": "昌江区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "珠山区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "浮梁县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "乐平市", 
                            "id": 4
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "萍乡市", 
                    "country": [
                        {
                            "cc_name": "安源区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "湘东区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "莲花县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "上栗县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "芦溪县", 
                            "id": 5
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "九江市", 
                    "country": [
                        {
                            "cc_name": "庐山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "浔阳区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "九江县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "武宁县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "修水县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "永修县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "德安县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "星子县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "都昌县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "湖口县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "彭泽县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "瑞昌市", 
                            "id": 12
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "新余市", 
                    "country": [
                        {
                            "cc_name": "渝水区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "分宜县", 
                            "id": 2
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "鹰潭市", 
                    "country": [
                        {
                            "cc_name": "月湖区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "余江县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "贵溪市", 
                            "id": 3
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "赣州市", 
                    "country": [
                        {
                            "cc_name": "章贡区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "赣县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "信丰县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "大余县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "上犹县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "崇义县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "安远县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "龙南县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "定南县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "全南县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "宁都县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "于都县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "兴国县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "会昌县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "寻乌县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "石城县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "瑞金市", 
                            "id": 17
                        }, 
                        {
                            "cc_name": "南康市", 
                            "id": 18
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "宜春市", 
                    "country": [
                        {
                            "cc_name": "宜春市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "丰城市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "樟树市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "高安市", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "奉新县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "万载县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "上高县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "宜丰县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "靖安县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "铜鼓县", 
                            "id": 10
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "上饶市", 
                    "country": [
                        {
                            "cc_name": "上饶市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "德兴市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "上饶县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "广丰县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "玉山县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "铅山县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "横峰县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "弋阳县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "余干县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "波阳县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "万年县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "婺源县", 
                            "id": 12
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "吉安市", 
                    "country": [
                        {
                            "cc_name": "吉安市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "井冈山市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "吉安县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "吉水县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "峡江县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "新干县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "永丰县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "泰和县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "遂川县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "万安县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "安福县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "永新县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "宁冈县", 
                            "id": 13
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "抚州市", 
                    "country": [
                        {
                            "cc_name": "临川市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "南城县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "黎川县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "南丰县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "崇仁县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "乐安县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "宜黄县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "金溪县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "资溪县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "东乡县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "广昌县", 
                            "id": 11
                        }
                    ], 
                    "id": 11
                }
            ], 
            "id": 14, 
            "p_name": "江西省"
        }, 
        {
            "city": [
                {
                    "c_name": "济南市", 
                    "country": [
                        {
                            "cc_name": "历下区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "市中区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "槐荫区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "天桥区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "历城区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "长清县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "平阴县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "济阳县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "商河县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "章丘市", 
                            "id": 10
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "青岛市", 
                    "country": [
                        {
                            "cc_name": "市南区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "市北区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "四方区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "黄岛区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "崂山区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "李沧区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "城阳区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "胶州市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "即墨市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "平度市", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "胶南市", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "莱西市", 
                            "id": 12
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "淄博市", 
                    "country": [
                        {
                            "cc_name": "淄川区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "张店区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "博山区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "临淄区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "周村区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "桓台县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "高青县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "沂源县", 
                            "id": 8
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "枣庄市", 
                    "country": [
                        {
                            "cc_name": "市中区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "薛城区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "峄城区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "台儿庄区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "山亭区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "滕州市", 
                            "id": 6
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "东营市", 
                    "country": [
                        {
                            "cc_name": "东营区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "河口区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "垦利县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "利津县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "广饶县", 
                            "id": 5
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "烟台市", 
                    "country": [
                        {
                            "cc_name": "芝罘区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "福山区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "牟平区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "莱山区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "长岛县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "龙口市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "莱阳市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "莱州市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "蓬莱市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "招远市", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "栖霞市", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "海阳市", 
                            "id": 12
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "潍坊市", 
                    "country": [
                        {
                            "cc_name": "潍城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "寒亭区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "坊子区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "奎文区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "临朐县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "昌乐县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "青州市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "诸城市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "寿光市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "安丘市", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "高密市", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "昌邑市", 
                            "id": 12
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "济宁市", 
                    "country": [
                        {
                            "cc_name": "市中区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "任城区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "微山县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "鱼台县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "金乡县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "嘉祥县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "汶上县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "泗水县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "梁山县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "曲阜市", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "兖州市", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "邹城市", 
                            "id": 12
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "泰安市", 
                    "country": [
                        {
                            "cc_name": "泰山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "宁阳县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "东平县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "新泰市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "肥城市", 
                            "id": 6
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "威海市", 
                    "country": [
                        {
                            "cc_name": "环翠区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "文登市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "荣成市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "乳山市", 
                            "id": 4
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "日照市", 
                    "country": [
                        {
                            "cc_name": "东港区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "岚山区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "五莲县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "莒县", 
                            "id": 4
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "莱芜市", 
                    "country": [
                        {
                            "cc_name": "莱城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "钢城区", 
                            "id": 2
                        }
                    ], 
                    "id": 12
                }, 
                {
                    "c_name": "临沂市", 
                    "country": [
                        {
                            "cc_name": "兰山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "罗庄区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "河东区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "沂南县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "郯城县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "沂水县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "苍山县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "费县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "平邑县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "莒南县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "蒙阴县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "临沭县", 
                            "id": 12
                        }
                    ], 
                    "id": 13
                }, 
                {
                    "c_name": "德州市", 
                    "country": [
                        {
                            "cc_name": "德城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "陵县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "宁津县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "庆云县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "临邑县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "齐河县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "平原县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "夏津县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "武城县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "乐陵市", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "禹城市", 
                            "id": 11
                        }
                    ], 
                    "id": 14
                }, 
                {
                    "c_name": "聊城市", 
                    "country": [
                        {
                            "cc_name": "东昌府区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "阳谷县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "莘县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "茌平县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "东阿县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "冠县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "高唐县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "临清市", 
                            "id": 8
                        }
                    ], 
                    "id": 15
                }, 
                {
                    "c_name": "滨州地区", 
                    "country": [
                        {
                            "cc_name": "滨州市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "惠民县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "阳信县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "无棣县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "沾化县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "博兴县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "邹平县", 
                            "id": 7
                        }
                    ], 
                    "id": 16
                }, 
                {
                    "c_name": "菏泽地区", 
                    "country": [
                        {
                            "cc_name": "菏泽市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "曹县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "定陶县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "成武县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "单县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "巨野县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "郓城县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "鄄城县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "东明县", 
                            "id": 9
                        }
                    ], 
                    "id": 17
                }
            ], 
            "id": 15, 
            "p_name": "山东省"
        }, 
        {
            "city": [
                {
                    "c_name": "郑州市", 
                    "country": [
                        {
                            "cc_name": "中原区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "二七区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "管城回族区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "金水区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "上街区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "邙山区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "中牟县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "巩义市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "荥阳市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "新密市", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "新郑市", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "登封市", 
                            "id": 12
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "开封市", 
                    "country": [
                        {
                            "cc_name": "龙亭区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "顺河回族区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "鼓楼区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "南关区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "杞县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "通许县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "尉氏县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "开封县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "兰考县", 
                            "id": 10
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "洛阳市", 
                    "country": [
                        {
                            "cc_name": "老城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "西工区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "廛河回族区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "涧西区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "吉利区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "孟津县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "新安县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "栾川县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "嵩县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "汝阳县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "宜阳县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "洛宁县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "伊川县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "偃师市", 
                            "id": 15
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "平顶山市", 
                    "country": [
                        {
                            "cc_name": "新华区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "卫东区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "石龙区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "湛河区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "宝丰县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "叶县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "鲁山县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "郏县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "舞钢市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "汝州市", 
                            "id": 10
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "安阳市", 
                    "country": [
                        {
                            "cc_name": "文峰区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "北关区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "铁西区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "安阳县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "汤阴县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "滑县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "内黄县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "林州市", 
                            "id": 9
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "鹤壁市", 
                    "country": [
                        {
                            "cc_name": "鹤山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "山城区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "浚县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "淇县", 
                            "id": 5
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "新乡市", 
                    "country": [
                        {
                            "cc_name": "红旗区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "新华区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "北站区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "新乡县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "获嘉县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "原阳县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "延津县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "封丘县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "长垣县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "卫辉市", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "辉县市", 
                            "id": 12
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "焦作市", 
                    "country": [
                        {
                            "cc_name": "解放区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "中站区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "马村区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "山阳区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "修武县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "博爱县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "武陟县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "温县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "沁阳市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "孟州市", 
                            "id": 10
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "濮阳市", 
                    "country": [
                        {
                            "cc_name": "华龙区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "清丰县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "南乐县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "范县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "台前县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "濮阳县", 
                            "id": 6
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "许昌市", 
                    "country": [
                        {
                            "cc_name": "魏都区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "许昌县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "鄢陵县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "襄城县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "禹州市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "长葛市", 
                            "id": 6
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "漯河市", 
                    "country": [
                        {
                            "cc_name": "源汇区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "郾城区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "召陵区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "舞阳县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "临颍县", 
                            "id": 5
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "三门峡市", 
                    "country": [
                        {
                            "cc_name": "湖滨区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "渑池县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "陕县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "卢氏县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "义马市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "灵宝市", 
                            "id": 6
                        }
                    ], 
                    "id": 12
                }, 
                {
                    "c_name": "南阳市", 
                    "country": [
                        {
                            "cc_name": "宛城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "卧龙区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "南召县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "方城县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "西峡县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "镇平县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "内乡县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "淅川县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "社旗县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "唐河县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "新野县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "桐柏县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "邓州市", 
                            "id": 13
                        }
                    ], 
                    "id": 13
                }, 
                {
                    "c_name": "商丘市", 
                    "country": [
                        {
                            "cc_name": "梁园区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "睢阳区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "民权县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "睢县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "宁陵县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "柘城县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "虞城县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "夏邑县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "永城市", 
                            "id": 9
                        }
                    ], 
                    "id": 14
                }, 
                {
                    "c_name": "信阳市", 
                    "country": [
                        {
                            "cc_name": "浉河区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "平桥区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "罗山县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "光山县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "新县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "商城县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "固始县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "潢川县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "淮滨县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "息县", 
                            "id": 10
                        }
                    ], 
                    "id": 15
                }, 
                {
                    "c_name": "周口市", 
                    "country": [
                        {
                            "cc_name": "周口市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "项城市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "扶沟县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "西华县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "商水县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "太康县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "鹿邑县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "郸城县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "淮阳县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "沈丘县", 
                            "id": 10
                        }
                    ], 
                    "id": 16
                }, 
                {
                    "c_name": "驻马店地区", 
                    "country": [
                        {
                            "cc_name": "驻马店市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "确山县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "泌阳县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "遂平县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "西平县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "上蔡县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "汝南县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "平舆县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "新蔡县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "正阳县", 
                            "id": 10
                        }
                    ], 
                    "id": 17
                }, 
                {
                    "c_name": "省直辖行政单位", 
                    "country": [
                        {
                            "cc_name": "济源市", 
                            "id": 1
                        }
                    ], 
                    "id": 18
                }
            ], 
            "id": 16, 
            "p_name": "河南省"
        }, 
        {
            "city": [
                {
                    "c_name": "武汉市", 
                    "country": [
                        {
                            "cc_name": "江岸区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "江汉区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "乔口区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "汉阳区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "武昌区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "青山区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "洪山区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "东西湖区", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "汉南区", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "蔡甸区", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "江夏区", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "黄陂区", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "新洲区", 
                            "id": 13
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "黄石市", 
                    "country": [
                        {
                            "cc_name": "黄石港区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "石灰窑区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "下陆区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "铁山区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "阳新县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "大冶市", 
                            "id": 6
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "十堰市", 
                    "country": [
                        {
                            "cc_name": "茅箭区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "张湾区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "郧县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "郧西县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "竹山县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "竹溪县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "房县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "丹江口市", 
                            "id": 8
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "宜昌市", 
                    "country": [
                        {
                            "cc_name": "西陵区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "伍家岗区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "点军区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "虎亭区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "宜昌县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "远安县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "兴山县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "秭归县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "长阳土家族自治县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "五峰土家族自治县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "宜都市", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "当阳市", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "枝江市", 
                            "id": 13
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "襄樊市", 
                    "country": [
                        {
                            "cc_name": "襄城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "樊城区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "襄阳县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "南漳县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "谷城县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "保康县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "老河口市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "枣阳市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "宜城市", 
                            "id": 9
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "鄂州市", 
                    "country": [
                        {
                            "cc_name": "梁子湖区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "华容区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "鄂城区", 
                            "id": 3
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "荆门市", 
                    "country": [
                        {
                            "cc_name": "东宝区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "掇刀区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "京山县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "沙洋县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "钟祥市", 
                            "id": 5
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "孝感市", 
                    "country": [
                        {
                            "cc_name": "孝南区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "孝昌县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "大悟县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "云梦县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "应城市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "安陆市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "汉川市", 
                            "id": 7
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "荆州市", 
                    "country": [
                        {
                            "cc_name": "沙市区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "荆州区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "公安县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "监利县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "江陵县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "石首市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "洪湖市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "松滋市", 
                            "id": 8
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "黄冈市", 
                    "country": [
                        {
                            "cc_name": "黄州区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "团风县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "红安县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "罗田县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "英山县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "浠水县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "蕲春县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "黄梅县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "麻城市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "武穴市", 
                            "id": 10
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "咸宁市", 
                    "country": [
                        {
                            "cc_name": "咸安区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "嘉鱼县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "通城县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "崇阳县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "通山县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "赤壁市", 
                            "id": 6
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "恩施土家族苗族自治州", 
                    "country": [
                        {
                            "cc_name": "恩施市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "利川市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "建始县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "巴东县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "宣恩县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "咸丰县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "来凤县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "鹤峰县", 
                            "id": 8
                        }
                    ], 
                    "id": 12
                }, 
                {
                    "c_name": "省直辖行政单位", 
                    "country": [
                        {
                            "cc_name": "仙桃市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "潜江市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "天门市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "神农架林区", 
                            "id": 4
                        }
                    ], 
                    "id": 13
                }
            ], 
            "id": 17, 
            "p_name": "湖北省（少两个）"
        }, 
        {
            "city": [
                {
                    "c_name": "长沙市", 
                    "country": [
                        {
                            "cc_name": "芙蓉区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "天心区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "岳麓区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "开福区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "雨花区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "长沙县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "望城县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "宁乡县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "浏阳市", 
                            "id": 9
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "株洲市", 
                    "country": [
                        {
                            "cc_name": "荷塘区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "芦淞区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "石峰区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "天元区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "株洲县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "攸县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "茶陵县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "炎陵县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "醴陵市", 
                            "id": 9
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "湘潭市", 
                    "country": [
                        {
                            "cc_name": "雨湖区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "岳塘区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "湘潭县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "湘乡市", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "韶山市", 
                            "id": 5
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "衡阳市", 
                    "country": [
                        {
                            "cc_name": "江东区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "城南区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "城北区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "南岳区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "衡阳县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "衡南县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "衡山县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "衡东县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "祁东县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "耒阳市", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "常宁市", 
                            "id": 12
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "邵阳市", 
                    "country": [
                        {
                            "cc_name": "双清区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "大祥区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "北塔区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "邵东县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "新邵县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "邵阳县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "隆回县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "洞口县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "绥宁县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "新宁县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "城步苗族自治县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "武冈市", 
                            "id": 12
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "岳阳市", 
                    "country": [
                        {
                            "cc_name": "岳阳楼区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "云溪区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "君山区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "岳阳县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "华容县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "湘阴县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "平江县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "汨罗市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "临湘市", 
                            "id": 9
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "常德市", 
                    "country": [
                        {
                            "cc_name": "武陵区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "鼎城区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "安乡县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "汉寿县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "澧县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "临澧县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "桃源县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "石门县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "津市市", 
                            "id": 9
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "张家界市", 
                    "country": [
                        {
                            "cc_name": "永定区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "武陵源区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "慈利县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "桑植县", 
                            "id": 4
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "益阳市", 
                    "country": [
                        {
                            "cc_name": "资阳区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "赫山区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "南县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "桃江县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "安化县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "沅江市", 
                            "id": 6
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "郴州市", 
                    "country": [
                        {
                            "cc_name": "北湖区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "苏仙区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "桂阳县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "宜章县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "永兴县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "嘉禾县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "临武县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "汝城县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "桂东县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "安仁县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "资兴市", 
                            "id": 11
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "永州市", 
                    "country": [
                        {
                            "cc_name": "芝山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "冷水滩区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "祁阳县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "东安县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "双牌县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "道县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "江永县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "宁远县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "蓝山县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "新田县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "江华瑶族自治县", 
                            "id": 11
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "怀化市", 
                    "country": [
                        {
                            "cc_name": "鹤城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "中方县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "沅陵县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "辰溪县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "溆浦县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "会同县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "麻阳苗族自治县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "新晃侗族自治县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "芷江侗族自治县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "靖州苗族侗族自治县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "通道侗族自治县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "洪江市", 
                            "id": 12
                        }
                    ], 
                    "id": 12
                }, 
                {
                    "c_name": "娄底地区", 
                    "country": [
                        {
                            "cc_name": "娄底市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "冷水江市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "涟源市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "双峰县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "新化县", 
                            "id": 5
                        }
                    ], 
                    "id": 13
                }, 
                {
                    "c_name": "湘西土家族苗族自治州", 
                    "country": [
                        {
                            "cc_name": "吉首市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "泸溪县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "凤凰县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "花垣县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "保靖县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "古丈县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "永顺县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "龙山县", 
                            "id": 8
                        }
                    ], 
                    "id": 14
                }
            ], 
            "id": 18, 
            "p_name": "湖南省"
        }, 
        {
            "city": [
                {
                    "c_name": "广州市", 
                    "country": [
                        {
                            "cc_name": "东山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "荔湾区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "越秀区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "海珠区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "天河区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "芳村区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "白云区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "黄埔区", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "番禺市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "花都市", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "增城市", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "从化市", 
                            "id": 12
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "韶关市", 
                    "country": [
                        {
                            "cc_name": "武江区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "浈江区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "曲江区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "始兴县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "仁化县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "翁源县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "乳源瑶族自治县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "新丰县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "乐昌市", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "南雄市", 
                            "id": 10
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "深圳市", 
                    "country": [
                        {
                            "cc_name": "罗湖区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "福田区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "南山区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "宝安区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "龙岗区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "盐田区", 
                            "id": 6
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "珠海市", 
                    "country": [
                        {
                            "cc_name": "香洲区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "斗门区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "金湾区", 
                            "id": 3
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "汕头市", 
                    "country": [
                        {
                            "cc_name": "濠江区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "龙湖区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "金平区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "潮南区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "澄海区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "潮阳区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "南澳县", 
                            "id": 7
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "佛山市", 
                    "country": [
                        {
                            "cc_name": "禅城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "顺德区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "南海区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "三水区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "高明区", 
                            "id": 5
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "江门市", 
                    "country": [
                        {
                            "cc_name": "蓬江区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "江海区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "台山市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "新会市", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "开平市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "鹤山市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "恩平市", 
                            "id": 7
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "湛江市", 
                    "country": [
                        {
                            "cc_name": "赤坎区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "霞山区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "坡头区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "麻章区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "遂溪县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "徐闻县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "廉江市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "雷州市", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "吴川市", 
                            "id": 9
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "茂名市", 
                    "country": [
                        {
                            "cc_name": "茂南区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "茂港区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "电白县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "高州市", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "化州市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "信宜市", 
                            "id": 6
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "肇庆市", 
                    "country": [
                        {
                            "cc_name": "端州区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "鼎湖区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "广宁县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "怀集县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "封开县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "德庆县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "高要市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "四会市", 
                            "id": 8
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "惠州市", 
                    "country": [
                        {
                            "cc_name": "惠城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "博罗县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "惠东县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "龙门县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "惠阳市", 
                            "id": 5
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "梅州市", 
                    "country": [
                        {
                            "cc_name": "梅江区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "梅县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "大埔县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "丰顺县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "五华县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "平远县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "蕉岭县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "兴宁市", 
                            "id": 8
                        }
                    ], 
                    "id": 12
                }, 
                {
                    "c_name": "汕尾市", 
                    "country": [
                        {
                            "cc_name": "城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "海丰县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "陆河县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "陆丰市", 
                            "id": 4
                        }
                    ], 
                    "id": 13
                }, 
                {
                    "c_name": "河源市", 
                    "country": [
                        {
                            "cc_name": "源城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "紫金县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "龙川县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "连平县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "和平县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "东源县", 
                            "id": 6
                        }
                    ], 
                    "id": 14
                }, 
                {
                    "c_name": "阳江市", 
                    "country": [
                        {
                            "cc_name": "江城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "阳西县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "阳东县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "阳春市", 
                            "id": 4
                        }
                    ], 
                    "id": 15
                }, 
                {
                    "c_name": "清远市", 
                    "country": [
                        {
                            "cc_name": "清城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "佛冈县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "阳山县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "连山壮族瑶族自治县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "连南瑶族自治县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "清新县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "英德市", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "连州市", 
                            "id": 8
                        }
                    ], 
                    "id": 16
                }, 
                {
                    "c_name": "省直辖行政单位", 
                    "country": [
                        {
                            "cc_name": "东莞市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "中山市", 
                            "id": 2
                        }
                    ], 
                    "id": 17
                }, 
                {
                    "c_name": "潮州市", 
                    "country": [
                        {
                            "cc_name": "湘桥区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "潮安县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "饶平县", 
                            "id": 3
                        }
                    ], 
                    "id": 18
                }, 
                {
                    "c_name": "揭阳市", 
                    "country": [
                        {
                            "cc_name": "榕城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "揭东县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "揭西县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "惠来县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "普宁市", 
                            "id": 5
                        }
                    ], 
                    "id": 19
                }, 
                {
                    "c_name": "云浮市", 
                    "country": [
                        {
                            "cc_name": "云城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "新兴县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "郁南县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "云安县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "罗定市", 
                            "id": 5
                        }
                    ], 
                    "id": 20
                }
            ], 
            "id": 19, 
            "p_name": "广东省"
        }, 
        {
            "city": [
                {
                    "c_name": "南宁市", 
                    "country": [
                        {
                            "cc_name": "兴宁区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "青秀区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "西乡塘区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "江南区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "良庆区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "邕宁区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "武鸣县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "隆安县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "马山县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "上林县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "宾阳县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "横县", 
                            "id": 12
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "柳州市", 
                    "country": [
                        {
                            "cc_name": "城中区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "鱼峰区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "柳南区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "柳北区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "柳江县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "柳城县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "鹿寨县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "融安县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "融水苗族自治县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "三江侗族自治县", 
                            "id": 10
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "桂林市", 
                    "country": [
                        {
                            "cc_name": "秀峰区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "叠彩区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "象山区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "七星区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "雁山区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "阳朔县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "临桂县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "灵川县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "全州县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "兴安县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "永福县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "灌阳县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "龙胜各县自治区", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "资源县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "平乐县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "荔蒲县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "恭城瑶族自治县", 
                            "id": 17
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "梧州市", 
                    "country": [
                        {
                            "cc_name": "万秀区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "蝶山区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "市郊区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "苍梧县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "藤县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "蒙山县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "岑溪市", 
                            "id": 7
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "北海市", 
                    "country": [
                        {
                            "cc_name": "海城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "银海区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "铁山港区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "合浦县", 
                            "id": 4
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "防城港市", 
                    "country": [
                        {
                            "cc_name": "港口区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "防城区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "上思县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "东兴市", 
                            "id": 4
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "钦州市", 
                    "country": [
                        {
                            "cc_name": "钦南区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "钦北区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "浦北县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "灵山县", 
                            "id": 4
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "贵港市", 
                    "country": [
                        {
                            "cc_name": "港北区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "港南区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "覃塘区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "平南县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "桂平市", 
                            "id": 5
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "玉林市", 
                    "country": [
                        {
                            "cc_name": "玉州区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "容县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "陆川县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "博白县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "兴业县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "北流市", 
                            "id": 6
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "崇左市", 
                    "country": [
                        {
                            "cc_name": "江州区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "凭祥市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "扶绥县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "宁明县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "龙州县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "大新县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "天等县", 
                            "id": 7
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "来宾市", 
                    "country": [
                        {
                            "cc_name": "兴宾区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "合山市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "忻城县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "象州县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "武宣县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "金秀瑶族自治县", 
                            "id": 6
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "贺州市", 
                    "country": [
                        {
                            "cc_name": "八步区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "昭平县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "钟山县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "富川瑶族自治县", 
                            "id": 4
                        }
                    ], 
                    "id": 12
                }, 
                {
                    "c_name": "百色市", 
                    "country": [
                        {
                            "cc_name": "右江区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "田阳县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "田东县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "平果县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "德保县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "靖西县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "那坡县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "凌云县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "乐业县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "田林县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "隆林各族自治县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "西林县", 
                            "id": 12
                        }
                    ], 
                    "id": 13
                }, 
                {
                    "c_name": "河池市", 
                    "country": [
                        {
                            "cc_name": "金城江区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "宜州市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "罗城仫佬族自治县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "环江毛南族自治县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "南丹县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "天峨县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "凤山县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "东兰县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "巴马瑶族自治县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "都安瑶族自治县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "大化瑶族自治县", 
                            "id": 11
                        }
                    ], 
                    "id": 14
                }
            ], 
            "id": 20, 
            "p_name": "广西"
        }, 
        {
            "city": [
                {
                    "c_name": "省直辖行政单位", 
                    "country": [
                        {
                            "cc_name": "琼海市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "儋州市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "五指山市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "文昌市", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "万宁市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "东方市", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "定安县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "屯昌县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "澄迈县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "临高县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "白沙黎族自治县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "昌江黎族自治县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "乐东黎族自治县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "陵水黎族自治县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "保亭黎族苗族自治县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "琼中黎族苗族自治县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "西南中沙群岛办事处", 
                            "id": 17
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "海口市", 
                    "country": [
                        {
                            "cc_name": "龙华区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "秀英区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "琼山区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "美兰区", 
                            "id": 4
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "三亚市", 
                    "country": [
                        {
                            "cc_name": "市辖区", 
                            "id": 1
                        }
                    ], 
                    "id": 3
                }
            ], 
            "id": 21, 
            "p_name": "海南省"
        }, 
        {
            "city": [
                {
                    "c_name": "重庆市", 
                    "country": [
                        {
                            "cc_name": "万州区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "涪陵区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "渝中区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "大渡口区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "江北区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "沙坪坝区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "九龙坡区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "南岸区", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "北碚区", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "万盛区", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "双桥区", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "渝北区", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "巴南区", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "长寿县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "綦江县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "潼南县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "铜梁县", 
                            "id": 17
                        }, 
                        {
                            "cc_name": "大足县", 
                            "id": 18
                        }, 
                        {
                            "cc_name": "荣昌县", 
                            "id": 19
                        }, 
                        {
                            "cc_name": "璧山县", 
                            "id": 20
                        }, 
                        {
                            "cc_name": "梁平县", 
                            "id": 21
                        }, 
                        {
                            "cc_name": "城口县", 
                            "id": 22
                        }, 
                        {
                            "cc_name": "丰都县", 
                            "id": 23
                        }, 
                        {
                            "cc_name": "垫江县", 
                            "id": 24
                        }, 
                        {
                            "cc_name": "武隆县", 
                            "id": 25
                        }, 
                        {
                            "cc_name": "忠县", 
                            "id": 26
                        }, 
                        {
                            "cc_name": "开县", 
                            "id": 27
                        }, 
                        {
                            "cc_name": "云阳县", 
                            "id": 28
                        }, 
                        {
                            "cc_name": "奉节县", 
                            "id": 29
                        }, 
                        {
                            "cc_name": "巫山县", 
                            "id": 30
                        }, 
                        {
                            "cc_name": "巫溪县", 
                            "id": 31
                        }, 
                        {
                            "cc_name": "黔江土家族苗族自治县", 
                            "id": 32
                        }, 
                        {
                            "cc_name": "石柱土家族自治县", 
                            "id": 33
                        }, 
                        {
                            "cc_name": "秀山土家族苗族自治县", 
                            "id": 34
                        }, 
                        {
                            "cc_name": "酉阳土家族苗族自治县", 
                            "id": 35
                        }, 
                        {
                            "cc_name": "彭水苗族土家族自治县", 
                            "id": 36
                        }, 
                        {
                            "cc_name": "江津市", 
                            "id": 37
                        }, 
                        {
                            "cc_name": "合川市", 
                            "id": 38
                        }, 
                        {
                            "cc_name": "永川市", 
                            "id": 39
                        }, 
                        {
                            "cc_name": "南川市", 
                            "id": 40
                        }
                    ], 
                    "id": 1
                }
            ], 
            "id": 22, 
            "p_name": "重庆市"
        }, 
        {
            "city": [
                {
                    "c_name": "成都市", 
                    "country": [
                        {
                            "cc_name": "锦江区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "青羊区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "金牛区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "武侯区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "成华区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "龙泉驿区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "青白江区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "金堂县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "双流县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "温江县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "郫县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "新都县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "大邑县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "蒲江县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "新津县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "都江堰市", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "彭州市", 
                            "id": 17
                        }, 
                        {
                            "cc_name": "邛崃市", 
                            "id": 18
                        }, 
                        {
                            "cc_name": "崇州市", 
                            "id": 19
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "自贡市", 
                    "country": [
                        {
                            "cc_name": "自流井区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "贡井区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "大安区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "沿滩区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "荣县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "富顺县", 
                            "id": 6
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "攀枝花市", 
                    "country": [
                        {
                            "cc_name": "东区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "西区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "仁和区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "米易县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "盐边县", 
                            "id": 5
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "泸州市", 
                    "country": [
                        {
                            "cc_name": "江阳区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "纳溪区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "龙马潭区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "泸县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "合江县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "叙永县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "古蔺县", 
                            "id": 7
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "德阳市", 
                    "country": [
                        {
                            "cc_name": "旌阳区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "中江县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "罗江县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "广汉市", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "什邡市", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "绵竹市", 
                            "id": 6
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "绵阳市", 
                    "country": [
                        {
                            "cc_name": "涪城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "游仙区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "三台县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "盐亭县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "安县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "梓潼县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "北川县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "平武县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "江油市", 
                            "id": 9
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "广元市", 
                    "country": [
                        {
                            "cc_name": "利州区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "元坝区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "朝天区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "旺苍县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "青川县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "剑阁县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "苍溪县", 
                            "id": 7
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "遂宁市", 
                    "country": [
                        {
                            "cc_name": "船山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "安居区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "蓬溪县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "射洪县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "大英县", 
                            "id": 5
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "内江市", 
                    "country": [
                        {
                            "cc_name": "市中区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "东兴区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "威远县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "资中县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "隆昌县", 
                            "id": 5
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "乐山市", 
                    "country": [
                        {
                            "cc_name": "市中区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "沙湾区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "五通桥区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "金口河区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "犍为县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "井研县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "夹江县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "沐川县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "峨边彝族自治县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "马边彝族自治县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "峨眉山市", 
                            "id": 11
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "南充市", 
                    "country": [
                        {
                            "cc_name": "顺庆区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "高坪区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "嘉陵区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "南部县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "营山县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "蓬安县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "仪陇县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "西充县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "阆中市", 
                            "id": 9
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "宜宾市", 
                    "country": [
                        {
                            "cc_name": "翠屏区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "宜宾县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "南溪县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "江安县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "长宁县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "高县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "珙县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "筠连县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "兴文县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "屏山县", 
                            "id": 10
                        }
                    ], 
                    "id": 12
                }, 
                {
                    "c_name": "广安市", 
                    "country": [
                        {
                            "cc_name": "广安区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "岳池县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "武胜县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "邻水县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "华莹市", 
                            "id": 5
                        }
                    ], 
                    "id": 13
                }, 
                {
                    "c_name": "达川地区", 
                    "country": [
                        {
                            "cc_name": "达川市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "万源市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "达县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "宣汉县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "开江县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "大竹县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "渠县", 
                            "id": 7
                        }
                    ], 
                    "id": 14
                }, 
                {
                    "c_name": "雅安地区", 
                    "country": [
                        {
                            "cc_name": "雅安市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "名山县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "荥经县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "汉源县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "石棉县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "天全县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "芦山县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "宝兴县", 
                            "id": 8
                        }
                    ], 
                    "id": 15
                }, 
                {
                    "c_name": "阿坝藏族羌族自治州", 
                    "country": [
                        {
                            "cc_name": "汶川县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "理县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "茂县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "松潘县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "九寨沟县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "金川县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "小金县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "黑水县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "马尔康县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "壤塘县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "阿坝县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "若尔盖县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "红原县", 
                            "id": 13
                        }
                    ], 
                    "id": 16
                }, 
                {
                    "c_name": "甘孜藏族自治州", 
                    "country": [
                        {
                            "cc_name": "康定县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "泸定县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "丹巴县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "九龙县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "雅江县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "道孚县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "炉霍县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "甘孜县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "新龙县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "德格县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "白玉县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "石渠县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "色达县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "理塘县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "巴塘县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "乡城县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "稻城县", 
                            "id": 17
                        }, 
                        {
                            "cc_name": "得荣县", 
                            "id": 18
                        }
                    ], 
                    "id": 17
                }, 
                {
                    "c_name": "凉山彝族自治州", 
                    "country": [
                        {
                            "cc_name": "西昌市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "木里藏族自治县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "盐源县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "德昌县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "会理县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "会东县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "宁南县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "普格县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "布拖县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "金阳县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "昭觉县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "喜德县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "冕宁县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "越西县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "甘洛县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "美姑县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "雷波县", 
                            "id": 17
                        }
                    ], 
                    "id": 18
                }, 
                {
                    "c_name": "巴中地区", 
                    "country": [
                        {
                            "cc_name": "巴中市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "通江县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "南江县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "平昌县", 
                            "id": 4
                        }
                    ], 
                    "id": 19
                }, 
                {
                    "c_name": "眉山地区", 
                    "country": [
                        {
                            "cc_name": "眉山县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "仁寿县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "彭山县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "洪雅县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "丹棱县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "青神县", 
                            "id": 6
                        }
                    ], 
                    "id": 20
                }, 
                {
                    "c_name": "资阳地区", 
                    "country": [
                        {
                            "cc_name": "资阳市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "简阳市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "安岳县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "乐至县", 
                            "id": 4
                        }
                    ], 
                    "id": 21
                }
            ], 
            "id": 23, 
            "p_name": "四川省"
        }, 
        {
            "city": [
                {
                    "c_name": "贵阳市", 
                    "country": [
                        {
                            "cc_name": "南明区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "云岩区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "花溪区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "乌当区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "白云区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "小河区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "开阳县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "息烽县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "修文县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "清镇市", 
                            "id": 10
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "六盘水市", 
                    "country": [
                        {
                            "cc_name": "钟山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "盘县特区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "六枝特区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "水城县", 
                            "id": 4
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "遵义市", 
                    "country": [
                        {
                            "cc_name": "红花岗区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "汇川区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "遵义县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "桐梓县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "绥阳县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "正安县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "道真仡佬族苗族自治县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "务川仡佬族苗族自治县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "凤冈县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "湄潭县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "余庆县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "习水县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "赤水市", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "仁怀市", 
                            "id": 14
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "铜仁地区", 
                    "country": [
                        {
                            "cc_name": "铜仁市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "江口县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "玉屏侗族自治县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "石阡县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "思南县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "印江土家族苗族自治县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "德江县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "沿河土家族自治县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "松桃苗族自治县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "万山特区", 
                            "id": 10
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "黔西南布依族苗族自治州", 
                    "country": [
                        {
                            "cc_name": "兴义市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "兴仁县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "普安县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "晴隆县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "贞丰县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "望谟县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "册亨县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "安龙县", 
                            "id": 8
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "毕节地区", 
                    "country": [
                        {
                            "cc_name": "毕节市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "大方县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "黔西县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "金沙县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "织金县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "纳雍县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "威宁彝族回族苗族自治县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "赫章县", 
                            "id": 8
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "安顺地区", 
                    "country": [
                        {
                            "cc_name": "安顺市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "平坝县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "普定县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "关岭布依族苗族自治县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "镇宁布依族苗族自治县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "紫云苗族布依族自治县", 
                            "id": 6
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "黔东南苗族侗族自治州", 
                    "country": [
                        {
                            "cc_name": "凯里市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "黄平县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "施秉县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "三穗县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "镇远县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "岑巩县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "天柱县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "锦屏县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "剑河县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "台江县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "黎平县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "榕江县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "从江县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "雷山县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "麻江县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "丹寨县", 
                            "id": 16
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "黔南布依族苗族自治州", 
                    "country": [
                        {
                            "cc_name": "都匀市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "福泉市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "荔波县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "贵定县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "瓮安县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "独山县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "平塘县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "罗甸县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "长顺县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "龙里县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "惠水县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "三都水族自治县", 
                            "id": 12
                        }
                    ], 
                    "id": 9
                }
            ], 
            "id": 24, 
            "p_name": "贵州省"
        }, 
        {
            "city": [
                {
                    "c_name": "昆明市", 
                    "country": [
                        {
                            "cc_name": "五华区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "盘龙区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "官渡区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "西山区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "东川区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "呈贡县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "晋宁县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "富民县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "宜良县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "石林彝族自治县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "嵩明县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "禄劝彝族苗族自治县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "寻甸回族彝族自治县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "安宁市", 
                            "id": 14
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "曲靖市", 
                    "country": [
                        {
                            "cc_name": "麒麟区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "马龙县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "陆良县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "师宗县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "罗平县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "富源县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "会泽县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "沾益县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "宣威市", 
                            "id": 9
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "玉溪市", 
                    "country": [
                        {
                            "cc_name": "红塔区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "江川县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "澄江县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "通海县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "华宁县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "易门县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "峨山彝族自治县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "新平彝族傣族自治县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "元江哈尼族彝族傣族自治县", 
                            "id": 9
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "昭通地区", 
                    "country": [
                        {
                            "cc_name": "昭通市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "鲁甸县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "巧家县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "盐津县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "大关县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "永善县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "绥江县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "镇雄县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "彝良县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "威信县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "水富县", 
                            "id": 11
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "楚雄彝族自治州", 
                    "country": [
                        {
                            "cc_name": "楚雄市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "双柏县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "牟定县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "南华县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "姚安县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "大姚县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "永仁县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "元谋县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "武定县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "禄丰县", 
                            "id": 10
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "红河哈尼族彝族自治州", 
                    "country": [
                        {
                            "cc_name": "个旧市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "开远市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "蒙自县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "屏边苗族自治县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "建水县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "石屏县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "弥勒县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "泸西县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "元阳县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "红河县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "金平苗族瑶族傣族自治县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "绿春县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "河口瑶族自治县", 
                            "id": 13
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "文山壮族苗族自治州", 
                    "country": [
                        {
                            "cc_name": "文山县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "砚山县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "西畴县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "麻栗坡县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "马关县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "丘北县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "广南县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "富宁县", 
                            "id": 8
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "思茅市", 
                    "country": [
                        {
                            "cc_name": "思茅市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "普洱哈尼族彝族自治县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "墨江哈尼族自治县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "景东彝族自治县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "景谷傣族彝族自治县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "镇沅彝族哈尼族拉祜族自治县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "江城哈尼族彝族自治县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "孟连傣族拉祜族佤族自治县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "澜沧拉祜族自治县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "西盟佤族自治县", 
                            "id": 10
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "西双版纳傣族自治州", 
                    "country": [
                        {
                            "cc_name": "景洪市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "勐海县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "勐腊县", 
                            "id": 3
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "大理白族自治州", 
                    "country": [
                        {
                            "cc_name": "大理市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "漾濞彝族自治县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "祥云县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "宾川县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "弥渡县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "南涧彝族自治县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "巍山彝族回族自治县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "永平县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "云龙县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "洱源县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "剑川县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "鹤庆县", 
                            "id": 12
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "保山地区", 
                    "country": [
                        {
                            "cc_name": "保山市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "施甸县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "腾冲县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "龙陵县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "昌宁县", 
                            "id": 5
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "德宏傣族景颇族自治州", 
                    "country": [
                        {
                            "cc_name": "畹町市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "瑞丽市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "潞西市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "梁河县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "盈江县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "陇川县", 
                            "id": 6
                        }
                    ], 
                    "id": 12
                }, 
                {
                    "c_name": "丽江地区", 
                    "country": [
                        {
                            "cc_name": "丽江纳西族自治县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "永胜县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "华坪县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "宁蒗彝族自治县", 
                            "id": 4
                        }
                    ], 
                    "id": 13
                }, 
                {
                    "c_name": "怒江傈僳族自治州", 
                    "country": [
                        {
                            "cc_name": "泸水县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "福贡县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "贡山独龙族怒族自治县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "兰坪白族普米族自治县", 
                            "id": 4
                        }
                    ], 
                    "id": 14
                }, 
                {
                    "c_name": "迪庆藏族自治州", 
                    "country": [
                        {
                            "cc_name": "中甸县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "德钦县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "维西傈僳族自治县", 
                            "id": 3
                        }
                    ], 
                    "id": 15
                }, 
                {
                    "c_name": "临沧地区", 
                    "country": [
                        {
                            "cc_name": "临沧县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "凤庆县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "云县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "永德县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "镇康县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "双江拉祜族佤族布朗族傣族自治县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "耿马傣族佤族自治县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "沧源佤族自治县", 
                            "id": 8
                        }
                    ], 
                    "id": 16
                }
            ], 
            "id": 25, 
            "p_name": "云南省"
        }, 
        {
            "city": [
                {
                    "c_name": "拉萨市", 
                    "country": [
                        {
                            "cc_name": "城关区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "林周县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "当雄县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "尼木县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "曲水县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "堆龙德庆县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "达孜县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "墨竹工卡县", 
                            "id": 8
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "昌都地区", 
                    "country": [
                        {
                            "cc_name": "昌都县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "江达县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "贡觉县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "类乌齐县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "丁青县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "察雅县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "八宿县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "左贡县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "芒康县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "洛隆县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "边坝县", 
                            "id": 11
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "山南地区", 
                    "country": [
                        {
                            "cc_name": "乃东县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "扎囊县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "贡嘎县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "桑日县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "琼结县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "曲松县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "措美县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "洛扎县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "加查县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "隆子县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "错那县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "浪卡子县", 
                            "id": 12
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "日喀则地区", 
                    "country": [
                        {
                            "cc_name": "日喀则市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "南木林县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "江孜县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "定日县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "萨迦县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "拉孜县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "昂仁县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "谢通门县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "白朗县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "仁布县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "康马县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "定结县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "仲巴县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "亚东县", 
                            "id": 14
                        }, 
                        {
                            "cc_name": "吉隆县", 
                            "id": 15
                        }, 
                        {
                            "cc_name": "聂拉木县", 
                            "id": 16
                        }, 
                        {
                            "cc_name": "萨嘎县", 
                            "id": 17
                        }, 
                        {
                            "cc_name": "岗巴县", 
                            "id": 18
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "那曲地区", 
                    "country": [
                        {
                            "cc_name": "那曲县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "嘉黎县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "比如县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "聂荣县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "安多县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "申扎县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "索县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "班戈县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "巴青县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "尼玛县", 
                            "id": 10
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "阿里地区", 
                    "country": [
                        {
                            "cc_name": "普兰县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "札达县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "噶尔县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "日土县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "革吉县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "改则县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "措勤县", 
                            "id": 7
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "林芝地区", 
                    "country": [
                        {
                            "cc_name": "林芝县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "工布江达县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "米林县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "墨脱县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "波密县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "察隅县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "朗县", 
                            "id": 7
                        }
                    ], 
                    "id": 7
                }
            ], 
            "id": 26, 
            "p_name": "西藏"
        }, 
        {
            "city": [
                {
                    "c_name": "西安市", 
                    "country": [
                        {
                            "cc_name": "新城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "碑林区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "莲湖区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "灞桥区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "未央区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "雁塔区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "阎良区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "临潼区", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "长安县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "蓝田县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "周至县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "户县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "高陵县", 
                            "id": 13
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "铜川市", 
                    "country": [
                        {
                            "cc_name": "城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "郊区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "耀县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "宜君县", 
                            "id": 4
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "宝鸡市", 
                    "country": [
                        {
                            "cc_name": "渭滨区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "金台区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "宝鸡县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "凤翔县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "岐山县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "扶风县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "眉县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "陇县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "千阳县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "麟游县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "凤县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "太白县", 
                            "id": 12
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "咸阳市", 
                    "country": [
                        {
                            "cc_name": "秦都区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "杨陵区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "渭城区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "三原县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "泾阳县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "乾县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "礼泉县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "永寿县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "彬县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "长武县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "旬邑县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "淳化县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "武功县", 
                            "id": 13
                        }, 
                        {
                            "cc_name": "兴平市", 
                            "id": 14
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "渭南市", 
                    "country": [
                        {
                            "cc_name": "临渭区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "华县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "潼关县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "大荔县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "合阳县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "澄城县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "蒲城县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "白水县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "富平县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "韩城市", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "华阴市", 
                            "id": 11
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "延安市", 
                    "country": [
                        {
                            "cc_name": "宝塔区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "延长县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "延川县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "子长县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "安塞县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "志丹县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "吴旗县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "甘泉县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "富县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "洛川县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "宜川县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "黄龙县", 
                            "id": 12
                        }, 
                        {
                            "cc_name": "黄陵县", 
                            "id": 13
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "汉中市", 
                    "country": [
                        {
                            "cc_name": "汉台区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "南郑县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "城固县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "洋县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "西乡县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "勉县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "宁强县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "略阳县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "镇巴县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "留坝县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "佛坪县", 
                            "id": 11
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "安康地区", 
                    "country": [
                        {
                            "cc_name": "安康市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "汉阴县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "石泉县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "宁陕县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "紫阳县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "岚皋县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "平利县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "镇坪县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "旬阳县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "白河县", 
                            "id": 10
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "商洛地区", 
                    "country": [
                        {
                            "cc_name": "商州市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "洛南县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "丹凤县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "商南县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "山阳县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "镇安县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "柞水县", 
                            "id": 7
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "榆林地区", 
                    "country": [
                        {
                            "cc_name": "榆林市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "神木县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "府谷县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "横山县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "靖边县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "定边县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "绥德县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "米脂县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "佳县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "吴堡县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "清涧县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "子洲县", 
                            "id": 12
                        }
                    ], 
                    "id": 10
                }
            ], 
            "id": 27, 
            "p_name": "陕西省"
        }, 
        {
            "city": [
                {
                    "c_name": "兰州市", 
                    "country": [
                        {
                            "cc_name": "城关区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "七里河区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "西固区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "安宁区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "红古区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "永登县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "皋兰县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "榆中县", 
                            "id": 8
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "嘉峪关市", 
                    "country": [
                        {
                            "cc_name": "市辖区", 
                            "id": 1
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "金昌市", 
                    "country": [
                        {
                            "cc_name": "金川区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "永昌县", 
                            "id": 2
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "白银市", 
                    "country": [
                        {
                            "cc_name": "白银区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "平川区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "靖远县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "会宁县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "景泰县", 
                            "id": 5
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "天水市", 
                    "country": [
                        {
                            "cc_name": "秦城区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "北道区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "清水县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "秦安县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "甘谷县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "武山县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "张家川回族自治县", 
                            "id": 7
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "酒泉地区", 
                    "country": [
                        {
                            "cc_name": "玉门市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "酒泉市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "敦煌市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "金塔县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "肃北蒙古族自治县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "阿克塞哈萨克族自治县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "安西县", 
                            "id": 7
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "张掖地区", 
                    "country": [
                        {
                            "cc_name": "张掖市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "肃南裕固族自治县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "民乐县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "临泽县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "高台县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "山丹县", 
                            "id": 6
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "武威地区", 
                    "country": [
                        {
                            "cc_name": "武威市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "民勤县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "古浪县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "天祝藏族自治县", 
                            "id": 4
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "定西地区", 
                    "country": [
                        {
                            "cc_name": "定西县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "通渭县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "陇西县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "渭源县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "临洮县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "漳县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "岷县", 
                            "id": 7
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "陇南地区", 
                    "country": [
                        {
                            "cc_name": "武都县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "宕昌县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "成县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "康县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "文县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "西和县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "礼县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "两当县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "徽县", 
                            "id": 9
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "平凉地区", 
                    "country": [
                        {
                            "cc_name": "平凉市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "泾川县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "灵台县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "崇信县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "华亭县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "庄浪县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "静宁县", 
                            "id": 7
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "庆阳地区", 
                    "country": [
                        {
                            "cc_name": "西峰市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "庆阳县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "环县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "华池县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "合水县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "正宁县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "宁县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "镇原县", 
                            "id": 8
                        }
                    ], 
                    "id": 12
                }, 
                {
                    "c_name": "临夏回族自治州", 
                    "country": [
                        {
                            "cc_name": "临夏市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "临夏县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "康乐县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "永靖县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "广河县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "和政县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "东乡族自治县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "积石山保安族东乡族撒拉族自治县", 
                            "id": 8
                        }
                    ], 
                    "id": 13
                }, 
                {
                    "c_name": "甘南藏族自治州", 
                    "country": [
                        {
                            "cc_name": "合作市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "临潭县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "卓尼县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "舟曲县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "迭部县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "玛曲县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "碌曲县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "夏河县", 
                            "id": 8
                        }
                    ], 
                    "id": 14
                }
            ], 
            "id": 28, 
            "p_name": "甘肃省"
        }, 
        {
            "city": [
                {
                    "c_name": "西宁市", 
                    "country": [
                        {
                            "cc_name": "城东区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "城中区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "城西区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "城北区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "大通回族土族自治县", 
                            "id": 5
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "海东地区", 
                    "country": [
                        {
                            "cc_name": "平安县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "民和回族土族自治县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "乐都县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "湟中县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "湟源县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "互助土族自治县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "化隆回族自治县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "循化撒拉族自治县", 
                            "id": 8
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "海北藏族自治州", 
                    "country": [
                        {
                            "cc_name": "门源回族自治县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "祁连县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "海晏县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "刚察县", 
                            "id": 4
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "黄南藏族自治州", 
                    "country": [
                        {
                            "cc_name": "同仁县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "尖扎县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "泽库县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "河南蒙古族自治县", 
                            "id": 4
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "海南藏族自治州", 
                    "country": [
                        {
                            "cc_name": "共和县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "同德县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "贵德县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "兴海县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "贵南县", 
                            "id": 5
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "果洛藏族自治州", 
                    "country": [
                        {
                            "cc_name": "玛沁县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "班玛县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "甘德县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "达日县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "久治县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "玛多县", 
                            "id": 6
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "玉树藏族自治州", 
                    "country": [
                        {
                            "cc_name": "玉树县", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "杂多县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "称多县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "治多县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "囊谦县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "曲麻莱县", 
                            "id": 6
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "海西蒙古族藏族自治州", 
                    "country": [
                        {
                            "cc_name": "格尔木市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "德令哈市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "乌兰县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "都兰县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "天峻县", 
                            "id": 5
                        }
                    ], 
                    "id": 8
                }
            ], 
            "id": 29, 
            "p_name": "青海省"
        }, 
        {
            "city": [
                {
                    "c_name": "银川市", 
                    "country": [
                        {
                            "cc_name": "兴庆区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "西夏区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "金凤区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "永宁县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "贺兰县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "灵武市", 
                            "id": 6
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "石嘴山市", 
                    "country": [
                        {
                            "cc_name": "大武口区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "惠农区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "平罗县", 
                            "id": 3
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "吴忠市", 
                    "country": [
                        {
                            "cc_name": "利通区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "红寺堡区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "盐池县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "同心县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "青铜峡市", 
                            "id": 5
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "固原地区", 
                    "country": [
                        {
                            "cc_name": "原州区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "西吉县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "隆德县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "泾源县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "彭阳县", 
                            "id": 5
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "中卫市", 
                    "country": [
                        {
                            "cc_name": "沙坡头区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "中宁县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "海原县", 
                            "id": 3
                        }
                    ], 
                    "id": 5
                }
            ], 
            "id": 30, 
            "p_name": "宁夏"
        }, 
        {
            "city": [
                {
                    "c_name": "乌鲁木齐市", 
                    "country": [
                        {
                            "cc_name": "天山区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "沙依巴克区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "新市区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "水磨沟区", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "头屯河区", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "南山矿区", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "东山区", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "乌鲁木齐县", 
                            "id": 8
                        }
                    ], 
                    "id": 1
                }, 
                {
                    "c_name": "克拉玛依市", 
                    "country": [
                        {
                            "cc_name": "独山子区", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "克拉玛依区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "白碱滩区", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "乌尔禾区", 
                            "id": 4
                        }
                    ], 
                    "id": 2
                }, 
                {
                    "c_name": "吐鲁番地区", 
                    "country": [
                        {
                            "cc_name": "吐鲁番市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "鄯善县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "托克逊县", 
                            "id": 3
                        }
                    ], 
                    "id": 3
                }, 
                {
                    "c_name": "哈密地区", 
                    "country": [
                        {
                            "cc_name": "哈密市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "巴里坤哈萨克自治县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "伊吾县", 
                            "id": 3
                        }
                    ], 
                    "id": 4
                }, 
                {
                    "c_name": "昌吉回族自治州", 
                    "country": [
                        {
                            "cc_name": "昌吉市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "阜康市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "呼图壁县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "玛纳斯县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "奇台县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "吉木萨尔县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "木垒哈萨克自治县", 
                            "id": 7
                        }
                    ], 
                    "id": 5
                }, 
                {
                    "c_name": "博尔塔拉蒙古自治州", 
                    "country": [
                        {
                            "cc_name": "博乐市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "精河县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "温泉县", 
                            "id": 3
                        }
                    ], 
                    "id": 6
                }, 
                {
                    "c_name": "巴音郭楞蒙古自治州", 
                    "country": [
                        {
                            "cc_name": "库尔勒市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "轮台县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "尉犁县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "若羌县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "且末县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "焉耆回族自治县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "和静县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "和硕县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "博湖县", 
                            "id": 9
                        }
                    ], 
                    "id": 7
                }, 
                {
                    "c_name": "阿克苏地区", 
                    "country": [
                        {
                            "cc_name": "阿克苏市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "温宿县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "库车县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "沙雅县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "新和县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "拜城县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "乌什县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "阿瓦提县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "柯坪县", 
                            "id": 9
                        }
                    ], 
                    "id": 8
                }, 
                {
                    "c_name": "克孜勒苏柯尔克孜自治州", 
                    "country": [
                        {
                            "cc_name": "阿图什市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "阿克陶县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "阿合奇县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "乌恰县", 
                            "id": 4
                        }
                    ], 
                    "id": 9
                }, 
                {
                    "c_name": "喀什地区", 
                    "country": [
                        {
                            "cc_name": "喀什市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "疏附县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "疏勒县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "英吉沙县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "泽普县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "莎车县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "叶城县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "麦盖提县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "岳普湖县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "伽师县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "巴楚县", 
                            "id": 11
                        }, 
                        {
                            "cc_name": "塔什库尔干塔吉克自治县", 
                            "id": 12
                        }
                    ], 
                    "id": 10
                }, 
                {
                    "c_name": "和田地区", 
                    "country": [
                        {
                            "cc_name": "和田市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "和田县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "墨玉县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "皮山县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "洛浦县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "策勒县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "于田县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "民丰县", 
                            "id": 8
                        }
                    ], 
                    "id": 11
                }, 
                {
                    "c_name": "伊犁哈萨克自治州", 
                    "country": [
                        {
                            "cc_name": "奎屯市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "伊犁地区", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "伊宁市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "伊宁县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "察布查尔锡伯自治县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "霍城县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "巩留县", 
                            "id": 7
                        }, 
                        {
                            "cc_name": "新源县", 
                            "id": 8
                        }, 
                        {
                            "cc_name": "昭苏县", 
                            "id": 9
                        }, 
                        {
                            "cc_name": "特克斯县", 
                            "id": 10
                        }, 
                        {
                            "cc_name": "尼勒克县", 
                            "id": 11
                        }
                    ], 
                    "id": 12
                }, 
                {
                    "c_name": "塔城地区", 
                    "country": [
                        {
                            "cc_name": "塔城市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "乌苏市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "额敏县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "沙湾县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "托里县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "裕民县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "和布克赛尔蒙古自治县", 
                            "id": 7
                        }
                    ], 
                    "id": 13
                }, 
                {
                    "c_name": "阿勒泰地区", 
                    "country": [
                        {
                            "cc_name": "阿勒泰市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "布尔津县", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "富蕴县", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "福海县", 
                            "id": 4
                        }, 
                        {
                            "cc_name": "哈巴河县", 
                            "id": 5
                        }, 
                        {
                            "cc_name": "青河县", 
                            "id": 6
                        }, 
                        {
                            "cc_name": "吉木乃县", 
                            "id": 7
                        }
                    ], 
                    "id": 14
                }, 
                {
                    "c_name": "省直辖行政单位", 
                    "country": [
                        {
                            "cc_name": "石河子市", 
                            "id": 1
                        }, 
                        {
                            "cc_name": "阿拉尔市", 
                            "id": 2
                        }, 
                        {
                            "cc_name": "图木舒克市", 
                            "id": 3
                        }, 
                        {
                            "cc_name": "五家渠市", 
                            "id": 4
                        }
                    ], 
                    "id": 15
                }
            ], 
            "id": 31, 
            "p_name": "新疆"
        }
    ]
};

var hobbies={
    "hobby": [
        "篮球", 
        "足球", 
        "兵乓球", 
        "网球", 
        "排球", 
        "羽毛球", 
        "跑步", 
        "游泳", 
        "滑冰", 
        "军旗", 
        "象棋", 
        "五子棋", 
        "跳棋", 
        "围棋", 
        "旅游", 
        "登山运动", 
        "吉他", 
        "口琴", 
        "钢琴", 
        "风琴", 
        "小提琴", 
        "打击乐器", 
        "民族乐器", 
        "流行音乐", 
        "古典音乐", 
        "摇滚音乐", 
        "轻音乐 ", 
        "芭蕾舞", 
        "民族舞", 
        "民间舞", 
        "现代舞", 
        "踢踏舞", 
        "爵士舞", 
        "交谊舞", 
        "品茶", 
        "电影", 
        "连续剧", 
        "短剧", 
        "戏剧 ", 
        "文学", 
        "哲学", 
        "经济", 
        "政治", 
        "小说", 
        "二次元", 
        "游戏", 
        "动漫", 
        "赋诗", 
        "书法", 
        "写作", 
        "表演", 
        "俱乐部", 
        "健身"
    ]
};