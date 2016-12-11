

$(function(){

    


	//load hobby
    $("#username").attr("placeholder",dat["name"]);


	$("#hobby").html("");
    $("#f-hobby").html("");
	for (var i = 0 ;  i < hobbies["hobby"].length ; i++){
		var hb = hobbies["hobby"][i];
		$("#hobby").append('<label class="checkbox-inline " id="hobby-'+i+'"><input class="hobbies" type="checkbox" name="checkboxes" id="checkboxes-'+i+'" value="'+i+'">'+hb+'</label>');
        $("#f-hobby").append('<label class="checkbox-inline " id="f-hobby-'+i+'"><input class="f-hobbies" type="checkbox" name="checkboxes" id="f-checkboxes-'+i+'" value="'+i+'">'+hb+'</label>');
	}

    console.log(dat['hobbiesId'])

    for (var i = 0 ; i < dat['hobbiesId'].length ; i++){
        $("#checkboxes-"+dat['hobbiesId'][i]).attr("checked","checked");
    }

    for (var i = 0 ; i < dat['hobbiesId'].length ; i++){
        $("#checkboxes-"+dat['hobbiesId'][i]).attr("checked","checked");
    }

    for (var i = 0 ; i < features['hobbiesId'].length ; i++){
        $("#f-checkboxes-"+features['hobbiesId'][i]).attr("checked","checked");
    }





    $("#selectcons").html("");
    $("#f-selectcons").html("");
    for (var i = 0 ; i < cons["constellation"].length ; i++){
        var conste = cons["constellation"][i];
        $("#selectcons").append('<option id=conste'+i+' value="'+i+'">'+conste+'</option>');
        $("#f-selectcons").append('<option id=f-conste'+i+' value="'+i+'">'+conste+'</option>');
    }

    $("#conste"+dat["constellationId"]).attr("selected","true");

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
        loadfmajor1(fm1);
        loadfmajor2(fm1,1);
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


    var tage;
    var theight;
    var tweight;
    var tprovince; 
    var tschool;
    var tm1;
    var tgrade;
    var tcon;
    var thobby;


        if(percentage["age"] == null) {
            tage = 10;
        }else{
            tage = parseInt(percentage["age"] *10);
        }
        if(percentage["height"] == null) {
            theight = 10;
        }else{
            theight = parseInt(percentage["height"] *10);
        }
        if(percentage["weight"] == null) {
            tweight = 10;
        }else{
            tweight = parseInt(percentage["weight"] *10);
        }
        if(percentage["hometownId"] == null) {
            tprovince = 10;
        }else{
            tprovince = parseInt(percentage["hometownId"] *10);
        }
        if(percentage["universityId"] == null) {
            tschool = 10;
        }else{
            tschool = parseInt(percentage["universityId"] *10);
        }
        if(percentage["schoolId"] == null) {
            tm1 = 10;
        }else{
            tm1 = parseInt(percentage["schoolId"] *10);
        }
        if(percentage["gradeId"] == null) {
            tgrade = 10;
        }else{
            tgrade = parseInt(percentage["gradeId"] *10);
        }
        if(percentage["constellationId"] == null) {
            tcon = 10;
        }else{
            tcon = parseInt(percentage["constellationId"] *10);
        }
        if(percentage["hobbiesId"] == null) {
            thobby = 10;
        }else{
            thobby = parseInt(percentage["hobbiesId"] *10);
        }



    $("#rateage").attr("value",tage);
    $("#rateheight").attr("value",theight);
    $("#rateweight").attr("value",tweight);
    $("#rateprovince").attr("value",tprovince);
    $("#rateschool").attr("value",tschool);
    $("#ratem1").attr("value",tm1);
    $("#rategrade").attr("value",tgrade);
    $("#ratecons").attr("value",tcon);
    $("#ratehobby").attr("value",thobby);

    var localmodel;
    
    $("#featuremodel").click(function(){
    $.ajax({ // JQuery ajax function
    type: "POST", // Submitting Method
    url: 'http://168.63.205.250/get_models/',  //这里是你的api名字
    dataType: "json", // type of returned data
    data: {          
     "age":18,            
     "gender":0,          
     "hometownId":030203,
     "universityId":1,
     "schoodId":[01,02,12],
     "hobbiesId":[2,3]
    },
    success: function(data) {
        localmodel = data;
    },
    async: false
    });

    var index = 0;
    $("#getfeature").click(function(){

      if ( index > 1 )
        alert('没有了！')
      else
      {
        var i = index;
        document.getElementById("f-age").value = data[i]["features"]["age"][0];
        document.getElementById("f-height").value = data[i]["features"]["height"][0];
        document.getElementById("f-weight").value = data[i]["features"]["weight"][0];
        var hmid = data[i]["features"]["hometownId"][0];
        document.getElementById("f-selectprovince").value = int(hmid[0]) * 10 + int(hmid[1]);
        document.getElementById("f-city").value = int(hmid[2]) * 10 + int(hmid[3]);
        document.getElementById("f-county").value = int(hmid[4]) * 10 + int(hmid[5]);
        document.getElementById("f-selectschool").value = data[i]["features"]["universityId"][0];

        document.getElementById("f-selectmajor1").value = int(data[i]["features"]["schoodId"][0][0]);
        document.getElementById("f-selectmajor2").value = int(data[i]["features"]["schoodId"][0][1]);
        document.getElementById("f-selectmajor3").value = int(data[i]["features"]["schoodId"][0][2]);

        document.getElementById("rateage").value = data[i]["percentage"]["age"];
        document.getElementById("rateheight").value = data[i]["percentage"]["height"];
        document.getElementById("rateweight").value = data[i]["percentage"]["weight"];
        document.getElementById("rateprovince").value = data[i]["percentage"]["hometownId"];
        document.getElementById("rateschool").value = data[i]["percentage"]["universityId"];
        document.getElementById("ratem1").value = data[i]["percentage"]["schoodId"];
        document.getElementById("ratehobby").value = data[i]["percentage"]["hobbiesId"];
        index = index + 1;
     //     document.getElementById("f-hobby").value = int(data[i]["features"]["hobbiesId"][0]);
      }
      
});

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



        var rage;
        var rheight;
        var rweight;
        var rprovince;
        var rschool;
        var rm1;
        var rgrade;
        var rcon;
        var rhobby;


        if ($("#rateage").val() != "" || $("#rateage").val() != null){
            rage = parseFloat($("#rateage").val());
        }else{
            rage = percentage['age'];
        }
        if ($("#rateheight").val() != "" || $("#rateheight").val() != null){
            rheight = parseFloat($("#rateheight").val());
        }else{
            rheight = percentage['height'];
        }

        if ($("#rateweight").val() != "" || $("#rateweight").val() != null){
            rweight = parseFloat($("#rateweight").val());
        }else{
            rweight = percentage['weight'];
        }
        if ($("#rateprovince").val() != "" || $("#rateprovince").val() != null){
            rprovince = parseFloat($("#rateprovince").val());
        }else{
            rprovince = percentage['hometownId'];
        }


        if ($("#rateschool").val() != "" || $("#rateschool").val() != null){
            rschool = parseFloat($("#rateschool").val());
        }else{
            rschool = percentage['universityId'];
        }
        if ($("#ratem1").val() != "" || $("#ratem1").val() != null){
            rm1 = parseFloat($("#ratem1").val());
        }else{
            rm1 = percentage['schoolId'];
        }
        
        if ($("#rategrade").val() != "" || $("#rategrade").val() != null){
            rgrade = parseFloat($("#rategrade").val());
        }else{
            rgrade = percentage['gradeId'];
        }
        if ($("#ratecons").val() != "" || $("#ratecons").val() != null){
            rcon = parseFloat($("#ratecons").val());
        }else{
            rcon = percentage['constellationId'];
        }
        if ($("#ratehobby").val() != "" || $("#ratehobby").val() != null){
            rhobby = parseFloat($("#ratehobby").val());
        }else{
            rhobby = percentage['hobbiesId'];
        }


        
        
        
        

        
        
        
        
        

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
          data: {"age":[parseInt(fage)-2,parseInt(fage)+2],"height":[parseInt(fheight)-2,parseInt(fheight)+2],"weight":[parseInt(fweight)-2,parseInt(fweight)+2],"hometownId":[format2(fprovinceid)+format2(fcityid)+format2(fcountyid)],"universityId":[fschoolid],"constellationId":[fcostell],"hobbiesId":fhb,"schoolId":[[fm1,fm2,fm3]],"gradeId":[fyear]}, // the data that will be sent to php processor
          //data: {"age":[18,23],"height":[176,189],"weight":[45,54],"hometownId":[[fprovinceid,fcityid,fcountyid]],"universityId":fschoolid,"constellationId":fcostell,"hobbiesId":fhb,"schoolId":[[fm1,fm2,fm3]],"gradeId":fyear}, // the data that will be sent to php processor
          dataType: "json", // type of returned data
          success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
          //location.reload();
          },
          
         });

        if(rage == null) {
            rage = 1;
        }
        if(rheight == null) {
            rheight = 1;
        }
        if(rweight == null) {
            rweight = 1;
        }
        if(rprovince == null) {
            rprovince = 1;
        }
        if(rschool == null) {
            rschool = 1;
        }
        if(rm1 == null) {
            rm1 = 1;
        }
        if(rgrade == null) {
            rgrade = 1;
        }
        if(rcon == null) {
            rcon = 1;
        }
        if(rhobby == null) {
            rhobby = 1;
        }




       //var sum = parseFloat(rage)+rheight+rweight+rprovince+rschool+rcon+rhobby+rm1+rgrade;

       $.ajax({ // JQuery ajax function
          type: "POST", // Submitting Method
          url: 'http://168.63.205.250/update_percentage',  //这里是你的api名字
          data: {"age":rage/10,"height":rheight/10,"weight":rweight/10,"hometownId":rprovince/10,"universityId":rschool/10,"constellationId":rcon/10,"hobbiesId":rhobby/10,"schoolId":rm1/10,"gradeId":rgrade/10}, // the data that will be sent to php processor
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
        if ( m1 == null) {m1=dat['schoolId'][0];}
        if ( m2 == null) {m2=dat['schoolId'][1];}
        if ( m3 == null) {m3=dat['schoolId'][2];}
        if ( schoolid == null) {schoolid=dat['universityId'];}
        if ( sex == null) {sex=dat['gender'];}
        if ( costell == null) {costell=dat['constellationId'];}
        if ( year == null) {year=dat['gradeId'];}
        var height = $("#height").val();
        //console.log(height);
        var weight = $("#weight").val();

        var age = $("#age").val();

        var un = $("#username").val();
        console.log(un);
        if ( height == null || height == '') {height=dat['height'];}
        if ( weight == null || weight =='') {weight=dat['weight'];}
        if ( un == null || un =='') {un=dat['name'];}
        if ( age == null || age =='') {age=dat['age'];}
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

        //console.log("post");





       $.ajax({ // JQuery ajax function
          type: "POST", // Submitting Method
          url: 'http://168.63.205.250/update_self',  //这里是你的api名字
          //data: {"name":un},
          data: {"name":un,"age":age,"gender":sex,"height":height,"weight":weight,"hometownId":format2(2)+format2(5)+format2(7),"universityId":schoolid,"schoolId":[m1,m2,m3],"constellationId":costell,"hobbiesId":hb,"gradeId":year}, // the data that will be sent to php processor
          dataType: "json", // type of returned data
          success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
          //alert(data)
          alert('已经更新信息了')
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


function format2(num) {
    var r = "" + num;
    while (r.length < 2) {
        r = "0" + r;
    }
    return r;
}