$(function(){
	//load hobby
	$("#hobby").html("");
    $("#f-hobby").html("");
	for (var i = 0 ;  i < hobbies["hobby"].length ; i++){
		var hb = hobbies["hobby"][i];
		$("#hobby").append('<label class="checkbox-inline " id="hobby-'+i+'"><input class="hobbies" type="checkbox" name="checkboxes" id="checkboxes-'+i+'" value="'+i+'">'+hb+'</label>');
        $("#f-hobby").append('<label class="checkbox-inline " id="f-hobby-'+i+'"><input class="f-hobbies" type="checkbox" name="checkboxes" id="checkboxes-'+i+'" value="'+i+'">'+hb+'</label>');
	}



    $("#selectcons").html("");
    $("#f-selectcons").html("");
    for (var i = 0 ; i < cons["constellation"].length ; i++){
        var conste = cons["constellation"][i];
        $("#selectcons").append('<option id=conste'+i+' value="'+i+'">'+conste+'</option>');
        $("#f-selectcons").append('<option id=f-conste'+i+' value="'+i+'">'+conste+'</option>');
    }

    $("#selectgrade").html("");
    $("#f-selectgrade").html("");
    for (var i = 0 ; i < grade["grade"].length ; i++){
        var gradeunit = grade["grade"][i];
        $("#selectgrade").append('<option id=grade'+i+' value="'+i+'">'+gradeunit+'</option>');
        $("#f-selectgrade").append('<option id=f-grade'+i+' value="'+i+'">'+gradeunit+'</option>');
    }

    $("#selectschool").html("");
    $("#f-selectschool").html("");
    for (var i = 0 ; i < school["school"].length ; i++){
        var sch = school["school"][i]["name"];
        $("#selectschool").append('<option id=school'+i+' value="'+i+'">'+sch+'</option>');
        $("#f-selectschool").append('<option id=f-school'+i+' value="'+i+'">'+sch+'</option>');
    }

	//load provice
	$("#selectprovince").html("");
    $("#f-selectprovince").html("");
	//alert(city["province"].length)
	for (var i = 0 ; i < city["province"].length ; i++){

		var ct = city["province"][i]["p_name"];
		var pid = city["province"][i]["id"];

		$("#selectprovince").append('<option id="province'+pid+'" value="'+pid+'">'+ct+'</option>');
        $("#f-selectprovince").append('<option id="f-province'+pid+'" value="'+pid+'">'+ct+'</option>');
	}

	//alert(city["province"][0]["city"][0]["country"].length);


    loadfcity(1);
	//console.log(city["province"][0]["city"][0]["country"].length)
    loadfcounty(1,1);
	//load city


    var fprovinceid;


    $("select#f-selectprovince").change(function(){
        fprovinceid = $("#f-selectprovince option:selected").val();
        
        //alert(city["province"][provinceid]["city"][0]["c_name"]);
        loadfcity(fprovinceid);
        loadfcounty(fprovinceid,1);
    });


    var fcityid;




    $("select#f-city").change(function(){
        fcityid = $("#f-city option:selected").val();
        
        //alert(city["province"][provinceid]["city"][0]["c_name"]);
        //console.log(cityid);
        loadfcounty(fprovinceid,fcityid);
    });



    var fcountyid;
    $("select#f-county").change(function(){
        fcountyid = $("#f-county option:selected").val();
    }); 



    $("#f-selectmajor1").html("");
    //console.log(major["一级学科"].length);
    //alert(city["province"].length)
    for (var i = 0 ; i < major["一级学科"].length ; i++){

        var ct = major["一级学科"][i]["1_name"];
        var pid = major["一级学科"][i]["id"];
        //console.log(ct)

        $("#f-selectmajor1").append('<option id="f-major'+pid+'" value="'+pid+'">'+ct+'</option>');
    }


    loadfmajor1(1);
    //console.log(city["province"][0]["city"][0]["country"].length)
    loadfmajor2(1,1);
    //load city

    var fm1;

    $("select#f-selectmajor1").change(function(){
        fm1 = $("#f-selectmajor1 option:selected").val();
        
        //alert(city["province"][provinceid]["city"][0]["c_name"]);
        loadfmajor1(m1);
        loadfmajor2(m1,1);
    });

    var fm2;


    $("select#f-selectmajor2").change(function(){
        fm2 = $("#f-selectmajor2 option:selected").val();
        
        //alert(city["province"][provinceid]["city"][0]["c_name"]);
        //console.log(cityid);
        loadfmajor2(fm1,fm2);
    });

    var fm3;
    $("select#f-selectmajor3").change(function(){
        fm3 = $("#f-selectmajor3 option:selected").val();
    }); 





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




    $("#selectmajor1").html("");
    //console.log(major["一级学科"].length);
    //alert(city["province"].length)
    for (var i = 0 ; i < major["一级学科"].length ; i++){

        var ct = major["一级学科"][i]["1_name"];
        var pid = major["一级学科"][i]["id"];
        //console.log(ct)

        $("#selectmajor1").append('<option id="major'+pid+'" value="'+pid+'">'+ct+'</option>');
    }


    loadmajor1(1);
    //console.log(city["province"][0]["city"][0]["country"].length)
    loadmajor2(1,1);
    //load city

    var m1;

    $("select#selectmajor1").change(function(){
        m1 = $("#selectmajor1 option:selected").val();
        
        //alert(city["province"][provinceid]["city"][0]["c_name"]);
        loadmajor1(m1);
        loadmajor2(m1,1);
    });

    var m2;


    $("select#selectmajor2").change(function(){
        m2 = $("#selectmajor2 option:selected").val();
        
        //alert(city["province"][provinceid]["city"][0]["c_name"]);
        //console.log(cityid);
        loadmajor2(m1,m2);
    });

    var m3;
    $("select#selectmajor3").change(function(){
        m3 = $("#selectmajor3 option:selected").val();
    }); 

    var fschoolid;
    $("select#f-selectschool").change(function(){
        fschoolid = $("#f-selectschool option:selected").val();
    }); 


    var schoolid;
    $("select#selectschool").change(function(){
        schoolid = $("#selectschool option:selected").val();
    }); 

    var sex;
    $("select#selectsex").change(function(){
        sex = $("#selectsex option:selected").val();
    }); 

    var fcostell;
    $("select#f-selectcons").change(function(){
        fcostell = $("#f-selectcons option:selected").val();
    }); 

    var costell;
    $("select#selectcons").change(function(){
        costell = $("#selectcons option:selected").val();
    }); 


    var fyear ;
    $("select#f-selectgrade").change(function(){
        fyear = $("#f-selectgrade option:selected").val();
    }); 

    var year ;
    $("select#selectgrade").change(function(){
        year = $("#selectgrade option:selected").val();
    }); 



    $("#rateage").attr("value",5);
    $("#rateheight").attr("value",5);
    $("#rateweight").attr("value",5);
    $("#rateprovince").attr("value",5);
    $("#ratecity").attr("value",5);
    $("#ratecounty").attr("value",5);
    $("#rateschool").attr("value",5);
    $("#ratem1").attr("value",5);
    $("#ratem2").attr("value",5);
    $("#ratem3").attr("value",5);
    $("#rategrade").attr("value",5);
    $("#ratecons").attr("value",5);
    $("#ratehobby").attr("value",5);



    $("#savafeature").click(function(){
        if ( fprovinceid==null){fprovinceid=1;};
        if (fcityid==null){fcityid=1;};
        if ( fcountyid == null) {fcountyid=1;}
        if ( fm1 == null) {fm1=1;}
        if ( fm2 == null) {fm2=1;}
        if ( fm3 == null) {fm3=1;}
        if ( fschoolid == null) {fschoolid=1;}
        if ( fcostell == null) {fcostell=1;}
        if ( fyear == null) {fyear=1;}
        var fheight = $("#height").val();
        //console.log(height);
        var fweight = $("#weight").val();

        var fage = $("#age").val();

        if ( fheight == null || fheight == '') {fheight=163;}
        if ( fweight == null || fweight =='') {fweight=49;}
        if ( fage == null || fage =='') {fage=18;}
        var fhb=[];

        $('.f-hobbies').each(function(){
            console.log($(this).is(":checked"));
            if ($(this).is(":checked")==true){

                fhb.push($(this).attr('value'));
                //console.log(hb.length);
            }

        });

        var rage = $("#rateage").val();
        var rheight = $("#rateheight").val();
        var rweight = $("#rateweight").val();
        var rprovince = $("#rateprovince").val();
        var rcity = $("#ratecity").val();
        var rcounty = $("#ratecounty").val();
        var rschool = $("#rateschool").val();
        var rm1 = $("#ratem1").val();
        var rm2 = $("#ratem2").val();
        var rm3 = $("#ratem3").val();
        var rgrade = $("#rategrade").val();
        var rcon = $("#ratecons").val();
        var rhobby = $("#ratehobby").val();


       $.ajax({ // JQuery ajax function
          type: "POST", // Submitting Method
          url: 'http://168.63.205.250/edit',  //这里是你的api名字
          data: {"name":un,"age":age,"gender":sex,"height":height,"weight":weight,"hometownId":[provinceid,cityid,countyid],"universityId":schoolid,"major1":[m1,m2,m3],"constellationId":costell,"hobbiesId":hb,"features":{"age":fage,"height":fheight,"weight":fweight,"hometownId":[[fprovinceid,fcityid,fcountyid]],"universityId":fschoolid,"constellationId":fcostell,"hobbiesId":},"percentage":{"age":rage,"height":rheight,"weight":rweight,"provinceid":rprovince,"cityid":rcity,"countyid":rcounty,"universityId":rschool,"constellationId":ratecons,"hobby":rhobby}}, // the data that will be sent to php processor
          dataType: "json", // type of returned data
          success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
          alert(data)
          }
         });


        //console.log(provinceid+' '+cityid+' '+countyid+' '+m1+' '+m2+' '+m3+' '+schoolid+' '+sex+' '+costell + ' '+year+ ' '+height+' '+weight+' end');
        //for (var i = 0 ; i < hb.length ; i++){
        //    console.log(hb[i]);
        //}
    });

    




    $("#editinfo").click(function(){
        if ( provinceid==null){provinceid=1;};
        if (cityid==null){cityid=1;};
        if ( countyid == null) {countyid=1;}
        if ( m1 == null) {m1=1;}
        if ( m2 == null) {m2=1;}
        if ( m3 == null) {m3=1;}
        if ( schoolid == null) {schoolid=1;}
        if ( sex == null) {sex=1;}
        if ( costell == null) {costell=1;}
        if ( year == null) {year=1;}
        var height = $("#height").val();
        //console.log(height);
        var weight = $("#weight").val();

        var age = $("#age").val();

        var un = $("#username").val();
        console.log(un);
        if ( height == null || height == '') {height=163;}
        if ( weight == null || weight =='') {weight=49;}
        if ( un == null || un =='') {un='littlewhite';}
        if ( age == null || age =='') {age=18;}
        var hb=[];

        $('.hobbies').each(function(){
            console.log($(this).is(":checked"));
            if ($(this).is(":checked")==true){

                hb.push($(this).attr('value'));
                //console.log(hb.length);
            }

        })


       $.ajax({ // JQuery ajax function
          type: "POST", // Submitting Method
          url: 'http://168.63.205.250/edit',  //这里是你的api名字
          data: {"name":un,"age":age,"gender":sex,"height":height,"weight":weight,"hometownId":[provinceid,cityid,countyid],"universityId":schoolid,"major1":[m1,m2,m3],"constellationId":costell,"hobbiesId":hb,"features":{"age":fage,"height":fheight,"weight":fweight,"hometownId":[[fprovinceid,fcityid,fcountyid]],"universityId":fschoolid,"constellationId":fcostell,"hobbiesId":},"percentage":{"age":rage,"height":rheight,"weight":rweight,"provinceid":rprovince,"cityid":rcity,"countyid":rcounty,"universityId":rschool,"constellationId":ratecons,"hobby":rhobby}},
          dataType: "json", // type of returned data
          success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
          alert(data)
          }
         });


        //console.log(provinceid+' '+cityid+' '+countyid+' '+m1+' '+m2+' '+m3+' '+schoolid+' '+sex+' '+costell + ' '+year+ ' '+height+' '+weight+' end');
        //for (var i = 0 ; i < hb.length ; i++){
        //    console.log(hb[i]);
        //}
    });



});

function loadfcity(prid){
    //alert("province id from function"+prid);
    $("#f-city").html("");
    var pid = prid-1;
    for (var i = 0 ; i < city["province"][pid]["city"].length ; i++){
        var ct = city["province"][pid]["city"][i]["c_name"];
        var cid = city["province"][pid]["city"][i]["id"];
        //alert(ct);
        $("#f-city").append('<option id="f-city'+cid+'" value="'+cid+'">'+ct+'</option>');

    }

}

function loadfcounty(provinceid,cityid){
    $("#f-county").html("");
    var pid = provinceid-1;
    var cid = cityid-1;
    //console.log(city["province"][pid]["city"][pid]["country"].length);
    for (var i = 0 ; i < city["province"][pid]["city"][cid]["country"].length  ; i++){
        var ct = city["province"][pid]["city"][cid]["country"][i]["cc_name"];
        var ccid = city["province"][pid]["city"][cid]["country"][i]["id"];
        //alert(ct);
        $("#f-county").append('<option id="f-county'+ccid+'" value="'+ccid+'">'+ct+'</option>');

    }

}



function loadcity(prid){
	//alert("province id from function"+prid);
	$("#city").html("");
	var pid = prid-1;
	for (var i = 0 ; i < city["province"][pid]["city"].length ; i++){
		var ct = city["province"][pid]["city"][i]["c_name"];
		var cid = city["province"][pid]["city"][i]["id"];
		//alert(ct);
		$("#city").append('<option id="city'+cid+'" value="'+cid+'">'+ct+'</option>');

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
		$("#county").append('<option id="county'+ccid+'" value="'+ccid+'">'+ct+'</option>');

	}

}

function loadmajor1(m1id){
    //alert("province id from function"+prid);
    $("#selectmajor2").html("");
    var pid = m1id-1;
    for (var i = 0 ; i < major["一级学科"][pid]["二级学科"].length ; i++){
        var ct = major["一级学科"][pid]["二级学科"][i]["2_name"];
        var cid = major["一级学科"][pid]["二级学科"][i]["id"];
        //alert(ct);
        $("#selectmajor2").append('<option id="major1'+cid+'" value="'+cid+'">'+ct+'</option>');

    }

}

function loadmajor2(m1id,m2id){
    $("#selectmajor3").html("");
    var pid = m1id-1;
    var cid = m2id-1;
    //console.log(city["province"][pid]["city"][pid]["country"].length);
    for (var i = 0 ; i < major["一级学科"][pid]["二级学科"][cid]["专业"].length  ; i++){
        var ct = major["一级学科"][pid]["二级学科"][cid]["专业"][i]["3_name"];
        var ccid = major["一级学科"][pid]["二级学科"][cid]["专业"][i]["id"];
        //alert(ct);
        $("#selectmajor3").append('<option id="major2'+ccid+'" value="'+ccid+'">'+ct+'</option>');

    }

}

function loadfmajor1(m1id){
    //alert("province id from function"+prid);
    $("#f-selectmajor2").html("");
    var pid = m1id-1;
    for (var i = 0 ; i < major["一级学科"][pid]["二级学科"].length ; i++){
        var ct = major["一级学科"][pid]["二级学科"][i]["2_name"];
        var cid = major["一级学科"][pid]["二级学科"][i]["id"];
        //alert(ct);
        $("#f-selectmajor2").append('<option id="f-major1'+cid+'" value="'+cid+'">'+ct+'</option>');

    }

}

function loadfmajor2(m1id,m2id){
    $("#f-selectmajor3").html("");
    var pid = m1id-1;
    var cid = m2id-1;
    //console.log(city["province"][pid]["city"][pid]["country"].length);
    for (var i = 0 ; i < major["一级学科"][pid]["二级学科"][cid]["专业"].length  ; i++){
        var ct = major["一级学科"][pid]["二级学科"][cid]["专业"][i]["3_name"];
        var ccid = major["一级学科"][pid]["二级学科"][cid]["专业"][i]["id"];
        //alert(ct);
        $("#f-selectmajor3").append('<option id="f-major2'+ccid+'" value="'+ccid+'">'+ct+'</option>');

    }

}




