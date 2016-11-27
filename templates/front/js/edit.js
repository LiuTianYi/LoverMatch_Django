var data;
var features;
var percentage;

$(function(){

    


	//load hobby
    $("#username").text(dat["name"]);


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

    //if (oconstellationId!=null){
	//	$("conste"+oconstellationId).attr("selected","true");
	//}



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



    $("#rateage").attr("value",0);
    $("#rateheight").attr("value",0);
    $("#rateweight").attr("value",0);
    $("#rateprovince").attr("value",0);
    $("#rateschool").attr("value",0);
    $("#ratem1").attr("value",0);
    $("#rategrade").attr("value",0);
    $("#ratecons").attr("value",0);
    $("#ratehobby").attr("value",0);




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
        var fheight = $("#f-height").val();
        //console.log(height);
        var fweight = $("#f-weight").val();

        var fage = $("#f-age").val();

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

        var rage = parseFloat($("#rateage").val());
        var rheight = parseFloat($("#rateheight").val());
        var rweight = parseFloat($("#rateweight").val());
        var rprovince = parseFloat($("#rateprovince").val());

        var rschool = parseFloat($("#rateschool").val());
        var rm1 = parseFloat($("#ratem1").val());
        var rgrade = parseFloat($("#rategrade").val());
        var rcon = parseFloat($("#ratecons").val());
        var rhobby = parseFloat($("#ratehobby").val());

        var un = 1;
        var age = 1;
        var sex = 1;
        var height = 1;
        var weight = 1;
        var provinceid = 1;
        var cityid = 1;
        var countyid = 1;
        var schoolid = 1;
        var m1 = 1;
        var m2 = 1;
        var m3 = 1;
        var costell = 1;
        var hb = 1;






       $.ajax({ // JQuery ajax function
          type: "POST", // Submitting Method
          url: 'http://168.63.205.250/update_feature',  //这里是你的api名字
          data: {"age":[parseInt(fage)-2,parseInt(fage)+2],"height":[parseInt(fheight)-2,parseInt(fheight)+2],"weight":[parseInt(fweight)-2,parseInt(fweight)+2],"hometownId":[[fprovinceid,fcityid,fcountyid]],"universityId":[fschoolid],"constellationId":[fcostell],"hobbiesId":fhb,"schoolId":[[fm1,fm2,fm3]],"gradeId":[fyear]}, // the data that will be sent to php processor
          //data: {"age":[18,23],"height":[176,189],"weight":[45,54],"hometownId":[[fprovinceid,fcityid,fcountyid]],"universityId":fschoolid,"constellationId":fcostell,"hobbiesId":fhb,"schoolId":[[fm1,fm2,fm3]],"gradeId":fyear}, // the data that will be sent to php processor
          dataType: "json", // type of returned data
          success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
          //location.reload();
          }
         });

       var sum = parseFloat(rage)+rheight+rweight+rprovince+rschool+rcon+rhobby+rm1+rgrade;

       $.ajax({ // JQuery ajax function
          type: "POST", // Submitting Method
          url: 'http://168.63.205.250/update_percentage',  //这里是你的api名字
          data: {"age":rage/sum,"height":rheight/sum,"weight":rweight/sum,"hometownId":rprovince/sum,"universityId":rschool/sum,"constellationId":rcon/sum,"hobbiesId":rhobby/sum,"schoolId":rm1/sum,"gradeId":rgrade/sum}, // the data that will be sent to php processor
          dataType: "json", // type of returned data
          success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
          //alert(data)
          //location.reload();
          }
         });
 


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
        if ( height == null || height == '') {height=1;}
        if ( weight == null || weight =='') {weight=1;}
        if ( un == null || un =='') {un=1;}
        if ( age == null || age =='') {age=1;}
        var hb=[];

        $('.hobbies').each(function(){
            console.log($(this).is(":checked"));
            if ($(this).is(":checked")==true){

                hb.push($(this).attr('value'));
                //console.log(hb.length);
            }

        });

        var rage = 1;
        var rheight = 1;
        var rweight = 1;
        var rprovince = 1;

        var rschool = 1;
        var rm1 = 1;
        var rcon = 1;
        var rhobby = 1;


        var fage = 1;
        var fheight = 1;
        var fweight = 1;
        var fprovinceid = 1;
        var fcityid = 1;
        var fcountyid = 1;
        var fschoolid = 1;
        var fcostell = 1;
        var fhb = 1;
        var fm1 = 1;
        var fm2 = 1;
        var fm3 = 1;

        console.log("post");





       $.ajax({ // JQuery ajax function
          type: "POST", // Submitting Method
          url: 'http://168.63.205.250/update_self',  //这里是你的api名字
          //data: {"name":un},
          data: {"name":un,"age":age,"gender":sex,"height":height,"weight":weight,"hometownId":[provinceid,cityid,countyid],"universityId":schoolid,"schoolId":[m1,m2,m3],"constellationId":costell,"hobbiesId":hb,"gradeId":year}, // the data that will be sent to php processor
          dataType: "json", // type of returned data
          success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
          //alert(data)
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