var major = {
    "一级学科": [
        {
            "1_name": "哲学", 
            "id": 1, 
            "二级学科": [
                {
                    "2_name": "哲学", 
                    "id": 1, 
                    "专业": [
                        {
                            "3_name": "哲学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "马克思主义哲学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "中国哲学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "外国哲学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "逻辑学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "伦理学", 
                            "id": 6
                        }, 
                        {
                            "3_name": "美学", 
                            "id": 7
                        }, 
                        {
                            "3_name": "宗教学", 
                            "id": 8
                        }, 
                        {
                            "3_name": "科学技术哲学", 
                            "id": 9
                        }
                    ]
                }
            ]
        }, 
        {
            "1_name": "经济学", 
            "id": 2, 
            "二级学科": [
                {
                    "2_name": "理论经济学", 
                    "id": 1, 
                    "专业": [
                        {
                            "3_name": "理论经济学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "政治经济学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "经济思想史", 
                            "id": 3
                        }, 
                        {
                            "3_name": "经济史", 
                            "id": 4
                        }, 
                        {
                            "3_name": "西方经济学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "世界经济学", 
                            "id": 6
                        }, 
                        {
                            "3_name": "人口、资源与环境经济学", 
                            "id": 7
                        }
                    ]
                }, 
                {
                    "2_name": "应用经济学", 
                    "id": 2, 
                    "专业": [
                        {
                            "3_name": "应用经济学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "国民经济学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "区域经济学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "财政学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "金融学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "产业经济学", 
                            "id": 6
                        }, 
                        {
                            "3_name": "国际贸易学", 
                            "id": 7
                        }, 
                        {
                            "3_name": "劳动经济学", 
                            "id": 8
                        }, 
                        {
                            "3_name": "统计学", 
                            "id": 9
                        }, 
                        {
                            "3_name": "数量经济学", 
                            "id": 10
                        }, 
                        {
                            "3_name": "国防经济", 
                            "id": 11
                        }
                    ]
                }
            ]
        }, 
        {
            "1_name": "法学", 
            "id": 3, 
            "二级学科": [
                {
                    "2_name": "法学", 
                    "id": 1, 
                    "专业": [
                        {
                            "3_name": "法学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "法学理论", 
                            "id": 2
                        }, 
                        {
                            "3_name": "法律史", 
                            "id": 3
                        }, 
                        {
                            "3_name": "宪法学与行政法学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "刑法学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "民商法学", 
                            "id": 6
                        }, 
                        {
                            "3_name": "诉讼法学", 
                            "id": 7
                        }, 
                        {
                            "3_name": "经济法学", 
                            "id": 8
                        }, 
                        {
                            "3_name": "环境与资源保护法学", 
                            "id": 9
                        }, 
                        {
                            "3_name": "国际法学", 
                            "id": 10
                        }, 
                        {
                            "3_name": "军事法学", 
                            "id": 11
                        }
                    ]
                }, 
                {
                    "2_name": "政治学", 
                    "id": 2, 
                    "专业": [
                        {
                            "3_name": "政治学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "政治学理论", 
                            "id": 2
                        }, 
                        {
                            "3_name": "中外政治制度", 
                            "id": 3
                        }, 
                        {
                            "3_name": "科学社会主义与国际共产主义运动", 
                            "id": 4
                        }, 
                        {
                            "3_name": "中共党史", 
                            "id": 5
                        }, 
                        {
                            "3_name": "马克思主义理论与思想政治教育", 
                            "id": 6
                        }, 
                        {
                            "3_name": "国际政治", 
                            "id": 7
                        }, 
                        {
                            "3_name": "国际关系", 
                            "id": 8
                        }, 
                        {
                            "3_name": "外交学", 
                            "id": 9
                        }
                    ]
                }, 
                {
                    "2_name": "社会学", 
                    "id": 3, 
                    "专业": [
                        {
                            "3_name": "社会学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "人口学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "人类学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "民俗学", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "民族学", 
                    "id": 4, 
                    "专业": [
                        {
                            "3_name": "民族学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "马克思主义民族理论与政策", 
                            "id": 2
                        }, 
                        {
                            "3_name": "中国少数民族经济", 
                            "id": 3
                        }, 
                        {
                            "3_name": "中国少数民族史", 
                            "id": 4
                        }, 
                        {
                            "3_name": "中国少数民族艺术", 
                            "id": 5
                        }
                    ]
                }
            ]
        }, 
        {
            "1_name": "教育学", 
            "id": 4, 
            "二级学科": [
                {
                    "2_name": "教育学", 
                    "id": 1, 
                    "专业": [
                        {
                            "3_name": "教育学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "教育学原理", 
                            "id": 2
                        }, 
                        {
                            "3_name": "课程与教学论", 
                            "id": 3
                        }, 
                        {
                            "3_name": "教育史", 
                            "id": 4
                        }, 
                        {
                            "3_name": "比较教育学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "学前教育学", 
                            "id": 6
                        }, 
                        {
                            "3_name": "高等教育学", 
                            "id": 7
                        }, 
                        {
                            "3_name": "成人教育学", 
                            "id": 8
                        }, 
                        {
                            "3_name": "职业技术教育学", 
                            "id": 9
                        }, 
                        {
                            "3_name": "特殊教育学", 
                            "id": 10
                        }, 
                        {
                            "3_name": "教育技术学", 
                            "id": 11
                        }
                    ]
                }, 
                {
                    "2_name": "心理学", 
                    "id": 2, 
                    "专业": [
                        {
                            "3_name": "心理学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "基础心理学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "发展与教育心理学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "应用心理学", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "体育学", 
                    "id": 3, 
                    "专业": [
                        {
                            "3_name": "体育学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "体育人文社会学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "运动人体科学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "体育教育训练学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "民族传统体育学", 
                            "id": 5
                        }
                    ]
                }
            ]
        }, 
        {
            "1_name": "文学", 
            "id": 5, 
            "二级学科": [
                {
                    "2_name": "中国语言文学", 
                    "id": 1, 
                    "专业": [
                        {
                            "3_name": "中国语言文学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "文艺学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "语言学及应用语言学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "汉语言文字学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "中国古典文献学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "中国古代文学", 
                            "id": 6
                        }, 
                        {
                            "3_name": "中国现当代文学", 
                            "id": 7
                        }, 
                        {
                            "3_name": "中国少数民族语言文学", 
                            "id": 8
                        }, 
                        {
                            "3_name": "比较文学与世界文学", 
                            "id": 9
                        }
                    ]
                }, 
                {
                    "2_name": "外国语言文学", 
                    "id": 2, 
                    "专业": [
                        {
                            "3_name": "外国语言文学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "英语语言文学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "俄语语言文学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "法语语言文学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "德语语言文学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "日语语言文学", 
                            "id": 6
                        }, 
                        {
                            "3_name": "印度语言文学", 
                            "id": 7
                        }, 
                        {
                            "3_name": "西班牙语语言文学", 
                            "id": 8
                        }, 
                        {
                            "3_name": "阿拉伯语语言文学", 
                            "id": 9
                        }, 
                        {
                            "3_name": "欧洲语言文学", 
                            "id": 10
                        }, 
                        {
                            "3_name": "亚非语言文学", 
                            "id": 11
                        }, 
                        {
                            "3_name": "外国语言学及应用语言学", 
                            "id": 12
                        }
                    ]
                }, 
                {
                    "2_name": "新闻传播学", 
                    "id": 3, 
                    "专业": [
                        {
                            "3_name": "新闻传播学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "新闻学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "传播学", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "艺术学", 
                    "id": 4, 
                    "专业": [
                        {
                            "3_name": "艺术学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "音乐学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "美术学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "设计艺术学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "戏剧戏曲学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "电影学", 
                            "id": 6
                        }, 
                        {
                            "3_name": "广播电视艺术学", 
                            "id": 7
                        }, 
                        {
                            "3_name": "舞蹈学", 
                            "id": 8
                        }
                    ]
                }
            ]
        }, 
        {
            "1_name": "历史学", 
            "id": 6, 
            "二级学科": [
                {
                    "2_name": "历史学", 
                    "id": 1, 
                    "专业": [
                        {
                            "3_name": "历史学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "史学理论及史学史", 
                            "id": 2
                        }, 
                        {
                            "3_name": "考古学及博物馆学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "历史地理学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "历史文献学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "专门史", 
                            "id": 6
                        }, 
                        {
                            "3_name": "中国古代史", 
                            "id": 7
                        }, 
                        {
                            "3_name": "中国近现代史", 
                            "id": 8
                        }, 
                        {
                            "3_name": "世界史", 
                            "id": 9
                        }
                    ]
                }
            ]
        }, 
        {
            "1_name": "理学", 
            "id": 7, 
            "二级学科": [
                {
                    "2_name": "数学", 
                    "id": 1, 
                    "专业": [
                        {
                            "3_name": "数学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "基础数学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "计算数学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "概率论与数理统计", 
                            "id": 4
                        }, 
                        {
                            "3_name": "应用数学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "运筹学与控制论", 
                            "id": 6
                        }
                    ]
                }, 
                {
                    "2_name": "物理学", 
                    "id": 2, 
                    "专业": [
                        {
                            "3_name": "物理学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "理论物理", 
                            "id": 2
                        }, 
                        {
                            "3_name": "粒子物理与原子核物理", 
                            "id": 3
                        }, 
                        {
                            "3_name": "原子与分子物理", 
                            "id": 4
                        }, 
                        {
                            "3_name": "等离子体物理", 
                            "id": 5
                        }, 
                        {
                            "3_name": "凝聚态物理", 
                            "id": 6
                        }, 
                        {
                            "3_name": "声学", 
                            "id": 7
                        }, 
                        {
                            "3_name": "光学", 
                            "id": 8
                        }, 
                        {
                            "3_name": "无线电物理", 
                            "id": 9
                        }
                    ]
                }, 
                {
                    "2_name": "化学", 
                    "id": 3, 
                    "专业": [
                        {
                            "3_name": "化学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "无机化学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "分析化学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "有机化学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "物理化学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "高分子化学与物理", 
                            "id": 6
                        }
                    ]
                }, 
                {
                    "2_name": "天文学", 
                    "id": 4, 
                    "专业": [
                        {
                            "3_name": "天文学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "天体物理", 
                            "id": 2
                        }, 
                        {
                            "3_name": "天体测量与天体力学", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "地理学", 
                    "id": 5, 
                    "专业": [
                        {
                            "3_name": "地理学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "自然地理学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "人文地理学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "地图学与地理信息系统", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "大气科学", 
                    "id": 6, 
                    "专业": [
                        {
                            "3_name": "大气科学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "气象学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "大气物理学与大气环境", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "海洋科学", 
                    "id": 7, 
                    "专业": [
                        {
                            "3_name": "海洋科学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "物理海洋学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "海洋化学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "海洋生物学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "海洋地质", 
                            "id": 5
                        }
                    ]
                }, 
                {
                    "2_name": "地球物理学", 
                    "id": 8, 
                    "专业": [
                        {
                            "3_name": "地球物理学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "固体地球物理学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "空间物理学", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "地质学", 
                    "id": 9, 
                    "专业": [
                        {
                            "3_name": "地质学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "矿物学、岩石学、矿床学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "地球化学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "古生物学与地层学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "构造地质学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "第四纪地质学", 
                            "id": 6
                        }
                    ]
                }, 
                {
                    "2_name": "生物学", 
                    "id": 10, 
                    "专业": [
                        {
                            "3_name": "生物学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "植物学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "动物学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "生理学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "水生生物学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "微生物学", 
                            "id": 6
                        }, 
                        {
                            "3_name": "神经生物学", 
                            "id": 7
                        }, 
                        {
                            "3_name": "遗传学", 
                            "id": 8
                        }, 
                        {
                            "3_name": "发育生物学", 
                            "id": 9
                        }, 
                        {
                            "3_name": "细胞生物学", 
                            "id": 10
                        }, 
                        {
                            "3_name": "生物化学与分子生物学", 
                            "id": 11
                        }, 
                        {
                            "3_name": "生物物理学", 
                            "id": 12
                        }, 
                        {
                            "3_name": "生态学", 
                            "id": 13
                        }
                    ]
                }, 
                {
                    "2_name": "系统科学", 
                    "id": 11, 
                    "专业": [
                        {
                            "3_name": "系统科学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "系统理论", 
                            "id": 2
                        }, 
                        {
                            "3_name": "系统分析与集成", 
                            "id": 3
                        }
                    ]
                }
            ]
        }, 
        {
            "1_name": "工学", 
            "id": 8, 
            "二级学科": [
                {
                    "2_name": "力学", 
                    "id": 1, 
                    "专业": [
                        {
                            "3_name": "力学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "一般力学与力学基础", 
                            "id": 2
                        }, 
                        {
                            "3_name": "固体力学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "流体力学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "工程力学", 
                            "id": 5
                        }
                    ]
                }, 
                {
                    "2_name": "机械工程", 
                    "id": 2, 
                    "专业": [
                        {
                            "3_name": "机械工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "机械制造及其自动化", 
                            "id": 2
                        }, 
                        {
                            "3_name": "机械电子工程", 
                            "id": 3
                        }, 
                        {
                            "3_name": "机械设计及理论", 
                            "id": 4
                        }, 
                        {
                            "3_name": "车辆工程", 
                            "id": 5
                        }
                    ]
                }, 
                {
                    "2_name": "仪器科学与技术", 
                    "id": 3, 
                    "专业": [
                        {
                            "3_name": "仪器科学与技术", 
                            "id": 1
                        }, 
                        {
                            "3_name": "精密仪器及机械", 
                            "id": 2
                        }, 
                        {
                            "3_name": "测试计量技术及仪器", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "材料科学与工程", 
                    "id": 4, 
                    "专业": [
                        {
                            "3_name": "材料科学与工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "材料物理与化学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "材料学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "材料加工工程", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "冶金工程", 
                    "id": 5, 
                    "专业": [
                        {
                            "3_name": "冶金工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "冶金物理化学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "钢铁冶金", 
                            "id": 3
                        }, 
                        {
                            "3_name": "有色金属冶金", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "动力工程及工程热物理", 
                    "id": 6, 
                    "专业": [
                        {
                            "3_name": "动力工程及工程热物理", 
                            "id": 1
                        }, 
                        {
                            "3_name": "工程热物理", 
                            "id": 2
                        }, 
                        {
                            "3_name": "热能工程", 
                            "id": 3
                        }, 
                        {
                            "3_name": "动力机械及工程", 
                            "id": 4
                        }, 
                        {
                            "3_name": "流体机械及工程", 
                            "id": 5
                        }, 
                        {
                            "3_name": "制冷及低温工程", 
                            "id": 6
                        }, 
                        {
                            "3_name": "化工过程机械", 
                            "id": 7
                        }
                    ]
                }, 
                {
                    "2_name": "电气工程", 
                    "id": 7, 
                    "专业": [
                        {
                            "3_name": "电气工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "电机与电器", 
                            "id": 2
                        }, 
                        {
                            "3_name": "电力系统及其自动化", 
                            "id": 3
                        }, 
                        {
                            "3_name": "高电压与绝缘技术", 
                            "id": 4
                        }, 
                        {
                            "3_name": "电力电子与电力传动", 
                            "id": 5
                        }, 
                        {
                            "3_name": "电工理论与新技术", 
                            "id": 6
                        }
                    ]
                }, 
                {
                    "2_name": "电子科学与技术", 
                    "id": 8, 
                    "专业": [
                        {
                            "3_name": "电子科学与技术", 
                            "id": 1
                        }, 
                        {
                            "3_name": "物理电子学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "电路与系统", 
                            "id": 3
                        }, 
                        {
                            "3_name": "微电子学与固体电子学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "电磁场与微波技术", 
                            "id": 5
                        }
                    ]
                }, 
                {
                    "2_name": "信息与通信工程", 
                    "id": 9, 
                    "专业": [
                        {
                            "3_name": "信息与通信工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "通信与信息系统", 
                            "id": 2
                        }, 
                        {
                            "3_name": "信号与信息处理", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "控制科学与工程", 
                    "id": 10, 
                    "专业": [
                        {
                            "3_name": "控制科学与工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "控制理论与控制工程", 
                            "id": 2
                        }, 
                        {
                            "3_name": "检测技术与自动化装置", 
                            "id": 3
                        }, 
                        {
                            "3_name": "系统工程", 
                            "id": 4
                        }, 
                        {
                            "3_name": "模式识别与智能系统", 
                            "id": 5
                        }, 
                        {
                            "3_name": "导航、制导与控制", 
                            "id": 6
                        }
                    ]
                }, 
                {
                    "2_name": "计算机科学与技术", 
                    "id": 11, 
                    "专业": [
                        {
                            "3_name": "计算机科学与技术", 
                            "id": 1
                        }, 
                        {
                            "3_name": "计算机系统结构", 
                            "id": 2
                        }, 
                        {
                            "3_name": "计算机软件与理论", 
                            "id": 3
                        }, 
                        {
                            "3_name": "计算机应用技术", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "建筑学", 
                    "id": 12, 
                    "专业": [
                        {
                            "3_name": "建筑学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "建筑历史与理论", 
                            "id": 2
                        }, 
                        {
                            "3_name": "建筑设计与其理论", 
                            "id": 3
                        }, 
                        {
                            "3_name": "城市规划与设计", 
                            "id": 4
                        }, 
                        {
                            "3_name": "建筑技术科学", 
                            "id": 5
                        }
                    ]
                }, 
                {
                    "2_name": "土木工程", 
                    "id": 13, 
                    "专业": [
                        {
                            "3_name": "土木工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "岩土工程", 
                            "id": 2
                        }, 
                        {
                            "3_name": "结构工程", 
                            "id": 3
                        }, 
                        {
                            "3_name": "市政工程", 
                            "id": 4
                        }, 
                        {
                            "3_name": "供热、供燃气、通风及空调工程", 
                            "id": 5
                        }, 
                        {
                            "3_name": "防灾减灾工程及防护工程", 
                            "id": 6
                        }, 
                        {
                            "3_name": "桥梁与隧道工程", 
                            "id": 7
                        }
                    ]
                }, 
                {
                    "2_name": "水利工程", 
                    "id": 14, 
                    "专业": [
                        {
                            "3_name": "水利工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "水文学及水资源", 
                            "id": 2
                        }, 
                        {
                            "3_name": "水力学及河流动力学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "水工结构工程", 
                            "id": 4
                        }, 
                        {
                            "3_name": "水利水电工程", 
                            "id": 5
                        }, 
                        {
                            "3_name": "港口、海岸及近海工程", 
                            "id": 6
                        }
                    ]
                }, 
                {
                    "2_name": "测绘科学与技术", 
                    "id": 15, 
                    "专业": [
                        {
                            "3_name": "测绘科学与技术", 
                            "id": 1
                        }, 
                        {
                            "3_name": "大地测量学与测量工程", 
                            "id": 2
                        }, 
                        {
                            "3_name": "摄影测量与遥感", 
                            "id": 3
                        }, 
                        {
                            "3_name": "地图制图学与地理信息工程", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "化学工程与技术", 
                    "id": 16, 
                    "专业": [
                        {
                            "3_name": "化学工程与技术", 
                            "id": 1
                        }, 
                        {
                            "3_name": "化学工程", 
                            "id": 2
                        }, 
                        {
                            "3_name": "化学工艺", 
                            "id": 3
                        }, 
                        {
                            "3_name": "生物化工", 
                            "id": 4
                        }, 
                        {
                            "3_name": "应用化学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "工业催化", 
                            "id": 6
                        }
                    ]
                }, 
                {
                    "2_name": "地质资源与地质工程", 
                    "id": 17, 
                    "专业": [
                        {
                            "3_name": "地质资源与地质工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "矿产普查与勘探", 
                            "id": 2
                        }, 
                        {
                            "3_name": "地球探测与信息技术", 
                            "id": 3
                        }, 
                        {
                            "3_name": "地质工程", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "矿业工程", 
                    "id": 18, 
                    "专业": [
                        {
                            "3_name": "矿业工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "采矿工程", 
                            "id": 2
                        }, 
                        {
                            "3_name": "矿物加工工程", 
                            "id": 3
                        }, 
                        {
                            "3_name": "完全技术及工程", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "石油与天然气工程", 
                    "id": 19, 
                    "专业": [
                        {
                            "3_name": "石油与天然气工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "油气井工程", 
                            "id": 2
                        }, 
                        {
                            "3_name": "油气田开发工程", 
                            "id": 3
                        }, 
                        {
                            "3_name": "油气储运工程", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "纺织科学与工程", 
                    "id": 20, 
                    "专业": [
                        {
                            "3_name": "纺织科学与工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "纺织工程", 
                            "id": 2
                        }, 
                        {
                            "3_name": "纺织材料与纺织品设计", 
                            "id": 3
                        }, 
                        {
                            "3_name": "纺织化学与染整工程", 
                            "id": 4
                        }, 
                        {
                            "3_name": "服装", 
                            "id": 5
                        }
                    ]
                }, 
                {
                    "2_name": "轻工技术与工程", 
                    "id": 21, 
                    "专业": [
                        {
                            "3_name": "轻工技术与工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "制浆造纸工程", 
                            "id": 2
                        }, 
                        {
                            "3_name": "制糖工程", 
                            "id": 3
                        }, 
                        {
                            "3_name": "发酵工程", 
                            "id": 4
                        }, 
                        {
                            "3_name": "皮革化学与工程", 
                            "id": 5
                        }
                    ]
                }, 
                {
                    "2_name": "交通运输工程", 
                    "id": 22, 
                    "专业": [
                        {
                            "3_name": "交通运输工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "道路与铁道工程", 
                            "id": 2
                        }, 
                        {
                            "3_name": "交通信息工程及控制", 
                            "id": 3
                        }, 
                        {
                            "3_name": "交通运输规划与管理", 
                            "id": 4
                        }, 
                        {
                            "3_name": "载运工具运用工程", 
                            "id": 5
                        }
                    ]
                }, 
                {
                    "2_name": "船舶与海洋工程", 
                    "id": 23, 
                    "专业": [
                        {
                            "3_name": "船舶与海洋工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "船舶与海洋结构物设计制造", 
                            "id": 2
                        }, 
                        {
                            "3_name": "轮机工程", 
                            "id": 3
                        }, 
                        {
                            "3_name": "水声工程", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "航空宇航科学与技术", 
                    "id": 24, 
                    "专业": [
                        {
                            "3_name": "航空宇航科学与技术", 
                            "id": 1
                        }, 
                        {
                            "3_name": "飞行器设计", 
                            "id": 2
                        }, 
                        {
                            "3_name": "航空宇航推进理论与工程", 
                            "id": 3
                        }, 
                        {
                            "3_name": "航空宇航制造工程", 
                            "id": 4
                        }, 
                        {
                            "3_name": "人机与环境工程", 
                            "id": 5
                        }
                    ]
                }, 
                {
                    "2_name": "兵器科学与技术", 
                    "id": 25, 
                    "专业": [
                        {
                            "3_name": "兵器科学与技术", 
                            "id": 1
                        }, 
                        {
                            "3_name": "武器系统与运用工程", 
                            "id": 2
                        }, 
                        {
                            "3_name": "兵器发射理论与技术", 
                            "id": 3
                        }, 
                        {
                            "3_name": "火炮、自动武器与弹药工程", 
                            "id": 4
                        }, 
                        {
                            "3_name": "军事化学与烟火技术", 
                            "id": 5
                        }
                    ]
                }, 
                {
                    "2_name": "核科学与技术", 
                    "id": 26, 
                    "专业": [
                        {
                            "3_name": "核科学与技术", 
                            "id": 1
                        }, 
                        {
                            "3_name": "核能科学与工程", 
                            "id": 2
                        }, 
                        {
                            "3_name": "核燃料循环与材料", 
                            "id": 3
                        }, 
                        {
                            "3_name": "核技术及应用", 
                            "id": 4
                        }, 
                        {
                            "3_name": "辐射防护及环境保护", 
                            "id": 5
                        }
                    ]
                }, 
                {
                    "2_name": "农业工程", 
                    "id": 27, 
                    "专业": [
                        {
                            "3_name": "农业工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "农业机械化工程", 
                            "id": 2
                        }, 
                        {
                            "3_name": "农业水土工程", 
                            "id": 3
                        }, 
                        {
                            "3_name": "农业生物环境与能源工程", 
                            "id": 4
                        }, 
                        {
                            "3_name": "农业电气化与自动化", 
                            "id": 5
                        }
                    ]
                }, 
                {
                    "2_name": "林业工程", 
                    "id": 28, 
                    "专业": [
                        {
                            "3_name": "林业工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "森林工程", 
                            "id": 2
                        }, 
                        {
                            "3_name": "木材科学与技术", 
                            "id": 3
                        }, 
                        {
                            "3_name": "林产化学加工工程", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "环境科学与工程", 
                    "id": 29, 
                    "专业": [
                        {
                            "3_name": "环境科学与工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "环境科学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "环境工程", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "食品科学与工程", 
                    "id": 30, 
                    "专业": [
                        {
                            "3_name": "食品科学与工程", 
                            "id": 1
                        }, 
                        {
                            "3_name": "食品科学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "粮食、油脂及植物蛋白工程", 
                            "id": 3
                        }, 
                        {
                            "3_name": "农产品加工及贮藏工程", 
                            "id": 4
                        }, 
                        {
                            "3_name": "产品加工及贮藏工程", 
                            "id": 5
                        }
                    ]
                }
            ]
        }, 
        {
            "1_name": "农学", 
            "id": 9, 
            "二级学科": [
                {
                    "2_name": "作物学", 
                    "id": 1, 
                    "专业": [
                        {
                            "3_name": "作物学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "作物栽培学与耕作学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "作物遗传育种", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "园艺学", 
                    "id": 2, 
                    "专业": [
                        {
                            "3_name": "园艺学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "果树学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "蔬菜学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "茶学", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "农业资源利用", 
                    "id": 3, 
                    "专业": [
                        {
                            "3_name": "农业资源利用", 
                            "id": 1
                        }, 
                        {
                            "3_name": "土壤学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "植物营养学", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "植物保护", 
                    "id": 4, 
                    "专业": [
                        {
                            "3_name": "植物保护", 
                            "id": 1
                        }, 
                        {
                            "3_name": "植物病理学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "农业昆虫与害虫防治", 
                            "id": 3
                        }, 
                        {
                            "3_name": "农药学", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "畜牧学", 
                    "id": 5, 
                    "专业": [
                        {
                            "3_name": "畜牧学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "动物遗传育种与繁殖", 
                            "id": 2
                        }, 
                        {
                            "3_name": "动物营养与饲料科学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "草业科学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "特种经济动物饲养", 
                            "id": 5
                        }
                    ]
                }, 
                {
                    "2_name": "兽医学", 
                    "id": 6, 
                    "专业": [
                        {
                            "3_name": "兽医学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "基础兽医学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "预防兽医学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "临床兽医学", 
                            "id": 4
                        }
                    ]
                }, 
                {
                    "2_name": "林学", 
                    "id": 7, 
                    "专业": [
                        {
                            "3_name": "林学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "林木遗传育种", 
                            "id": 2
                        }, 
                        {
                            "3_name": "森林培育", 
                            "id": 3
                        }, 
                        {
                            "3_name": "森林保护学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "森林经理学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "野生动植物保护与利用", 
                            "id": 6
                        }, 
                        {
                            "3_name": "园林植物与观赏园艺", 
                            "id": 7
                        }, 
                        {
                            "3_name": "水土保持与荒漠化防治", 
                            "id": 8
                        }
                    ]
                }, 
                {
                    "2_name": "水产", 
                    "id": 8, 
                    "专业": [
                        {
                            "3_name": "水产", 
                            "id": 1
                        }, 
                        {
                            "3_name": "水产养殖", 
                            "id": 2
                        }, 
                        {
                            "3_name": "捕捞学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "渔业资源", 
                            "id": 4
                        }
                    ]
                }
            ]
        }, 
        {
            "1_name": "医学", 
            "id": 10, 
            "二级学科": [
                {
                    "2_name": "基础医学", 
                    "id": 1, 
                    "专业": [
                        {
                            "3_name": "基础医学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "人体解剖与组织胚胎学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "免疫学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "病原生物学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "病理学与病理生物学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "法医学", 
                            "id": 6
                        }, 
                        {
                            "3_name": "放射医学", 
                            "id": 7
                        }, 
                        {
                            "3_name": "航空、航天与航海医学", 
                            "id": 8
                        }
                    ]
                }, 
                {
                    "2_name": "临床医学", 
                    "id": 2, 
                    "专业": [
                        {
                            "3_name": "临床医学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "内科学（心血管病）", 
                            "id": 2
                        }, 
                        {
                            "3_name": "内科学（血液病）", 
                            "id": 3
                        }, 
                        {
                            "3_name": "内科学（呼吸系病）", 
                            "id": 4
                        }, 
                        {
                            "3_name": "内科学（消化系病）", 
                            "id": 5
                        }, 
                        {
                            "3_name": "内科学（内分泌与代谢病）", 
                            "id": 6
                        }, 
                        {
                            "3_name": "内科学（肾病）", 
                            "id": 7
                        }, 
                        {
                            "3_name": "内科学（风湿病）", 
                            "id": 8
                        }, 
                        {
                            "3_name": "内科学（传染病）", 
                            "id": 9
                        }, 
                        {
                            "3_name": "儿科学", 
                            "id": 10
                        }, 
                        {
                            "3_name": "老年医学", 
                            "id": 11
                        }, 
                        {
                            "3_name": "神经病学", 
                            "id": 12
                        }, 
                        {
                            "3_name": "精神病与精神卫生学", 
                            "id": 13
                        }, 
                        {
                            "3_name": "皮肤病与性病学", 
                            "id": 14
                        }, 
                        {
                            "3_name": "影像医学与核医学", 
                            "id": 15
                        }, 
                        {
                            "3_name": "临床检验诊断学", 
                            "id": 16
                        }, 
                        {
                            "3_name": "护理学", 
                            "id": 17
                        }, 
                        {
                            "3_name": "外科学（普外）", 
                            "id": 18
                        }, 
                        {
                            "3_name": "外科学（骨外）", 
                            "id": 19
                        }, 
                        {
                            "3_name": "外科学（泌尿外）", 
                            "id": 20
                        }, 
                        {
                            "3_name": "外科学（胸心外）", 
                            "id": 21
                        }, 
                        {
                            "3_name": "外科学（神外）", 
                            "id": 22
                        }, 
                        {
                            "3_name": "外科学（整形）", 
                            "id": 23
                        }, 
                        {
                            "3_name": "外科学（烧伤）", 
                            "id": 24
                        }, 
                        {
                            "3_name": "外科学（野战外）", 
                            "id": 25
                        }, 
                        {
                            "3_name": "妇产科学", 
                            "id": 26
                        }, 
                        {
                            "3_name": "眼科学", 
                            "id": 27
                        }, 
                        {
                            "3_name": "耳鼻咽喉科学", 
                            "id": 28
                        }, 
                        {
                            "3_name": "肿瘤学", 
                            "id": 29
                        }, 
                        {
                            "3_name": "康复医学与理疗学", 
                            "id": 30
                        }, 
                        {
                            "3_name": "运动医学", 
                            "id": 31
                        }, 
                        {
                            "3_name": "麻醉学", 
                            "id": 32
                        }, 
                        {
                            "3_name": "急诊医学", 
                            "id": 33
                        }
                    ]
                }, 
                {
                    "2_name": "口腔医学", 
                    "id": 3, 
                    "专业": [
                        {
                            "3_name": "口腔医学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "口腔基础医学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "口腔临床医学", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "公共卫生与预防医学", 
                    "id": 4, 
                    "专业": [
                        {
                            "3_name": "公共卫生与预防医学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "流行病与卫生统计学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "劳动卫生与环境卫生学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "营养与食品卫生学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "儿少卫生与妇幼保健学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "卫生毒理学", 
                            "id": 6
                        }, 
                        {
                            "3_name": "军事预防医学", 
                            "id": 7
                        }
                    ]
                }, 
                {
                    "2_name": "中医学", 
                    "id": 5, 
                    "专业": [
                        {
                            "3_name": "中医学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "中医基础理论", 
                            "id": 2
                        }, 
                        {
                            "3_name": "中医临床基础", 
                            "id": 3
                        }, 
                        {
                            "3_name": "中医医史文献", 
                            "id": 4
                        }, 
                        {
                            "3_name": "方剂学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "中医诊断学", 
                            "id": 6
                        }, 
                        {
                            "3_name": "中医内科学", 
                            "id": 7
                        }, 
                        {
                            "3_name": "中医外科学", 
                            "id": 8
                        }, 
                        {
                            "3_name": "中医骨伤科学", 
                            "id": 9
                        }, 
                        {
                            "3_name": "中医妇科学", 
                            "id": 10
                        }, 
                        {
                            "3_name": "中医儿科学", 
                            "id": 11
                        }, 
                        {
                            "3_name": "中医五官科学", 
                            "id": 12
                        }, 
                        {
                            "3_name": "针灸推拿学", 
                            "id": 13
                        }
                    ]
                }, 
                {
                    "2_name": "中西医结合", 
                    "id": 6, 
                    "专业": [
                        {
                            "3_name": "中西医结合", 
                            "id": 1
                        }, 
                        {
                            "3_name": "中西医结合基础", 
                            "id": 2
                        }, 
                        {
                            "3_name": "中西医结合临床", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "药学", 
                    "id": 7, 
                    "专业": [
                        {
                            "3_name": "药学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "药物化学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "药剂学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "生药学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "药物分析学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "微生物与生化药学", 
                            "id": 6
                        }, 
                        {
                            "3_name": "药理学", 
                            "id": 7
                        }
                    ]
                }
            ]
        }, 
        {
            "1_name": "军事学", 
            "id": 11, 
            "二级学科": [
                {
                    "2_name": "军事思想及军事历史", 
                    "id": 1, 
                    "专业": [
                        {
                            "3_name": "军事思想及军事历史", 
                            "id": 1
                        }, 
                        {
                            "3_name": "军事思想", 
                            "id": 2
                        }, 
                        {
                            "3_name": "军事历史", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "战略学", 
                    "id": 2, 
                    "专业": [
                        {
                            "3_name": "战略学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "军事战略学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "战争动员学", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "战役学", 
                    "id": 3, 
                    "专业": [
                        {
                            "3_name": "战役学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "联合战役学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "军种战役学", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "战术学", 
                    "id": 4, 
                    "专业": [
                        {
                            "3_name": "战术学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "合同战术学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "兵种战术学", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "军队指挥学", 
                    "id": 5, 
                    "专业": [
                        {
                            "3_name": "军队指挥学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "作战指挥学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "军事运筹学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "军事通信学", 
                            "id": 4
                        }, 
                        {
                            "3_name": "军事情报学", 
                            "id": 5
                        }, 
                        {
                            "3_name": "密码学", 
                            "id": 6
                        }, 
                        {
                            "3_name": "军事教育训练学", 
                            "id": 7
                        }
                    ]
                }, 
                {
                    "2_name": "军制学", 
                    "id": 6, 
                    "专业": [
                        {
                            "3_name": "军制学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "军事组织编制学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "军队管理学", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "军事后勤学与军事装备学", 
                    "id": 7, 
                    "专业": [
                        {
                            "3_name": "军事后勤学与军事装备学", 
                            "id": 1
                        }, 
                        {
                            "3_name": "军事后勤学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "后方专业勤务", 
                            "id": 3
                        }, 
                        {
                            "3_name": "军事装备学", 
                            "id": 4
                        }
                    ]
                }
            ]
        }, 
        {
            "1_name": "管理学", 
            "id": 12, 
            "二级学科": [
                {
                    "2_name": "工商管理", 
                    "id": 1, 
                    "专业": [
                        {
                            "3_name": "工商管理", 
                            "id": 1
                        }, 
                        {
                            "3_name": "会计学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "企业管理", 
                            "id": 3
                        }, 
                        {
                            "3_name": "旅游管理", 
                            "id": 4
                        }, 
                        {
                            "3_name": "技术经济及管理", 
                            "id": 5
                        }
                    ]
                }, 
                {
                    "2_name": "农林经济管理", 
                    "id": 2, 
                    "专业": [
                        {
                            "3_name": "农林经济管理", 
                            "id": 1
                        }, 
                        {
                            "3_name": "农业经济管理", 
                            "id": 2
                        }, 
                        {
                            "3_name": "林业经济管理", 
                            "id": 3
                        }
                    ]
                }, 
                {
                    "2_name": "公共管理", 
                    "id": 3, 
                    "专业": [
                        {
                            "3_name": "公共管理", 
                            "id": 1
                        }, 
                        {
                            "3_name": "行政管理", 
                            "id": 2
                        }, 
                        {
                            "3_name": "社会医学与卫生事业管理", 
                            "id": 3
                        }, 
                        {
                            "3_name": "教育经济与管理", 
                            "id": 4
                        }, 
                        {
                            "3_name": "社会保障", 
                            "id": 5
                        }, 
                        {
                            "3_name": "土地资源管理", 
                            "id": 6
                        }
                    ]
                }, 
                {
                    "2_name": "图书馆、情报与档案管理", 
                    "id": 4, 
                    "专业": [
                        {
                            "3_name": "图书馆、情报与档案管理", 
                            "id": 1
                        }, 
                        {
                            "3_name": "图书馆学", 
                            "id": 2
                        }, 
                        {
                            "3_name": "情报学", 
                            "id": 3
                        }, 
                        {
                            "3_name": "档案学", 
                            "id": 4
                        }
                    ]
                }
            ]
        }
    ]
}

var school = {
    "school": [
        {
            "city": "北京市", 
            "id": 1, 
            "name": "北京大学"
        }, 
        {
            "city": "北京市", 
            "id": 2, 
            "name": "中国人民大学"
        }, 
        {
            "city": "北京市", 
            "id": 3, 
            "name": "清华大学"
        }, 
        {
            "city": "北京市", 
            "id": 4, 
            "name": "北京交通大学"
        }, 
        {
            "city": "北京市", 
            "id": 5, 
            "name": "北京工业大学"
        }, 
        {
            "city": "北京市", 
            "id": 6, 
            "name": "北京航空航天大学"
        }, 
        {
            "city": "北京市", 
            "id": 7, 
            "name": "北京理工大学"
        }, 
        {
            "city": "北京市", 
            "id": 8, 
            "name": "北京科技大学"
        }, 
        {
            "city": "北京市", 
            "id": 9, 
            "name": "北方工业大学"
        }, 
        {
            "city": "北京市", 
            "id": 10, 
            "name": "北京化工大学"
        }, 
        {
            "city": "北京市", 
            "id": 11, 
            "name": "北京工商大学"
        }, 
        {
            "city": "北京市", 
            "id": 12, 
            "name": "北京服装学院"
        }, 
        {
            "city": "北京市", 
            "id": 13, 
            "name": "北京邮电大学"
        }, 
        {
            "city": "北京市", 
            "id": 14, 
            "name": "北京印刷学院"
        }, 
        {
            "city": "北京市", 
            "id": 15, 
            "name": "北京建筑大学"
        }, 
        {
            "city": "北京市", 
            "id": 16, 
            "name": "北京石油化工学院"
        }, 
        {
            "city": "北京市", 
            "id": 17, 
            "name": "北京电子科技学院"
        }, 
        {
            "city": "北京市", 
            "id": 18, 
            "name": "中国农业大学"
        }, 
        {
            "city": "北京市", 
            "id": 19, 
            "name": "北京农学院"
        }, 
        {
            "city": "北京市", 
            "id": 20, 
            "name": "北京林业大学"
        }, 
        {
            "city": "北京市", 
            "id": 21, 
            "name": "北京协和医学院"
        }, 
        {
            "city": "北京市", 
            "id": 22, 
            "name": "首都医科大学"
        }, 
        {
            "city": "北京市", 
            "id": 23, 
            "name": "北京中医药大学"
        }, 
        {
            "city": "北京市", 
            "id": 24, 
            "name": "北京师范大学"
        }, 
        {
            "city": "北京市", 
            "id": 25, 
            "name": "首都师范大学"
        }, 
        {
            "city": "北京市", 
            "id": 26, 
            "name": "首都体育学院"
        }, 
        {
            "city": "北京市", 
            "id": 27, 
            "name": "北京外国语大学"
        }, 
        {
            "city": "北京市", 
            "id": 28, 
            "name": "北京第二外国语学院"
        }, 
        {
            "city": "北京市", 
            "id": 29, 
            "name": "北京语言大学"
        }, 
        {
            "city": "北京市", 
            "id": 30, 
            "name": "中国传媒大学"
        }, 
        {
            "city": "北京市", 
            "id": 31, 
            "name": "中央财经大学"
        }, 
        {
            "city": "北京市", 
            "id": 32, 
            "name": "对外经济贸易大学"
        }, 
        {
            "city": "北京市", 
            "id": 33, 
            "name": "北京物资学院"
        }, 
        {
            "city": "北京市", 
            "id": 34, 
            "name": "首都经济贸易大学"
        }, 
        {
            "city": "北京市", 
            "id": 35, 
            "name": "外交学院"
        }, 
        {
            "city": "北京市", 
            "id": 36, 
            "name": "中国人民公安大学"
        }, 
        {
            "city": "北京市", 
            "id": 37, 
            "name": "国际关系学院"
        }, 
        {
            "city": "北京市", 
            "id": 38, 
            "name": "北京体育大学"
        }, 
        {
            "city": "北京市", 
            "id": 39, 
            "name": "中央音乐学院"
        }, 
        {
            "city": "北京市", 
            "id": 40, 
            "name": "中国音乐学院"
        }, 
        {
            "city": "北京市", 
            "id": 41, 
            "name": "中央美术学院"
        }, 
        {
            "city": "北京市", 
            "id": 42, 
            "name": "中央戏剧学院"
        }, 
        {
            "city": "北京市", 
            "id": 43, 
            "name": "中国戏曲学院"
        }, 
        {
            "city": "北京市", 
            "id": 44, 
            "name": "北京电影学院"
        }, 
        {
            "city": "北京市", 
            "id": 45, 
            "name": "北京舞蹈学院"
        }, 
        {
            "city": "北京市", 
            "id": 46, 
            "name": "中央民族大学"
        }, 
        {
            "city": "北京市", 
            "id": 47, 
            "name": "中国政法大学"
        }, 
        {
            "city": "北京市", 
            "id": 48, 
            "name": "华北电力大学"
        }, 
        {
            "city": "北京市", 
            "id": 49, 
            "name": "中华女子学院"
        }, 
        {
            "city": "北京市", 
            "id": 50, 
            "name": "北京信息科技大学"
        }, 
        {
            "city": "北京市", 
            "id": 51, 
            "name": "中国矿业大学（北京）"
        }, 
        {
            "city": "北京市", 
            "id": 52, 
            "name": "中国石油大学（北京）"
        }, 
        {
            "city": "北京市", 
            "id": 53, 
            "name": "中国地质大学（北京）"
        }, 
        {
            "city": "北京市", 
            "id": 54, 
            "name": "北京联合大学"
        }, 
        {
            "city": "北京市", 
            "id": 55, 
            "name": "北京城市学院"
        }, 
        {
            "city": "北京市", 
            "id": 56, 
            "name": "中国青年政治学院"
        }, 
        {
            "city": "北京市", 
            "id": 57, 
            "name": "首钢工学院"
        }, 
        {
            "city": "北京市", 
            "id": 58, 
            "name": "中国劳动关系学院"
        }, 
        {
            "city": "北京市", 
            "id": 59, 
            "name": "北京吉利学院"
        }, 
        {
            "city": "北京市", 
            "id": 60, 
            "name": "首都师范大学科德学院"
        }, 
        {
            "city": "北京市", 
            "id": 61, 
            "name": "北京工商大学嘉华学院"
        }, 
        {
            "city": "北京市", 
            "id": 62, 
            "name": "北京邮电大学世纪学院"
        }, 
        {
            "city": "北京市", 
            "id": 63, 
            "name": "北京工业大学耿丹学院"
        }, 
        {
            "city": "北京市", 
            "id": 64, 
            "name": "北京警察学院"
        }, 
        {
            "city": "北京市", 
            "id": 65, 
            "name": "北京第二外国语学院中瑞酒店管理学院"
        }, 
        {
            "city": "北京市", 
            "id": 66, 
            "name": "中国科学院大学"
        }, 
        {
            "city": "北京市", 
            "id": 67, 
            "name": "北京工业职业技术学院"
        }, 
        {
            "city": "北京市", 
            "id": 68, 
            "name": "北京信息职业技术学院"
        }, 
        {
            "city": "北京市", 
            "id": 69, 
            "name": "北京电子科技职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 70, 
            "name": "北京京北职业技术学院"
        }, 
        {
            "city": "北京市", 
            "id": 71, 
            "name": "北京交通职业技术学院"
        }, 
        {
            "city": "北京市", 
            "id": 72, 
            "name": "北京青年政治学院"
        }, 
        {
            "city": "北京市", 
            "id": 73, 
            "name": "北京农业职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 74, 
            "name": "北京政法职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 75, 
            "name": "北京财贸职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 76, 
            "name": "北京北大方正软件职业技术学院"
        }, 
        {
            "city": "北京市", 
            "id": 77, 
            "name": "北京经贸职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 78, 
            "name": "北京经济技术职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 79, 
            "name": "北京戏曲艺术职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 80, 
            "name": "北京汇佳职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 81, 
            "name": "北京科技经营管理学院"
        }, 
        {
            "city": "北京市", 
            "id": 82, 
            "name": "北京科技职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 83, 
            "name": "北京培黎职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 84, 
            "name": "北京经济管理职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 85, 
            "name": "北京劳动保障职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 86, 
            "name": "北京社会管理职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 87, 
            "name": "北京艺术传媒职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 88, 
            "name": "北京体育职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 89, 
            "name": "北京交通运输职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 90, 
            "name": "北京卫生职业学院"
        }, 
        {
            "city": "北京市", 
            "id": 91, 
            "name": "北京网络职业学院"
        }, 
        {
            "city": "天津市", 
            "id": 92, 
            "name": "南开大学"
        }, 
        {
            "city": "天津市", 
            "id": 93, 
            "name": "天津大学"
        }, 
        {
            "city": "天津市", 
            "id": 94, 
            "name": "天津科技大学"
        }, 
        {
            "city": "天津市", 
            "id": 95, 
            "name": "天津工业大学"
        }, 
        {
            "city": "天津市", 
            "id": 96, 
            "name": "中国民航大学"
        }, 
        {
            "city": "天津市", 
            "id": 97, 
            "name": "天津理工大学"
        }, 
        {
            "city": "天津市", 
            "id": 98, 
            "name": "天津农学院"
        }, 
        {
            "city": "天津市", 
            "id": 99, 
            "name": "天津医科大学"
        }, 
        {
            "city": "天津市", 
            "id": 100, 
            "name": "天津中医药大学"
        }, 
        {
            "city": "天津市", 
            "id": 101, 
            "name": "天津师范大学"
        }, 
        {
            "city": "天津市", 
            "id": 102, 
            "name": "天津职业技术师范大学"
        }, 
        {
            "city": "天津市", 
            "id": 103, 
            "name": "天津外国语大学"
        }, 
        {
            "city": "天津市", 
            "id": 104, 
            "name": "天津商业大学"
        }, 
        {
            "city": "天津市", 
            "id": 105, 
            "name": "天津财经大学"
        }, 
        {
            "city": "天津市", 
            "id": 106, 
            "name": "天津体育学院"
        }, 
        {
            "city": "天津市", 
            "id": 107, 
            "name": "天津音乐学院"
        }, 
        {
            "city": "天津市", 
            "id": 108, 
            "name": "天津美术学院"
        }, 
        {
            "city": "天津市", 
            "id": 109, 
            "name": "天津城建大学"
        }, 
        {
            "city": "天津市", 
            "id": 110, 
            "name": "天津天狮学院"
        }, 
        {
            "city": "天津市", 
            "id": 111, 
            "name": "天津中德应用技术大学"
        }, 
        {
            "city": "天津市", 
            "id": 112, 
            "name": "天津外国语大学滨海外事学院"
        }, 
        {
            "city": "天津市", 
            "id": 113, 
            "name": "天津体育学院运动与文化艺术学院"
        }, 
        {
            "city": "天津市", 
            "id": 114, 
            "name": "天津商业大学宝德学院"
        }, 
        {
            "city": "天津市", 
            "id": 115, 
            "name": "天津医科大学临床医学院"
        }, 
        {
            "city": "天津市", 
            "id": 116, 
            "name": "南开大学滨海学院"
        }, 
        {
            "city": "天津市", 
            "id": 117, 
            "name": "天津师范大学津沽学院"
        }, 
        {
            "city": "天津市", 
            "id": 118, 
            "name": "天津理工大学中环信息学院"
        }, 
        {
            "city": "天津市", 
            "id": 119, 
            "name": "北京科技大学天津学院"
        }, 
        {
            "city": "天津市", 
            "id": 120, 
            "name": "天津大学仁爱学院"
        }, 
        {
            "city": "天津市", 
            "id": 121, 
            "name": "天津财经大学珠江学院"
        }, 
        {
            "city": "天津市", 
            "id": 122, 
            "name": "天津市职业大学"
        }, 
        {
            "city": "天津市", 
            "id": 123, 
            "name": "天津滨海职业学院"
        }, 
        {
            "city": "天津市", 
            "id": 124, 
            "name": "天津工程职业技术学院"
        }, 
        {
            "city": "天津市", 
            "id": 125, 
            "name": "天津青年职业学院"
        }, 
        {
            "city": "天津市", 
            "id": 126, 
            "name": "天津渤海职业技术学院"
        }, 
        {
            "city": "天津市", 
            "id": 127, 
            "name": "天津电子信息职业技术学院"
        }, 
        {
            "city": "天津市", 
            "id": 128, 
            "name": "天津机电职业技术学院"
        }, 
        {
            "city": "天津市", 
            "id": 129, 
            "name": "天津现代职业技术学院"
        }, 
        {
            "city": "天津市", 
            "id": 130, 
            "name": "天津公安警官职业学院"
        }, 
        {
            "city": "天津市", 
            "id": 131, 
            "name": "天津轻工职业技术学院"
        }, 
        {
            "city": "天津市", 
            "id": 132, 
            "name": "天津商务职业学院"
        }, 
        {
            "city": "天津市", 
            "id": 133, 
            "name": "天津国土资源和房屋职业学院"
        }, 
        {
            "city": "天津市", 
            "id": 134, 
            "name": "天津医学高等专科学校"
        }, 
        {
            "city": "天津市", 
            "id": 135, 
            "name": "天津开发区职业技术学院"
        }, 
        {
            "city": "天津市", 
            "id": 136, 
            "name": "天津艺术职业学院"
        }, 
        {
            "city": "天津市", 
            "id": 137, 
            "name": "天津交通职业学院"
        }, 
        {
            "city": "天津市", 
            "id": 138, 
            "name": "天津冶金职业技术学院"
        }, 
        {
            "city": "天津市", 
            "id": 139, 
            "name": "天津石油职业技术学院"
        }, 
        {
            "city": "天津市", 
            "id": 140, 
            "name": "天津城市职业学院"
        }, 
        {
            "city": "天津市", 
            "id": 141, 
            "name": "天津铁道职业技术学院"
        }, 
        {
            "city": "天津市", 
            "id": 142, 
            "name": "天津工艺美术职业学院"
        }, 
        {
            "city": "天津市", 
            "id": 143, 
            "name": "天津城市建设管理职业技术学院"
        }, 
        {
            "city": "天津市", 
            "id": 144, 
            "name": "天津生物工程职业技术学院"
        }, 
        {
            "city": "天津市", 
            "id": 145, 
            "name": "天津海运职业学院"
        }, 
        {
            "city": "天津市", 
            "id": 146, 
            "name": "天津广播影视职业学院"
        }, 
        {
            "city": "保定市", 
            "id": 147, 
            "name": "河北大学"
        }, 
        {
            "city": "邯郸市", 
            "id": 148, 
            "name": "河北工程大学"
        }, 
        {
            "city": "石家庄市", 
            "id": 149, 
            "name": "河北地质大学"
        }, 
        {
            "city": "天津市", 
            "id": 150, 
            "name": "河北工业大学"
        }, 
        {
            "city": "唐山市", 
            "id": 151, 
            "name": "华北理工大学"
        }, 
        {
            "city": "石家庄市", 
            "id": 152, 
            "name": "河北科技大学"
        }, 
        {
            "city": "张家口市", 
            "id": 153, 
            "name": "河北建筑工程学院"
        }, 
        {
            "city": "沧州市", 
            "id": 154, 
            "name": "河北水利电力学院"
        }, 
        {
            "city": "保定市", 
            "id": 155, 
            "name": "河北农业大学"
        }, 
        {
            "city": "石家庄市", 
            "id": 156, 
            "name": "河北医科大学"
        }, 
        {
            "city": "张家口市", 
            "id": 157, 
            "name": "河北北方学院"
        }, 
        {
            "city": "承德市", 
            "id": 158, 
            "name": "承德医学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 159, 
            "name": "河北师范大学"
        }, 
        {
            "city": "保定市", 
            "id": 160, 
            "name": "保定学院"
        }, 
        {
            "city": "承德市", 
            "id": 161, 
            "name": "河北民族师范学院"
        }, 
        {
            "city": "唐山市", 
            "id": 162, 
            "name": "唐山师范学院"
        }, 
        {
            "city": "廊坊市", 
            "id": 163, 
            "name": "廊坊师范学院"
        }, 
        {
            "city": "衡水市", 
            "id": 164, 
            "name": "衡水学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 165, 
            "name": "石家庄学院"
        }, 
        {
            "city": "邯郸市", 
            "id": 166, 
            "name": "邯郸学院"
        }, 
        {
            "city": "邢台市", 
            "id": 167, 
            "name": "邢台学院"
        }, 
        {
            "city": "沧州市", 
            "id": 168, 
            "name": "沧州师范学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 169, 
            "name": "石家庄铁道大学"
        }, 
        {
            "city": "秦皇岛市", 
            "id": 170, 
            "name": "燕山大学"
        }, 
        {
            "city": "秦皇岛市", 
            "id": 171, 
            "name": "河北科技师范学院"
        }, 
        {
            "city": "唐山市", 
            "id": 172, 
            "name": "唐山学院"
        }, 
        {
            "city": "廊坊市", 
            "id": 173, 
            "name": "华北科技学院"
        }, 
        {
            "city": "廊坊市", 
            "id": 174, 
            "name": "中国人民武装警察部队学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 175, 
            "name": "河北体育学院"
        }, 
        {
            "city": "保定市", 
            "id": 176, 
            "name": "河北金融学院"
        }, 
        {
            "city": "廊坊市", 
            "id": 177, 
            "name": "北华航天工业学院"
        }, 
        {
            "city": "廊坊市", 
            "id": 178, 
            "name": "防灾科技学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 179, 
            "name": "河北经贸大学"
        }, 
        {
            "city": "保定市", 
            "id": 180, 
            "name": "中央司法警官学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 181, 
            "name": "河北传媒学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 182, 
            "name": "河北工程技术学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 183, 
            "name": "河北美术学院"
        }, 
        {
            "city": "保定市", 
            "id": 184, 
            "name": "河北科技学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 185, 
            "name": "河北外国语学院"
        }, 
        {
            "city": "保定市", 
            "id": 186, 
            "name": "河北大学工商学院"
        }, 
        {
            "city": "唐山市", 
            "id": 187, 
            "name": "华北理工大学轻工学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 188, 
            "name": "河北科技大学理工学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 189, 
            "name": "河北师范大学汇华学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 190, 
            "name": "河北经贸大学经济管理学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 191, 
            "name": "河北医科大学临床学院"
        }, 
        {
            "city": "保定市", 
            "id": 192, 
            "name": "华北电力大学科技学院"
        }, 
        {
            "city": "邯郸市", 
            "id": 193, 
            "name": "河北工程大学科信学院"
        }, 
        {
            "city": "廊坊市", 
            "id": 194, 
            "name": "河北工业大学城市学院"
        }, 
        {
            "city": "秦皇岛市", 
            "id": 195, 
            "name": "燕山大学里仁学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 196, 
            "name": "石家庄铁道大学四方学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 197, 
            "name": "河北地质大学华信学院"
        }, 
        {
            "city": "保定市", 
            "id": 198, 
            "name": "河北农业大学现代科技学院"
        }, 
        {
            "city": "唐山市", 
            "id": 199, 
            "name": "华北理工大学冀唐学院"
        }, 
        {
            "city": "保定市", 
            "id": 200, 
            "name": "中国地质大学长城学院"
        }, 
        {
            "city": "廊坊市", 
            "id": 201, 
            "name": "燕京理工学院"
        }, 
        {
            "city": "廊坊市", 
            "id": 202, 
            "name": "北京中医药大学东方学院"
        }, 
        {
            "city": "沧州市", 
            "id": 203, 
            "name": "北京交通大学海滨学院"
        }, 
        {
            "city": "廊坊市", 
            "id": 204, 
            "name": "河北东方学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 205, 
            "name": "河北中医学院"
        }, 
        {
            "city": "张家口市", 
            "id": 206, 
            "name": "张家口学院"
        }, 
        {
            "city": "秦皇岛市", 
            "id": 207, 
            "name": "河北环境工程学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 208, 
            "name": "河北工业职业技术学院"
        }, 
        {
            "city": "邯郸市", 
            "id": 209, 
            "name": "邯郸职业技术学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 210, 
            "name": "石家庄职业技术学院"
        }, 
        {
            "city": "张家口市", 
            "id": 211, 
            "name": "张家口职业技术学院"
        }, 
        {
            "city": "承德市", 
            "id": 212, 
            "name": "承德石油高等专科学校"
        }, 
        {
            "city": "邢台市", 
            "id": 213, 
            "name": "邢台职业技术学院"
        }, 
        {
            "city": "保定市", 
            "id": 214, 
            "name": "河北软件职业技术学院"
        }, 
        {
            "city": "廊坊市", 
            "id": 215, 
            "name": "河北石油职业技术学院"
        }, 
        {
            "city": "秦皇岛市", 
            "id": 216, 
            "name": "河北建材职业技术学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 217, 
            "name": "河北政法职业学院"
        }, 
        {
            "city": "沧州市", 
            "id": 218, 
            "name": "沧州职业技术学院"
        }, 
        {
            "city": "唐山市", 
            "id": 219, 
            "name": "河北能源职业技术学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 220, 
            "name": "石家庄铁路职业技术学院"
        }, 
        {
            "city": "保定市", 
            "id": 221, 
            "name": "保定职业技术学院"
        }, 
        {
            "city": "秦皇岛市", 
            "id": 222, 
            "name": "秦皇岛职业技术学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 223, 
            "name": "石家庄工程职业学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 224, 
            "name": "石家庄城市经济职业学院"
        }, 
        {
            "city": "唐山市", 
            "id": 225, 
            "name": "唐山职业技术学院"
        }, 
        {
            "city": "衡水市", 
            "id": 226, 
            "name": "衡水职业技术学院"
        }, 
        {
            "city": "唐山市", 
            "id": 227, 
            "name": "唐山工业职业技术学院"
        }, 
        {
            "city": "邢台市", 
            "id": 228, 
            "name": "邢台医学高等专科学校"
        }, 
        {
            "city": "石家庄市", 
            "id": 229, 
            "name": "河北省艺术职业学院"
        }, 
        {
            "city": "承德市", 
            "id": 230, 
            "name": "河北旅游职业学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 231, 
            "name": "石家庄财经职业学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 232, 
            "name": "河北交通职业技术学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 233, 
            "name": "河北化工医药职业技术学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 234, 
            "name": "石家庄信息工程职业学院"
        }, 
        {
            "city": "秦皇岛市", 
            "id": 235, 
            "name": "河北对外经贸职业学院"
        }, 
        {
            "city": "保定市", 
            "id": 236, 
            "name": "保定电力职业技术学院"
        }, 
        {
            "city": "邢台市", 
            "id": 237, 
            "name": "河北机电职业技术学院"
        }, 
        {
            "city": "沧州市", 
            "id": 238, 
            "name": "渤海石油职业学院"
        }, 
        {
            "city": "廊坊市", 
            "id": 239, 
            "name": "廊坊职业技术学院"
        }, 
        {
            "city": "唐山市", 
            "id": 240, 
            "name": "唐山科技职业技术学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 241, 
            "name": "石家庄邮电职业技术学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 242, 
            "name": "河北公安警察职业学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 243, 
            "name": "石家庄工商职业学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 244, 
            "name": "石家庄理工职业学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 245, 
            "name": "石家庄科技信息职业学院"
        }, 
        {
            "city": "邯郸市", 
            "id": 246, 
            "name": "河北司法警官职业学院"
        }, 
        {
            "city": "沧州市", 
            "id": 247, 
            "name": "沧州医学高等专科学校"
        }, 
        {
            "city": "石家庄市", 
            "id": 248, 
            "name": "河北女子职业技术学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 249, 
            "name": "石家庄医学高等专科学校"
        }, 
        {
            "city": "石家庄市", 
            "id": 250, 
            "name": "石家庄经济职业学院"
        }, 
        {
            "city": "保定市", 
            "id": 251, 
            "name": "冀中职业学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 252, 
            "name": "石家庄人民医学高等专科学校"
        }, 
        {
            "city": "石家庄市", 
            "id": 253, 
            "name": "石家庄科技工程职业学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 254, 
            "name": "河北劳动关系职业学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 255, 
            "name": "石家庄科技职业学院"
        }, 
        {
            "city": "沧州市", 
            "id": 256, 
            "name": "泊头职业学院"
        }, 
        {
            "city": "张家口市", 
            "id": 257, 
            "name": "宣化科技职业学院"
        }, 
        {
            "city": "廊坊市", 
            "id": 258, 
            "name": "廊坊燕京职业技术学院"
        }, 
        {
            "city": "承德市", 
            "id": 259, 
            "name": "承德护理职业学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 260, 
            "name": "石家庄幼儿师范高等专科学校"
        }, 
        {
            "city": "廊坊市", 
            "id": 261, 
            "name": "廊坊卫生职业学院"
        }, 
        {
            "city": "石家庄市", 
            "id": 262, 
            "name": "河北轨道运输职业技术学院"
        }, 
        {
            "city": "保定市", 
            "id": 263, 
            "name": "保定幼儿师范高等专科学校"
        }, 
        {
            "city": "保定市", 
            "id": 264, 
            "name": "河北工艺美术职业学院"
        }, 
        {
            "city": "沧州市", 
            "id": 265, 
            "name": "渤海理工职业学院"
        }, 
        {
            "city": "唐山市", 
            "id": 266, 
            "name": "唐山幼儿师范高等专科学校"
        }, 
        {
            "city": "太原市", 
            "id": 267, 
            "name": "山西大学"
        }, 
        {
            "city": "太原市", 
            "id": 268, 
            "name": "太原科技大学"
        }, 
        {
            "city": "太原市", 
            "id": 269, 
            "name": "中北大学"
        }, 
        {
            "city": "太原市", 
            "id": 270, 
            "name": "太原理工大学"
        }, 
        {
            "city": "晋中市", 
            "id": 271, 
            "name": "山西农业大学"
        }, 
        {
            "city": "太原市", 
            "id": 272, 
            "name": "山西医科大学"
        }, 
        {
            "city": "长治市", 
            "id": 273, 
            "name": "长治医学院"
        }, 
        {
            "city": "临汾市", 
            "id": 274, 
            "name": "山西师范大学"
        }, 
        {
            "city": "太原市", 
            "id": 275, 
            "name": "太原师范学院"
        }, 
        {
            "city": "大同市", 
            "id": 276, 
            "name": "山西大同大学"
        }, 
        {
            "city": "晋中市", 
            "id": 277, 
            "name": "晋中学院"
        }, 
        {
            "city": "长治市", 
            "id": 278, 
            "name": "长治学院"
        }, 
        {
            "city": "运城市", 
            "id": 279, 
            "name": "运城学院"
        }, 
        {
            "city": "忻州市", 
            "id": 280, 
            "name": "忻州师范学院"
        }, 
        {
            "city": "太原市", 
            "id": 281, 
            "name": "山西财经大学"
        }, 
        {
            "city": "太原市", 
            "id": 282, 
            "name": "山西中医学院"
        }, 
        {
            "city": "吕梁市", 
            "id": 283, 
            "name": "吕梁学院"
        }, 
        {
            "city": "太原市", 
            "id": 284, 
            "name": "太原学院"
        }, 
        {
            "city": "太原市", 
            "id": 285, 
            "name": "山西警察学院"
        }, 
        {
            "city": "太原市", 
            "id": 286, 
            "name": "山西应用科技学院"
        }, 
        {
            "city": "太原市", 
            "id": 287, 
            "name": "山西大学商务学院"
        }, 
        {
            "city": "太原市", 
            "id": 288, 
            "name": "太原理工大学现代科技学院"
        }, 
        {
            "city": "晋中市", 
            "id": 289, 
            "name": "山西农业大学信息学院"
        }, 
        {
            "city": "临汾市", 
            "id": 290, 
            "name": "山西师范大学现代文理学院"
        }, 
        {
            "city": "太原市", 
            "id": 291, 
            "name": "中北大学信息商务学院"
        }, 
        {
            "city": "太原市", 
            "id": 292, 
            "name": "太原科技大学华科学院"
        }, 
        {
            "city": "太原市", 
            "id": 293, 
            "name": "山西医科大学晋祠学院"
        }, 
        {
            "city": "太原市", 
            "id": 294, 
            "name": "山西财经大学华商学院"
        }, 
        {
            "city": "太原市", 
            "id": 295, 
            "name": "山西工商学院"
        }, 
        {
            "city": "太原市", 
            "id": 296, 
            "name": "太原工业学院"
        }, 
        {
            "city": "太原市", 
            "id": 297, 
            "name": "山西传媒学院"
        }, 
        {
            "city": "阳泉市", 
            "id": 298, 
            "name": "山西工程技术学院"
        }, 
        {
            "city": "晋中市", 
            "id": 299, 
            "name": "山西能源学院"
        }, 
        {
            "city": "太原市", 
            "id": 300, 
            "name": "山西省财政税务专科学校"
        }, 
        {
            "city": "长治市", 
            "id": 301, 
            "name": "长治职业技术学院"
        }, 
        {
            "city": "太原市", 
            "id": 302, 
            "name": "山西艺术职业学院"
        }, 
        {
            "city": "晋城市", 
            "id": 303, 
            "name": "晋城职业技术学院"
        }, 
        {
            "city": "太原市", 
            "id": 304, 
            "name": "山西建筑职业技术学院"
        }, 
        {
            "city": "太原市", 
            "id": 305, 
            "name": "山西药科职业学院"
        }, 
        {
            "city": "太原市", 
            "id": 306, 
            "name": "山西工程职业技术学院"
        }, 
        {
            "city": "太原市", 
            "id": 307, 
            "name": "山西交通职业技术学院"
        }, 
        {
            "city": "大同市", 
            "id": 308, 
            "name": "大同煤炭职业技术学院"
        }, 
        {
            "city": "长治市", 
            "id": 309, 
            "name": "山西机电职业技术学院"
        }, 
        {
            "city": "太原市", 
            "id": 310, 
            "name": "山西戏剧职业学院"
        }, 
        {
            "city": "太原市", 
            "id": 311, 
            "name": "山西财贸职业技术学院"
        }, 
        {
            "city": "太原市", 
            "id": 312, 
            "name": "山西林业职业技术学院"
        }, 
        {
            "city": "运城市", 
            "id": 313, 
            "name": "山西水利职业技术学院"
        }, 
        {
            "city": "阳泉市", 
            "id": 314, 
            "name": "阳泉职业技术学院"
        }, 
        {
            "city": "临汾市", 
            "id": 315, 
            "name": "临汾职业技术学院"
        }, 
        {
            "city": "太原市", 
            "id": 316, 
            "name": "山西职业技术学院"
        }, 
        {
            "city": "太原市", 
            "id": 317, 
            "name": "山西煤炭职业技术学院"
        }, 
        {
            "city": "太原市", 
            "id": 318, 
            "name": "山西金融职业学院"
        }, 
        {
            "city": "太原市", 
            "id": 319, 
            "name": "太原城市职业技术学院"
        }, 
        {
            "city": "临汾市", 
            "id": 320, 
            "name": "山西信息职业技术学院"
        }, 
        {
            "city": "太原市", 
            "id": 321, 
            "name": "山西体育职业学院"
        }, 
        {
            "city": "太原市", 
            "id": 322, 
            "name": "山西警官职业学院"
        }, 
        {
            "city": "太原市", 
            "id": 323, 
            "name": "山西国际商务职业学院"
        }, 
        {
            "city": "长治市", 
            "id": 324, 
            "name": "潞安职业技术学院"
        }, 
        {
            "city": "太原市", 
            "id": 325, 
            "name": "太原旅游职业学院"
        }, 
        {
            "city": "太原市", 
            "id": 326, 
            "name": "山西旅游职业学院"
        }, 
        {
            "city": "临汾市", 
            "id": 327, 
            "name": "山西管理职业学院"
        }, 
        {
            "city": "太原市", 
            "id": 328, 
            "name": "山西电力职业技术学院"
        }, 
        {
            "city": "忻州市", 
            "id": 329, 
            "name": "忻州职业技术学院"
        }, 
        {
            "city": "晋中市", 
            "id": 330, 
            "name": "山西同文职业技术学院"
        }, 
        {
            "city": "晋中市", 
            "id": 331, 
            "name": "晋中职业技术学院"
        }, 
        {
            "city": "晋中市", 
            "id": 332, 
            "name": "山西华澳商贸职业学院"
        }, 
        {
            "city": "运城市", 
            "id": 333, 
            "name": "山西运城农业职业技术学院"
        }, 
        {
            "city": "运城市", 
            "id": 334, 
            "name": "运城幼儿师范高等专科学校"
        }, 
        {
            "city": "太原市", 
            "id": 335, 
            "name": "山西老区职业技术学院"
        }, 
        {
            "city": "太原市", 
            "id": 336, 
            "name": "山西经贸职业学院"
        }, 
        {
            "city": "朔州市", 
            "id": 337, 
            "name": "朔州职业技术学院"
        }, 
        {
            "city": "运城市", 
            "id": 338, 
            "name": "运城职业技术学院"
        }, 
        {
            "city": "太原市", 
            "id": 339, 
            "name": "山西轻工职业技术学院"
        }, 
        {
            "city": "晋中市", 
            "id": 340, 
            "name": "晋中师范高等专科学校"
        }, 
        {
            "city": "阳泉市", 
            "id": 341, 
            "name": "阳泉师范高等专科学校"
        }, 
        {
            "city": "太原市", 
            "id": 342, 
            "name": "山西青年职业学院"
        }, 
        {
            "city": "运城市", 
            "id": 343, 
            "name": "运城护理职业学院"
        }, 
        {
            "city": "运城市", 
            "id": 344, 
            "name": "运城师范高等专科学校"
        }, 
        {
            "city": "朔州市", 
            "id": 345, 
            "name": "朔州师范高等专科学校"
        }, 
        {
            "city": "吕梁市", 
            "id": 346, 
            "name": "吕梁职业技术学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 347, 
            "name": "内蒙古大学"
        }, 
        {
            "city": "包头市", 
            "id": 348, 
            "name": "内蒙古科技大学"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 349, 
            "name": "内蒙古工业大学"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 350, 
            "name": "内蒙古农业大学"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 351, 
            "name": "内蒙古医科大学"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 352, 
            "name": "内蒙古师范大学"
        }, 
        {
            "city": "通辽市", 
            "id": 353, 
            "name": "内蒙古民族大学"
        }, 
        {
            "city": "赤峰市", 
            "id": 354, 
            "name": "赤峰学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 355, 
            "name": "内蒙古财经大学"
        }, 
        {
            "city": "呼伦贝尔市", 
            "id": 356, 
            "name": "呼伦贝尔学院"
        }, 
        {
            "city": "乌兰察布市", 
            "id": 357, 
            "name": "集宁师范学院"
        }, 
        {
            "city": "巴彦淖尔市", 
            "id": 358, 
            "name": "河套学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 359, 
            "name": "呼和浩特民族学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 360, 
            "name": "内蒙古大学创业学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 361, 
            "name": "内蒙古师范大学鸿德学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 362, 
            "name": "内蒙古艺术学院"
        }, 
        {
            "city": "鄂尔多斯市", 
            "id": 363, 
            "name": "鄂尔多斯应用技术学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 364, 
            "name": "内蒙古建筑职业技术学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 365, 
            "name": "内蒙古丰州职业学院"
        }, 
        {
            "city": "包头市", 
            "id": 366, 
            "name": "包头职业技术学院"
        }, 
        {
            "city": "兴安盟", 
            "id": 367, 
            "name": "兴安职业技术学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 368, 
            "name": "呼和浩特职业学院"
        }, 
        {
            "city": "包头市", 
            "id": 369, 
            "name": "包头轻工职业技术学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 370, 
            "name": "内蒙古电子信息职业技术学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 371, 
            "name": "内蒙古机电职业技术学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 372, 
            "name": "内蒙古化工职业学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 373, 
            "name": "内蒙古商贸职业学院"
        }, 
        {
            "city": "锡林郭勒盟", 
            "id": 374, 
            "name": "锡林郭勒职业学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 375, 
            "name": "内蒙古警察职业学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 376, 
            "name": "内蒙古体育职业学院"
        }, 
        {
            "city": "乌兰察布市", 
            "id": 377, 
            "name": "乌兰察布职业学院"
        }, 
        {
            "city": "通辽市", 
            "id": 378, 
            "name": "通辽职业学院"
        }, 
        {
            "city": "通辽市", 
            "id": 379, 
            "name": "科尔沁艺术职业学院"
        }, 
        {
            "city": "赤峰市", 
            "id": 380, 
            "name": "内蒙古交通职业技术学院"
        }, 
        {
            "city": "包头市", 
            "id": 381, 
            "name": "包头钢铁职业技术学院"
        }, 
        {
            "city": "乌海市", 
            "id": 382, 
            "name": "乌海职业技术学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 383, 
            "name": "内蒙古科技职业学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 384, 
            "name": "内蒙古北方职业技术学院"
        }, 
        {
            "city": "赤峰市", 
            "id": 385, 
            "name": "赤峰职业技术学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 386, 
            "name": "内蒙古经贸外语职业学院"
        }, 
        {
            "city": "包头市", 
            "id": 387, 
            "name": "包头铁道职业技术学院"
        }, 
        {
            "city": "乌兰察布市", 
            "id": 388, 
            "name": "乌兰察布医学高等专科学校"
        }, 
        {
            "city": "鄂尔多斯市", 
            "id": 389, 
            "name": "鄂尔多斯职业学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 390, 
            "name": "内蒙古工业职业学院"
        }, 
        {
            "city": "呼伦贝尔市", 
            "id": 391, 
            "name": "呼伦贝尔职业技术学院"
        }, 
        {
            "city": "呼伦贝尔市", 
            "id": 392, 
            "name": "满洲里俄语职业学院"
        }, 
        {
            "city": "呼和浩特市", 
            "id": 393, 
            "name": "内蒙古能源职业学院"
        }, 
        {
            "city": "赤峰市", 
            "id": 394, 
            "name": "赤峰工业职业技术学院"
        }, 
        {
            "city": "阿拉善盟", 
            "id": 395, 
            "name": "阿拉善职业技术学院"
        }, 
        {
            "city": "巴彦淖尔市", 
            "id": 396, 
            "name": "内蒙古美术职业学院"
        }, 
        {
            "city": "鄂尔多斯市", 
            "id": 397, 
            "name": "内蒙古民族幼儿师范高等专科学校"
        }, 
        {
            "city": "鄂尔多斯市", 
            "id": 398, 
            "name": "鄂尔多斯生态环境职业学院"
        }, 
        {
            "city": "呼伦贝尔市", 
            "id": 399, 
            "name": "扎兰屯职业学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 400, 
            "name": "辽宁大学"
        }, 
        {
            "city": "大连市", 
            "id": 401, 
            "name": "大连理工大学"
        }, 
        {
            "city": "沈阳市", 
            "id": 402, 
            "name": "沈阳工业大学"
        }, 
        {
            "city": "沈阳市", 
            "id": 403, 
            "name": "沈阳航空航天大学"
        }, 
        {
            "city": "沈阳市", 
            "id": 404, 
            "name": "沈阳理工大学"
        }, 
        {
            "city": "沈阳市", 
            "id": 405, 
            "name": "东北大学"
        }, 
        {
            "city": "鞍山市", 
            "id": 406, 
            "name": "辽宁科技大学"
        }, 
        {
            "city": "阜新市", 
            "id": 407, 
            "name": "辽宁工程技术大学"
        }, 
        {
            "city": "抚顺市", 
            "id": 408, 
            "name": "辽宁石油化工大学"
        }, 
        {
            "city": "沈阳市", 
            "id": 409, 
            "name": "沈阳化工大学"
        }, 
        {
            "city": "大连市", 
            "id": 410, 
            "name": "大连交通大学"
        }, 
        {
            "city": "大连市", 
            "id": 411, 
            "name": "大连海事大学"
        }, 
        {
            "city": "大连市", 
            "id": 412, 
            "name": "大连工业大学"
        }, 
        {
            "city": "沈阳市", 
            "id": 413, 
            "name": "沈阳建筑大学"
        }, 
        {
            "city": "锦州市", 
            "id": 414, 
            "name": "辽宁工业大学"
        }, 
        {
            "city": "沈阳市", 
            "id": 415, 
            "name": "沈阳农业大学"
        }, 
        {
            "city": "大连市", 
            "id": 416, 
            "name": "大连海洋大学"
        }, 
        {
            "city": "沈阳市", 
            "id": 417, 
            "name": "中国医科大学"
        }, 
        {
            "city": "锦州市", 
            "id": 418, 
            "name": "锦州医科大学"
        }, 
        {
            "city": "大连市", 
            "id": 419, 
            "name": "大连医科大学"
        }, 
        {
            "city": "沈阳市", 
            "id": 420, 
            "name": "辽宁中医药大学"
        }, 
        {
            "city": "沈阳市", 
            "id": 421, 
            "name": "沈阳药科大学"
        }, 
        {
            "city": "沈阳市", 
            "id": 422, 
            "name": "沈阳医学院"
        }, 
        {
            "city": "大连市", 
            "id": 423, 
            "name": "辽宁师范大学"
        }, 
        {
            "city": "沈阳市", 
            "id": 424, 
            "name": "沈阳师范大学"
        }, 
        {
            "city": "锦州市", 
            "id": 425, 
            "name": "渤海大学"
        }, 
        {
            "city": "鞍山市", 
            "id": 426, 
            "name": "鞍山师范学院"
        }, 
        {
            "city": "大连市", 
            "id": 427, 
            "name": "大连外国语大学"
        }, 
        {
            "city": "大连市", 
            "id": 428, 
            "name": "东北财经大学"
        }, 
        {
            "city": "沈阳市", 
            "id": 429, 
            "name": "中国刑事警察学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 430, 
            "name": "沈阳体育学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 431, 
            "name": "沈阳音乐学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 432, 
            "name": "鲁迅美术学院"
        }, 
        {
            "city": "大连市", 
            "id": 433, 
            "name": "辽宁对外经贸学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 434, 
            "name": "沈阳大学"
        }, 
        {
            "city": "大连市", 
            "id": 435, 
            "name": "大连大学"
        }, 
        {
            "city": "本溪市", 
            "id": 436, 
            "name": "辽宁科技学院"
        }, 
        {
            "city": "大连市", 
            "id": 437, 
            "name": "辽宁警察学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 438, 
            "name": "沈阳工程学院"
        }, 
        {
            "city": "丹东市", 
            "id": 439, 
            "name": "辽东学院"
        }, 
        {
            "city": "大连市", 
            "id": 440, 
            "name": "大连民族大学"
        }, 
        {
            "city": "大连市", 
            "id": 441, 
            "name": "大连理工大学城市学院"
        }, 
        {
            "city": "辽阳市", 
            "id": 442, 
            "name": "沈阳工业大学工程学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 443, 
            "name": "沈阳航空航天大学北方科技学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 444, 
            "name": "沈阳工学院"
        }, 
        {
            "city": "大连市", 
            "id": 445, 
            "name": "大连工业大学艺术与信息工程学院"
        }, 
        {
            "city": "大连市", 
            "id": 446, 
            "name": "大连科技学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 447, 
            "name": "沈阳城市建设学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 448, 
            "name": "中国医科大学临床医药学院"
        }, 
        {
            "city": "大连市", 
            "id": 449, 
            "name": "大连医科大学中山学院"
        }, 
        {
            "city": "锦州市", 
            "id": 450, 
            "name": "锦州医科大学医疗学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 451, 
            "name": "辽宁师范大学海华学院"
        }, 
        {
            "city": "锦州市", 
            "id": 452, 
            "name": "辽宁理工学院"
        }, 
        {
            "city": "大连市", 
            "id": 453, 
            "name": "大连财经学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 454, 
            "name": "沈阳城市学院"
        }, 
        {
            "city": "鞍山市", 
            "id": 455, 
            "name": "辽宁科技大学信息技术学院"
        }, 
        {
            "city": "抚顺市", 
            "id": 456, 
            "name": "辽宁石油化工大学顺华能源学院"
        }, 
        {
            "city": "大连市", 
            "id": 457, 
            "name": "大连艺术学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 458, 
            "name": "辽宁中医药大学杏林学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 459, 
            "name": "辽宁何氏医学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 460, 
            "name": "沈阳科技学院"
        }, 
        {
            "city": "大连市", 
            "id": 461, 
            "name": "大连东软信息学院"
        }, 
        {
            "city": "葫芦岛市", 
            "id": 462, 
            "name": "辽宁财贸学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 463, 
            "name": "辽宁传媒学院"
        }, 
        {
            "city": "营口市", 
            "id": 464, 
            "name": "营口理工学院"
        }, 
        {
            "city": "朝阳市", 
            "id": 465, 
            "name": "朝阳师范高等专科学校"
        }, 
        {
            "city": "抚顺市", 
            "id": 466, 
            "name": "抚顺师范高等专科学校"
        }, 
        {
            "city": "锦州市", 
            "id": 467, 
            "name": "锦州师范高等专科学校"
        }, 
        {
            "city": "营口市", 
            "id": 468, 
            "name": "营口职业技术学院"
        }, 
        {
            "city": "铁岭市", 
            "id": 469, 
            "name": "铁岭师范高等专科学校"
        }, 
        {
            "city": "大连市", 
            "id": 470, 
            "name": "大连职业技术学院"
        }, 
        {
            "city": "营口市", 
            "id": 471, 
            "name": "辽宁农业职业技术学院"
        }, 
        {
            "city": "抚顺市", 
            "id": 472, 
            "name": "抚顺职业技术学院"
        }, 
        {
            "city": "辽阳市", 
            "id": 473, 
            "name": "辽阳职业技术学院"
        }, 
        {
            "city": "阜新市", 
            "id": 474, 
            "name": "阜新高等专科学校"
        }, 
        {
            "city": "沈阳市", 
            "id": 475, 
            "name": "辽宁省交通高等专科学校"
        }, 
        {
            "city": "大连市", 
            "id": 476, 
            "name": "辽宁税务高等专科学校"
        }, 
        {
            "city": "盘锦市", 
            "id": 477, 
            "name": "盘锦职业技术学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 478, 
            "name": "沈阳航空职业技术学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 479, 
            "name": "辽宁体育运动职业技术学院"
        }, 
        {
            "city": "铁岭市", 
            "id": 480, 
            "name": "辽宁职业学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 481, 
            "name": "辽宁林业职业技术学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 482, 
            "name": "沈阳职业技术学院"
        }, 
        {
            "city": "锦州市", 
            "id": 483, 
            "name": "辽宁理工职业学院"
        }, 
        {
            "city": "大连市", 
            "id": 484, 
            "name": "大连商务职业学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 485, 
            "name": "辽宁金融职业学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 486, 
            "name": "辽宁轨道交通职业学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 487, 
            "name": "辽宁广告职业学院"
        }, 
        {
            "city": "丹东市", 
            "id": 488, 
            "name": "辽宁机电职业技术学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 489, 
            "name": "辽宁经济职业技术学院"
        }, 
        {
            "city": "锦州市", 
            "id": 490, 
            "name": "辽宁石化职业技术学院"
        }, 
        {
            "city": "葫芦岛市", 
            "id": 491, 
            "name": "渤海船舶职业学院"
        }, 
        {
            "city": "大连市", 
            "id": 492, 
            "name": "大连软件职业学院"
        }, 
        {
            "city": "大连市", 
            "id": 493, 
            "name": "大连翻译职业学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 494, 
            "name": "辽宁商贸职业学院"
        }, 
        {
            "city": "大连市", 
            "id": 495, 
            "name": "大连枫叶职业技术学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 496, 
            "name": "辽宁装备制造职业技术学院"
        }, 
        {
            "city": "盘锦市", 
            "id": 497, 
            "name": "辽河石油职业技术学院"
        }, 
        {
            "city": "丹东市", 
            "id": 498, 
            "name": "辽宁地质工程职业学院"
        }, 
        {
            "city": "锦州市", 
            "id": 499, 
            "name": "辽宁铁道职业技术学院"
        }, 
        {
            "city": "辽阳市", 
            "id": 500, 
            "name": "辽宁建筑职业学院"
        }, 
        {
            "city": "大连市", 
            "id": 501, 
            "name": "大连航运职业技术学院"
        }, 
        {
            "city": "大连市", 
            "id": 502, 
            "name": "大连装备制造职业技术学院"
        }, 
        {
            "city": "大连市", 
            "id": 503, 
            "name": "大连汽车职业技术学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 504, 
            "name": "辽宁现代服务职业技术学院"
        }, 
        {
            "city": "本溪市", 
            "id": 505, 
            "name": "辽宁冶金职业技术学院"
        }, 
        {
            "city": "铁岭市", 
            "id": 506, 
            "name": "辽宁工程职业学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 507, 
            "name": "辽宁城市建设职业技术学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 508, 
            "name": "辽宁医药职业学院"
        }, 
        {
            "city": "铁岭市", 
            "id": 509, 
            "name": "铁岭卫生职业学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 510, 
            "name": "沈阳北软信息职业技术学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 511, 
            "name": "辽宁政法职业学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 512, 
            "name": "辽宁民族师范高等专科学校"
        }, 
        {
            "city": "大连市", 
            "id": 513, 
            "name": "辽宁轻工职业学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 514, 
            "name": "辽宁水利职业学院"
        }, 
        {
            "city": "沈阳市", 
            "id": 515, 
            "name": "辽宁特殊教育师范高等专科学校"
        }, 
        {
            "city": "长春市", 
            "id": 516, 
            "name": "吉林大学"
        }, 
        {
            "city": "延边朝鲜族自治州", 
            "id": 517, 
            "name": "延边大学"
        }, 
        {
            "city": "长春市", 
            "id": 518, 
            "name": "长春理工大学"
        }, 
        {
            "city": "吉林市", 
            "id": 519, 
            "name": "东北电力大学"
        }, 
        {
            "city": "长春市", 
            "id": 520, 
            "name": "长春工业大学"
        }, 
        {
            "city": "长春市", 
            "id": 521, 
            "name": "吉林建筑大学"
        }, 
        {
            "city": "吉林市", 
            "id": 522, 
            "name": "吉林化工学院"
        }, 
        {
            "city": "长春市", 
            "id": 523, 
            "name": "吉林农业大学"
        }, 
        {
            "city": "长春市", 
            "id": 524, 
            "name": "长春中医药大学"
        }, 
        {
            "city": "长春市", 
            "id": 525, 
            "name": "东北师范大学"
        }, 
        {
            "city": "吉林市", 
            "id": 526, 
            "name": "北华大学"
        }, 
        {
            "city": "通化市", 
            "id": 527, 
            "name": "通化师范学院"
        }, 
        {
            "city": "四平市", 
            "id": 528, 
            "name": "吉林师范大学"
        }, 
        {
            "city": "长春市", 
            "id": 529, 
            "name": "吉林工程技术师范学院"
        }, 
        {
            "city": "长春市", 
            "id": 530, 
            "name": "长春师范大学"
        }, 
        {
            "city": "白城市", 
            "id": 531, 
            "name": "白城师范学院"
        }, 
        {
            "city": "长春市", 
            "id": 532, 
            "name": "吉林财经大学"
        }, 
        {
            "city": "长春市", 
            "id": 533, 
            "name": "吉林体育学院"
        }, 
        {
            "city": "长春市", 
            "id": 534, 
            "name": "吉林艺术学院"
        }, 
        {
            "city": "长春市", 
            "id": 535, 
            "name": "吉林华桥外国语学院"
        }, 
        {
            "city": "长春市", 
            "id": 536, 
            "name": "吉林工商学院"
        }, 
        {
            "city": "长春市", 
            "id": 537, 
            "name": "长春工程学院"
        }, 
        {
            "city": "吉林市", 
            "id": 538, 
            "name": "吉林农业科技学院"
        }, 
        {
            "city": "长春市", 
            "id": 539, 
            "name": "吉林警察学院"
        }, 
        {
            "city": "长春市", 
            "id": 540, 
            "name": "长春大学"
        }, 
        {
            "city": "长春市", 
            "id": 541, 
            "name": "长春光华学院"
        }, 
        {
            "city": "长春市", 
            "id": 542, 
            "name": "长春工业大学人文信息学院"
        }, 
        {
            "city": "长春市", 
            "id": 543, 
            "name": "长春理工大学光电信息学院"
        }, 
        {
            "city": "长春市", 
            "id": 544, 
            "name": "长春财经学院"
        }, 
        {
            "city": "长春市", 
            "id": 545, 
            "name": "吉林建筑大学城建学院"
        }, 
        {
            "city": "长春市", 
            "id": 546, 
            "name": "长春建筑学院"
        }, 
        {
            "city": "长春市", 
            "id": 547, 
            "name": "长春科技学院"
        }, 
        {
            "city": "长春市", 
            "id": 548, 
            "name": "吉林动画学院"
        }, 
        {
            "city": "四平市", 
            "id": 549, 
            "name": "吉林师范大学博达学院"
        }, 
        {
            "city": "长春市", 
            "id": 550, 
            "name": "长春大学旅游学院"
        }, 
        {
            "city": "长春市", 
            "id": 551, 
            "name": "东北师范大学人文学院"
        }, 
        {
            "city": "吉林市", 
            "id": 552, 
            "name": "吉林医药学院"
        }, 
        {
            "city": "长春市", 
            "id": 553, 
            "name": "长春师范高等专科学校"
        }, 
        {
            "city": "辽源市", 
            "id": 554, 
            "name": "辽源职业技术学院"
        }, 
        {
            "city": "四平市", 
            "id": 555, 
            "name": "四平职业大学"
        }, 
        {
            "city": "长春市", 
            "id": 556, 
            "name": "长春汽车工业高等专科学校"
        }, 
        {
            "city": "长春市", 
            "id": 557, 
            "name": "长春金融高等专科学校"
        }, 
        {
            "city": "长春市", 
            "id": 558, 
            "name": "长春医学高等专科学校"
        }, 
        {
            "city": "长春市", 
            "id": 559, 
            "name": "吉林交通职业技术学院"
        }, 
        {
            "city": "长春市", 
            "id": 560, 
            "name": "长春东方职业学院"
        }, 
        {
            "city": "长春市", 
            "id": 561, 
            "name": "吉林司法警官职业学院"
        }, 
        {
            "city": "吉林市", 
            "id": 562, 
            "name": "吉林电子信息职业技术学院"
        }, 
        {
            "city": "吉林市", 
            "id": 563, 
            "name": "吉林工业职业技术学院"
        }, 
        {
            "city": "四平市", 
            "id": 564, 
            "name": "吉林工程职业学院"
        }, 
        {
            "city": "长春市", 
            "id": 565, 
            "name": "长春职业技术学院"
        }, 
        {
            "city": "白城市", 
            "id": 566, 
            "name": "白城医学高等专科学校"
        }, 
        {
            "city": "长春市", 
            "id": 567, 
            "name": "长春信息技术职业学院"
        }, 
        {
            "city": "松原市", 
            "id": 568, 
            "name": "松原职业技术学院"
        }, 
        {
            "city": "吉林市", 
            "id": 569, 
            "name": "吉林铁道职业技术学院"
        }, 
        {
            "city": "白城市", 
            "id": 570, 
            "name": "白城职业技术学院"
        }, 
        {
            "city": "白山市", 
            "id": 571, 
            "name": "长白山职业技术学院"
        }, 
        {
            "city": "长春市", 
            "id": 572, 
            "name": "吉林科技职业技术学院"
        }, 
        {
            "city": "延边朝鲜族自治州", 
            "id": 573, 
            "name": "延边职业技术学院"
        }, 
        {
            "city": "长春市", 
            "id": 574, 
            "name": "吉林城市职业技术学院"
        }, 
        {
            "city": "延边朝鲜族自治州", 
            "id": 575, 
            "name": "吉林职业技术学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 576, 
            "name": "黑龙江大学"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 577, 
            "name": "哈尔滨工业大学"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 578, 
            "name": "哈尔滨理工大学"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 579, 
            "name": "哈尔滨工程大学"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 580, 
            "name": "黑龙江科技大学"
        }, 
        {
            "city": "大庆市", 
            "id": 581, 
            "name": "东北石油大学"
        }, 
        {
            "city": "佳木斯市", 
            "id": 582, 
            "name": "佳木斯大学"
        }, 
        {
            "city": "大庆市", 
            "id": 583, 
            "name": "黑龙江八一农垦大学"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 584, 
            "name": "东北农业大学"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 585, 
            "name": "东北林业大学"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 586, 
            "name": "哈尔滨医科大学"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 587, 
            "name": "黑龙江中医药大学"
        }, 
        {
            "city": "牡丹江市", 
            "id": 588, 
            "name": "牡丹江医学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 589, 
            "name": "哈尔滨师范大学"
        }, 
        {
            "city": "齐齐哈尔市", 
            "id": 590, 
            "name": "齐齐哈尔大学"
        }, 
        {
            "city": "牡丹江市", 
            "id": 591, 
            "name": "牡丹江师范学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 592, 
            "name": "哈尔滨学院"
        }, 
        {
            "city": "大庆市", 
            "id": 593, 
            "name": "大庆师范学院"
        }, 
        {
            "city": "绥化市", 
            "id": 594, 
            "name": "绥化学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 595, 
            "name": "哈尔滨商业大学"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 596, 
            "name": "哈尔滨体育学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 597, 
            "name": "哈尔滨金融学院"
        }, 
        {
            "city": "齐齐哈尔市", 
            "id": 598, 
            "name": "齐齐哈尔医学院"
        }, 
        {
            "city": "鸡西市", 
            "id": 599, 
            "name": "黑龙江工业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 600, 
            "name": "黑龙江东方学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 601, 
            "name": "哈尔滨信息工程学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 602, 
            "name": "黑龙江工程学院"
        }, 
        {
            "city": "齐齐哈尔市", 
            "id": 603, 
            "name": "齐齐哈尔工程学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 604, 
            "name": "黑龙江外国语学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 605, 
            "name": "黑龙江财经学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 606, 
            "name": "哈尔滨石油学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 607, 
            "name": "黑龙江工商学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 608, 
            "name": "哈尔滨远东理工学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 609, 
            "name": "哈尔滨剑桥学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 610, 
            "name": "黑龙江工程学院昆仑旅游学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 611, 
            "name": "哈尔滨广厦学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 612, 
            "name": "哈尔滨华德学院"
        }, 
        {
            "city": "黑河市", 
            "id": 613, 
            "name": "黑河学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 614, 
            "name": "哈尔滨音乐学院"
        }, 
        {
            "city": "齐齐哈尔市", 
            "id": 615, 
            "name": "齐齐哈尔高等师范专科学校"
        }, 
        {
            "city": "伊春市", 
            "id": 616, 
            "name": "伊春职业学院"
        }, 
        {
            "city": "牡丹江市", 
            "id": 617, 
            "name": "牡丹江大学"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 618, 
            "name": "黑龙江职业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 619, 
            "name": "黑龙江建筑职业技术学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 620, 
            "name": "黑龙江艺术职业学院"
        }, 
        {
            "city": "大庆市", 
            "id": 621, 
            "name": "大庆职业学院"
        }, 
        {
            "city": "牡丹江市", 
            "id": 622, 
            "name": "黑龙江林业职业技术学院"
        }, 
        {
            "city": "佳木斯市", 
            "id": 623, 
            "name": "黑龙江农业职业技术学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 624, 
            "name": "黑龙江农业工程职业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 625, 
            "name": "黑龙江农垦职业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 626, 
            "name": "黑龙江司法警官职业学院"
        }, 
        {
            "city": "鹤岗市", 
            "id": 627, 
            "name": "鹤岗师范高等专科学校"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 628, 
            "name": "哈尔滨电力职业技术学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 629, 
            "name": "哈尔滨铁道职业技术学院"
        }, 
        {
            "city": "大兴安岭地区", 
            "id": 630, 
            "name": "大兴安岭职业学院"
        }, 
        {
            "city": "牡丹江市", 
            "id": 631, 
            "name": "黑龙江农业经济职业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 632, 
            "name": "哈尔滨职业技术学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 633, 
            "name": "哈尔滨传媒职业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 634, 
            "name": "黑龙江生物科技职业学院"
        }, 
        {
            "city": "牡丹江市", 
            "id": 635, 
            "name": "黑龙江商业职业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 636, 
            "name": "黑龙江公安警官职业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 637, 
            "name": "黑龙江信息技术职业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 638, 
            "name": "哈尔滨江南职业技术学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 639, 
            "name": "黑龙江农垦科技职业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 640, 
            "name": "黑龙江旅游职业技术学院"
        }, 
        {
            "city": "佳木斯市", 
            "id": 641, 
            "name": "黑龙江三江美术职业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 642, 
            "name": "黑龙江生态工程职业学院"
        }, 
        {
            "city": "双鸭山市", 
            "id": 643, 
            "name": "黑龙江煤炭职业技术学院"
        }, 
        {
            "city": "七台河市", 
            "id": 644, 
            "name": "七台河职业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 645, 
            "name": "黑龙江民族职业学院"
        }, 
        {
            "city": "大庆市", 
            "id": 646, 
            "name": "大庆医学高等专科学校"
        }, 
        {
            "city": "齐齐哈尔市", 
            "id": 647, 
            "name": "黑龙江交通职业技术学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 648, 
            "name": "哈尔滨应用职业技术学院"
        }, 
        {
            "city": "牡丹江市", 
            "id": 649, 
            "name": "黑龙江幼儿师范高等专科学校"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 650, 
            "name": "哈尔滨科学技术职业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 651, 
            "name": "黑龙江粮食职业学院"
        }, 
        {
            "city": "佳木斯市", 
            "id": 652, 
            "name": "佳木斯职业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 653, 
            "name": "黑龙江护理高等专科学校"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 654, 
            "name": "哈尔滨工程技术职业学院"
        }, 
        {
            "city": "齐齐哈尔市", 
            "id": 655, 
            "name": "齐齐哈尔理工职业学院"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 656, 
            "name": "哈尔滨幼儿师范高等专科学校"
        }, 
        {
            "city": "哈尔滨市", 
            "id": 657, 
            "name": "黑龙江冰雪体育职业学院"
        }, 
        {
            "city": "上海市", 
            "id": 658, 
            "name": "复旦大学"
        }, 
        {
            "city": "上海市", 
            "id": 659, 
            "name": "同济大学"
        }, 
        {
            "city": "上海市", 
            "id": 660, 
            "name": "上海交通大学"
        }, 
        {
            "city": "上海市", 
            "id": 661, 
            "name": "华东理工大学"
        }, 
        {
            "city": "上海市", 
            "id": 662, 
            "name": "上海理工大学"
        }, 
        {
            "city": "上海市", 
            "id": 663, 
            "name": "上海海事大学"
        }, 
        {
            "city": "上海市", 
            "id": 664, 
            "name": "东华大学"
        }, 
        {
            "city": "上海市", 
            "id": 665, 
            "name": "上海电力学院"
        }, 
        {
            "city": "上海市", 
            "id": 666, 
            "name": "上海应用技术大学"
        }, 
        {
            "city": "上海市", 
            "id": 667, 
            "name": "上海健康医学院"
        }, 
        {
            "city": "上海市", 
            "id": 668, 
            "name": "上海海洋大学"
        }, 
        {
            "city": "上海市", 
            "id": 669, 
            "name": "上海中医药大学"
        }, 
        {
            "city": "上海市", 
            "id": 670, 
            "name": "华东师范大学"
        }, 
        {
            "city": "上海市", 
            "id": 671, 
            "name": "上海师范大学"
        }, 
        {
            "city": "上海市", 
            "id": 672, 
            "name": "上海外国语大学"
        }, 
        {
            "city": "上海市", 
            "id": 673, 
            "name": "上海财经大学"
        }, 
        {
            "city": "上海市", 
            "id": 674, 
            "name": "上海对外经贸大学"
        }, 
        {
            "city": "上海市", 
            "id": 675, 
            "name": "上海海关学院"
        }, 
        {
            "city": "上海市", 
            "id": 676, 
            "name": "华东政法大学"
        }, 
        {
            "city": "上海市", 
            "id": 677, 
            "name": "上海体育学院"
        }, 
        {
            "city": "上海市", 
            "id": 678, 
            "name": "上海音乐学院"
        }, 
        {
            "city": "上海市", 
            "id": 679, 
            "name": "上海戏剧学院"
        }, 
        {
            "city": "上海市", 
            "id": 680, 
            "name": "上海大学"
        }, 
        {
            "city": "上海市", 
            "id": 681, 
            "name": "上海公安学院"
        }, 
        {
            "city": "上海市", 
            "id": 682, 
            "name": "上海工程技术大学"
        }, 
        {
            "city": "上海市", 
            "id": 683, 
            "name": "上海立信会计金融学院"
        }, 
        {
            "city": "上海市", 
            "id": 684, 
            "name": "上海电机学院"
        }, 
        {
            "city": "上海市", 
            "id": 685, 
            "name": "上海杉达学院"
        }, 
        {
            "city": "上海市", 
            "id": 686, 
            "name": "上海政法学院"
        }, 
        {
            "city": "上海市", 
            "id": 687, 
            "name": "上海第二工业大学"
        }, 
        {
            "city": "上海市", 
            "id": 688, 
            "name": "上海商学院"
        }, 
        {
            "city": "上海市", 
            "id": 689, 
            "name": "上海建桥学院"
        }, 
        {
            "city": "上海市", 
            "id": 690, 
            "name": "上海兴伟学院"
        }, 
        {
            "city": "上海市", 
            "id": 691, 
            "name": "上海视觉艺术学院"
        }, 
        {
            "city": "上海市", 
            "id": 692, 
            "name": "上海外国语大学贤达经济人文学院"
        }, 
        {
            "city": "上海市", 
            "id": 693, 
            "name": "上海师范大学天华学院"
        }, 
        {
            "city": "上海市", 
            "id": 694, 
            "name": "上海科技大学"
        }, 
        {
            "city": "上海市", 
            "id": 695, 
            "name": "上海纽约大学"
        }, 
        {
            "city": "上海市", 
            "id": 696, 
            "name": "上海旅游高等专科学校"
        }, 
        {
            "city": "上海市", 
            "id": 697, 
            "name": "上海东海职业技术学院"
        }, 
        {
            "city": "上海市", 
            "id": 698, 
            "name": "上海工商职业技术学院"
        }, 
        {
            "city": "上海市", 
            "id": 699, 
            "name": "上海出版印刷高等专科学校"
        }, 
        {
            "city": "上海市", 
            "id": 700, 
            "name": "上海行健职业学院"
        }, 
        {
            "city": "上海市", 
            "id": 701, 
            "name": "上海城建职业学院"
        }, 
        {
            "city": "上海市", 
            "id": 702, 
            "name": "上海交通职业技术学院"
        }, 
        {
            "city": "上海市", 
            "id": 703, 
            "name": "上海海事职业技术学院"
        }, 
        {
            "city": "上海市", 
            "id": 704, 
            "name": "上海电子信息职业技术学院"
        }, 
        {
            "city": "上海市", 
            "id": 705, 
            "name": "上海震旦职业学院"
        }, 
        {
            "city": "上海市", 
            "id": 706, 
            "name": "上海民远职业技术学院"
        }, 
        {
            "city": "上海市", 
            "id": 707, 
            "name": "上海欧华职业技术学院"
        }, 
        {
            "city": "上海市", 
            "id": 708, 
            "name": "上海思博职业技术学院"
        }, 
        {
            "city": "上海市", 
            "id": 709, 
            "name": "上海立达职业技术学院"
        }, 
        {
            "city": "上海市", 
            "id": 710, 
            "name": "上海工艺美术职业学院"
        }, 
        {
            "city": "上海市", 
            "id": 711, 
            "name": "上海济光职业技术学院"
        }, 
        {
            "city": "上海市", 
            "id": 712, 
            "name": "上海工商外国语职业学院"
        }, 
        {
            "city": "上海市", 
            "id": 713, 
            "name": "上海科学技术职业学院"
        }, 
        {
            "city": "上海市", 
            "id": 714, 
            "name": "上海农林职业技术学院"
        }, 
        {
            "city": "上海市", 
            "id": 715, 
            "name": "上海邦德职业技术学院"
        }, 
        {
            "city": "上海市", 
            "id": 716, 
            "name": "上海中侨职业技术学院"
        }, 
        {
            "city": "上海市", 
            "id": 717, 
            "name": "上海电影艺术职业学院"
        }, 
        {
            "city": "上海市", 
            "id": 718, 
            "name": "上海中华职业技术学院"
        }, 
        {
            "city": "上海市", 
            "id": 719, 
            "name": "上海工会管理职业学院"
        }, 
        {
            "city": "上海市", 
            "id": 720, 
            "name": "上海体育职业学院"
        }, 
        {
            "city": "上海市", 
            "id": 721, 
            "name": "上海民航职业技术学院"
        }, 
        {
            "city": "南京市", 
            "id": 722, 
            "name": "南京大学"
        }, 
        {
            "city": "苏州市", 
            "id": 723, 
            "name": "苏州大学"
        }, 
        {
            "city": "南京市", 
            "id": 724, 
            "name": "东南大学"
        }, 
        {
            "city": "南京市", 
            "id": 725, 
            "name": "南京航空航天大学"
        }, 
        {
            "city": "南京市", 
            "id": 726, 
            "name": "南京理工大学"
        }, 
        {
            "city": "镇江市", 
            "id": 727, 
            "name": "江苏科技大学"
        }, 
        {
            "city": "徐州市", 
            "id": 728, 
            "name": "中国矿业大学"
        }, 
        {
            "city": "南京市", 
            "id": 729, 
            "name": "南京工业大学"
        }, 
        {
            "city": "常州市", 
            "id": 730, 
            "name": "常州大学"
        }, 
        {
            "city": "南京市", 
            "id": 731, 
            "name": "南京邮电大学"
        }, 
        {
            "city": "南京市", 
            "id": 732, 
            "name": "河海大学"
        }, 
        {
            "city": "无锡市", 
            "id": 733, 
            "name": "江南大学"
        }, 
        {
            "city": "南京市", 
            "id": 734, 
            "name": "南京林业大学"
        }, 
        {
            "city": "镇江市", 
            "id": 735, 
            "name": "江苏大学"
        }, 
        {
            "city": "南京市", 
            "id": 736, 
            "name": "南京信息工程大学"
        }, 
        {
            "city": "南通市", 
            "id": 737, 
            "name": "南通大学"
        }, 
        {
            "city": "盐城市", 
            "id": 738, 
            "name": "盐城工学院"
        }, 
        {
            "city": "南京市", 
            "id": 739, 
            "name": "南京农业大学"
        }, 
        {
            "city": "南京市", 
            "id": 740, 
            "name": "南京医科大学"
        }, 
        {
            "city": "徐州市", 
            "id": 741, 
            "name": "徐州医科大学"
        }, 
        {
            "city": "南京市", 
            "id": 742, 
            "name": "南京中医药大学"
        }, 
        {
            "city": "南京市", 
            "id": 743, 
            "name": "中国药科大学"
        }, 
        {
            "city": "南京市", 
            "id": 744, 
            "name": "南京师范大学"
        }, 
        {
            "city": "徐州市", 
            "id": 745, 
            "name": "江苏师范大学"
        }, 
        {
            "city": "淮安市", 
            "id": 746, 
            "name": "淮阴师范学院"
        }, 
        {
            "city": "盐城市", 
            "id": 747, 
            "name": "盐城师范学院"
        }, 
        {
            "city": "南京市", 
            "id": 748, 
            "name": "南京财经大学"
        }, 
        {
            "city": "南京市", 
            "id": 749, 
            "name": "江苏警官学院"
        }, 
        {
            "city": "南京市", 
            "id": 750, 
            "name": "南京体育学院"
        }, 
        {
            "city": "南京市", 
            "id": 751, 
            "name": "南京艺术学院"
        }, 
        {
            "city": "苏州市", 
            "id": 752, 
            "name": "苏州科技大学"
        }, 
        {
            "city": "苏州市", 
            "id": 753, 
            "name": "常熟理工学院"
        }, 
        {
            "city": "淮安市", 
            "id": 754, 
            "name": "淮阴工学院"
        }, 
        {
            "city": "常州市", 
            "id": 755, 
            "name": "常州工学院"
        }, 
        {
            "city": "扬州市", 
            "id": 756, 
            "name": "扬州大学"
        }, 
        {
            "city": "南京市", 
            "id": 757, 
            "name": "三江学院"
        }, 
        {
            "city": "南京市", 
            "id": 758, 
            "name": "南京工程学院"
        }, 
        {
            "city": "南京市", 
            "id": 759, 
            "name": "南京审计大学"
        }, 
        {
            "city": "南京市", 
            "id": 760, 
            "name": "南京晓庄学院"
        }, 
        {
            "city": "常州市", 
            "id": 761, 
            "name": "江苏理工学院"
        }, 
        {
            "city": "连云港市", 
            "id": 762, 
            "name": "淮海工学院"
        }, 
        {
            "city": "徐州市", 
            "id": 763, 
            "name": "徐州工程学院"
        }, 
        {
            "city": "南京市", 
            "id": 764, 
            "name": "南京特殊教育师范学院"
        }, 
        {
            "city": "南通市", 
            "id": 765, 
            "name": "南通理工学院"
        }, 
        {
            "city": "南京市", 
            "id": 766, 
            "name": "南京森林警察学院"
        }, 
        {
            "city": "南京市", 
            "id": 767, 
            "name": "东南大学成贤学院"
        }, 
        {
            "city": "泰州市", 
            "id": 768, 
            "name": "泰州学院"
        }, 
        {
            "city": "无锡市", 
            "id": 769, 
            "name": "无锡太湖学院"
        }, 
        {
            "city": "南京市", 
            "id": 770, 
            "name": "金陵科技学院"
        }, 
        {
            "city": "徐州市", 
            "id": 771, 
            "name": "中国矿业大学徐海学院"
        }, 
        {
            "city": "南京市", 
            "id": 772, 
            "name": "南京大学金陵学院"
        }, 
        {
            "city": "南京市", 
            "id": 773, 
            "name": "南京理工大学紫金学院"
        }, 
        {
            "city": "南京市", 
            "id": 774, 
            "name": "南京航空航天大学金城学院"
        }, 
        {
            "city": "南京市", 
            "id": 775, 
            "name": "中国传媒大学南广学院"
        }, 
        {
            "city": "泰州市", 
            "id": 776, 
            "name": "南京理工大学泰州科技学院"
        }, 
        {
            "city": "泰州市", 
            "id": 777, 
            "name": "南京师范大学泰州学院"
        }, 
        {
            "city": "南京市", 
            "id": 778, 
            "name": "南京工业大学浦江学院"
        }, 
        {
            "city": "南京市", 
            "id": 779, 
            "name": "南京师范大学中北学院"
        }, 
        {
            "city": "连云港市", 
            "id": 780, 
            "name": "南京医科大学康达学院"
        }, 
        {
            "city": "泰州市", 
            "id": 781, 
            "name": "南京中医药大学翰林学院"
        }, 
        {
            "city": "南京市", 
            "id": 782, 
            "name": "南京信息工程大学滨江学院"
        }, 
        {
            "city": "苏州市", 
            "id": 783, 
            "name": "苏州大学文正学院"
        }, 
        {
            "city": "苏州市", 
            "id": 784, 
            "name": "苏州大学应用技术学院"
        }, 
        {
            "city": "苏州市", 
            "id": 785, 
            "name": "苏州科技大学天平学院"
        }, 
        {
            "city": "镇江市", 
            "id": 786, 
            "name": "江苏大学京江学院"
        }, 
        {
            "city": "扬州市", 
            "id": 787, 
            "name": "扬州大学广陵学院"
        }, 
        {
            "city": "徐州市", 
            "id": 788, 
            "name": "江苏师范大学科文学院"
        }, 
        {
            "city": "扬州市", 
            "id": 789, 
            "name": "南京邮电大学通达学院"
        }, 
        {
            "city": "镇江市", 
            "id": 790, 
            "name": "南京财经大学红山学院"
        }, 
        {
            "city": "张家港市", 
            "id": 791, 
            "name": "江苏科技大学苏州理工学院"
        }, 
        {
            "city": "泰州市", 
            "id": 792, 
            "name": "常州大学怀德学院"
        }, 
        {
            "city": "南通市", 
            "id": 793, 
            "name": "南通大学杏林学院"
        }, 
        {
            "city": "南京市", 
            "id": 794, 
            "name": "南京审计大学金审学院"
        }, 
        {
            "city": "宿迁市", 
            "id": 795, 
            "name": "宿迁学院"
        }, 
        {
            "city": "南京市", 
            "id": 796, 
            "name": "江苏第二师范学院"
        }, 
        {
            "city": "苏州市", 
            "id": 797, 
            "name": "西交利物浦大学"
        }, 
        {
            "city": "苏州市", 
            "id": 798, 
            "name": "昆山杜克大学"
        }, 
        {
            "city": "盐城市", 
            "id": 799, 
            "name": "盐城幼儿师范高等专科学校"
        }, 
        {
            "city": "苏州市", 
            "id": 800, 
            "name": "苏州幼儿师范高等专科学校"
        }, 
        {
            "city": "盐城市", 
            "id": 801, 
            "name": "民办明达职业技术学院"
        }, 
        {
            "city": "无锡市", 
            "id": 802, 
            "name": "无锡职业技术学院"
        }, 
        {
            "city": "徐州市", 
            "id": 803, 
            "name": "江苏建筑职业技术学院"
        }, 
        {
            "city": "南京市", 
            "id": 804, 
            "name": "南京工业职业技术学院"
        }, 
        {
            "city": "南通市", 
            "id": 805, 
            "name": "江苏工程职业技术学院"
        }, 
        {
            "city": "苏州市", 
            "id": 806, 
            "name": "苏州工艺美术职业技术学院"
        }, 
        {
            "city": "连云港市", 
            "id": 807, 
            "name": "连云港职业技术学院"
        }, 
        {
            "city": "镇江市", 
            "id": 808, 
            "name": "镇江市高等专科学校"
        }, 
        {
            "city": "南通市", 
            "id": 809, 
            "name": "南通职业大学"
        }, 
        {
            "city": "苏州市", 
            "id": 810, 
            "name": "苏州职业大学"
        }, 
        {
            "city": "苏州市", 
            "id": 811, 
            "name": "沙洲职业工学院"
        }, 
        {
            "city": "扬州市", 
            "id": 812, 
            "name": "扬州市职业大学"
        }, 
        {
            "city": "连云港市", 
            "id": 813, 
            "name": "连云港师范高等专科学校"
        }, 
        {
            "city": "南京市", 
            "id": 814, 
            "name": "江苏经贸职业技术学院"
        }, 
        {
            "city": "徐州市", 
            "id": 815, 
            "name": "九州职业技术学院"
        }, 
        {
            "city": "苏州市", 
            "id": 816, 
            "name": "硅湖职业技术学院"
        }, 
        {
            "city": "泰州市", 
            "id": 817, 
            "name": "泰州职业技术学院"
        }, 
        {
            "city": "常州市", 
            "id": 818, 
            "name": "常州信息职业技术学院"
        }, 
        {
            "city": "南京市", 
            "id": 819, 
            "name": "江苏联合职业技术学院"
        }, 
        {
            "city": "南京市", 
            "id": 820, 
            "name": "江苏海事职业技术学院"
        }, 
        {
            "city": "南京市", 
            "id": 821, 
            "name": "应天职业技术学院"
        }, 
        {
            "city": "无锡市", 
            "id": 822, 
            "name": "无锡科技职业学院"
        }, 
        {
            "city": "盐城市", 
            "id": 823, 
            "name": "盐城卫生职业技术学院"
        }, 
        {
            "city": "扬州市", 
            "id": 824, 
            "name": "扬州环境资源职业技术学院"
        }, 
        {
            "city": "南通市", 
            "id": 825, 
            "name": "南通科技职业学院"
        }, 
        {
            "city": "苏州市", 
            "id": 826, 
            "name": "苏州经贸职业技术学院"
        }, 
        {
            "city": "苏州市", 
            "id": 827, 
            "name": "苏州工业职业技术学院"
        }, 
        {
            "city": "苏州市", 
            "id": 828, 
            "name": "苏州托普信息职业技术学院"
        }, 
        {
            "city": "苏州市", 
            "id": 829, 
            "name": "苏州卫生职业技术学院"
        }, 
        {
            "city": "无锡市", 
            "id": 830, 
            "name": "无锡商业职业技术学院"
        }, 
        {
            "city": "南通市", 
            "id": 831, 
            "name": "南通航运职业技术学院"
        }, 
        {
            "city": "南京市", 
            "id": 832, 
            "name": "南京交通职业技术学院"
        }, 
        {
            "city": "淮安市", 
            "id": 833, 
            "name": "淮安信息职业技术学院"
        }, 
        {
            "city": "泰州市", 
            "id": 834, 
            "name": "江苏农牧科技职业学院"
        }, 
        {
            "city": "常州市", 
            "id": 835, 
            "name": "常州纺织服装职业技术学院"
        }, 
        {
            "city": "苏州市", 
            "id": 836, 
            "name": "苏州农业职业技术学院"
        }, 
        {
            "city": "苏州市", 
            "id": 837, 
            "name": "苏州工业园区职业技术学院"
        }, 
        {
            "city": "无锡市", 
            "id": 838, 
            "name": "太湖创意职业技术学院"
        }, 
        {
            "city": "淮安市", 
            "id": 839, 
            "name": "炎黄职业技术学院"
        }, 
        {
            "city": "南京市", 
            "id": 840, 
            "name": "南京科技职业学院"
        }, 
        {
            "city": "南京市", 
            "id": 841, 
            "name": "正德职业技术学院"
        }, 
        {
            "city": "南京市", 
            "id": 842, 
            "name": "钟山职业技术学院"
        }, 
        {
            "city": "无锡市", 
            "id": 843, 
            "name": "无锡南洋职业技术学院"
        }, 
        {
            "city": "无锡市", 
            "id": 844, 
            "name": "江南影视艺术职业学院"
        }, 
        {
            "city": "南京市", 
            "id": 845, 
            "name": "金肯职业技术学院"
        }, 
        {
            "city": "常州市", 
            "id": 846, 
            "name": "常州轻工职业技术学院"
        }, 
        {
            "city": "常州市", 
            "id": 847, 
            "name": "常州工程职业技术学院"
        }, 
        {
            "city": "镇江市", 
            "id": 848, 
            "name": "江苏农林职业技术学院"
        }, 
        {
            "city": "淮安市", 
            "id": 849, 
            "name": "江苏食品药品职业技术学院"
        }, 
        {
            "city": "常州市", 
            "id": 850, 
            "name": "建东职业技术学院"
        }, 
        {
            "city": "南京市", 
            "id": 851, 
            "name": "南京铁道职业技术学院"
        }, 
        {
            "city": "徐州市", 
            "id": 852, 
            "name": "徐州工业职业技术学院"
        }, 
        {
            "city": "无锡市", 
            "id": 853, 
            "name": "江苏信息职业技术学院"
        }, 
        {
            "city": "宿迁市", 
            "id": 854, 
            "name": "宿迁职业技术学院"
        }, 
        {
            "city": "南京市", 
            "id": 855, 
            "name": "南京信息职业技术学院"
        }, 
        {
            "city": "扬州市", 
            "id": 856, 
            "name": "江海职业技术学院"
        }, 
        {
            "city": "常州市", 
            "id": 857, 
            "name": "常州机电职业技术学院"
        }, 
        {
            "city": "无锡市", 
            "id": 858, 
            "name": "江阴职业技术学院"
        }, 
        {
            "city": "无锡市", 
            "id": 859, 
            "name": "无锡城市职业技术学院"
        }, 
        {
            "city": "无锡市", 
            "id": 860, 
            "name": "无锡工艺职业技术学院"
        }, 
        {
            "city": "镇江市", 
            "id": 861, 
            "name": "金山职业技术学院"
        }, 
        {
            "city": "苏州市", 
            "id": 862, 
            "name": "苏州健雄职业技术学院"
        }, 
        {
            "city": "盐城市", 
            "id": 863, 
            "name": "盐城工业职业技术学院"
        }, 
        {
            "city": "淮安市", 
            "id": 864, 
            "name": "江苏财经职业技术学院"
        }, 
        {
            "city": "扬州市", 
            "id": 865, 
            "name": "扬州工业职业技术学院"
        }, 
        {
            "city": "苏州市", 
            "id": 866, 
            "name": "苏州港大思培科技职业学院"
        }, 
        {
            "city": "苏州市", 
            "id": 867, 
            "name": "昆山登云科技职业学院"
        }, 
        {
            "city": "南京市", 
            "id": 868, 
            "name": "南京视觉艺术职业学院"
        }, 
        {
            "city": "南京市", 
            "id": 869, 
            "name": "江苏城市职业学院"
        }, 
        {
            "city": "南京市", 
            "id": 870, 
            "name": "南京城市职业学院"
        }, 
        {
            "city": "南京市", 
            "id": 871, 
            "name": "南京机电职业技术学院"
        }, 
        {
            "city": "苏州市", 
            "id": 872, 
            "name": "苏州高博软件技术职业学院"
        }, 
        {
            "city": "南京市", 
            "id": 873, 
            "name": "南京旅游职业学院"
        }, 
        {
            "city": "南京市", 
            "id": 874, 
            "name": "江苏建康职业学院"
        }, 
        {
            "city": "苏州市", 
            "id": 875, 
            "name": "苏州信息职业技术学院"
        }, 
        {
            "city": "宿迁市", 
            "id": 876, 
            "name": "宿迁泽达职业技术学院"
        }, 
        {
            "city": "苏州市", 
            "id": 877, 
            "name": "苏州工业园区服务外包职业学院"
        }, 
        {
            "city": "徐州市", 
            "id": 878, 
            "name": "徐州幼儿师范高等专科学校"
        }, 
        {
            "city": "徐州市", 
            "id": 879, 
            "name": "徐州生物工程职业技术学院"
        }, 
        {
            "city": "南通市", 
            "id": 880, 
            "name": "江苏商贸职业学院"
        }, 
        {
            "city": "南通市", 
            "id": 881, 
            "name": "南通师范高等专科学校"
        }, 
        {
            "city": "扬州市", 
            "id": 882, 
            "name": "扬州中瑞酒店职业学院"
        }, 
        {
            "city": "淮安市", 
            "id": 883, 
            "name": "江苏护理职业学院"
        }, 
        {
            "city": "连云港市", 
            "id": 884, 
            "name": "江苏财会职业学院"
        }, 
        {
            "city": "常州市", 
            "id": 885, 
            "name": "江苏城乡建设职业学院"
        }, 
        {
            "city": "镇江市", 
            "id": 886, 
            "name": "江苏航空职业技术学院"
        }, 
        {
            "city": "徐州市", 
            "id": 887, 
            "name": "江苏安全技术职业学院"
        }, 
        {
            "city": "杭州市", 
            "id": 888, 
            "name": "浙江大学"
        }, 
        {
            "city": "杭州市", 
            "id": 889, 
            "name": "杭州电子科技大学"
        }, 
        {
            "city": "杭州市", 
            "id": 890, 
            "name": "浙江工业大学"
        }, 
        {
            "city": "杭州市", 
            "id": 891, 
            "name": "浙江理工大学"
        }, 
        {
            "city": "舟山市", 
            "id": 892, 
            "name": "浙江海洋大学"
        }, 
        {
            "city": "杭州市", 
            "id": 893, 
            "name": "浙江农林大学"
        }, 
        {
            "city": "温州市", 
            "id": 894, 
            "name": "温州医科大学"
        }, 
        {
            "city": "杭州市", 
            "id": 895, 
            "name": "浙江中医药大学"
        }, 
        {
            "city": "金华市", 
            "id": 896, 
            "name": "浙江师范大学"
        }, 
        {
            "city": "杭州市", 
            "id": 897, 
            "name": "杭州师范大学"
        }, 
        {
            "city": "湖州市", 
            "id": 898, 
            "name": "湖州师范学院"
        }, 
        {
            "city": "绍兴市", 
            "id": 899, 
            "name": "绍兴文理学院"
        }, 
        {
            "city": "台州市", 
            "id": 900, 
            "name": "台州学院"
        }, 
        {
            "city": "温州市", 
            "id": 901, 
            "name": "温州大学"
        }, 
        {
            "city": "丽水市", 
            "id": 902, 
            "name": "丽水学院"
        }, 
        {
            "city": "杭州市", 
            "id": 903, 
            "name": "浙江工商大学"
        }, 
        {
            "city": "嘉兴市", 
            "id": 904, 
            "name": "嘉兴学院"
        }, 
        {
            "city": "杭州市", 
            "id": 905, 
            "name": "中国美术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 906, 
            "name": "中国计量大学"
        }, 
        {
            "city": "宁波市", 
            "id": 907, 
            "name": "公安海警学院"
        }, 
        {
            "city": "宁波市", 
            "id": 908, 
            "name": "浙江万里学院"
        }, 
        {
            "city": "杭州市", 
            "id": 909, 
            "name": "浙江科技学院"
        }, 
        {
            "city": "宁波市", 
            "id": 910, 
            "name": "宁波工程学院"
        }, 
        {
            "city": "杭州市", 
            "id": 911, 
            "name": "浙江水利水电学院"
        }, 
        {
            "city": "杭州市", 
            "id": 912, 
            "name": "浙江财经大学"
        }, 
        {
            "city": "杭州市", 
            "id": 913, 
            "name": "浙江警察学院"
        }, 
        {
            "city": "衢州市", 
            "id": 914, 
            "name": "衢州学院"
        }, 
        {
            "city": "宁波市", 
            "id": 915, 
            "name": "宁波大学"
        }, 
        {
            "city": "杭州市", 
            "id": 916, 
            "name": "浙江传媒学院"
        }, 
        {
            "city": "杭州市", 
            "id": 917, 
            "name": "浙江树人学院"
        }, 
        {
            "city": "绍兴市", 
            "id": 918, 
            "name": "浙江越秀外国语学院"
        }, 
        {
            "city": "宁波市", 
            "id": 919, 
            "name": "宁波大红鹰学院"
        }, 
        {
            "city": "杭州市", 
            "id": 920, 
            "name": "浙江大学城市学院"
        }, 
        {
            "city": "宁波市", 
            "id": 921, 
            "name": "浙江大学宁波理工学院"
        }, 
        {
            "city": "杭州市", 
            "id": 922, 
            "name": "杭州医学院"
        }, 
        {
            "city": "杭州市", 
            "id": 923, 
            "name": "浙江工业大学之江学院"
        }, 
        {
            "city": "金华市", 
            "id": 924, 
            "name": "浙江师范大学行知学院"
        }, 
        {
            "city": "宁波市", 
            "id": 925, 
            "name": "宁波大学科学技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 926, 
            "name": "杭州电子科技大学信息工程学院"
        }, 
        {
            "city": "杭州市", 
            "id": 927, 
            "name": "浙江理工大学科技与艺术学院"
        }, 
        {
            "city": "舟山市", 
            "id": 928, 
            "name": "浙江海洋大学东海科学技术学院"
        }, 
        {
            "city": "绍兴市", 
            "id": 929, 
            "name": "浙江农林大学暨阳学院"
        }, 
        {
            "city": "温州市", 
            "id": 930, 
            "name": "温州医科大学仁济学院"
        }, 
        {
            "city": "杭州市", 
            "id": 931, 
            "name": "浙江中医药大学滨江学院"
        }, 
        {
            "city": "杭州市", 
            "id": 932, 
            "name": "杭州师范大学钱江学院"
        }, 
        {
            "city": "湖州市", 
            "id": 933, 
            "name": "湖州师范学院求真学院"
        }, 
        {
            "city": "绍兴市", 
            "id": 934, 
            "name": "绍兴文理学院元培学院"
        }, 
        {
            "city": "温州市", 
            "id": 935, 
            "name": "温州大学瓯江学院"
        }, 
        {
            "city": "杭州市", 
            "id": 936, 
            "name": "浙江工商大学杭州商学院"
        }, 
        {
            "city": "嘉兴市", 
            "id": 937, 
            "name": "嘉兴学院南湖学院"
        }, 
        {
            "city": "杭州市", 
            "id": 938, 
            "name": "中国计量大学现代科技学院"
        }, 
        {
            "city": "嘉兴市", 
            "id": 939, 
            "name": "浙江财经大学东方学院"
        }, 
        {
            "city": "温州市", 
            "id": 940, 
            "name": "温州商学院"
        }, 
        {
            "city": "嘉兴市", 
            "id": 941, 
            "name": "同济大学浙江学院"
        }, 
        {
            "city": "金华市", 
            "id": 942, 
            "name": "上海财经大学浙江学院"
        }, 
        {
            "city": "杭州市", 
            "id": 943, 
            "name": "浙江外国语学院"
        }, 
        {
            "city": "杭州市", 
            "id": 944, 
            "name": "浙江音乐学院"
        }, 
        {
            "city": "宁波市", 
            "id": 945, 
            "name": "宁波诺丁汉大学"
        }, 
        {
            "city": "温州市", 
            "id": 946, 
            "name": "温州肯恩大学"
        }, 
        {
            "city": "宁波市", 
            "id": 947, 
            "name": "宁波职业技术学院"
        }, 
        {
            "city": "温州市", 
            "id": 948, 
            "name": "温州职业技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 949, 
            "name": "浙江交通职业技术学院"
        }, 
        {
            "city": "金华市", 
            "id": 950, 
            "name": "金华职业技术学院"
        }, 
        {
            "city": "宁波市", 
            "id": 951, 
            "name": "宁波城市职业技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 952, 
            "name": "浙江电力职业技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 953, 
            "name": "浙江同济科技职业学院"
        }, 
        {
            "city": "宁波市", 
            "id": 954, 
            "name": "浙江工商职业技术学院"
        }, 
        {
            "city": "台州市", 
            "id": 955, 
            "name": "台州职业技术学院"
        }, 
        {
            "city": "温州市", 
            "id": 956, 
            "name": "浙江工贸职业技术学院"
        }, 
        {
            "city": "宁波市", 
            "id": 957, 
            "name": "浙江医药高等专科学校"
        }, 
        {
            "city": "杭州市", 
            "id": 958, 
            "name": "浙江机电职业技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 959, 
            "name": "浙江建设职业技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 960, 
            "name": "浙江艺术职业学院"
        }, 
        {
            "city": "杭州市", 
            "id": 961, 
            "name": "浙江经贸职业技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 962, 
            "name": "浙江商业职业技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 963, 
            "name": "浙江经济职业技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 964, 
            "name": "浙江旅游职业学院"
        }, 
        {
            "city": "杭州市", 
            "id": 965, 
            "name": "浙江育英职业技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 966, 
            "name": "浙江警官职业学院"
        }, 
        {
            "city": "杭州市", 
            "id": 967, 
            "name": "浙江金融职业学院"
        }, 
        {
            "city": "绍兴市", 
            "id": 968, 
            "name": "浙江工业职业技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 969, 
            "name": "杭州职业技术学院"
        }, 
        {
            "city": "嘉兴市", 
            "id": 970, 
            "name": "嘉兴职业技术学院"
        }, 
        {
            "city": "湖州市", 
            "id": 971, 
            "name": "湖州职业技术学院"
        }, 
        {
            "city": "绍兴市", 
            "id": 972, 
            "name": "绍兴职业技术学院"
        }, 
        {
            "city": "衢州市", 
            "id": 973, 
            "name": "衢州职业技术学院"
        }, 
        {
            "city": "丽水市", 
            "id": 974, 
            "name": "丽水职业技术学院"
        }, 
        {
            "city": "温州市", 
            "id": 975, 
            "name": "浙江东方职业技术学院"
        }, 
        {
            "city": "金华市", 
            "id": 976, 
            "name": "义乌工商职业技术学院"
        }, 
        {
            "city": "宁波市", 
            "id": 977, 
            "name": "浙江纺织服装职业技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 978, 
            "name": "杭州科技职业技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 979, 
            "name": "浙江长征职业技术学院"
        }, 
        {
            "city": "嘉兴市", 
            "id": 980, 
            "name": "嘉兴南洋职业技术学院"
        }, 
        {
            "city": "金华市", 
            "id": 981, 
            "name": "浙江广厦建设职业技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 982, 
            "name": "杭州万向职业技术学院"
        }, 
        {
            "city": "绍兴市", 
            "id": 983, 
            "name": "浙江邮电职业技术学院"
        }, 
        {
            "city": "宁波市", 
            "id": 984, 
            "name": "宁波卫生职业技术学院"
        }, 
        {
            "city": "台州市", 
            "id": 985, 
            "name": "台州科技职业学院"
        }, 
        {
            "city": "舟山市", 
            "id": 986, 
            "name": "浙江国际海运职业技术学院"
        }, 
        {
            "city": "杭州市", 
            "id": 987, 
            "name": "浙江体育职业技术学院"
        }, 
        {
            "city": "温州市", 
            "id": 988, 
            "name": "温州科技职业学院"
        }, 
        {
            "city": "台州市", 
            "id": 989, 
            "name": "浙江汽车职业技术学院"
        }, 
        {
            "city": "金华市", 
            "id": 990, 
            "name": "浙江横店影视职业学院"
        }, 
        {
            "city": "绍兴市", 
            "id": 991, 
            "name": "浙江农业商贸职业学院"
        }, 
        {
            "city": "杭州市", 
            "id": 992, 
            "name": "浙江特殊教育职业学院"
        }, 
        {
            "city": "温州市", 
            "id": 993, 
            "name": "浙江安防职业技术学院"
        }, 
        {
            "city": "舟山市", 
            "id": 994, 
            "name": "浙江舟山群岛新区旅游与健康职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 995, 
            "name": "安徽大学"
        }, 
        {
            "city": "合肥市", 
            "id": 996, 
            "name": "中国科学技术大学"
        }, 
        {
            "city": "合肥市", 
            "id": 997, 
            "name": "合肥工业大学"
        }, 
        {
            "city": "马鞍山市", 
            "id": 998, 
            "name": "安徽工业大学"
        }, 
        {
            "city": "淮南市", 
            "id": 999, 
            "name": "安徽理工大学"
        }, 
        {
            "city": "芜湖市", 
            "id": 1000, 
            "name": "安徽工程大学"
        }, 
        {
            "city": "合肥市", 
            "id": 1001, 
            "name": "安徽农业大学"
        }, 
        {
            "city": "合肥市", 
            "id": 1002, 
            "name": "安徽医科大学"
        }, 
        {
            "city": "蚌埠市", 
            "id": 1003, 
            "name": "蚌埠医学院"
        }, 
        {
            "city": "芜湖市", 
            "id": 1004, 
            "name": "皖南医学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1005, 
            "name": "安徽中医药大学"
        }, 
        {
            "city": "芜湖市", 
            "id": 1006, 
            "name": "安徽师范大学"
        }, 
        {
            "city": "阜阳市", 
            "id": 1007, 
            "name": "阜阳师范学院"
        }, 
        {
            "city": "安庆市", 
            "id": 1008, 
            "name": "安庆师范大学"
        }, 
        {
            "city": "淮北市", 
            "id": 1009, 
            "name": "淮北师范大学"
        }, 
        {
            "city": "黄山市", 
            "id": 1010, 
            "name": "黄山学院"
        }, 
        {
            "city": "六安市", 
            "id": 1011, 
            "name": "皖西学院"
        }, 
        {
            "city": "滁州市", 
            "id": 1012, 
            "name": "滁州学院"
        }, 
        {
            "city": "蚌埠市", 
            "id": 1013, 
            "name": "安徽财经大学"
        }, 
        {
            "city": "宿州市", 
            "id": 1014, 
            "name": "宿州学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1015, 
            "name": "巢湖学院"
        }, 
        {
            "city": "淮南市", 
            "id": 1016, 
            "name": "淮南师范学院"
        }, 
        {
            "city": "铜陵市", 
            "id": 1017, 
            "name": "铜陵学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1018, 
            "name": "安徽建筑大学"
        }, 
        {
            "city": "滁州市", 
            "id": 1019, 
            "name": "安徽科技学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1020, 
            "name": "安徽三联学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1021, 
            "name": "合肥学院"
        }, 
        {
            "city": "蚌埠市", 
            "id": 1022, 
            "name": "蚌埠学院"
        }, 
        {
            "city": "池州市", 
            "id": 1023, 
            "name": "池州学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1024, 
            "name": "安徽新华学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1025, 
            "name": "安徽文达信息工程学院"
        }, 
        {
            "city": "亳州市", 
            "id": 1026, 
            "name": "亳州学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1027, 
            "name": "安徽外国语学院"
        }, 
        {
            "city": "蚌埠市", 
            "id": 1028, 
            "name": "安徽财经大学商学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1029, 
            "name": "安徽大学江淮学院"
        }, 
        {
            "city": "芜湖市", 
            "id": 1030, 
            "name": "安徽信息工程学院"
        }, 
        {
            "city": "马鞍山市", 
            "id": 1031, 
            "name": "安徽工业大学工商学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1032, 
            "name": "安徽建筑大学城市建设学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1033, 
            "name": "安徽农业大学经济技术学院"
        }, 
        {
            "city": "芜湖市", 
            "id": 1034, 
            "name": "安徽师范大学皖江学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1035, 
            "name": "安徽医科大学临床医学院"
        }, 
        {
            "city": "阜阳市", 
            "id": 1036, 
            "name": "阜阳师范学院信息工程学院"
        }, 
        {
            "city": "淮北市", 
            "id": 1037, 
            "name": "淮北师范大学信息学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1038, 
            "name": "合肥师范学院"
        }, 
        {
            "city": "马鞍山市", 
            "id": 1039, 
            "name": "河海大学文天学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1040, 
            "name": "安徽职业技术学院"
        }, 
        {
            "city": "淮北市", 
            "id": 1041, 
            "name": "淮北职业技术学院"
        }, 
        {
            "city": "芜湖市", 
            "id": 1042, 
            "name": "芜湖职业技术学院"
        }, 
        {
            "city": "淮南市", 
            "id": 1043, 
            "name": "淮南联合大学"
        }, 
        {
            "city": "芜湖市", 
            "id": 1044, 
            "name": "安徽商贸职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1045, 
            "name": "安徽水利水电职业技术学院"
        }, 
        {
            "city": "阜阳市", 
            "id": 1046, 
            "name": "阜阳职业技术学院"
        }, 
        {
            "city": "铜陵市", 
            "id": 1047, 
            "name": "铜陵职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1048, 
            "name": "民办万博科技职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1049, 
            "name": "安徽警官职业学院"
        }, 
        {
            "city": "淮南市", 
            "id": 1050, 
            "name": "淮南职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1051, 
            "name": "安徽工业经济职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1052, 
            "name": "合肥通用职业技术学院"
        }, 
        {
            "city": "淮南市", 
            "id": 1053, 
            "name": "安徽工贸职业技术学院"
        }, 
        {
            "city": "宿州市", 
            "id": 1054, 
            "name": "宿州职业技术学院"
        }, 
        {
            "city": "六安市", 
            "id": 1055, 
            "name": "六安职业技术学院"
        }, 
        {
            "city": "蚌埠市", 
            "id": 1056, 
            "name": "安徽电子信息职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1057, 
            "name": "民办合肥经济技术职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1058, 
            "name": "安徽交通职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1059, 
            "name": "安徽体育运动职业技术学院"
        }, 
        {
            "city": "芜湖市", 
            "id": 1060, 
            "name": "安徽中医药高等专科学校"
        }, 
        {
            "city": "合肥市", 
            "id": 1061, 
            "name": "安徽医学高等专科学校"
        }, 
        {
            "city": "合肥市", 
            "id": 1062, 
            "name": "合肥职业技术学院"
        }, 
        {
            "city": "滁州市", 
            "id": 1063, 
            "name": "滁州职业技术学院"
        }, 
        {
            "city": "池州市", 
            "id": 1064, 
            "name": "池州职业技术学院"
        }, 
        {
            "city": "宣城市", 
            "id": 1065, 
            "name": "宣城职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1066, 
            "name": "安徽广播影视职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1067, 
            "name": "民办合肥滨湖职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1068, 
            "name": "安徽电气工程职业技术学院"
        }, 
        {
            "city": "马鞍山市", 
            "id": 1069, 
            "name": "安徽冶金科技职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1070, 
            "name": "安徽城市管理职业学院"
        }, 
        {
            "city": "芜湖市", 
            "id": 1071, 
            "name": "安徽机电职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1072, 
            "name": "安徽工商职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1073, 
            "name": "安徽中澳科技职业学院"
        }, 
        {
            "city": "阜阳市", 
            "id": 1074, 
            "name": "阜阳科技职业学院"
        }, 
        {
            "city": "亳州市", 
            "id": 1075, 
            "name": "亳州职业技术学院"
        }, 
        {
            "city": "六安市", 
            "id": 1076, 
            "name": "安徽国防科技职业学院"
        }, 
        {
            "city": "安庆市", 
            "id": 1077, 
            "name": "安庆职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1078, 
            "name": "安徽艺术职业学院"
        }, 
        {
            "city": "马鞍山市", 
            "id": 1079, 
            "name": "马鞍山师范高等专科学校"
        }, 
        {
            "city": "合肥市", 
            "id": 1080, 
            "name": "安徽财贸职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1081, 
            "name": "安徽国际商务职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1082, 
            "name": "安徽公安职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1083, 
            "name": "安徽林业职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1084, 
            "name": "安徽审计职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1085, 
            "name": "安徽新闻出版职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1086, 
            "name": "安徽邮电职业技术学院"
        }, 
        {
            "city": "铜陵市", 
            "id": 1087, 
            "name": "安徽工业职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1088, 
            "name": "民办合肥财经职业学院"
        }, 
        {
            "city": "安庆市", 
            "id": 1089, 
            "name": "安庆医药高等专科学校"
        }, 
        {
            "city": "合肥市", 
            "id": 1090, 
            "name": "安徽涉外经济职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1091, 
            "name": "安徽绿海商务职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1092, 
            "name": "合肥共达职业技术学院"
        }, 
        {
            "city": "蚌埠市", 
            "id": 1093, 
            "name": "蚌埠经济技术职业学院"
        }, 
        {
            "city": "阜阳市", 
            "id": 1094, 
            "name": "民办安徽旅游职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1095, 
            "name": "徽商职业学院"
        }, 
        {
            "city": "马鞍山市", 
            "id": 1096, 
            "name": "马鞍山职业技术学院"
        }, 
        {
            "city": "六安市", 
            "id": 1097, 
            "name": "安徽现代信息工程职业学院"
        }, 
        {
            "city": "淮北市", 
            "id": 1098, 
            "name": "安徽矿业职业技术学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1099, 
            "name": "合肥信息技术职业学院"
        }, 
        {
            "city": "安庆市", 
            "id": 1100, 
            "name": "桐城师范高等专科学校"
        }, 
        {
            "city": "黄山市", 
            "id": 1101, 
            "name": "黄山职业技术学院"
        }, 
        {
            "city": "滁州市", 
            "id": 1102, 
            "name": "滁州城市职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1103, 
            "name": "安徽汽车职业技术学院"
        }, 
        {
            "city": "六安市", 
            "id": 1104, 
            "name": "皖西卫生职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1105, 
            "name": "合肥幼儿师范高等专科学校"
        }, 
        {
            "city": "合肥市", 
            "id": 1106, 
            "name": "安徽长江职业学院"
        }, 
        {
            "city": "芜湖市", 
            "id": 1107, 
            "name": "安徽扬子职业技术学院"
        }, 
        {
            "city": "安庆市", 
            "id": 1108, 
            "name": "安徽黄梅戏艺术职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1109, 
            "name": "安徽粮食工程职业学院"
        }, 
        {
            "city": "池州市", 
            "id": 1110, 
            "name": "安徽人口职业学院"
        }, 
        {
            "city": "合肥市", 
            "id": 1111, 
            "name": "合肥科技职业学院"
        }, 
        {
            "city": "宿州市", 
            "id": 1112, 
            "name": "皖北卫生职业学院"
        }, 
        {
            "city": "阜阳市", 
            "id": 1113, 
            "name": "阜阳幼儿师范高等专科学校"
        }, 
        {
            "city": "厦门市", 
            "id": 1114, 
            "name": "厦门大学"
        }, 
        {
            "city": "泉州市", 
            "id": 1115, 
            "name": "华侨大学"
        }, 
        {
            "city": "福州市", 
            "id": 1116, 
            "name": "福州大学"
        }, 
        {
            "city": "福州市", 
            "id": 1117, 
            "name": "福建工程学院"
        }, 
        {
            "city": "福州市", 
            "id": 1118, 
            "name": "福建农林大学"
        }, 
        {
            "city": "厦门市", 
            "id": 1119, 
            "name": "集美大学"
        }, 
        {
            "city": "福州市", 
            "id": 1120, 
            "name": "福建医科大学"
        }, 
        {
            "city": "福州市", 
            "id": 1121, 
            "name": "福建中医药大学"
        }, 
        {
            "city": "福州市", 
            "id": 1122, 
            "name": "福建师范大学"
        }, 
        {
            "city": "福州市", 
            "id": 1123, 
            "name": "闽江学院"
        }, 
        {
            "city": "南平市", 
            "id": 1124, 
            "name": "武夷学院"
        }, 
        {
            "city": "宁德市", 
            "id": 1125, 
            "name": "宁德师范学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1126, 
            "name": "泉州师范学院"
        }, 
        {
            "city": "漳州市", 
            "id": 1127, 
            "name": "闽南师范大学"
        }, 
        {
            "city": "厦门市", 
            "id": 1128, 
            "name": "厦门理工学院"
        }, 
        {
            "city": "三明市", 
            "id": 1129, 
            "name": "三明学院"
        }, 
        {
            "city": "龙岩市", 
            "id": 1130, 
            "name": "龙岩学院"
        }, 
        {
            "city": "福州市", 
            "id": 1131, 
            "name": "福建商学院"
        }, 
        {
            "city": "福州市", 
            "id": 1132, 
            "name": "福建警察学院"
        }, 
        {
            "city": "莆田市", 
            "id": 1133, 
            "name": "莆田学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1134, 
            "name": "仰恩大学"
        }, 
        {
            "city": "厦门市", 
            "id": 1135, 
            "name": "厦门医学院"
        }, 
        {
            "city": "厦门市", 
            "id": 1136, 
            "name": "厦门华厦学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1137, 
            "name": "闽南理工学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1138, 
            "name": "福建师范大学闽南科技学院"
        }, 
        {
            "city": "福州市", 
            "id": 1139, 
            "name": "福建农林大学东方学院"
        }, 
        {
            "city": "厦门市", 
            "id": 1140, 
            "name": "厦门工学院"
        }, 
        {
            "city": "福州市", 
            "id": 1141, 
            "name": "阳光学院"
        }, 
        {
            "city": "漳州市", 
            "id": 1142, 
            "name": "厦门大学嘉庚学院"
        }, 
        {
            "city": "福州市", 
            "id": 1143, 
            "name": "福州大学至诚学院"
        }, 
        {
            "city": "厦门市", 
            "id": 1144, 
            "name": "集美大学诚毅学院"
        }, 
        {
            "city": "福州市", 
            "id": 1145, 
            "name": "福建师范大学协和学院"
        }, 
        {
            "city": "福州市", 
            "id": 1146, 
            "name": "福州外语外贸学院"
        }, 
        {
            "city": "福州市", 
            "id": 1147, 
            "name": "福建江夏学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1148, 
            "name": "泉州信息工程学院"
        }, 
        {
            "city": "福州市", 
            "id": 1149, 
            "name": "福州理工学院"
        }, 
        {
            "city": "福州市", 
            "id": 1150, 
            "name": "福建农林大学金山学院"
        }, 
        {
            "city": "福州市", 
            "id": 1151, 
            "name": "福建船政交通职业学院"
        }, 
        {
            "city": "漳州市", 
            "id": 1152, 
            "name": "漳州职业技术学院"
        }, 
        {
            "city": "龙岩市", 
            "id": 1153, 
            "name": "闽西职业技术学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1154, 
            "name": "黎明职业大学"
        }, 
        {
            "city": "福州市", 
            "id": 1155, 
            "name": "福建华南女子职业学院"
        }, 
        {
            "city": "福州市", 
            "id": 1156, 
            "name": "福州职业技术学院"
        }, 
        {
            "city": "南平市", 
            "id": 1157, 
            "name": "福建林业职业技术学院"
        }, 
        {
            "city": "福州市", 
            "id": 1158, 
            "name": "福建信息职业技术学院"
        }, 
        {
            "city": "三明市", 
            "id": 1159, 
            "name": "福建水利电力职业技术学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1160, 
            "name": "福建电力职业技术学院"
        }, 
        {
            "city": "厦门市", 
            "id": 1161, 
            "name": "厦门海洋职业技术学院"
        }, 
        {
            "city": "福州市", 
            "id": 1162, 
            "name": "福建农业职业技术学院"
        }, 
        {
            "city": "福州市", 
            "id": 1163, 
            "name": "福建卫生职业技术学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1164, 
            "name": "泉州医学高等专科学校"
        }, 
        {
            "city": "福州市", 
            "id": 1165, 
            "name": "福州英华职业学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1166, 
            "name": "泉州纺织服装职业学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1167, 
            "name": "泉州华光职业学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1168, 
            "name": "泉州理工职业学院"
        }, 
        {
            "city": "福州市", 
            "id": 1169, 
            "name": "福建警官职业学院"
        }, 
        {
            "city": "南平市", 
            "id": 1170, 
            "name": "闽北职业技术学院"
        }, 
        {
            "city": "福州市", 
            "id": 1171, 
            "name": "福州黎明职业技术学院"
        }, 
        {
            "city": "厦门市", 
            "id": 1172, 
            "name": "厦门演艺职业学院"
        }, 
        {
            "city": "厦门市", 
            "id": 1173, 
            "name": "厦门华天涉外职业技术学院"
        }, 
        {
            "city": "福州市", 
            "id": 1174, 
            "name": "福州科技职业技术学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1175, 
            "name": "泉州经贸职业技术学院"
        }, 
        {
            "city": "福州市", 
            "id": 1176, 
            "name": "福建对外经济贸易职业技术学院"
        }, 
        {
            "city": "莆田市", 
            "id": 1177, 
            "name": "湄洲湾职业技术学院"
        }, 
        {
            "city": "福州市", 
            "id": 1178, 
            "name": "福建生物工程职业技术学院"
        }, 
        {
            "city": "福州市", 
            "id": 1179, 
            "name": "福建艺术职业学院"
        }, 
        {
            "city": "福州市", 
            "id": 1180, 
            "name": "福建幼儿师范高等专科学校"
        }, 
        {
            "city": "厦门市", 
            "id": 1181, 
            "name": "厦门城市职业学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1182, 
            "name": "泉州工艺美术职业学院"
        }, 
        {
            "city": "三明市", 
            "id": 1183, 
            "name": "三明职业技术学院"
        }, 
        {
            "city": "宁德市", 
            "id": 1184, 
            "name": "宁德职业技术学院"
        }, 
        {
            "city": "福州市", 
            "id": 1185, 
            "name": "福州软件职业技术学院"
        }, 
        {
            "city": "厦门市", 
            "id": 1186, 
            "name": "厦门兴才职业技术学院"
        }, 
        {
            "city": "厦门市", 
            "id": 1187, 
            "name": "厦门软件职业技术学院"
        }, 
        {
            "city": "福州市", 
            "id": 1188, 
            "name": "福建体育职业技术学院"
        }, 
        {
            "city": "漳州市", 
            "id": 1189, 
            "name": "漳州城市职业学院"
        }, 
        {
            "city": "厦门市", 
            "id": 1190, 
            "name": "厦门南洋职业学院"
        }, 
        {
            "city": "厦门市", 
            "id": 1191, 
            "name": "厦门东海职业技术学院"
        }, 
        {
            "city": "漳州市", 
            "id": 1192, 
            "name": "漳州科技职业学院"
        }, 
        {
            "city": "漳州市", 
            "id": 1193, 
            "name": "漳州理工职业学院"
        }, 
        {
            "city": "南平市", 
            "id": 1194, 
            "name": "武夷山职业学院"
        }, 
        {
            "city": "漳州市", 
            "id": 1195, 
            "name": "漳州卫生职业学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1196, 
            "name": "泉州海洋职业学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1197, 
            "name": "泉州轻工职业学院"
        }, 
        {
            "city": "厦门市", 
            "id": 1198, 
            "name": "厦门安防科技职业学院"
        }, 
        {
            "city": "泉州市", 
            "id": 1199, 
            "name": "泉州幼儿师范高等专科学校"
        }, 
        {
            "city": "福州市", 
            "id": 1200, 
            "name": "闽江师范高等专科学校"
        }, 
        {
            "city": "泉州市", 
            "id": 1201, 
            "name": "泉州工程职业技术学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1202, 
            "name": "南昌大学"
        }, 
        {
            "city": "南昌市", 
            "id": 1203, 
            "name": "华东交通大学"
        }, 
        {
            "city": "抚州市", 
            "id": 1204, 
            "name": "东华理工大学"
        }, 
        {
            "city": "南昌市", 
            "id": 1205, 
            "name": "南昌航空大学"
        }, 
        {
            "city": "赣州市", 
            "id": 1206, 
            "name": "江西理工大学"
        }, 
        {
            "city": "景德镇市", 
            "id": 1207, 
            "name": "景德镇陶瓷大学"
        }, 
        {
            "city": "南昌市", 
            "id": 1208, 
            "name": "江西农业大学"
        }, 
        {
            "city": "南昌市", 
            "id": 1209, 
            "name": "江西中医药大学"
        }, 
        {
            "city": "赣州市", 
            "id": 1210, 
            "name": "赣南医学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1211, 
            "name": "江西师范大学"
        }, 
        {
            "city": "上饶市", 
            "id": 1212, 
            "name": "上饶师范学院"
        }, 
        {
            "city": "宜春市", 
            "id": 1213, 
            "name": "宜春学院"
        }, 
        {
            "city": "赣州市", 
            "id": 1214, 
            "name": "赣南师范大学"
        }, 
        {
            "city": "吉安市", 
            "id": 1215, 
            "name": "井冈山大学"
        }, 
        {
            "city": "南昌市", 
            "id": 1216, 
            "name": "江西财经大学"
        }, 
        {
            "city": "南昌市", 
            "id": 1217, 
            "name": "江西科技学院"
        }, 
        {
            "city": "景德镇市", 
            "id": 1218, 
            "name": "景德镇学院"
        }, 
        {
            "city": "萍乡市", 
            "id": 1219, 
            "name": "萍乡学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1220, 
            "name": "江西科技师范大学"
        }, 
        {
            "city": "南昌市", 
            "id": 1221, 
            "name": "南昌工程学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1222, 
            "name": "江西警察学院"
        }, 
        {
            "city": "新余市", 
            "id": 1223, 
            "name": "新余学院"
        }, 
        {
            "city": "九江市", 
            "id": 1224, 
            "name": "九江学院"
        }, 
        {
            "city": "新余市", 
            "id": 1225, 
            "name": "江西工程学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1226, 
            "name": "南昌理工学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1227, 
            "name": "江西应用科技学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1228, 
            "name": "江西服装学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1229, 
            "name": "南昌工学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1230, 
            "name": "南昌大学科学技术学院"
        }, 
        {
            "city": "九江市", 
            "id": 1231, 
            "name": "南昌大学共青学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1232, 
            "name": "华东交通大学理工学院"
        }, 
        {
            "city": "抚州市", 
            "id": 1233, 
            "name": "东华理工大学长江学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1234, 
            "name": "南昌航空大学科技学院"
        }, 
        {
            "city": "赣州市", 
            "id": 1235, 
            "name": "江西理工大学应用科学学院"
        }, 
        {
            "city": "景德镇市", 
            "id": 1236, 
            "name": "景德镇陶瓷大学科技艺术学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1237, 
            "name": "江西农业大学南昌商学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1238, 
            "name": "江西中医药大学科技学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1239, 
            "name": "江西师范大学科学技术学院"
        }, 
        {
            "city": "赣州市", 
            "id": 1240, 
            "name": "赣南师范大学科技学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1241, 
            "name": "江西科技师范大学理工学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1242, 
            "name": "江西财经大学现代经济管理学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1243, 
            "name": "南昌师范学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1244, 
            "name": "江西工业职业技术学院"
        }, 
        {
            "city": "上饶市", 
            "id": 1245, 
            "name": "江西医学高等专科学校"
        }, 
        {
            "city": "九江市", 
            "id": 1246, 
            "name": "九江职业大学"
        }, 
        {
            "city": "九江市", 
            "id": 1247, 
            "name": "九江职业技术学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1248, 
            "name": "江西司法警官职业学院"
        }, 
        {
            "city": "景德镇市", 
            "id": 1249, 
            "name": "江西陶瓷工艺美术职业技术学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1250, 
            "name": "江西旅游商贸职业学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1251, 
            "name": "江西电力职业技术学院"
        }, 
        {
            "city": "赣州市", 
            "id": 1252, 
            "name": "江西环境工程职业学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1253, 
            "name": "江西艺术职业学院"
        }, 
        {
            "city": "鹰潭市", 
            "id": 1254, 
            "name": "鹰潭职业技术学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1255, 
            "name": "江西信息应用职业技术学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1256, 
            "name": "江西交通职业技术学院"
        }, 
        {
            "city": "九江市", 
            "id": 1257, 
            "name": "江西财经职业学院"
        }, 
        {
            "city": "赣州市", 
            "id": 1258, 
            "name": "江西应用技术职业学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1259, 
            "name": "江西现代职业技术学院"
        }, 
        {
            "city": "萍乡市", 
            "id": 1260, 
            "name": "江西工业工程职业技术学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1261, 
            "name": "江西机电职业技术学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1262, 
            "name": "江西科技职业学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1263, 
            "name": "南昌职业学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1264, 
            "name": "江西外语外贸职业学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1265, 
            "name": "江西工业贸易职业技术学院"
        }, 
        {
            "city": "宜春市", 
            "id": 1266, 
            "name": "宜春职业技术学院"
        }, 
        {
            "city": "萍乡市", 
            "id": 1267, 
            "name": "江西应用工程职业学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1268, 
            "name": "江西生物科技职业学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1269, 
            "name": "江西建设职业技术学院"
        }, 
        {
            "city": "抚州市", 
            "id": 1270, 
            "name": "抚州职业技术学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1271, 
            "name": "南昌师范高等专科学校"
        }, 
        {
            "city": "抚州市", 
            "id": 1272, 
            "name": "江西中医药高等专科学校"
        }, 
        {
            "city": "南昌市", 
            "id": 1273, 
            "name": "江西先锋软件职业技术学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1274, 
            "name": "江西经济管理职业学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1275, 
            "name": "江西制造职业技术学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1276, 
            "name": "江西工程职业学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1277, 
            "name": "江西青年职业学院"
        }, 
        {
            "city": "上饶市", 
            "id": 1278, 
            "name": "上饶职业技术学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1279, 
            "name": "江西航空职业技术学院"
        }, 
        {
            "city": "宜春市", 
            "id": 1280, 
            "name": "江西农业工程职业学院"
        }, 
        {
            "city": "新余市", 
            "id": 1281, 
            "name": "赣西科技职业学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1282, 
            "name": "江西卫生职业学院"
        }, 
        {
            "city": "新余市", 
            "id": 1283, 
            "name": "江西新能源科技职业学院"
        }, 
        {
            "city": "九江市", 
            "id": 1284, 
            "name": "江西枫林涉外经贸职业学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1285, 
            "name": "江西泰豪动漫职业学院"
        }, 
        {
            "city": "新余市", 
            "id": 1286, 
            "name": "江西冶金职业技术学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1287, 
            "name": "江西管理职业学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1288, 
            "name": "江西传媒职业学院"
        }, 
        {
            "city": "南昌市", 
            "id": 1289, 
            "name": "江西工商职业技术学院"
        }, 
        {
            "city": "景德镇市", 
            "id": 1290, 
            "name": "景德镇陶瓷职业技术学院"
        }, 
        {
            "city": "九江市", 
            "id": 1291, 
            "name": "共青科技职业学院"
        }, 
        {
            "city": "赣州市", 
            "id": 1292, 
            "name": "赣州师范高等专科学校"
        }, 
        {
            "city": "南昌市", 
            "id": 1293, 
            "name": "江西水利职业学院"
        }, 
        {
            "city": "宜春市", 
            "id": 1294, 
            "name": "宜春幼儿师范高等专科学校"
        }, 
        {
            "city": "吉安市", 
            "id": 1295, 
            "name": "吉安职业技术学院"
        }, 
        {
            "city": "宜春市", 
            "id": 1296, 
            "name": "江西洪州职业学院"
        }, 
        {
            "city": "鹰潭市", 
            "id": 1297, 
            "name": "江西师范高等专科学校"
        }, 
        {
            "city": "南昌市", 
            "id": 1298, 
            "name": "南昌影视传播职业学院"
        }, 
        {
            "city": "赣州市", 
            "id": 1299, 
            "name": "赣南卫生健康职业学院"
        }, 
        {
            "city": "济南市", 
            "id": 1300, 
            "name": "山东大学"
        }, 
        {
            "city": "青岛市", 
            "id": 1301, 
            "name": "中国海洋大学"
        }, 
        {
            "city": "青岛市", 
            "id": 1302, 
            "name": "山东科技大学"
        }, 
        {
            "city": "青岛市", 
            "id": 1303, 
            "name": "中国石油大学（华东）"
        }, 
        {
            "city": "青岛市", 
            "id": 1304, 
            "name": "青岛科技大学"
        }, 
        {
            "city": "济南市", 
            "id": 1305, 
            "name": "济南大学"
        }, 
        {
            "city": "青岛市", 
            "id": 1306, 
            "name": "青岛理工大学"
        }, 
        {
            "city": "济南市", 
            "id": 1307, 
            "name": "山东建筑大学"
        }, 
        {
            "city": "济南市", 
            "id": 1308, 
            "name": "齐鲁工业大学"
        }, 
        {
            "city": "淄博市", 
            "id": 1309, 
            "name": "山东理工大学"
        }, 
        {
            "city": "泰安市", 
            "id": 1310, 
            "name": "山东农业大学"
        }, 
        {
            "city": "青岛市", 
            "id": 1311, 
            "name": "青岛农业大学"
        }, 
        {
            "city": "潍坊市", 
            "id": 1312, 
            "name": "潍坊医学院"
        }, 
        {
            "city": "泰安市", 
            "id": 1313, 
            "name": "泰山医学院"
        }, 
        {
            "city": "滨州市", 
            "id": 1314, 
            "name": "滨州医学院"
        }, 
        {
            "city": "济南市", 
            "id": 1315, 
            "name": "山东中医药大学"
        }, 
        {
            "city": "济宁市", 
            "id": 1316, 
            "name": "济宁医学院"
        }, 
        {
            "city": "济南市", 
            "id": 1317, 
            "name": "山东师范大学"
        }, 
        {
            "city": "济宁市", 
            "id": 1318, 
            "name": "曲阜师范大学"
        }, 
        {
            "city": "聊城市", 
            "id": 1319, 
            "name": "聊城大学"
        }, 
        {
            "city": "德州市", 
            "id": 1320, 
            "name": "德州学院"
        }, 
        {
            "city": "滨州市", 
            "id": 1321, 
            "name": "滨州学院"
        }, 
        {
            "city": "烟台市", 
            "id": 1322, 
            "name": "鲁东大学"
        }, 
        {
            "city": "临沂市", 
            "id": 1323, 
            "name": "临沂大学"
        }, 
        {
            "city": "泰安市", 
            "id": 1324, 
            "name": "泰山学院"
        }, 
        {
            "city": "济宁市", 
            "id": 1325, 
            "name": "济宁学院"
        }, 
        {
            "city": "菏泽市", 
            "id": 1326, 
            "name": "菏泽学院"
        }, 
        {
            "city": "济南市", 
            "id": 1327, 
            "name": "山东财经大学"
        }, 
        {
            "city": "济南市", 
            "id": 1328, 
            "name": "山东体育学院"
        }, 
        {
            "city": "济南市", 
            "id": 1329, 
            "name": "山东艺术学院"
        }, 
        {
            "city": "淄博市", 
            "id": 1330, 
            "name": "齐鲁医药学院"
        }, 
        {
            "city": "青岛市", 
            "id": 1331, 
            "name": "青岛滨海学院"
        }, 
        {
            "city": "枣庄市", 
            "id": 1332, 
            "name": "枣庄学院"
        }, 
        {
            "city": "济南市", 
            "id": 1333, 
            "name": "山东工艺美术学院"
        }, 
        {
            "city": "青岛市", 
            "id": 1334, 
            "name": "青岛大学"
        }, 
        {
            "city": "烟台市", 
            "id": 1335, 
            "name": "烟台大学"
        }, 
        {
            "city": "潍坊市", 
            "id": 1336, 
            "name": "潍坊学院"
        }, 
        {
            "city": "济南市", 
            "id": 1337, 
            "name": "山东警察学院"
        }, 
        {
            "city": "济南市", 
            "id": 1338, 
            "name": "山东交通学院"
        }, 
        {
            "city": "烟台市", 
            "id": 1339, 
            "name": "山东工商学院"
        }, 
        {
            "city": "济南市", 
            "id": 1340, 
            "name": "山东女子学院"
        }, 
        {
            "city": "烟台市", 
            "id": 1341, 
            "name": "烟台南山学院"
        }, 
        {
            "city": "潍坊市", 
            "id": 1342, 
            "name": "潍坊科技学院"
        }, 
        {
            "city": "济南市", 
            "id": 1343, 
            "name": "山东英才学院"
        }, 
        {
            "city": "青岛市", 
            "id": 1344, 
            "name": "青岛恒星科技学院"
        }, 
        {
            "city": "青岛市", 
            "id": 1345, 
            "name": "青岛黄海学院"
        }, 
        {
            "city": "济南市", 
            "id": 1346, 
            "name": "山东现代学院"
        }, 
        {
            "city": "济南市", 
            "id": 1347, 
            "name": "山东协和学院"
        }, 
        {
            "city": "烟台市", 
            "id": 1348, 
            "name": "烟台大学文经学院"
        }, 
        {
            "city": "聊城市", 
            "id": 1349, 
            "name": "聊城大学东昌学院"
        }, 
        {
            "city": "青岛市", 
            "id": 1350, 
            "name": "青岛理工大学琴岛学院"
        }, 
        {
            "city": "济南市", 
            "id": 1351, 
            "name": "山东师范大学历山学院"
        }, 
        {
            "city": "济南市", 
            "id": 1352, 
            "name": "山东财经大学燕山学院"
        }, 
        {
            "city": "东营市", 
            "id": 1353, 
            "name": "中国石油大学胜利学院"
        }, 
        {
            "city": "泰安市", 
            "id": 1354, 
            "name": "山东科技大学泰山科技学院"
        }, 
        {
            "city": "德州市", 
            "id": 1355, 
            "name": "山东华宇工学院"
        }, 
        {
            "city": "青岛市", 
            "id": 1356, 
            "name": "青岛工学院"
        }, 
        {
            "city": "烟台市", 
            "id": 1357, 
            "name": "青岛农业大学海都学院"
        }, 
        {
            "city": "济南市", 
            "id": 1358, 
            "name": "齐鲁理工学院"
        }, 
        {
            "city": "泰安市", 
            "id": 1359, 
            "name": "山东财经大学东方学院"
        }, 
        {
            "city": "济南市", 
            "id": 1360, 
            "name": "济南大学泉城学院"
        }, 
        {
            "city": "济南市", 
            "id": 1361, 
            "name": "山东政法学院"
        }, 
        {
            "city": "济南市", 
            "id": 1362, 
            "name": "齐鲁师范学院"
        }, 
        {
            "city": "济南市", 
            "id": 1363, 
            "name": "山东青年政治学院"
        }, 
        {
            "city": "青岛市", 
            "id": 1364, 
            "name": "北京电影学院现代创意媒体学院"
        }, 
        {
            "city": "济南市", 
            "id": 1365, 
            "name": "山东管理学院"
        }, 
        {
            "city": "济南市", 
            "id": 1366, 
            "name": "山东农业工程学院"
        }, 
        {
            "city": "临沂市", 
            "id": 1367, 
            "name": "山东医学高等专科学校"
        }, 
        {
            "city": "菏泽市", 
            "id": 1368, 
            "name": "菏泽医学专科学校"
        }, 
        {
            "city": "济南市", 
            "id": 1369, 
            "name": "山东商业职业技术学院"
        }, 
        {
            "city": "济南市", 
            "id": 1370, 
            "name": "山东电力高等专科学校"
        }, 
        {
            "city": "日照市", 
            "id": 1371, 
            "name": "日照职业技术学院"
        }, 
        {
            "city": "济宁市", 
            "id": 1372, 
            "name": "曲阜远东职业技术学院"
        }, 
        {
            "city": "青岛市", 
            "id": 1373, 
            "name": "青岛职业技术学院"
        }, 
        {
            "city": "威海市", 
            "id": 1374, 
            "name": "威海职业学院"
        }, 
        {
            "city": "济南市", 
            "id": 1375, 
            "name": "山东职业学院"
        }, 
        {
            "city": "济南市", 
            "id": 1376, 
            "name": "山东劳动职业技术学院"
        }, 
        {
            "city": "莱芜市", 
            "id": 1377, 
            "name": "莱芜职业技术学院"
        }, 
        {
            "city": "济宁市", 
            "id": 1378, 
            "name": "济宁职业技术学院"
        }, 
        {
            "city": "潍坊市", 
            "id": 1379, 
            "name": "潍坊职业学院"
        }, 
        {
            "city": "烟台市", 
            "id": 1380, 
            "name": "烟台职业学院"
        }, 
        {
            "city": "东营市", 
            "id": 1381, 
            "name": "东营职业学院"
        }, 
        {
            "city": "聊城市", 
            "id": 1382, 
            "name": "聊城职业技术学院"
        }, 
        {
            "city": "滨州市", 
            "id": 1383, 
            "name": "滨州职业学院"
        }, 
        {
            "city": "潍坊市", 
            "id": 1384, 
            "name": "山东科技职业学院"
        }, 
        {
            "city": "泰安市", 
            "id": 1385, 
            "name": "山东服装职业学院"
        }, 
        {
            "city": "德州市", 
            "id": 1386, 
            "name": "德州科技职业学院"
        }, 
        {
            "city": "泰安市", 
            "id": 1387, 
            "name": "山东力明科技职业学院"
        }, 
        {
            "city": "济南市", 
            "id": 1388, 
            "name": "山东圣翰财贸职业学院"
        }, 
        {
            "city": "日照市", 
            "id": 1389, 
            "name": "山东水利职业学院"
        }, 
        {
            "city": "潍坊市", 
            "id": 1390, 
            "name": "山东畜牧兽医职业学院"
        }, 
        {
            "city": "青岛市", 
            "id": 1391, 
            "name": "青岛飞洋职业技术学院"
        }, 
        {
            "city": "东营市", 
            "id": 1392, 
            "name": "东营科技职业学院"
        }, 
        {
            "city": "潍坊市", 
            "id": 1393, 
            "name": "山东交通职业学院"
        }, 
        {
            "city": "淄博市", 
            "id": 1394, 
            "name": "淄博职业学院"
        }, 
        {
            "city": "青岛市", 
            "id": 1395, 
            "name": "山东外贸职业学院"
        }, 
        {
            "city": "青岛市", 
            "id": 1396, 
            "name": "青岛酒店管理职业技术学院"
        }, 
        {
            "city": "潍坊市", 
            "id": 1397, 
            "name": "山东信息职业技术学院"
        }, 
        {
            "city": "青岛市", 
            "id": 1398, 
            "name": "青岛港湾职业技术学院"
        }, 
        {
            "city": "东营市", 
            "id": 1399, 
            "name": "山东胜利职业学院"
        }, 
        {
            "city": "潍坊市", 
            "id": 1400, 
            "name": "山东经贸职业学院"
        }, 
        {
            "city": "淄博市", 
            "id": 1401, 
            "name": "山东工业职业学院"
        }, 
        {
            "city": "淄博市", 
            "id": 1402, 
            "name": "山东化工职业学院"
        }, 
        {
            "city": "青岛市", 
            "id": 1403, 
            "name": "青岛求实职业技术学院"
        }, 
        {
            "city": "济南市", 
            "id": 1404, 
            "name": "济南职业学院"
        }, 
        {
            "city": "烟台市", 
            "id": 1405, 
            "name": "烟台工程职业技术学院"
        }, 
        {
            "city": "济南市", 
            "id": 1406, 
            "name": "山东凯文科技职业学院"
        }, 
        {
            "city": "日照市", 
            "id": 1407, 
            "name": "山东外国语职业学院"
        }, 
        {
            "city": "潍坊市", 
            "id": 1408, 
            "name": "潍坊工商职业学院"
        }, 
        {
            "city": "德州市", 
            "id": 1409, 
            "name": "德州职业技术学院"
        }, 
        {
            "city": "枣庄市", 
            "id": 1410, 
            "name": "枣庄科技职业学院"
        }, 
        {
            "city": "淄博市", 
            "id": 1411, 
            "name": "淄博师范高等专科学校"
        }, 
        {
            "city": "烟台市", 
            "id": 1412, 
            "name": "山东中医药高等专科学校"
        }, 
        {
            "city": "济南市", 
            "id": 1413, 
            "name": "济南工程职业技术学院"
        }, 
        {
            "city": "济南市", 
            "id": 1414, 
            "name": "山东电子职业技术学院"
        }, 
        {
            "city": "济南市", 
            "id": 1415, 
            "name": "山东旅游职业学院"
        }, 
        {
            "city": "淄博市", 
            "id": 1416, 
            "name": "山东铝业职业学院"
        }, 
        {
            "city": "济南市", 
            "id": 1417, 
            "name": "山东杏林科技职业学院"
        }, 
        {
            "city": "泰安市", 
            "id": 1418, 
            "name": "泰山职业技术学院"
        }, 
        {
            "city": "威海市", 
            "id": 1419, 
            "name": "山东外事翻译职业学院"
        }, 
        {
            "city": "威海市", 
            "id": 1420, 
            "name": "山东药品食品职业学院"
        }, 
        {
            "city": "烟台市", 
            "id": 1421, 
            "name": "山东商务职业学院"
        }, 
        {
            "city": "淄博市", 
            "id": 1422, 
            "name": "山东轻工职业学院"
        }, 
        {
            "city": "济南市", 
            "id": 1423, 
            "name": "山东城市建设职业学院"
        }, 
        {
            "city": "烟台市", 
            "id": 1424, 
            "name": "烟台汽车工程职业学院"
        }, 
        {
            "city": "济南市", 
            "id": 1425, 
            "name": "山东司法警官职业学院"
        }, 
        {
            "city": "菏泽市", 
            "id": 1426, 
            "name": "菏泽家政职业学院"
        }, 
        {
            "city": "济南市", 
            "id": 1427, 
            "name": "山东传媒职业学院"
        }, 
        {
            "city": "临沂市", 
            "id": 1428, 
            "name": "临沂职业学院"
        }, 
        {
            "city": "枣庄市", 
            "id": 1429, 
            "name": "枣庄职业学院"
        }, 
        {
            "city": "济宁市", 
            "id": 1430, 
            "name": "山东理工职业学院"
        }, 
        {
            "city": "烟台市", 
            "id": 1431, 
            "name": "山东文化产业职业学院"
        }, 
        {
            "city": "青岛市", 
            "id": 1432, 
            "name": "青岛远洋船员职业学院"
        }, 
        {
            "city": "济南市", 
            "id": 1433, 
            "name": "济南幼儿师范高等专科学校"
        }, 
        {
            "city": "济南市", 
            "id": 1434, 
            "name": "济南护理职业学院"
        }, 
        {
            "city": "泰安市", 
            "id": 1435, 
            "name": "泰山护理职业学院"
        }, 
        {
            "city": "潍坊市", 
            "id": 1436, 
            "name": "山东海事职业学院"
        }, 
        {
            "city": "潍坊市", 
            "id": 1437, 
            "name": "潍坊护理职业学院"
        }, 
        {
            "city": "潍坊市", 
            "id": 1438, 
            "name": "潍坊工程职业学院"
        }, 
        {
            "city": "菏泽市", 
            "id": 1439, 
            "name": "菏泽职业学院"
        }, 
        {
            "city": "济南市", 
            "id": 1440, 
            "name": "山东艺术设计职业学院"
        }, 
        {
            "city": "威海市", 
            "id": 1441, 
            "name": "威海海洋职业学院"
        }, 
        {
            "city": "济南市", 
            "id": 1442, 
            "name": "山东特殊教育职业学院"
        }, 
        {
            "city": "烟台市", 
            "id": 1443, 
            "name": "烟台黄金职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1444, 
            "name": "华北水利水电大学"
        }, 
        {
            "city": "郑州市", 
            "id": 1445, 
            "name": "郑州大学"
        }, 
        {
            "city": "焦作市", 
            "id": 1446, 
            "name": "河南理工大学"
        }, 
        {
            "city": "郑州市", 
            "id": 1447, 
            "name": "郑州轻工业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1448, 
            "name": "河南工业大学"
        }, 
        {
            "city": "洛阳市", 
            "id": 1449, 
            "name": "河南科技大学"
        }, 
        {
            "city": "郑州市", 
            "id": 1450, 
            "name": "中原工学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1451, 
            "name": "河南农业大学"
        }, 
        {
            "city": "新乡市", 
            "id": 1452, 
            "name": "河南科技学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1453, 
            "name": "河南牧业经济学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1454, 
            "name": "河南中医药大学"
        }, 
        {
            "city": "新乡市", 
            "id": 1455, 
            "name": "新乡医学院"
        }, 
        {
            "city": "开封市", 
            "id": 1456, 
            "name": "河南大学"
        }, 
        {
            "city": "新乡市", 
            "id": 1457, 
            "name": "河南师范大学"
        }, 
        {
            "city": "信阳市", 
            "id": 1458, 
            "name": "信阳师范学院"
        }, 
        {
            "city": "周口市", 
            "id": 1459, 
            "name": "周口师范学院"
        }, 
        {
            "city": "安阳市", 
            "id": 1460, 
            "name": "安阳师范学院"
        }, 
        {
            "city": "许昌市", 
            "id": 1461, 
            "name": "许昌学院"
        }, 
        {
            "city": "南阳市", 
            "id": 1462, 
            "name": "南阳师范学院"
        }, 
        {
            "city": "洛阳市", 
            "id": 1463, 
            "name": "洛阳师范学院"
        }, 
        {
            "city": "商丘市", 
            "id": 1464, 
            "name": "商丘师范学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1465, 
            "name": "河南财经政法大学"
        }, 
        {
            "city": "郑州市", 
            "id": 1466, 
            "name": "郑州航空工业管理学院"
        }, 
        {
            "city": "驻马店市", 
            "id": 1467, 
            "name": "黄淮学院"
        }, 
        {
            "city": "平顶山市", 
            "id": 1468, 
            "name": "平顶山学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1469, 
            "name": "郑州工程技术学院"
        }, 
        {
            "city": "洛阳市", 
            "id": 1470, 
            "name": "洛阳理工学院"
        }, 
        {
            "city": "新乡市", 
            "id": 1471, 
            "name": "新乡学院"
        }, 
        {
            "city": "信阳市", 
            "id": 1472, 
            "name": "信阳农林学院"
        }, 
        {
            "city": "新乡市", 
            "id": 1473, 
            "name": "河南工学院"
        }, 
        {
            "city": "安阳市", 
            "id": 1474, 
            "name": "安阳工学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1475, 
            "name": "河南工程学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1476, 
            "name": "河南财政金融学院"
        }, 
        {
            "city": "南阳市", 
            "id": 1477, 
            "name": "南阳理工学院"
        }, 
        {
            "city": "平顶山市", 
            "id": 1478, 
            "name": "河南城建学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1479, 
            "name": "河南警察学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1480, 
            "name": "黄河科技学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1481, 
            "name": "铁道警察学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1482, 
            "name": "郑州科技学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1483, 
            "name": "郑州工业应用技术学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1484, 
            "name": "郑州师范学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1485, 
            "name": "郑州财经学院"
        }, 
        {
            "city": "焦作市", 
            "id": 1486, 
            "name": "黄河交通学院"
        }, 
        {
            "city": "商丘市", 
            "id": 1487, 
            "name": "商丘工学院"
        }, 
        {
            "city": "开封市", 
            "id": 1488, 
            "name": "河南大学民生学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1489, 
            "name": "河南师范大学新联学院"
        }, 
        {
            "city": "信阳市", 
            "id": 1490, 
            "name": "信阳学院"
        }, 
        {
            "city": "安阳市", 
            "id": 1491, 
            "name": "安阳学院"
        }, 
        {
            "city": "新乡市", 
            "id": 1492, 
            "name": "新乡医学院三全学院"
        }, 
        {
            "city": "新乡市", 
            "id": 1493, 
            "name": "河南科技学院新科学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1494, 
            "name": "郑州工商学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1495, 
            "name": "中原工学院信息商务学院"
        }, 
        {
            "city": "商丘市", 
            "id": 1496, 
            "name": "商丘学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1497, 
            "name": "郑州成功财经学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1498, 
            "name": "郑州升达经贸管理学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1499, 
            "name": "河南职业技术学院"
        }, 
        {
            "city": "漯河市", 
            "id": 1500, 
            "name": "漯河职业技术学院"
        }, 
        {
            "city": "三门峡市", 
            "id": 1501, 
            "name": "三门峡职业技术学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1502, 
            "name": "郑州铁路职业技术学院"
        }, 
        {
            "city": "开封市", 
            "id": 1503, 
            "name": "开封大学"
        }, 
        {
            "city": "焦作市", 
            "id": 1504, 
            "name": "焦作大学"
        }, 
        {
            "city": "濮阳市", 
            "id": 1505, 
            "name": "濮阳职业技术学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1506, 
            "name": "郑州电力高等专科学校"
        }, 
        {
            "city": "开封市", 
            "id": 1507, 
            "name": "黄河水利职业技术学院"
        }, 
        {
            "city": "许昌市", 
            "id": 1508, 
            "name": "许昌职业技术学院"
        }, 
        {
            "city": "焦作市", 
            "id": 1509, 
            "name": "河南工业和信息化职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1510, 
            "name": "河南水利与环境职业学院"
        }, 
        {
            "city": "商丘市", 
            "id": 1511, 
            "name": "商丘职业技术学院"
        }, 
        {
            "city": "平顶山市", 
            "id": 1512, 
            "name": "平顶山工业职业技术学院"
        }, 
        {
            "city": "周口市", 
            "id": 1513, 
            "name": "周口职业技术学院"
        }, 
        {
            "city": "济源市", 
            "id": 1514, 
            "name": "济源职业技术学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1515, 
            "name": "河南司法警官职业学院"
        }, 
        {
            "city": "鹤壁市", 
            "id": 1516, 
            "name": "鹤壁职业技术学院"
        }, 
        {
            "city": "南阳市", 
            "id": 1517, 
            "name": "河南工业职业技术学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1518, 
            "name": "郑州澍青医学高等专科学校"
        }, 
        {
            "city": "焦作市", 
            "id": 1519, 
            "name": "焦作师范高等专科学校"
        }, 
        {
            "city": "郑州市", 
            "id": 1520, 
            "name": "河南检察职业学院"
        }, 
        {
            "city": "平顶山市", 
            "id": 1521, 
            "name": "河南质量工程职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1522, 
            "name": "郑州信息科技职业学院"
        }, 
        {
            "city": "漯河市", 
            "id": 1523, 
            "name": "漯河医学高等专科学校"
        }, 
        {
            "city": "南阳市", 
            "id": 1524, 
            "name": "南阳医学高等专科学校"
        }, 
        {
            "city": "商丘市", 
            "id": 1525, 
            "name": "商丘医学高等专科学校"
        }, 
        {
            "city": "郑州市", 
            "id": 1526, 
            "name": "郑州电子信息职业技术学院"
        }, 
        {
            "city": "信阳市", 
            "id": 1527, 
            "name": "信阳职业技术学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1528, 
            "name": "嵩山少林武术职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1529, 
            "name": "郑州工业安全职业学院"
        }, 
        {
            "city": "商丘市", 
            "id": 1530, 
            "name": "永城职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1531, 
            "name": "河南经贸职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1532, 
            "name": "河南交通职业技术学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1533, 
            "name": "河南农业职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1534, 
            "name": "郑州旅游职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1535, 
            "name": "郑州职业技术学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1536, 
            "name": "河南信息统计职业学院"
        }, 
        {
            "city": "洛阳市", 
            "id": 1537, 
            "name": "河南林业职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1538, 
            "name": "河南工业贸易职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1539, 
            "name": "郑州电力职业技术学院"
        }, 
        {
            "city": "周口市", 
            "id": 1540, 
            "name": "周口科技职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1541, 
            "name": "河南建筑职业技术学院"
        }, 
        {
            "city": "漯河市", 
            "id": 1542, 
            "name": "漯河食品职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1543, 
            "name": "郑州城市职业学院"
        }, 
        {
            "city": "安阳市", 
            "id": 1544, 
            "name": "安阳职业技术学院"
        }, 
        {
            "city": "新乡市", 
            "id": 1545, 
            "name": "新乡职业技术学院"
        }, 
        {
            "city": "驻马店市", 
            "id": 1546, 
            "name": "驻马店职业技术学院"
        }, 
        {
            "city": "焦作市", 
            "id": 1547, 
            "name": "焦作工贸职业学院"
        }, 
        {
            "city": "许昌市", 
            "id": 1548, 
            "name": "许昌陶瓷职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1549, 
            "name": "郑州理工职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1550, 
            "name": "郑州信息工程职业学院"
        }, 
        {
            "city": "新乡市", 
            "id": 1551, 
            "name": "长垣烹饪职业技术学院"
        }, 
        {
            "city": "开封市", 
            "id": 1552, 
            "name": "开封文化艺术职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1553, 
            "name": "河南应用技术职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1554, 
            "name": "河南艺术职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1555, 
            "name": "河南机电职业学院"
        }, 
        {
            "city": "安阳市", 
            "id": 1556, 
            "name": "河南护理职业学院"
        }, 
        {
            "city": "许昌市", 
            "id": 1557, 
            "name": "许昌电气职业学院"
        }, 
        {
            "city": "信阳市", 
            "id": 1558, 
            "name": "信阳涉外职业技术学院"
        }, 
        {
            "city": "鹤壁市", 
            "id": 1559, 
            "name": "鹤壁汽车工程职业学院"
        }, 
        {
            "city": "南阳市", 
            "id": 1560, 
            "name": "南阳职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1561, 
            "name": "郑州商贸旅游职业学院"
        }, 
        {
            "city": "洛阳市", 
            "id": 1562, 
            "name": "河南推拿职业学院"
        }, 
        {
            "city": "洛阳市", 
            "id": 1563, 
            "name": "洛阳职业技术学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1564, 
            "name": "郑州幼儿师范高等专科学校"
        }, 
        {
            "city": "安阳市", 
            "id": 1565, 
            "name": "安阳幼儿师范高等专科学校"
        }, 
        {
            "city": "郑州市", 
            "id": 1566, 
            "name": "郑州黄河护理职业学院"
        }, 
        {
            "city": "郑州市", 
            "id": 1567, 
            "name": "河南医学高等专科学校"
        }, 
        {
            "city": "郑州市", 
            "id": 1568, 
            "name": "郑州财税金融职业学院"
        }, 
        {
            "city": "南阳市", 
            "id": 1569, 
            "name": "南阳农业职业学院"
        }, 
        {
            "city": "洛阳市", 
            "id": 1570, 
            "name": "洛阳科技职业学院"
        }, 
        {
            "city": "鹤壁市", 
            "id": 1571, 
            "name": "鹤壁能源化工职业学院"
        }, 
        {
            "city": "平顶山市", 
            "id": 1572, 
            "name": "平顶山文化艺术职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1573, 
            "name": "武汉大学"
        }, 
        {
            "city": "武汉市", 
            "id": 1574, 
            "name": "华中科技大学"
        }, 
        {
            "city": "武汉市", 
            "id": 1575, 
            "name": "武汉科技大学"
        }, 
        {
            "city": "荆州市", 
            "id": 1576, 
            "name": "长江大学"
        }, 
        {
            "city": "武汉市", 
            "id": 1577, 
            "name": "武汉工程大学"
        }, 
        {
            "city": "武汉市", 
            "id": 1578, 
            "name": "中国地质大学（武汉）"
        }, 
        {
            "city": "武汉市", 
            "id": 1579, 
            "name": "武汉纺织大学"
        }, 
        {
            "city": "武汉市", 
            "id": 1580, 
            "name": "武汉轻工大学"
        }, 
        {
            "city": "武汉市", 
            "id": 1581, 
            "name": "武汉理工大学"
        }, 
        {
            "city": "武汉市", 
            "id": 1582, 
            "name": "湖北工业大学"
        }, 
        {
            "city": "武汉市", 
            "id": 1583, 
            "name": "华中农业大学"
        }, 
        {
            "city": "武汉市", 
            "id": 1584, 
            "name": "湖北中医药大学"
        }, 
        {
            "city": "武汉市", 
            "id": 1585, 
            "name": "华中师范大学"
        }, 
        {
            "city": "武汉市", 
            "id": 1586, 
            "name": "湖北大学"
        }, 
        {
            "city": "黄石市", 
            "id": 1587, 
            "name": "湖北师范大学"
        }, 
        {
            "city": "黄冈市", 
            "id": 1588, 
            "name": "黄冈师范学院"
        }, 
        {
            "city": "恩施土家族苗族自治州", 
            "id": 1589, 
            "name": "湖北民族学院"
        }, 
        {
            "city": "十堰市", 
            "id": 1590, 
            "name": "汉江师范学院"
        }, 
        {
            "city": "襄阳市", 
            "id": 1591, 
            "name": "湖北文理学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1592, 
            "name": "中南财经政法大学"
        }, 
        {
            "city": "武汉市", 
            "id": 1593, 
            "name": "武汉体育学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1594, 
            "name": "湖北美术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1595, 
            "name": "中南民族大学"
        }, 
        {
            "city": "十堰市", 
            "id": 1596, 
            "name": "湖北汽车工业学院"
        }, 
        {
            "city": "孝感市", 
            "id": 1597, 
            "name": "湖北工程学院"
        }, 
        {
            "city": "黄石市", 
            "id": 1598, 
            "name": "湖北理工学院"
        }, 
        {
            "city": "咸宁市", 
            "id": 1599, 
            "name": "湖北科技学院"
        }, 
        {
            "city": "十堰市", 
            "id": 1600, 
            "name": "湖北医药学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1601, 
            "name": "江汉大学"
        }, 
        {
            "city": "宜昌市", 
            "id": 1602, 
            "name": "三峡大学"
        }, 
        {
            "city": "武汉市", 
            "id": 1603, 
            "name": "湖北警官学院"
        }, 
        {
            "city": "荆门市", 
            "id": 1604, 
            "name": "荆楚理工学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1605, 
            "name": "武汉音乐学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1606, 
            "name": "湖北经济学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1607, 
            "name": "武汉商学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1608, 
            "name": "武汉东湖学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1609, 
            "name": "汉口学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1610, 
            "name": "武昌首义学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1611, 
            "name": "武昌理工学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1612, 
            "name": "武汉生物工程学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1613, 
            "name": "武汉晴川学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1614, 
            "name": "湖北大学知行学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1615, 
            "name": "武汉科技大学城市学院"
        }, 
        {
            "city": "宜昌市", 
            "id": 1616, 
            "name": "三峡大学科技学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1617, 
            "name": "江汉大学文理学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1618, 
            "name": "湖北工业大学工程技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1619, 
            "name": "武汉工程大学邮电与信息工程学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1620, 
            "name": "武汉纺织大学外经贸学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1621, 
            "name": "武昌工学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1622, 
            "name": "武汉工商学院"
        }, 
        {
            "city": "荆州市", 
            "id": 1623, 
            "name": "长江大学工程技术学院"
        }, 
        {
            "city": "荆州市", 
            "id": 1624, 
            "name": "长江大学文理学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1625, 
            "name": "湖北商贸学院"
        }, 
        {
            "city": "十堰市", 
            "id": 1626, 
            "name": "湖北汽车工业学院科技学院"
        }, 
        {
            "city": "十堰市", 
            "id": 1627, 
            "name": "湖北医药学院药护学院"
        }, 
        {
            "city": "恩施土家族苗族自治州", 
            "id": 1628, 
            "name": "湖北民族学院科技学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1629, 
            "name": "湖北经济学院法商学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1630, 
            "name": "武汉体育学院体育科技学院"
        }, 
        {
            "city": "黄石市", 
            "id": 1631, 
            "name": "湖北师范大学文理学院"
        }, 
        {
            "city": "襄阳市", 
            "id": 1632, 
            "name": "湖北文理学院理工学院"
        }, 
        {
            "city": "孝感市", 
            "id": 1633, 
            "name": "湖北工程学院新技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1634, 
            "name": "文华学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1635, 
            "name": "武汉学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1636, 
            "name": "武汉工程科技学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1637, 
            "name": "武汉华夏理工学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1638, 
            "name": "武汉传媒学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1639, 
            "name": "武汉设计工程学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1640, 
            "name": "湖北第二师范学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1641, 
            "name": "武汉职业技术学院"
        }, 
        {
            "city": "黄冈市", 
            "id": 1642, 
            "name": "黄冈职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1643, 
            "name": "长江职业学院"
        }, 
        {
            "city": "荆州市", 
            "id": 1644, 
            "name": "荆州理工职业学院"
        }, 
        {
            "city": "十堰市", 
            "id": 1645, 
            "name": "湖北工业职业技术学院"
        }, 
        {
            "city": "鄂州市", 
            "id": 1646, 
            "name": "鄂州职业大学"
        }, 
        {
            "city": "武汉市", 
            "id": 1647, 
            "name": "武汉城市职业学院"
        }, 
        {
            "city": "孝感市", 
            "id": 1648, 
            "name": "湖北职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1649, 
            "name": "武汉船舶职业技术学院"
        }, 
        {
            "city": "恩施土家族苗族自治州", 
            "id": 1650, 
            "name": "恩施职业技术学院"
        }, 
        {
            "city": "襄阳市", 
            "id": 1651, 
            "name": "襄阳职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1652, 
            "name": "武汉工贸职业学院"
        }, 
        {
            "city": "荆州市", 
            "id": 1653, 
            "name": "荆州职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1654, 
            "name": "武汉工程职业技术学院"
        }, 
        {
            "city": "仙桃市", 
            "id": 1655, 
            "name": "仙桃职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1656, 
            "name": "湖北轻工职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1657, 
            "name": "湖北交通职业技术学院"
        }, 
        {
            "city": "荆州市", 
            "id": 1658, 
            "name": "湖北中医药高等专科学校"
        }, 
        {
            "city": "武汉市", 
            "id": 1659, 
            "name": "武汉航海职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1660, 
            "name": "武汉铁路职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1661, 
            "name": "武汉软件工程职业学院"
        }, 
        {
            "city": "宜昌市", 
            "id": 1662, 
            "name": "湖北三峡职业技术学院"
        }, 
        {
            "city": "随州市", 
            "id": 1663, 
            "name": "随州职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1664, 
            "name": "武汉电力职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1665, 
            "name": "湖北水利水电职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1666, 
            "name": "湖北城市建设职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1667, 
            "name": "武汉警官职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1668, 
            "name": "湖北生物科技职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1669, 
            "name": "湖北开放职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1670, 
            "name": "武汉科技职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1671, 
            "name": "武汉外语外事职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1672, 
            "name": "武汉信息传播职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1673, 
            "name": "武昌职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1674, 
            "name": "武汉商贸职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1675, 
            "name": "湖北艺术职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1676, 
            "name": "武汉交通职业学院"
        }, 
        {
            "city": "咸宁市", 
            "id": 1677, 
            "name": "咸宁职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1678, 
            "name": "长江工程职业技术学院"
        }, 
        {
            "city": "潜江市", 
            "id": 1679, 
            "name": "江汉艺术职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1680, 
            "name": "武汉工业职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1681, 
            "name": "武汉民政职业学院"
        }, 
        {
            "city": "黄冈市", 
            "id": 1682, 
            "name": "鄂东职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1683, 
            "name": "湖北财税职业学院"
        }, 
        {
            "city": "黄冈市", 
            "id": 1684, 
            "name": "黄冈科技职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1685, 
            "name": "湖北国土资源职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1686, 
            "name": "湖北生态工程职业技术学院"
        }, 
        {
            "city": "宜昌市", 
            "id": 1687, 
            "name": "三峡电力职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1688, 
            "name": "湖北科技职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1689, 
            "name": "湖北青年职业学院"
        }, 
        {
            "city": "黄石市", 
            "id": 1690, 
            "name": "湖北工程职业学院"
        }, 
        {
            "city": "宜昌市", 
            "id": 1691, 
            "name": "三峡旅游职业技术学院"
        }, 
        {
            "city": "天门市", 
            "id": 1692, 
            "name": "天门职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1693, 
            "name": "湖北体育职业学院"
        }, 
        {
            "city": "襄阳市", 
            "id": 1694, 
            "name": "襄阳汽车职业技术学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1695, 
            "name": "湖北幼儿师范高等专科学校"
        }, 
        {
            "city": "武汉市", 
            "id": 1696, 
            "name": "湖北铁道运输职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1697, 
            "name": "武汉海事职业学院"
        }, 
        {
            "city": "十堰市", 
            "id": 1698, 
            "name": "武当职业学院"
        }, 
        {
            "city": "荆门市", 
            "id": 1699, 
            "name": "荆门职业学院"
        }, 
        {
            "city": "武汉市", 
            "id": 1700, 
            "name": "武汉铁路桥梁职业学院"
        }, 
        {
            "city": "湘潭市", 
            "id": 1701, 
            "name": "湘潭大学"
        }, 
        {
            "city": "湘西土家族苗族自治州", 
            "id": 1702, 
            "name": "吉首大学"
        }, 
        {
            "city": "长沙市", 
            "id": 1703, 
            "name": "湖南大学"
        }, 
        {
            "city": "长沙市", 
            "id": 1704, 
            "name": "中南大学"
        }, 
        {
            "city": "湘潭市", 
            "id": 1705, 
            "name": "湖南科技大学"
        }, 
        {
            "city": "长沙市", 
            "id": 1706, 
            "name": "长沙理工大学"
        }, 
        {
            "city": "长沙市", 
            "id": 1707, 
            "name": "湖南农业大学"
        }, 
        {
            "city": "长沙市", 
            "id": 1708, 
            "name": "中南林业科技大学"
        }, 
        {
            "city": "长沙市", 
            "id": 1709, 
            "name": "湖南中医药大学"
        }, 
        {
            "city": "长沙市", 
            "id": 1710, 
            "name": "湖南师范大学"
        }, 
        {
            "city": "岳阳市", 
            "id": 1711, 
            "name": "湖南理工学院"
        }, 
        {
            "city": "郴州市", 
            "id": 1712, 
            "name": "湘南学院"
        }, 
        {
            "city": "衡阳市", 
            "id": 1713, 
            "name": "衡阳师范学院"
        }, 
        {
            "city": "邵阳市", 
            "id": 1714, 
            "name": "邵阳学院"
        }, 
        {
            "city": "怀化市", 
            "id": 1715, 
            "name": "怀化学院"
        }, 
        {
            "city": "常德市", 
            "id": 1716, 
            "name": "湖南文理学院"
        }, 
        {
            "city": "永州市", 
            "id": 1717, 
            "name": "湖南科技学院"
        }, 
        {
            "city": "娄底市", 
            "id": 1718, 
            "name": "湖南人文科技学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1719, 
            "name": "湖南商学院"
        }, 
        {
            "city": "衡阳市", 
            "id": 1720, 
            "name": "南华大学"
        }, 
        {
            "city": "长沙市", 
            "id": 1721, 
            "name": "长沙医学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1722, 
            "name": "长沙学院"
        }, 
        {
            "city": "湘潭市", 
            "id": 1723, 
            "name": "湖南工程学院"
        }, 
        {
            "city": "益阳市", 
            "id": 1724, 
            "name": "湖南城市学院"
        }, 
        {
            "city": "衡阳市", 
            "id": 1725, 
            "name": "湖南工学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1726, 
            "name": "湖南财政经济学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1727, 
            "name": "湖南警察学院"
        }, 
        {
            "city": "株洲市", 
            "id": 1728, 
            "name": "湖南工业大学"
        }, 
        {
            "city": "长沙市", 
            "id": 1729, 
            "name": "湖南女子学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1730, 
            "name": "湖南第一师范学院"
        }, 
        {
            "city": "怀化市", 
            "id": 1731, 
            "name": "湖南医药学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1732, 
            "name": "湖南涉外经济学院"
        }, 
        {
            "city": "湘潭市", 
            "id": 1733, 
            "name": "湘潭大学兴湘学院"
        }, 
        {
            "city": "株洲市", 
            "id": 1734, 
            "name": "湖南工业大学科技学院"
        }, 
        {
            "city": "湘潭市", 
            "id": 1735, 
            "name": "湖南科技大学潇湘学院"
        }, 
        {
            "city": "衡阳市", 
            "id": 1736, 
            "name": "南华大学船山学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1737, 
            "name": "湖南商学院北津学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1738, 
            "name": "湖南师范大学树达学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1739, 
            "name": "湖南农业大学东方科技学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1740, 
            "name": "中南林业科技大学涉外学院"
        }, 
        {
            "city": "常德市", 
            "id": 1741, 
            "name": "湖南文理学院芙蓉学院"
        }, 
        {
            "city": "岳阳市", 
            "id": 1742, 
            "name": "湖南理工学院南湖学院"
        }, 
        {
            "city": "衡阳市", 
            "id": 1743, 
            "name": "衡阳师范学院南岳学院"
        }, 
        {
            "city": "湘潭市", 
            "id": 1744, 
            "name": "湖南工程学院应用技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1745, 
            "name": "湖南中医药大学湘杏学院"
        }, 
        {
            "city": "张家界市", 
            "id": 1746, 
            "name": "吉首大学张家界学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1747, 
            "name": "长沙理工大学城南学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1748, 
            "name": "长沙师范学院"
        }, 
        {
            "city": "常德市", 
            "id": 1749, 
            "name": "湖南应用技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1750, 
            "name": "湖南信息学院"
        }, 
        {
            "city": "衡阳市", 
            "id": 1751, 
            "name": "湖南交通工程学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1752, 
            "name": "长沙民政职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1753, 
            "name": "湖南工业职业技术学院"
        }, 
        {
            "city": "株洲市", 
            "id": 1754, 
            "name": "株洲师范高等专科学校"
        }, 
        {
            "city": "长沙市", 
            "id": 1755, 
            "name": "湖南信息职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1756, 
            "name": "湖南税务高等专科学校"
        }, 
        {
            "city": "株洲市", 
            "id": 1757, 
            "name": "湖南冶金职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1758, 
            "name": "长沙航空职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1759, 
            "name": "湖南大众传媒职业技术学院"
        }, 
        {
            "city": "永州市", 
            "id": 1760, 
            "name": "永州职业技术学院"
        }, 
        {
            "city": "株洲市", 
            "id": 1761, 
            "name": "湖南铁道职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1762, 
            "name": "湖南科技职业学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1763, 
            "name": "湖南生物机电职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1764, 
            "name": "湖南交通职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1765, 
            "name": "湖南商务职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1766, 
            "name": "湖南体育职业学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1767, 
            "name": "湖南工程职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1768, 
            "name": "保险职业学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1769, 
            "name": "湖南外贸职业学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1770, 
            "name": "湖南网络工程职业学院"
        }, 
        {
            "city": "邵阳市", 
            "id": 1771, 
            "name": "邵阳职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1772, 
            "name": "湖南司法警官职业学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1773, 
            "name": "长沙商贸旅游职业技术学院"
        }, 
        {
            "city": "衡阳市", 
            "id": 1774, 
            "name": "湖南环境生物职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1775, 
            "name": "湖南邮电职业技术学院"
        }, 
        {
            "city": "湘潭市", 
            "id": 1776, 
            "name": "湘潭医卫职业技术学院"
        }, 
        {
            "city": "郴州市", 
            "id": 1777, 
            "name": "郴州职业技术学院"
        }, 
        {
            "city": "娄底市", 
            "id": 1778, 
            "name": "娄底职业技术学院"
        }, 
        {
            "city": "张家界市", 
            "id": 1779, 
            "name": "张家界航空工业职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1780, 
            "name": "长沙环境保护职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1781, 
            "name": "湖南艺术职业学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1782, 
            "name": "湖南机电职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1783, 
            "name": "长沙职业技术学院"
        }, 
        {
            "city": "怀化市", 
            "id": 1784, 
            "name": "怀化职业技术学院"
        }, 
        {
            "city": "岳阳市", 
            "id": 1785, 
            "name": "岳阳职业技术学院"
        }, 
        {
            "city": "常德市", 
            "id": 1786, 
            "name": "常德职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1787, 
            "name": "长沙南方职业学院"
        }, 
        {
            "city": "娄底市", 
            "id": 1788, 
            "name": "潇湘职业学院"
        }, 
        {
            "city": "株洲市", 
            "id": 1789, 
            "name": "湖南化工职业技术学院"
        }, 
        {
            "city": "湘潭市", 
            "id": 1790, 
            "name": "湖南城建职业技术学院"
        }, 
        {
            "city": "岳阳市", 
            "id": 1791, 
            "name": "湖南石油化工职业技术学院"
        }, 
        {
            "city": "株洲市", 
            "id": 1792, 
            "name": "湖南中医药高等专科学校"
        }, 
        {
            "city": "岳阳市", 
            "id": 1793, 
            "name": "湖南民族职业学院"
        }, 
        {
            "city": "湘西土家族苗族自治州", 
            "id": 1794, 
            "name": "湘西民族职业技术学院"
        }, 
        {
            "city": "衡阳市", 
            "id": 1795, 
            "name": "湖南财经工业职业技术学院"
        }, 
        {
            "city": "益阳市", 
            "id": 1796, 
            "name": "益阳职业技术学院"
        }, 
        {
            "city": "益阳市", 
            "id": 1797, 
            "name": "湖南工艺美术职业学院"
        }, 
        {
            "city": "永州市", 
            "id": 1798, 
            "name": "湖南九嶷职业技术学院"
        }, 
        {
            "city": "湘潭市", 
            "id": 1799, 
            "name": "湖南理工职业技术学院"
        }, 
        {
            "city": "湘潭市", 
            "id": 1800, 
            "name": "湖南软件职业学院"
        }, 
        {
            "city": "株洲市", 
            "id": 1801, 
            "name": "湖南汽车工程职业学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1802, 
            "name": "长沙电力职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1803, 
            "name": "湖南水利水电职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1804, 
            "name": "湖南现代物流职业技术学院"
        }, 
        {
            "city": "衡阳市", 
            "id": 1805, 
            "name": "湖南高速铁路职业技术学院"
        }, 
        {
            "city": "株洲市", 
            "id": 1806, 
            "name": "湖南铁路科技职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1807, 
            "name": "湖南安全技术职业学院"
        }, 
        {
            "city": "湘潭市", 
            "id": 1808, 
            "name": "湖南电气职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1809, 
            "name": "湖南外国语职业学院"
        }, 
        {
            "city": "益阳市", 
            "id": 1810, 
            "name": "益阳医学高等专科学校"
        }, 
        {
            "city": "长沙市", 
            "id": 1811, 
            "name": "湖南都市职业学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1812, 
            "name": "湖南电子科技职业学院"
        }, 
        {
            "city": "湘潭市", 
            "id": 1813, 
            "name": "湖南国防工业职业技术学院"
        }, 
        {
            "city": "常德市", 
            "id": 1814, 
            "name": "湖南高尔夫旅游职业学院"
        }, 
        {
            "city": "衡阳市", 
            "id": 1815, 
            "name": "湖南工商职业学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1816, 
            "name": "湖南三一工业职业技术学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1817, 
            "name": "长沙卫生职业学院"
        }, 
        {
            "city": "长沙市", 
            "id": 1818, 
            "name": "湖南食品药品职业学院"
        }, 
        {
            "city": "株洲市", 
            "id": 1819, 
            "name": "湖南有色金属职业技术学院"
        }, 
        {
            "city": "湘潭市", 
            "id": 1820, 
            "name": "湖南吉利汽车职业技术学院"
        }, 
        {
            "city": "常德市", 
            "id": 1821, 
            "name": "湖南幼儿师范高等专科学校"
        }, 
        {
            "city": "郴州市", 
            "id": 1822, 
            "name": "湘南幼儿师范高等专科学校"
        }, 
        {
            "city": "长沙市", 
            "id": 1823, 
            "name": "湖南劳动人事职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1824, 
            "name": "中山大学"
        }, 
        {
            "city": "广州市", 
            "id": 1825, 
            "name": "暨南大学"
        }, 
        {
            "city": "汕头市", 
            "id": 1826, 
            "name": "汕头大学"
        }, 
        {
            "city": "广州市", 
            "id": 1827, 
            "name": "华南理工大学"
        }, 
        {
            "city": "广州市", 
            "id": 1828, 
            "name": "华南农业大学"
        }, 
        {
            "city": "湛江市", 
            "id": 1829, 
            "name": "广东海洋大学"
        }, 
        {
            "city": "广州市", 
            "id": 1830, 
            "name": "广州医科大学"
        }, 
        {
            "city": "湛江市", 
            "id": 1831, 
            "name": "广东医科大学"
        }, 
        {
            "city": "广州市", 
            "id": 1832, 
            "name": "广州中医药大学"
        }, 
        {
            "city": "广州市", 
            "id": 1833, 
            "name": "广东药科大学"
        }, 
        {
            "city": "广州市", 
            "id": 1834, 
            "name": "华南师范大学"
        }, 
        {
            "city": "韶关市", 
            "id": 1835, 
            "name": "韶关学院"
        }, 
        {
            "city": "惠州市", 
            "id": 1836, 
            "name": "惠州学院"
        }, 
        {
            "city": "潮州市", 
            "id": 1837, 
            "name": "韩山师范学院"
        }, 
        {
            "city": "湛江市", 
            "id": 1838, 
            "name": "岭南师范学院"
        }, 
        {
            "city": "肇庆市", 
            "id": 1839, 
            "name": "肇庆学院"
        }, 
        {
            "city": "梅州市", 
            "id": 1840, 
            "name": "嘉应学院"
        }, 
        {
            "city": "广州市", 
            "id": 1841, 
            "name": "广州体育学院"
        }, 
        {
            "city": "广州市", 
            "id": 1842, 
            "name": "广州美术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1843, 
            "name": "星海音乐学院"
        }, 
        {
            "city": "广州市", 
            "id": 1844, 
            "name": "广东技术师范学院"
        }, 
        {
            "city": "深圳市", 
            "id": 1845, 
            "name": "深圳大学"
        }, 
        {
            "city": "广州市", 
            "id": 1846, 
            "name": "广东财经大学"
        }, 
        {
            "city": "广州市", 
            "id": 1847, 
            "name": "广东白云学院"
        }, 
        {
            "city": "广州市", 
            "id": 1848, 
            "name": "广州大学"
        }, 
        {
            "city": "广州市", 
            "id": 1849, 
            "name": "广州航海学院"
        }, 
        {
            "city": "广州市", 
            "id": 1850, 
            "name": "广东警官学院"
        }, 
        {
            "city": "广州市", 
            "id": 1851, 
            "name": "仲恺农业工程学院"
        }, 
        {
            "city": "江门市", 
            "id": 1852, 
            "name": "五邑大学"
        }, 
        {
            "city": "广州市", 
            "id": 1853, 
            "name": "广东金融学院"
        }, 
        {
            "city": "中山市", 
            "id": 1854, 
            "name": "电子科技大学中山学院"
        }, 
        {
            "city": "茂名市", 
            "id": 1855, 
            "name": "广东石油化工学院"
        }, 
        {
            "city": "东莞市", 
            "id": 1856, 
            "name": "东莞理工学院"
        }, 
        {
            "city": "广州市", 
            "id": 1857, 
            "name": "广东工业大学"
        }, 
        {
            "city": "广州市", 
            "id": 1858, 
            "name": "广东外语外贸大学"
        }, 
        {
            "city": "佛山市", 
            "id": 1859, 
            "name": "佛山科学技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1860, 
            "name": "广东培正学院"
        }, 
        {
            "city": "广州市", 
            "id": 1861, 
            "name": "南方医科大学"
        }, 
        {
            "city": "佛山市", 
            "id": 1862, 
            "name": "广东东软学院"
        }, 
        {
            "city": "广州市", 
            "id": 1863, 
            "name": "华南理工大学广州学院"
        }, 
        {
            "city": "广州市", 
            "id": 1864, 
            "name": "广州大学华软软件学院"
        }, 
        {
            "city": "广州市", 
            "id": 1865, 
            "name": "中山大学南方学院"
        }, 
        {
            "city": "广州市", 
            "id": 1866, 
            "name": "广东外语外贸大学南国商学院"
        }, 
        {
            "city": "广州市", 
            "id": 1867, 
            "name": "广东财经大学华商学院"
        }, 
        {
            "city": "湛江市", 
            "id": 1868, 
            "name": "广东海洋大学寸金学院"
        }, 
        {
            "city": "广州市", 
            "id": 1869, 
            "name": "华南农业大学珠江学院"
        }, 
        {
            "city": "广州市", 
            "id": 1870, 
            "name": "广东技术师范学院天河学院"
        }, 
        {
            "city": "珠海市", 
            "id": 1871, 
            "name": "北京师范大学珠海分校"
        }, 
        {
            "city": "广州市", 
            "id": 1872, 
            "name": "广东工业大学华立学院"
        }, 
        {
            "city": "广州市", 
            "id": 1873, 
            "name": "广州大学松田学院"
        }, 
        {
            "city": "广州市", 
            "id": 1874, 
            "name": "广州商学院"
        }, 
        {
            "city": "珠海市", 
            "id": 1875, 
            "name": "北京理工大学珠海学院"
        }, 
        {
            "city": "珠海市", 
            "id": 1876, 
            "name": "吉林大学珠海学院"
        }, 
        {
            "city": "广州市", 
            "id": 1877, 
            "name": "广州工商学院"
        }, 
        {
            "city": "东莞市", 
            "id": 1878, 
            "name": "广东科技学院"
        }, 
        {
            "city": "肇庆市", 
            "id": 1879, 
            "name": "广东理工学院"
        }, 
        {
            "city": "东莞市", 
            "id": 1880, 
            "name": "东莞理工学院城市学院"
        }, 
        {
            "city": "广州市", 
            "id": 1881, 
            "name": "中山大学新华学院"
        }, 
        {
            "city": "广州市", 
            "id": 1882, 
            "name": "广东第二师范学院"
        }, 
        {
            "city": "深圳市", 
            "id": 1883, 
            "name": "南方科技大学"
        }, 
        {
            "city": "珠海市", 
            "id": 1884, 
            "name": "北京师范大学-香港浸会大学联合国际学院"
        }, 
        {
            "city": "深圳市", 
            "id": 1885, 
            "name": "香港中文大学（深圳）"
        }, 
        {
            "city": "佛山市", 
            "id": 1886, 
            "name": "顺德职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1887, 
            "name": "广东轻工职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1888, 
            "name": "广东交通职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1889, 
            "name": "广东水利电力职业技术学院"
        }, 
        {
            "city": "揭阳市", 
            "id": 1890, 
            "name": "潮汕职业技术学院"
        }, 
        {
            "city": "深圳市", 
            "id": 1891, 
            "name": "深圳职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1892, 
            "name": "民办南华工商学院"
        }, 
        {
            "city": "广州市", 
            "id": 1893, 
            "name": "私立华联学院"
        }, 
        {
            "city": "广州市", 
            "id": 1894, 
            "name": "广州民航职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1895, 
            "name": "广州番禺职业技术学院"
        }, 
        {
            "city": "韶关市", 
            "id": 1896, 
            "name": "广东松山职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1897, 
            "name": "广东农工商职业技术学院"
        }, 
        {
            "city": "深圳市", 
            "id": 1898, 
            "name": "广东新安职业技术学院"
        }, 
        {
            "city": "佛山市", 
            "id": 1899, 
            "name": "佛山职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1900, 
            "name": "广东科学技术职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1901, 
            "name": "广东食品药品职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1902, 
            "name": "广州康大职业技术学院"
        }, 
        {
            "city": "珠海市", 
            "id": 1903, 
            "name": "珠海艺术职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1904, 
            "name": "广东行政职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1905, 
            "name": "广东体育职业技术学院"
        }, 
        {
            "city": "佛山市", 
            "id": 1906, 
            "name": "广东职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1907, 
            "name": "广东建设职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1908, 
            "name": "广东女子职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1909, 
            "name": "广东机电职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1910, 
            "name": "广东岭南职业技术学院"
        }, 
        {
            "city": "汕尾市", 
            "id": 1911, 
            "name": "汕尾职业技术学院"
        }, 
        {
            "city": "云浮市", 
            "id": 1912, 
            "name": "罗定职业技术学院"
        }, 
        {
            "city": "阳江市", 
            "id": 1913, 
            "name": "阳江职业技术学院"
        }, 
        {
            "city": "河源市", 
            "id": 1914, 
            "name": "河源职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1915, 
            "name": "广东邮电职业技术学院"
        }, 
        {
            "city": "汕头市", 
            "id": 1916, 
            "name": "汕头职业技术学院"
        }, 
        {
            "city": "揭阳市", 
            "id": 1917, 
            "name": "揭阳职业技术学院"
        }, 
        {
            "city": "深圳市", 
            "id": 1918, 
            "name": "深圳信息职业技术学院"
        }, 
        {
            "city": "清远市", 
            "id": 1919, 
            "name": "清远职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1920, 
            "name": "广东工贸职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1921, 
            "name": "广东司法警官职业学院"
        }, 
        {
            "city": "东莞市", 
            "id": 1922, 
            "name": "广东亚视演艺职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1923, 
            "name": "广东省外语艺术职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1924, 
            "name": "广东文艺职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1925, 
            "name": "广州体育职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1926, 
            "name": "广州工程技术职业学院"
        }, 
        {
            "city": "中山市", 
            "id": 1927, 
            "name": "中山火炬职业技术学院"
        }, 
        {
            "city": "江门市", 
            "id": 1928, 
            "name": "江门职业技术学院"
        }, 
        {
            "city": "茂名市", 
            "id": 1929, 
            "name": "茂名职业技术学院"
        }, 
        {
            "city": "珠海市", 
            "id": 1930, 
            "name": "珠海城市职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1931, 
            "name": "广州涉外经济职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1932, 
            "name": "广州南洋理工职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1933, 
            "name": "广州科技职业技术学院"
        }, 
        {
            "city": "惠州市", 
            "id": 1934, 
            "name": "惠州经济职业技术学院"
        }, 
        {
            "city": "肇庆市", 
            "id": 1935, 
            "name": "广东工商职业学院"
        }, 
        {
            "city": "肇庆市", 
            "id": 1936, 
            "name": "肇庆医学高等专科学校"
        }, 
        {
            "city": "广州市", 
            "id": 1937, 
            "name": "广州现代信息工程职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1938, 
            "name": "广东理工职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1939, 
            "name": "广州华南商贸职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1940, 
            "name": "广州华立科技职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1941, 
            "name": "广州城市职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1942, 
            "name": "广东工程职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1943, 
            "name": "广州铁路职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1944, 
            "name": "广东科贸职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1945, 
            "name": "广州科技贸易职业学院"
        }, 
        {
            "city": "中山市", 
            "id": 1946, 
            "name": "中山职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1947, 
            "name": "广州珠江职业技术学院"
        }, 
        {
            "city": "广州市", 
            "id": 1948, 
            "name": "广州松田职业学院"
        }, 
        {
            "city": "湛江市", 
            "id": 1949, 
            "name": "广东文理职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1950, 
            "name": "广州城建职业学院"
        }, 
        {
            "city": "东莞市", 
            "id": 1951, 
            "name": "东莞职业技术学院"
        }, 
        {
            "city": "江门市", 
            "id": 1952, 
            "name": "广东南方职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1953, 
            "name": "广州华商职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1954, 
            "name": "广州华夏职业学院"
        }, 
        {
            "city": "佛山市", 
            "id": 1955, 
            "name": "广东环境保护工程职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1956, 
            "name": "广东青年职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1957, 
            "name": "广州东华职业学院"
        }, 
        {
            "city": "东莞市", 
            "id": 1958, 
            "name": "广东创新科技职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1959, 
            "name": "广东舞蹈戏剧职业学院"
        }, 
        {
            "city": "惠州市", 
            "id": 1960, 
            "name": "惠州卫生职业技术学院"
        }, 
        {
            "city": "肇庆市", 
            "id": 1961, 
            "name": "广东信息工程职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1962, 
            "name": "广东生态工程职业学院"
        }, 
        {
            "city": "惠州市", 
            "id": 1963, 
            "name": "惠州城市职业学院"
        }, 
        {
            "city": "清远市", 
            "id": 1964, 
            "name": "广东碧桂园职业学院"
        }, 
        {
            "city": "广州市", 
            "id": 1965, 
            "name": "公安边防部队高等专科学校"
        }, 
        {
            "city": "茂名市", 
            "id": 1966, 
            "name": "广东茂名健康职业学院"
        }, 
        {
            "city": "东莞市", 
            "id": 1967, 
            "name": "广东酒店管理职业技术学院"
        }, 
        {
            "city": "茂名市", 
            "id": 1968, 
            "name": "广东茂名幼儿师范专科学校"
        }, 
        {
            "city": "广州市", 
            "id": 1969, 
            "name": "广州卫生职业技术学院"
        }, 
        {
            "city": "湛江市", 
            "id": 1970, 
            "name": "湛江幼儿师范专科学校"
        }, 
        {
            "city": "南宁市", 
            "id": 1971, 
            "name": "广西大学"
        }, 
        {
            "city": "柳州市", 
            "id": 1972, 
            "name": "广西科技大学"
        }, 
        {
            "city": "桂林市", 
            "id": 1973, 
            "name": "桂林电子科技大学"
        }, 
        {
            "city": "桂林市", 
            "id": 1974, 
            "name": "桂林理工大学"
        }, 
        {
            "city": "南宁市", 
            "id": 1975, 
            "name": "广西医科大学"
        }, 
        {
            "city": "百色市", 
            "id": 1976, 
            "name": "右江民族医学院"
        }, 
        {
            "city": "南宁市", 
            "id": 1977, 
            "name": "广西中医药大学"
        }, 
        {
            "city": "桂林市", 
            "id": 1978, 
            "name": "桂林医学院"
        }, 
        {
            "city": "桂林市", 
            "id": 1979, 
            "name": "广西师范大学"
        }, 
        {
            "city": "南宁市", 
            "id": 1980, 
            "name": "广西师范学院"
        }, 
        {
            "city": "崇左市", 
            "id": 1981, 
            "name": "广西民族师范学院"
        }, 
        {
            "city": "河池市", 
            "id": 1982, 
            "name": "河池学院"
        }, 
        {
            "city": "玉林市", 
            "id": 1983, 
            "name": "玉林师范学院"
        }, 
        {
            "city": "南宁市", 
            "id": 1984, 
            "name": "广西艺术学院"
        }, 
        {
            "city": "南宁市", 
            "id": 1985, 
            "name": "广西民族大学"
        }, 
        {
            "city": "百色市", 
            "id": 1986, 
            "name": "百色学院"
        }, 
        {
            "city": "梧州市", 
            "id": 1987, 
            "name": "梧州学院"
        }, 
        {
            "city": "来宾市", 
            "id": 1988, 
            "name": "广西科技师范学院"
        }, 
        {
            "city": "南宁市", 
            "id": 1989, 
            "name": "广西财经学院"
        }, 
        {
            "city": "南宁市", 
            "id": 1990, 
            "name": "南宁学院"
        }, 
        {
            "city": "钦州市", 
            "id": 1991, 
            "name": "钦州学院"
        }, 
        {
            "city": "桂林市", 
            "id": 1992, 
            "name": "桂林航天工业学院"
        }, 
        {
            "city": "桂林市", 
            "id": 1993, 
            "name": "桂林旅游学院"
        }, 
        {
            "city": "贺州市", 
            "id": 1994, 
            "name": "贺州学院"
        }, 
        {
            "city": "南宁市", 
            "id": 1995, 
            "name": "广西警察学院"
        }, 
        {
            "city": "北海市", 
            "id": 1996, 
            "name": "北海艺术设计学院"
        }, 
        {
            "city": "南宁市", 
            "id": 1997, 
            "name": "广西大学行健文理学院"
        }, 
        {
            "city": "柳州市", 
            "id": 1998, 
            "name": "广西科技大学鹿山学院"
        }, 
        {
            "city": "南宁市", 
            "id": 1999, 
            "name": "广西民族大学相思湖学院"
        }, 
        {
            "city": "桂林市", 
            "id": 2000, 
            "name": "广西师范大学漓江学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2001, 
            "name": "广西师范学院师园学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2002, 
            "name": "广西中医药大学赛恩斯新医药学院"
        }, 
        {
            "city": "桂林市", 
            "id": 2003, 
            "name": "桂林电子科技大学信息科技学院"
        }, 
        {
            "city": "桂林市", 
            "id": 2004, 
            "name": "桂林理工大学博文管理学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2005, 
            "name": "广西外国语学院"
        }, 
        {
            "city": "北海市", 
            "id": 2006, 
            "name": "北京航空航天大学北海学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2007, 
            "name": "广西机电职业技术学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2008, 
            "name": "广西体育高等专科学校"
        }, 
        {
            "city": "南宁市", 
            "id": 2009, 
            "name": "南宁职业技术学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2010, 
            "name": "广西水利电力职业技术学院"
        }, 
        {
            "city": "桂林市", 
            "id": 2011, 
            "name": "桂林师范高等专科学校"
        }, 
        {
            "city": "南宁市", 
            "id": 2012, 
            "name": "广西职业技术学院"
        }, 
        {
            "city": "柳州市", 
            "id": 2013, 
            "name": "柳州职业技术学院"
        }, 
        {
            "city": "柳州市", 
            "id": 2014, 
            "name": "广西生态工程职业技术学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2015, 
            "name": "广西交通职业技术学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2016, 
            "name": "广西工业职业技术学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2017, 
            "name": "广西国际商务职业技术学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2018, 
            "name": "广西农业职业技术学院"
        }, 
        {
            "city": "柳州市", 
            "id": 2019, 
            "name": "柳州铁道职业技术学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2020, 
            "name": "广西建设职业技术学院"
        }, 
        {
            "city": "河池市", 
            "id": 2021, 
            "name": "广西现代职业技术学院"
        }, 
        {
            "city": "北海市", 
            "id": 2022, 
            "name": "北海职业学院"
        }, 
        {
            "city": "桂林市", 
            "id": 2023, 
            "name": "桂林山水职业学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2024, 
            "name": "广西经贸职业技术学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2025, 
            "name": "广西工商职业技术学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2026, 
            "name": "广西演艺职业学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2027, 
            "name": "广西电力职业技术学院"
        }, 
        {
            "city": "崇左市", 
            "id": 2028, 
            "name": "广西城市职业学院"
        }, 
        {
            "city": "钦州市", 
            "id": 2029, 
            "name": "广西英华国际职业学院"
        }, 
        {
            "city": "柳州市", 
            "id": 2030, 
            "name": "柳州城市职业学院"
        }, 
        {
            "city": "百色市", 
            "id": 2031, 
            "name": "百色职业学院"
        }, 
        {
            "city": "百色市", 
            "id": 2032, 
            "name": "广西工程职业学院"
        }, 
        {
            "city": "崇左市", 
            "id": 2033, 
            "name": "广西理工职业技术学院"
        }, 
        {
            "city": "梧州市", 
            "id": 2034, 
            "name": "梧州职业学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2035, 
            "name": "广西经济职业学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2036, 
            "name": "广西幼儿师范高等专科学校"
        }, 
        {
            "city": "崇左市", 
            "id": 2037, 
            "name": "广西科技职业学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2038, 
            "name": "广西卫生职业技术学院"
        }, 
        {
            "city": "百色市", 
            "id": 2039, 
            "name": "广西培贤国际职业学院"
        }, 
        {
            "city": "南宁市", 
            "id": 2040, 
            "name": "广西金融职业技术学院"
        }, 
        {
            "city": "崇左市", 
            "id": 2041, 
            "name": "广西中远职业学院"
        }, 
        {
            "city": "玉林市", 
            "id": 2042, 
            "name": "玉柴职业技术学院"
        }, 
        {
            "city": "来宾市", 
            "id": 2043, 
            "name": "广西蓝天航空职业学院"
        }, 
        {
            "city": "海口市", 
            "id": 2044, 
            "name": "海南大学"
        }, 
        {
            "city": "三亚市", 
            "id": 2045, 
            "name": "海南热带海洋学院"
        }, 
        {
            "city": "海口市", 
            "id": 2046, 
            "name": "海南师范大学"
        }, 
        {
            "city": "海口市", 
            "id": 2047, 
            "name": "海南医学院"
        }, 
        {
            "city": "海口市", 
            "id": 2048, 
            "name": "海口经济学院"
        }, 
        {
            "city": "海口市", 
            "id": 2049, 
            "name": "琼台师范学院"
        }, 
        {
            "city": "三亚市", 
            "id": 2050, 
            "name": "三亚学院"
        }, 
        {
            "city": "海口市", 
            "id": 2051, 
            "name": "海南职业技术学院"
        }, 
        {
            "city": "三亚市", 
            "id": 2052, 
            "name": "三亚城市职业学院"
        }, 
        {
            "city": "琼海市", 
            "id": 2053, 
            "name": "海南软件职业技术学院"
        }, 
        {
            "city": "海口市", 
            "id": 2054, 
            "name": "海南政法职业学院"
        }, 
        {
            "city": "文昌市", 
            "id": 2055, 
            "name": "海南外国语职业学院"
        }, 
        {
            "city": "海口市", 
            "id": 2056, 
            "name": "海南经贸职业技术学院"
        }, 
        {
            "city": "海口市", 
            "id": 2057, 
            "name": "海南工商职业学院"
        }, 
        {
            "city": "三亚市", 
            "id": 2058, 
            "name": "三亚航空旅游职业学院"
        }, 
        {
            "city": "海口市", 
            "id": 2059, 
            "name": "海南科技职业学院"
        }, 
        {
            "city": "三亚市", 
            "id": 2060, 
            "name": "三亚理工职业学院"
        }, 
        {
            "city": "海口市", 
            "id": 2061, 
            "name": "海南体育职业技术学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2062, 
            "name": "重庆大学"
        }, 
        {
            "city": "重庆市", 
            "id": 2063, 
            "name": "重庆邮电大学"
        }, 
        {
            "city": "重庆市", 
            "id": 2064, 
            "name": "重庆交通大学"
        }, 
        {
            "city": "重庆市", 
            "id": 2065, 
            "name": "重庆医科大学"
        }, 
        {
            "city": "重庆市", 
            "id": 2066, 
            "name": "西南大学"
        }, 
        {
            "city": "重庆市", 
            "id": 2067, 
            "name": "重庆师范大学"
        }, 
        {
            "city": "重庆市", 
            "id": 2068, 
            "name": "重庆文理学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2069, 
            "name": "重庆三峡学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2070, 
            "name": "长江师范学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2071, 
            "name": "四川外国语大学"
        }, 
        {
            "city": "重庆市", 
            "id": 2072, 
            "name": "西南政法大学"
        }, 
        {
            "city": "重庆市", 
            "id": 2073, 
            "name": "四川美术学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2074, 
            "name": "重庆科技学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2075, 
            "name": "重庆理工大学"
        }, 
        {
            "city": "重庆市", 
            "id": 2076, 
            "name": "重庆工商大学"
        }, 
        {
            "city": "重庆市", 
            "id": 2077, 
            "name": "重庆工程学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2078, 
            "name": "重庆大学城市科技学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2079, 
            "name": "重庆警察学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2080, 
            "name": "重庆人文科技学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2081, 
            "name": "四川外国语大学重庆南方翻译学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2082, 
            "name": "重庆师范大学涉外商贸学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2083, 
            "name": "重庆工商大学融智学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2084, 
            "name": "重庆工商大学派斯学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2085, 
            "name": "重庆邮电大学移通学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2086, 
            "name": "重庆第二师范学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2087, 
            "name": "重庆航天职业技术学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2088, 
            "name": "重庆电力高等专科学校"
        }, 
        {
            "city": "重庆市", 
            "id": 2089, 
            "name": "重庆工业职业技术学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2090, 
            "name": "重庆三峡职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2091, 
            "name": "重庆工贸职业技术学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2092, 
            "name": "重庆机电职业技术学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2093, 
            "name": "重庆电子工程职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2094, 
            "name": "重庆海联职业技术学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2095, 
            "name": "重庆信息技术职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2096, 
            "name": "重庆传媒职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2097, 
            "name": "重庆城市管理职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2098, 
            "name": "重庆工程职业技术学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2099, 
            "name": "重庆房地产职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2100, 
            "name": "重庆城市职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2101, 
            "name": "重庆水利电力职业技术学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2102, 
            "name": "重庆工商职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2103, 
            "name": "重庆应用技术职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2104, 
            "name": "重庆三峡医药高等专科学校"
        }, 
        {
            "city": "重庆市", 
            "id": 2105, 
            "name": "重庆医药高等专科学校"
        }, 
        {
            "city": "重庆市", 
            "id": 2106, 
            "name": "重庆青年职业技术学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2107, 
            "name": "重庆财经职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2108, 
            "name": "重庆科创职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2109, 
            "name": "重庆建筑工程职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2110, 
            "name": "重庆电讯职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2111, 
            "name": "重庆能源职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2112, 
            "name": "重庆商务职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2113, 
            "name": "重庆交通职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2114, 
            "name": "重庆化工职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2115, 
            "name": "重庆旅游职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2116, 
            "name": "重庆安全技术职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2117, 
            "name": "重庆公共运输职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2118, 
            "name": "重庆艺术工程职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2119, 
            "name": "重庆轻工职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2120, 
            "name": "重庆电信职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2121, 
            "name": "重庆经贸职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2122, 
            "name": "重庆幼儿师范高等专科学校"
        }, 
        {
            "city": "重庆市", 
            "id": 2123, 
            "name": "重庆文化艺术职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2124, 
            "name": "重庆服装工程职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2125, 
            "name": "重庆资源与环境保护职业学院"
        }, 
        {
            "city": "重庆市", 
            "id": 2126, 
            "name": "重庆护理职业学院"
        }, 
        {
            "city": "成都市", 
            "id": 2127, 
            "name": "四川大学"
        }, 
        {
            "city": "成都市", 
            "id": 2128, 
            "name": "西南交通大学"
        }, 
        {
            "city": "成都市", 
            "id": 2129, 
            "name": "电子科技大学"
        }, 
        {
            "city": "成都市", 
            "id": 2130, 
            "name": "西南石油大学"
        }, 
        {
            "city": "成都市", 
            "id": 2131, 
            "name": "成都理工大学"
        }, 
        {
            "city": "绵阳市", 
            "id": 2132, 
            "name": "西南科技大学"
        }, 
        {
            "city": "成都市", 
            "id": 2133, 
            "name": "成都信息工程大学"
        }, 
        {
            "city": "自贡市", 
            "id": 2134, 
            "name": "四川理工学院"
        }, 
        {
            "city": "成都市", 
            "id": 2135, 
            "name": "西华大学"
        }, 
        {
            "city": "德阳市", 
            "id": 2136, 
            "name": "中国民用航空飞行学院"
        }, 
        {
            "city": "雅安市", 
            "id": 2137, 
            "name": "四川农业大学"
        }, 
        {
            "city": "凉山彝族自治州", 
            "id": 2138, 
            "name": "西昌学院"
        }, 
        {
            "city": "泸州市", 
            "id": 2139, 
            "name": "西南医科大学"
        }, 
        {
            "city": "成都市", 
            "id": 2140, 
            "name": "成都中医药大学"
        }, 
        {
            "city": "南充市", 
            "id": 2141, 
            "name": "川北医学院"
        }, 
        {
            "city": "成都市", 
            "id": 2142, 
            "name": "四川师范大学"
        }, 
        {
            "city": "南充市", 
            "id": 2143, 
            "name": "西华师范大学"
        }, 
        {
            "city": "绵阳市", 
            "id": 2144, 
            "name": "绵阳师范学院"
        }, 
        {
            "city": "内江市", 
            "id": 2145, 
            "name": "内江师范学院"
        }, 
        {
            "city": "宜宾市", 
            "id": 2146, 
            "name": "宜宾学院"
        }, 
        {
            "city": "达州市", 
            "id": 2147, 
            "name": "四川文理学院"
        }, 
        {
            "city": "阿坝藏族羌族自治州", 
            "id": 2148, 
            "name": "阿坝师范学院"
        }, 
        {
            "city": "乐山市", 
            "id": 2149, 
            "name": "乐山师范学院"
        }, 
        {
            "city": "成都市", 
            "id": 2150, 
            "name": "西南财经大学"
        }, 
        {
            "city": "成都市", 
            "id": 2151, 
            "name": "成都体育学院"
        }, 
        {
            "city": "成都市", 
            "id": 2152, 
            "name": "四川音乐学院"
        }, 
        {
            "city": "成都市", 
            "id": 2153, 
            "name": "西南民族大学"
        }, 
        {
            "city": "成都市", 
            "id": 2154, 
            "name": "成都学院"
        }, 
        {
            "city": "成都市", 
            "id": 2155, 
            "name": "成都工业学院"
        }, 
        {
            "city": "攀枝花市", 
            "id": 2156, 
            "name": "攀枝花学院"
        }, 
        {
            "city": "成都市", 
            "id": 2157, 
            "name": "四川旅游学院"
        }, 
        {
            "city": "甘孜藏族自治州", 
            "id": 2158, 
            "name": "四川民族学院"
        }, 
        {
            "city": "泸州市", 
            "id": 2159, 
            "name": "四川警察学院"
        }, 
        {
            "city": "成都市", 
            "id": 2160, 
            "name": "成都东软学院"
        }, 
        {
            "city": "成都市", 
            "id": 2161, 
            "name": "电子科技大学成都学院"
        }, 
        {
            "city": "乐山市", 
            "id": 2162, 
            "name": "成都理工大学工程技术学院"
        }, 
        {
            "city": "成都市", 
            "id": 2163, 
            "name": "四川传媒学院"
        }, 
        {
            "city": "成都市", 
            "id": 2164, 
            "name": "成都信息工程大学银杏酒店管理学院"
        }, 
        {
            "city": "成都市", 
            "id": 2165, 
            "name": "成都文理学院"
        }, 
        {
            "city": "成都市", 
            "id": 2166, 
            "name": "四川工商学院"
        }, 
        {
            "city": "成都市", 
            "id": 2167, 
            "name": "四川外国语大学成都学院"
        }, 
        {
            "city": "成都市", 
            "id": 2168, 
            "name": "成都医学院"
        }, 
        {
            "city": "德阳市", 
            "id": 2169, 
            "name": "四川工业科技学院"
        }, 
        {
            "city": "成都市", 
            "id": 2170, 
            "name": "四川大学锦城学院"
        }, 
        {
            "city": "绵阳市", 
            "id": 2171, 
            "name": "西南财经大学天府学院"
        }, 
        {
            "city": "眉山市", 
            "id": 2172, 
            "name": "四川大学锦江学院"
        }, 
        {
            "city": "绵阳市", 
            "id": 2173, 
            "name": "四川文化艺术学院"
        }, 
        {
            "city": "绵阳市", 
            "id": 2174, 
            "name": "西南科技大学城市学院"
        }, 
        {
            "city": "南充市", 
            "id": 2175, 
            "name": "西南交通大学希望学院"
        }, 
        {
            "city": "成都市", 
            "id": 2176, 
            "name": "成都师范学院"
        }, 
        {
            "city": "成都市", 
            "id": 2177, 
            "name": "四川电影电视学院"
        }, 
        {
            "city": "成都市", 
            "id": 2178, 
            "name": "成都纺织高等专科学校"
        }, 
        {
            "city": "成都市", 
            "id": 2179, 
            "name": "民办四川天一学院"
        }, 
        {
            "city": "成都市", 
            "id": 2180, 
            "name": "成都航空职业技术学院"
        }, 
        {
            "city": "成都市", 
            "id": 2181, 
            "name": "四川电力职业技术学院"
        }, 
        {
            "city": "成都市", 
            "id": 2182, 
            "name": "成都职业技术学院"
        }, 
        {
            "city": "泸州市", 
            "id": 2183, 
            "name": "四川化工职业技术学院"
        }, 
        {
            "city": "成都市", 
            "id": 2184, 
            "name": "四川水利职业技术学院"
        }, 
        {
            "city": "南充市", 
            "id": 2185, 
            "name": "南充职业技术学院"
        }, 
        {
            "city": "内江市", 
            "id": 2186, 
            "name": "内江职业技术学院"
        }, 
        {
            "city": "成都市", 
            "id": 2187, 
            "name": "四川航天职业技术学院"
        }, 
        {
            "city": "成都市", 
            "id": 2188, 
            "name": "四川邮电职业技术学院"
        }, 
        {
            "city": "攀枝花市", 
            "id": 2189, 
            "name": "四川机电职业技术学院"
        }, 
        {
            "city": "绵阳市", 
            "id": 2190, 
            "name": "绵阳职业技术学院"
        }, 
        {
            "city": "成都市", 
            "id": 2191, 
            "name": "四川交通职业技术学院"
        }, 
        {
            "city": "成都市", 
            "id": 2192, 
            "name": "四川工商职业技术学院"
        }, 
        {
            "city": "德阳市", 
            "id": 2193, 
            "name": "四川工程职业技术学院"
        }, 
        {
            "city": "德阳市", 
            "id": 2194, 
            "name": "四川建筑职业技术学院"
        }, 
        {
            "city": "达州市", 
            "id": 2195, 
            "name": "达州职业技术学院"
        }, 
        {
            "city": "成都市", 
            "id": 2196, 
            "name": "四川托普信息技术职业学院"
        }, 
        {
            "city": "成都市", 
            "id": 2197, 
            "name": "四川国际标榜职业学院"
        }, 
        {
            "city": "成都市", 
            "id": 2198, 
            "name": "成都农业科技职业学院"
        }, 
        {
            "city": "宜宾市", 
            "id": 2199, 
            "name": "宜宾职业技术学院"
        }, 
        {
            "city": "泸州市", 
            "id": 2200, 
            "name": "泸州职业技术学院"
        }, 
        {
            "city": "眉山市", 
            "id": 2201, 
            "name": "眉山职业技术学院"
        }, 
        {
            "city": "成都市", 
            "id": 2202, 
            "name": "成都艺术职业学院"
        }, 
        {
            "city": "遂宁市", 
            "id": 2203, 
            "name": "四川职业技术学院"
        }, 
        {
            "city": "乐山市", 
            "id": 2204, 
            "name": "乐山职业技术学院"
        }, 
        {
            "city": "雅安市", 
            "id": 2205, 
            "name": "雅安职业技术学院"
        }, 
        {
            "city": "成都市", 
            "id": 2206, 
            "name": "四川商务职业学院"
        }, 
        {
            "city": "德阳市", 
            "id": 2207, 
            "name": "四川司法警官职业学院"
        }, 
        {
            "city": "广安市", 
            "id": 2208, 
            "name": "广安职业技术学院"
        }, 
        {
            "city": "广元市", 
            "id": 2209, 
            "name": "四川信息职业技术学院"
        }, 
        {
            "city": "成都市", 
            "id": 2210, 
            "name": "四川文化传媒职业学院"
        }, 
        {
            "city": "成都市", 
            "id": 2211, 
            "name": "四川华新现代职业学院"
        }, 
        {
            "city": "成都市", 
            "id": 2212, 
            "name": "四川管理职业学院"
        }, 
        {
            "city": "成都市", 
            "id": 2213, 
            "name": "四川艺术职业学院"
        }, 
        {
            "city": "绵阳市", 
            "id": 2214, 
            "name": "四川中医药高等专科学校"
        }, 
        {
            "city": "成都市", 
            "id": 2215, 
            "name": "四川科技职业学院"
        }, 
        {
            "city": "成都市", 
            "id": 2216, 
            "name": "四川文化产业职业学院"
        }, 
        {
            "city": "成都市", 
            "id": 2217, 
            "name": "四川财经职业学院"
        }, 
        {
            "city": "成都市", 
            "id": 2218, 
            "name": "四川城市职业学院"
        }, 
        {
            "city": "成都市", 
            "id": 2219, 
            "name": "四川现代职业学院"
        }, 
        {
            "city": "绵阳市", 
            "id": 2220, 
            "name": "四川幼儿师范高等专科学校"
        }, 
        {
            "city": "成都市", 
            "id": 2221, 
            "name": "四川长江职业学院"
        }, 
        {
            "city": "泸州市", 
            "id": 2222, 
            "name": "四川三河职业学院"
        }, 
        {
            "city": "广元市", 
            "id": 2223, 
            "name": "川北幼儿师范高等专科学校"
        }, 
        {
            "city": "自贡市", 
            "id": 2224, 
            "name": "四川卫生康复职业学院"
        }, 
        {
            "city": "绵阳市", 
            "id": 2225, 
            "name": "四川汽车职业技术学院"
        }, 
        {
            "city": "巴中市", 
            "id": 2226, 
            "name": "巴中职业技术学院"
        }, 
        {
            "city": "资阳市", 
            "id": 2227, 
            "name": "四川希望汽车职业学院"
        }, 
        {
            "city": "绵阳市", 
            "id": 2228, 
            "name": "四川电子机械职业技术学院"
        }, 
        {
            "city": "成都市", 
            "id": 2229, 
            "name": "四川文轩职业学院"
        }, 
        {
            "city": "内江市", 
            "id": 2230, 
            "name": "川南幼儿师范高等专科学校"
        }, 
        {
            "city": "德阳市", 
            "id": 2231, 
            "name": "四川护理职业学院"
        }, 
        {
            "city": "成都市", 
            "id": 2232, 
            "name": "成都工业职业技术学院"
        }, 
        {
            "city": "成都市", 
            "id": 2233, 
            "name": "四川西南航空职业学院"
        }, 
        {
            "city": "成都市", 
            "id": 2234, 
            "name": "成都工贸职业技术学院"
        }, 
        {
            "city": "凉山州", 
            "id": 2235, 
            "name": "四川应用技术职业学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2236, 
            "name": "贵州大学"
        }, 
        {
            "city": "贵阳市", 
            "id": 2237, 
            "name": "贵州医科大学"
        }, 
        {
            "city": "遵义市", 
            "id": 2238, 
            "name": "遵义医学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2239, 
            "name": "贵阳中医学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2240, 
            "name": "贵州师范大学"
        }, 
        {
            "city": "遵义市", 
            "id": 2241, 
            "name": "遵义师范学院"
        }, 
        {
            "city": "铜仁市", 
            "id": 2242, 
            "name": "铜仁学院"
        }, 
        {
            "city": "黔西南布依族苗族自治州", 
            "id": 2243, 
            "name": "兴义民族师范学院"
        }, 
        {
            "city": "安顺市", 
            "id": 2244, 
            "name": "安顺学院"
        }, 
        {
            "city": "毕节市", 
            "id": 2245, 
            "name": "贵州工程应用技术学院"
        }, 
        {
            "city": "黔东南苗族侗族自治州", 
            "id": 2246, 
            "name": "凯里学院"
        }, 
        {
            "city": "黔南布依族苗族自治州", 
            "id": 2247, 
            "name": "黔南民族师范学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2248, 
            "name": "贵州财经大学"
        }, 
        {
            "city": "贵阳市", 
            "id": 2249, 
            "name": "贵州民族大学"
        }, 
        {
            "city": "贵阳市", 
            "id": 2250, 
            "name": "贵阳学院"
        }, 
        {
            "city": "六盘水市", 
            "id": 2251, 
            "name": "六盘水师范学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2252, 
            "name": "贵州商学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2253, 
            "name": "贵阳中医学院时珍学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2254, 
            "name": "贵州财经大学商务学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2255, 
            "name": "贵州大学科技学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2256, 
            "name": "贵州大学明德学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2257, 
            "name": "贵州民族大学人文科技学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2258, 
            "name": "贵州师范大学求是学院"
        }, 
        {
            "city": "遵义市", 
            "id": 2259, 
            "name": "遵义医学院医学与科技学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2260, 
            "name": "贵州医科大学神奇民族医药学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2261, 
            "name": "贵州师范学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2262, 
            "name": "贵州理工学院"
        }, 
        {
            "city": "黔南布依族苗族自治州", 
            "id": 2263, 
            "name": "黔南民族医学高等专科学校"
        }, 
        {
            "city": "贵阳市", 
            "id": 2264, 
            "name": "贵州警官职业学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2265, 
            "name": "贵州交通职业技术学院"
        }, 
        {
            "city": "遵义市", 
            "id": 2266, 
            "name": "贵州航天职业技术学院"
        }, 
        {
            "city": "黔东南苗族侗族自治州", 
            "id": 2267, 
            "name": "贵州电子信息职业技术学院"
        }, 
        {
            "city": "安顺市", 
            "id": 2268, 
            "name": "安顺职业技术学院"
        }, 
        {
            "city": "黔东南苗族侗族自治州", 
            "id": 2269, 
            "name": "黔东南民族职业技术学院"
        }, 
        {
            "city": "黔南布依族苗族自治州", 
            "id": 2270, 
            "name": "黔南民族职业技术学院"
        }, 
        {
            "city": "遵义市", 
            "id": 2271, 
            "name": "遵义职业技术学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2272, 
            "name": "贵州城市职业学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2273, 
            "name": "贵州工业职业技术学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2274, 
            "name": "贵州电力职业技术学院"
        }, 
        {
            "city": "六盘水市", 
            "id": 2275, 
            "name": "六盘水职业技术学院"
        }, 
        {
            "city": "铜仁市", 
            "id": 2276, 
            "name": "铜仁职业技术学院"
        }, 
        {
            "city": "黔西南布依族苗族自治州", 
            "id": 2277, 
            "name": "黔西南民族职业技术学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2278, 
            "name": "贵州轻工职业技术学院"
        }, 
        {
            "city": "遵义市", 
            "id": 2279, 
            "name": "遵义医药高等专科学校"
        }, 
        {
            "city": "贵阳市", 
            "id": 2280, 
            "name": "贵阳护理职业学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2281, 
            "name": "贵阳职业技术学院"
        }, 
        {
            "city": "毕节市", 
            "id": 2282, 
            "name": "毕节职业技术学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2283, 
            "name": "贵州职业技术学院"
        }, 
        {
            "city": "黔南布依族苗族自治州", 
            "id": 2284, 
            "name": "贵州盛华职业学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2285, 
            "name": "贵州工商职业学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2286, 
            "name": "贵阳幼儿师范高等专科学校"
        }, 
        {
            "city": "铜仁市", 
            "id": 2287, 
            "name": "铜仁幼儿师范高等专科学校"
        }, 
        {
            "city": "黔南布依族苗族自治州", 
            "id": 2288, 
            "name": "黔南民族幼儿师范高等专科学校"
        }, 
        {
            "city": "毕节市", 
            "id": 2289, 
            "name": "毕节医学高等专科学校"
        }, 
        {
            "city": "贵阳市", 
            "id": 2290, 
            "name": "贵州建设职业技术学院"
        }, 
        {
            "city": "毕节市", 
            "id": 2291, 
            "name": "毕节幼儿师范高等专科学校"
        }, 
        {
            "city": "贵阳市", 
            "id": 2292, 
            "name": "贵州农业职业学院"
        }, 
        {
            "city": "铜仁市", 
            "id": 2293, 
            "name": "贵州工程职业学院"
        }, 
        {
            "city": "毕节市", 
            "id": 2294, 
            "name": "贵州工贸职业学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2295, 
            "name": "贵州水利水电职业技术学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2296, 
            "name": "贵州电子商务职业技术学院"
        }, 
        {
            "city": "黔南布依族苗族自治州", 
            "id": 2297, 
            "name": "贵州应用技术职业学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2298, 
            "name": "贵州电子科技职业学院"
        }, 
        {
            "city": "贵阳市", 
            "id": 2299, 
            "name": "贵州航空职业技术学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2300, 
            "name": "云南大学"
        }, 
        {
            "city": "昆明市", 
            "id": 2301, 
            "name": "昆明理工大学"
        }, 
        {
            "city": "昆明市", 
            "id": 2302, 
            "name": "云南农业大学"
        }, 
        {
            "city": "昆明市", 
            "id": 2303, 
            "name": "西南林业大学"
        }, 
        {
            "city": "昆明市", 
            "id": 2304, 
            "name": "昆明医科大学"
        }, 
        {
            "city": "大理白族自治州", 
            "id": 2305, 
            "name": "大理大学"
        }, 
        {
            "city": "昆明市", 
            "id": 2306, 
            "name": "云南中医学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2307, 
            "name": "云南师范大学"
        }, 
        {
            "city": "昭通市", 
            "id": 2308, 
            "name": "昭通学院"
        }, 
        {
            "city": "曲靖市", 
            "id": 2309, 
            "name": "曲靖师范学院"
        }, 
        {
            "city": "普洱市", 
            "id": 2310, 
            "name": "普洱学院"
        }, 
        {
            "city": "保山市", 
            "id": 2311, 
            "name": "保山学院"
        }, 
        {
            "city": "红河哈尼族彝族自治州", 
            "id": 2312, 
            "name": "红河学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2313, 
            "name": "云南财经大学"
        }, 
        {
            "city": "昆明市", 
            "id": 2314, 
            "name": "云南艺术学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2315, 
            "name": "云南民族大学"
        }, 
        {
            "city": "玉溪市", 
            "id": 2316, 
            "name": "玉溪师范学院"
        }, 
        {
            "city": "楚雄彝族自治州", 
            "id": 2317, 
            "name": "楚雄师范学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2318, 
            "name": "云南警官学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2319, 
            "name": "昆明学院"
        }, 
        {
            "city": "文山壮族苗族自治州", 
            "id": 2320, 
            "name": "文山学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2321, 
            "name": "云南经济管理学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2322, 
            "name": "云南大学滇池学院"
        }, 
        {
            "city": "丽江市", 
            "id": 2323, 
            "name": "云南大学旅游文化学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2324, 
            "name": "昆明理工大学津桥学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2325, 
            "name": "云南师范大学商学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2326, 
            "name": "云南师范大学文理学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2327, 
            "name": "昆明医科大学海源学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2328, 
            "name": "云南艺术学院文华学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2329, 
            "name": "云南工商学院"
        }, 
        {
            "city": "临沧市", 
            "id": 2330, 
            "name": "滇西科技师范学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2331, 
            "name": "昆明冶金高等专科学校"
        }, 
        {
            "city": "昆明市", 
            "id": 2332, 
            "name": "云南国土资源职业学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2333, 
            "name": "云南交通职业技术学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2334, 
            "name": "昆明工业职业技术学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2335, 
            "name": "云南农业职业技术学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2336, 
            "name": "云南司法警官职业学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2337, 
            "name": "云南文化艺术职业学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2338, 
            "name": "云南体育运动职业技术学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2339, 
            "name": "云南科技信息职业学院"
        }, 
        {
            "city": "西双版纳傣族自治州", 
            "id": 2340, 
            "name": "西双版纳职业技术学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2341, 
            "name": "昆明艺术职业学院"
        }, 
        {
            "city": "玉溪市", 
            "id": 2342, 
            "name": "玉溪农业职业技术学院"
        }, 
        {
            "city": "曲靖市", 
            "id": 2343, 
            "name": "云南能源职业技术学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2344, 
            "name": "云南国防工业职业技术学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2345, 
            "name": "云南机电职业技术学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2346, 
            "name": "云南林业职业技术学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2347, 
            "name": "云南城市建设职业学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2348, 
            "name": "云南工程职业学院"
        }, 
        {
            "city": "曲靖市", 
            "id": 2349, 
            "name": "曲靖医学高等专科学校"
        }, 
        {
            "city": "楚雄彝族自治州", 
            "id": 2350, 
            "name": "楚雄医药高等专科学校"
        }, 
        {
            "city": "保山市", 
            "id": 2351, 
            "name": "保山中医药高等专科学校"
        }, 
        {
            "city": "丽江市", 
            "id": 2352, 
            "name": "丽江师范高等专科学校"
        }, 
        {
            "city": "德宏傣族景颇族自治州", 
            "id": 2353, 
            "name": "德宏师范高等专科学校"
        }, 
        {
            "city": "昆明市", 
            "id": 2354, 
            "name": "云南新兴职业学院"
        }, 
        {
            "city": "红河哈尼族彝族自治州", 
            "id": 2355, 
            "name": "云南锡业职业技术学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2356, 
            "name": "云南经贸外事职业学院"
        }, 
        {
            "city": "文山壮族苗族自治州", 
            "id": 2357, 
            "name": "云南三鑫职业技术学院"
        }, 
        {
            "city": "德宏傣族景颇族自治州", 
            "id": 2358, 
            "name": "德宏职业学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2359, 
            "name": "云南商务职业学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2360, 
            "name": "昆明卫生职业学院"
        }, 
        {
            "city": "楚雄彝族自治州", 
            "id": 2361, 
            "name": "云南现代职业技术学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2362, 
            "name": "云南旅游职业学院"
        }, 
        {
            "city": "红河哈尼族彝族自治州", 
            "id": 2363, 
            "name": "红河卫生职业学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2364, 
            "name": "云南外事外语职业学院"
        }, 
        {
            "city": "大理白族自治州", 
            "id": 2365, 
            "name": "大理农林职业技术学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2366, 
            "name": "公安消防部队高等专科学校"
        }, 
        {
            "city": "昆明市", 
            "id": 2367, 
            "name": "云南财经职业学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2368, 
            "name": "昆明铁道职业技术学院"
        }, 
        {
            "city": "昭通市", 
            "id": 2369, 
            "name": "昭通卫生职业学院"
        }, 
        {
            "city": "大理白族自治州", 
            "id": 2370, 
            "name": "大理护理职业学院"
        }, 
        {
            "city": "昆明市", 
            "id": 2371, 
            "name": "云南水利水电职业学院"
        }, 
        {
            "city": "拉萨市", 
            "id": 2372, 
            "name": "西藏大学"
        }, 
        {
            "city": "咸阳市", 
            "id": 2373, 
            "name": "西藏民族大学"
        }, 
        {
            "city": "拉萨市", 
            "id": 2374, 
            "name": "西藏藏医学院"
        }, 
        {
            "city": "拉萨市", 
            "id": 2375, 
            "name": "西藏警官高等专科学校"
        }, 
        {
            "city": "拉萨市", 
            "id": 2376, 
            "name": "拉萨师范高等专科学校"
        }, 
        {
            "city": "拉萨市", 
            "id": 2377, 
            "name": "西藏职业技术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2378, 
            "name": "西北大学"
        }, 
        {
            "city": "西安市", 
            "id": 2379, 
            "name": "西安交通大学"
        }, 
        {
            "city": "西安市", 
            "id": 2380, 
            "name": "西北工业大学"
        }, 
        {
            "city": "西安市", 
            "id": 2381, 
            "name": "西安理工大学"
        }, 
        {
            "city": "西安市", 
            "id": 2382, 
            "name": "西安电子科技大学"
        }, 
        {
            "city": "西安市", 
            "id": 2383, 
            "name": "西安工业大学"
        }, 
        {
            "city": "西安市", 
            "id": 2384, 
            "name": "西安建筑科技大学"
        }, 
        {
            "city": "西安市", 
            "id": 2385, 
            "name": "西安科技大学"
        }, 
        {
            "city": "西安市", 
            "id": 2386, 
            "name": "西安石油大学"
        }, 
        {
            "city": "西安市", 
            "id": 2387, 
            "name": "陕西科技大学"
        }, 
        {
            "city": "西安市", 
            "id": 2388, 
            "name": "西安工程大学"
        }, 
        {
            "city": "西安市", 
            "id": 2389, 
            "name": "长安大学"
        }, 
        {
            "city": "咸阳市", 
            "id": 2390, 
            "name": "西北农林科技大学"
        }, 
        {
            "city": "咸阳市", 
            "id": 2391, 
            "name": "陕西中医药大学"
        }, 
        {
            "city": "西安市", 
            "id": 2392, 
            "name": "陕西师范大学"
        }, 
        {
            "city": "延安市", 
            "id": 2393, 
            "name": "延安大学"
        }, 
        {
            "city": "汉中市", 
            "id": 2394, 
            "name": "陕西理工学院"
        }, 
        {
            "city": "宝鸡市", 
            "id": 2395, 
            "name": "宝鸡文理学院"
        }, 
        {
            "city": "咸阳市", 
            "id": 2396, 
            "name": "咸阳师范学院"
        }, 
        {
            "city": "渭南市", 
            "id": 2397, 
            "name": "渭南师范学院"
        }, 
        {
            "city": "西安市", 
            "id": 2398, 
            "name": "西安外国语大学"
        }, 
        {
            "city": "西安市", 
            "id": 2399, 
            "name": "西北政法大学"
        }, 
        {
            "city": "西安市", 
            "id": 2400, 
            "name": "西安体育学院"
        }, 
        {
            "city": "西安市", 
            "id": 2401, 
            "name": "西安音乐学院"
        }, 
        {
            "city": "西安市", 
            "id": 2402, 
            "name": "西安美术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2403, 
            "name": "西安文理学院"
        }, 
        {
            "city": "榆林市", 
            "id": 2404, 
            "name": "榆林学院"
        }, 
        {
            "city": "商洛市", 
            "id": 2405, 
            "name": "商洛学院"
        }, 
        {
            "city": "安康市", 
            "id": 2406, 
            "name": "安康学院"
        }, 
        {
            "city": "西安市", 
            "id": 2407, 
            "name": "西安培华学院"
        }, 
        {
            "city": "西安市", 
            "id": 2408, 
            "name": "西安财经学院"
        }, 
        {
            "city": "西安市", 
            "id": 2409, 
            "name": "西安邮电大学"
        }, 
        {
            "city": "西安市", 
            "id": 2410, 
            "name": "西安航空学院"
        }, 
        {
            "city": "西安市", 
            "id": 2411, 
            "name": "西安医学院"
        }, 
        {
            "city": "西安市", 
            "id": 2412, 
            "name": "西安欧亚学院"
        }, 
        {
            "city": "西安市", 
            "id": 2413, 
            "name": "西安外事学院"
        }, 
        {
            "city": "西安市", 
            "id": 2414, 
            "name": "西安翻译学院"
        }, 
        {
            "city": "西安市", 
            "id": 2415, 
            "name": "西京学院"
        }, 
        {
            "city": "西安市", 
            "id": 2416, 
            "name": "西安思源学院"
        }, 
        {
            "city": "咸阳市", 
            "id": 2417, 
            "name": "陕西国际商贸学院"
        }, 
        {
            "city": "咸阳市", 
            "id": 2418, 
            "name": "陕西服装工程学院"
        }, 
        {
            "city": "西安市", 
            "id": 2419, 
            "name": "西安交通工程学院"
        }, 
        {
            "city": "西安市", 
            "id": 2420, 
            "name": "西安交通大学城市学院"
        }, 
        {
            "city": "西安市", 
            "id": 2421, 
            "name": "西北大学现代学院"
        }, 
        {
            "city": "西安市", 
            "id": 2422, 
            "name": "西安建筑科技大学华清学院"
        }, 
        {
            "city": "西安市", 
            "id": 2423, 
            "name": "西安财经学院行知学院"
        }, 
        {
            "city": "咸阳市", 
            "id": 2424, 
            "name": "陕西科技大学镐京学院"
        }, 
        {
            "city": "西安市", 
            "id": 2425, 
            "name": "西安工业大学北方信息工程学院"
        }, 
        {
            "city": "西安市", 
            "id": 2426, 
            "name": "延安大学西安创新学院"
        }, 
        {
            "city": "西安市", 
            "id": 2427, 
            "name": "西安电子科技大学长安学院"
        }, 
        {
            "city": "西安市", 
            "id": 2428, 
            "name": "西北工业大学明德学院"
        }, 
        {
            "city": "西安市", 
            "id": 2429, 
            "name": "长安大学兴华学院"
        }, 
        {
            "city": "西安市", 
            "id": 2430, 
            "name": "西安理工大学高科学院"
        }, 
        {
            "city": "西安市", 
            "id": 2431, 
            "name": "西安科技大学高新学院"
        }, 
        {
            "city": "西安市", 
            "id": 2432, 
            "name": "陕西学前师范学院"
        }, 
        {
            "city": "咸阳市", 
            "id": 2433, 
            "name": "陕西工业职业技术学院"
        }, 
        {
            "city": "咸阳市", 
            "id": 2434, 
            "name": "杨凌职业技术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2435, 
            "name": "西安电力高等专科学校"
        }, 
        {
            "city": "咸阳市", 
            "id": 2436, 
            "name": "陕西能源职业技术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2437, 
            "name": "陕西国防工业职业技术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2438, 
            "name": "西安航空职业技术学院"
        }, 
        {
            "city": "咸阳市", 
            "id": 2439, 
            "name": "陕西财经职业技术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2440, 
            "name": "陕西交通职业技术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2441, 
            "name": "陕西职业技术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2442, 
            "name": "西安高新科技职业学院"
        }, 
        {
            "city": "西安市", 
            "id": 2443, 
            "name": "西安城市建设职业学院"
        }, 
        {
            "city": "渭南市", 
            "id": 2444, 
            "name": "陕西铁路工程职业技术学院"
        }, 
        {
            "city": "宝鸡市", 
            "id": 2445, 
            "name": "宝鸡职业技术学院"
        }, 
        {
            "city": "汉中市", 
            "id": 2446, 
            "name": "陕西航空职业技术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2447, 
            "name": "陕西电子信息职业技术学院"
        }, 
        {
            "city": "咸阳市", 
            "id": 2448, 
            "name": "陕西邮电职业技术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2449, 
            "name": "西安海棠职业学院"
        }, 
        {
            "city": "西安市", 
            "id": 2450, 
            "name": "西安汽车科技职业学院"
        }, 
        {
            "city": "西安市", 
            "id": 2451, 
            "name": "西安东方亚太职业技术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2452, 
            "name": "陕西警官职业学院"
        }, 
        {
            "city": "西安市", 
            "id": 2453, 
            "name": "陕西经济管理职业技术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2454, 
            "name": "西安铁路职业技术学院"
        }, 
        {
            "city": "咸阳市", 
            "id": 2455, 
            "name": "咸阳职业技术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2456, 
            "name": "西安职业技术学院"
        }, 
        {
            "city": "商洛市", 
            "id": 2457, 
            "name": "商洛职业技术学院"
        }, 
        {
            "city": "汉中市", 
            "id": 2458, 
            "name": "汉中职业技术学院"
        }, 
        {
            "city": "延安市", 
            "id": 2459, 
            "name": "延安职业技术学院"
        }, 
        {
            "city": "渭南市", 
            "id": 2460, 
            "name": "渭南职业技术学院"
        }, 
        {
            "city": "安康市", 
            "id": 2461, 
            "name": "安康职业技术学院"
        }, 
        {
            "city": "铜川市", 
            "id": 2462, 
            "name": "铜川职业技术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2463, 
            "name": "陕西青年职业学院"
        }, 
        {
            "city": "西安市", 
            "id": 2464, 
            "name": "陕西工商职业学院"
        }, 
        {
            "city": "西安市", 
            "id": 2465, 
            "name": "陕西电子科技职业学院"
        }, 
        {
            "city": "西安市", 
            "id": 2466, 
            "name": "陕西旅游烹饪职业学院"
        }, 
        {
            "city": "西安市", 
            "id": 2467, 
            "name": "西安医学高等专科学校"
        }, 
        {
            "city": "榆林市", 
            "id": 2468, 
            "name": "榆林职业技术学院"
        }, 
        {
            "city": "西安市", 
            "id": 2469, 
            "name": "陕西艺术职业学院"
        }, 
        {
            "city": "宝鸡市", 
            "id": 2470, 
            "name": "陕西机电职业技术学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2471, 
            "name": "兰州大学"
        }, 
        {
            "city": "兰州市", 
            "id": 2472, 
            "name": "兰州理工大学"
        }, 
        {
            "city": "兰州市", 
            "id": 2473, 
            "name": "兰州交通大学"
        }, 
        {
            "city": "兰州市", 
            "id": 2474, 
            "name": "甘肃农业大学"
        }, 
        {
            "city": "兰州市", 
            "id": 2475, 
            "name": "甘肃中医药大学"
        }, 
        {
            "city": "兰州市", 
            "id": 2476, 
            "name": "西北师范大学"
        }, 
        {
            "city": "兰州市", 
            "id": 2477, 
            "name": "兰州城市学院"
        }, 
        {
            "city": "庆阳市", 
            "id": 2478, 
            "name": "陇东学院"
        }, 
        {
            "city": "天水市", 
            "id": 2479, 
            "name": "天水师范学院"
        }, 
        {
            "city": "张掖市", 
            "id": 2480, 
            "name": "河西学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2481, 
            "name": "兰州财经大学"
        }, 
        {
            "city": "兰州市", 
            "id": 2482, 
            "name": "西北民族大学"
        }, 
        {
            "city": "兰州市", 
            "id": 2483, 
            "name": "甘肃政法学院"
        }, 
        {
            "city": "甘南藏族自治州", 
            "id": 2484, 
            "name": "甘肃民族师范学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2485, 
            "name": "兰州文理学院"
        }, 
        {
            "city": "平凉市", 
            "id": 2486, 
            "name": "甘肃医学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2487, 
            "name": "兰州工业学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2488, 
            "name": "西北师范大学知行学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2489, 
            "name": "兰州财经大学陇桥学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2490, 
            "name": "兰州财经大学长青学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2491, 
            "name": "兰州交通大学博文学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2492, 
            "name": "兰州理工大学技术工程学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2493, 
            "name": "兰州石化职业技术学院"
        }, 
        {
            "city": "陇南市", 
            "id": 2494, 
            "name": "陇南师范高等专科学校"
        }, 
        {
            "city": "定西市", 
            "id": 2495, 
            "name": "定西师范高等专科学校"
        }, 
        {
            "city": "兰州市", 
            "id": 2496, 
            "name": "甘肃建筑职业技术学院"
        }, 
        {
            "city": "酒泉市", 
            "id": 2497, 
            "name": "酒泉职业技术学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2498, 
            "name": "兰州外语职业学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2499, 
            "name": "兰州职业技术学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2500, 
            "name": "甘肃警察职业学院"
        }, 
        {
            "city": "天水市", 
            "id": 2501, 
            "name": "甘肃林业职业技术学院"
        }, 
        {
            "city": "天水市", 
            "id": 2502, 
            "name": "甘肃工业职业技术学院"
        }, 
        {
            "city": "武威市", 
            "id": 2503, 
            "name": "武威职业学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2504, 
            "name": "甘肃交通职业技术学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2505, 
            "name": "兰州资源环境职业技术学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2506, 
            "name": "甘肃农业职业技术学院"
        }, 
        {
            "city": "武威市", 
            "id": 2507, 
            "name": "甘肃畜牧工程职业技术学院"
        }, 
        {
            "city": "嘉峪关市", 
            "id": 2508, 
            "name": "甘肃钢铁职业技术学院"
        }, 
        {
            "city": "天水市", 
            "id": 2509, 
            "name": "甘肃机电职业技术学院"
        }, 
        {
            "city": "金昌市", 
            "id": 2510, 
            "name": "甘肃有色冶金职业技术学院"
        }, 
        {
            "city": "白银市", 
            "id": 2511, 
            "name": "白银矿冶职业技术学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2512, 
            "name": "甘肃卫生职业学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2513, 
            "name": "兰州科技职业学院"
        }, 
        {
            "city": "庆阳市", 
            "id": 2514, 
            "name": "庆阳职业技术学院"
        }, 
        {
            "city": "临夏州", 
            "id": 2515, 
            "name": "临夏现代职业学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2516, 
            "name": "甘肃能源化工职业学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2517, 
            "name": "兰州现代职业学院"
        }, 
        {
            "city": "平凉市", 
            "id": 2518, 
            "name": "平凉职业技术学院"
        }, 
        {
            "city": "兰州市", 
            "id": 2519, 
            "name": "甘肃财贸职业学院"
        }, 
        {
            "city": "西宁市", 
            "id": 2520, 
            "name": "青海大学"
        }, 
        {
            "city": "西宁市", 
            "id": 2521, 
            "name": "青海师范大学"
        }, 
        {
            "city": "西宁市", 
            "id": 2522, 
            "name": "青海民族大学"
        }, 
        {
            "city": "西宁市", 
            "id": 2523, 
            "name": "青海大学昆仑学院"
        }, 
        {
            "city": "西宁市", 
            "id": 2524, 
            "name": "青海卫生职业技术学院"
        }, 
        {
            "city": "西宁市", 
            "id": 2525, 
            "name": "青海警官职业学院"
        }, 
        {
            "city": "西宁市", 
            "id": 2526, 
            "name": "青海畜牧兽医职业技术学院"
        }, 
        {
            "city": "西宁市", 
            "id": 2527, 
            "name": "青海交通职业技术学院"
        }, 
        {
            "city": "西宁市", 
            "id": 2528, 
            "name": "青海建筑职业技术学院"
        }, 
        {
            "city": "西宁市", 
            "id": 2529, 
            "name": "西宁城市职业技术学院"
        }, 
        {
            "city": "海东市", 
            "id": 2530, 
            "name": "青海高等职业技术学院"
        }, 
        {
            "city": "海西蒙古族藏族自治州", 
            "id": 2531, 
            "name": "青海柴达木职业技术学院"
        }, 
        {
            "city": "银川市", 
            "id": 2532, 
            "name": "宁夏大学"
        }, 
        {
            "city": "银川市", 
            "id": 2533, 
            "name": "宁夏医科大学"
        }, 
        {
            "city": "固原市", 
            "id": 2534, 
            "name": "宁夏师范学院"
        }, 
        {
            "city": "银川市", 
            "id": 2535, 
            "name": "北方民族大学"
        }, 
        {
            "city": "石嘴山市", 
            "id": 2536, 
            "name": "宁夏理工学院"
        }, 
        {
            "city": "银川市", 
            "id": 2537, 
            "name": "宁夏大学新华学院"
        }, 
        {
            "city": "银川市", 
            "id": 2538, 
            "name": "银川能源学院"
        }, 
        {
            "city": "银川市", 
            "id": 2539, 
            "name": "中国矿业大学银川学院"
        }, 
        {
            "city": "吴忠市", 
            "id": 2540, 
            "name": "宁夏民族职业技术学院"
        }, 
        {
            "city": "银川市", 
            "id": 2541, 
            "name": "宁夏工业职业学院"
        }, 
        {
            "city": "银川市", 
            "id": 2542, 
            "name": "宁夏职业技术学院"
        }, 
        {
            "city": "银川市", 
            "id": 2543, 
            "name": "宁夏工商职业技术学院"
        }, 
        {
            "city": "银川市", 
            "id": 2544, 
            "name": "宁夏财经职业技术学院"
        }, 
        {
            "city": "银川市", 
            "id": 2545, 
            "name": "宁夏司法警官职业学院"
        }, 
        {
            "city": "银川市", 
            "id": 2546, 
            "name": "宁夏建设职业技术学院"
        }, 
        {
            "city": "银川市", 
            "id": 2547, 
            "name": "宁夏葡萄酒与防沙治沙职业技术学院"
        }, 
        {
            "city": "银川市", 
            "id": 2548, 
            "name": "宁夏幼儿师范高等专科学校"
        }, 
        {
            "city": "银川市", 
            "id": 2549, 
            "name": "宁夏艺术职业学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2550, 
            "name": "新疆大学"
        }, 
        {
            "city": "阿拉尔市", 
            "id": 2551, 
            "name": "塔里木大学"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2552, 
            "name": "新疆农业大学"
        }, 
        {
            "city": "石河子市", 
            "id": 2553, 
            "name": "石河子大学"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2554, 
            "name": "新疆医科大学"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2555, 
            "name": "新疆师范大学"
        }, 
        {
            "city": "喀什地区", 
            "id": 2556, 
            "name": "喀什大学"
        }, 
        {
            "city": "伊犁哈萨克自治州", 
            "id": 2557, 
            "name": "伊犁师范学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2558, 
            "name": "新疆财经大学"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2559, 
            "name": "新疆艺术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2560, 
            "name": "新疆工程学院"
        }, 
        {
            "city": "昌吉回族自治州", 
            "id": 2561, 
            "name": "昌吉学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2562, 
            "name": "新疆警察学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2563, 
            "name": "新疆大学科学技术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2564, 
            "name": "新疆农业大学科学技术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2565, 
            "name": "新疆医科大学厚博学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2566, 
            "name": "新疆财经大学商务学院"
        }, 
        {
            "city": "石河子市", 
            "id": 2567, 
            "name": "石河子大学科技学院"
        }, 
        {
            "city": "和田地区", 
            "id": 2568, 
            "name": "和田师范专科学校"
        }, 
        {
            "city": "昌吉回族自治州", 
            "id": 2569, 
            "name": "新疆农业职业技术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2570, 
            "name": "乌鲁木齐职业大学"
        }, 
        {
            "city": "和田地区", 
            "id": 2571, 
            "name": "新疆维吾尔医学专科学校"
        }, 
        {
            "city": "克拉玛依市", 
            "id": 2572, 
            "name": "克拉玛依职业技术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2573, 
            "name": "新疆机电职业技术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2574, 
            "name": "新疆轻工职业技术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2575, 
            "name": "新疆能源职业技术学院"
        }, 
        {
            "city": "昌吉回族自治州", 
            "id": 2576, 
            "name": "昌吉职业技术学院"
        }, 
        {
            "city": "伊犁哈萨克自治州", 
            "id": 2577, 
            "name": "伊犁职业技术学院"
        }, 
        {
            "city": "阿克苏地区", 
            "id": 2578, 
            "name": "阿克苏职业技术学院"
        }, 
        {
            "city": "巴音郭楞蒙古自治州", 
            "id": 2579, 
            "name": "巴音郭楞职业技术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2580, 
            "name": "新疆建设职业技术学院"
        }, 
        {
            "city": "五家渠市", 
            "id": 2581, 
            "name": "新疆兵团警官高等专科学校"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2582, 
            "name": "新疆现代职业技术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2583, 
            "name": "新疆天山职业技术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2584, 
            "name": "新疆交通职业技术学院"
        }, 
        {
            "city": "石河子市", 
            "id": 2585, 
            "name": "新疆石河子职业技术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2586, 
            "name": "新疆职业大学"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2587, 
            "name": "新疆体育职业技术学院"
        }, 
        {
            "city": "伊犁哈萨克自治州", 
            "id": 2588, 
            "name": "新疆应用职业技术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2589, 
            "name": "新疆师范高等专科学校"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2590, 
            "name": "新疆铁道职业技术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2591, 
            "name": "新疆生产建设兵团兴新职业技术学院"
        }, 
        {
            "city": "哈密市", 
            "id": 2592, 
            "name": "哈密职业技术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2593, 
            "name": "新疆科技职业技术学院"
        }, 
        {
            "city": "吐鲁番市", 
            "id": 2594, 
            "name": "吐鲁番职业技术学院"
        }, 
        {
            "city": "乌鲁木齐市", 
            "id": 2595, 
            "name": "新疆工业职业技术学院"
        }
    ]
}


var grade = {
    "grade": [
        "大一年级", 
        "大二年级", 
        "大三年级", 
        "大四年级", 
        "大五年级", 
        "研一年级", 
        "研二年级", 
        "研三年级", 
        "研四年级", 
        "研五年级", 
        "直博一年级", 
        "直博二年级", 
        "直博三年级", 
        "直博四年级", 
        "直博五年级", 
        "直博六年级", 
        "直博七年级", 
        "直博八年级",         
        "研转博一年级", 
        "研转博二年级", 
        "研转博三年级", 
        "研转博四年级", 
        "研转博五年级", 

    ]
}


var cons = {
    "constellation": [
        "白羊座", 
        "金牛座", 
        "双子座", 
        "巨蟹座", 
        "狮子座", 
        "处女座", 
        "天秤座", 
        "天蝎座", 
        "射手座", 
        "摩羯座", 
        "水瓶座", 
        "双鱼座", 
    ]
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