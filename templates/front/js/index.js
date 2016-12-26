


var dat;
var features;
var percentage;

$(function() {

  $("#uploadphoto").click(function(){
    window.location="http://"+ip_adder+"/photo_form.html"
  });

 

    


   $.ajax({ // JQuery ajax function
      type: "POST", // Submitting Method
      url: 'http://'+ip_adder+'/showInfo',  //这里是你的api名字
      //data: {"username":"te"}, // the data that will be sent to php processor
      dataType: "json", // type of returned data
      success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
        //console.log(data)
		if (data['code']==-1){
			window.location="http://"+ip_adder+"/static/front/login.html";
		}
        dat = data['data'];
        features = data['features'];
        percentage = data['percentage'];
        $("#usernamelabel").text(dat["name"]);
        //$("#userinfo").text("你是".concat(cons["constellation"][dat['constellationId']],"的，你的身高",dat["height"]));
        $("#user_profile_pic").css({"background-image":"url("+dat['photoAddress']+")"});

      },
      async: false
     });

   $.ajax({
   	type: "POST",
   	url: ""
   });



   //console.log(dat)
   //console.log(features)
   //console.log(percentage)


    


    getmatch();

  

  $("#nav-matched").click(function(){
    //alert("change color");
    $("#nav-match").css({"background-color":"#f8f8f8"});
    $("#nav-matched").css({"background-color":"#e7e7e7"});
    getmatch();



  });
  
  $("#nav-match").click(function(){
    //alert("change color");
    $("#nav-matched").css({"background-color":"#f8f8f8"});
    $("#nav-match").css({"background-color":"#e7e7e7"});
    getmatch2();

  });
});

var matchli;

function getmatch(){
  $.ajax({ // JQuery ajax function
    type: "POST", // Submitting Method
    url: 'http://'+ip_adder+'/match/',  //这里是你的api名字
    dataType: "json", // type of returned data
    data: {"n":10},
    success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
      var infostring = "";
      //infostring.concat("<p></p>")


      $("#match_spot").html("");
      for (var i = 0 ; i < data["lovermatch"].length ; i++ ){
      	infostring = "";
      //console.log(data["lovermatch"][0][0]["height"])
        if (data["lovermatch"][i][0]["height"] != null){
        	infostring = infostring.concat("<p>他的身高是"+String(data["lovermatch"][parseInt(i)][0]["height"])+"厘米.</p>");
        }
        if (data["lovermatch"][parseInt(i)][0]["weight"] != null){
        	infostring = infostring.concat("<p>他的体重是"+String(data["lovermatch"][parseInt(i)][0]["weight"])+"千克.</p>");
        }
        if (data["lovermatch"][parseInt(i)][0]["age"] != null){
        	infostring = infostring.concat("<p>他的今年"+String(data["lovermatch"][parseInt(i)][0]["age"])+"岁.</p>");
        }
        if (data["lovermatch"][parseInt(i)][0]["gradeId"] != null){
        	infostring = infostring.concat("<p>他现在在上"+grade["grade"][parseInt(data["lovermatch"][parseInt(i)][0]["gradeId"])]+".</p>");
        }
        if (data['lovermatch'][i][0]['universityId'] != null){
        	infostring = infostring.concat("<p>他现在"+school["school"][parseInt(data["lovermatch"][parseInt(i)][0]["universityId"])]['name']+"上学.</p>");
        }
        if (data['lovermatch'][i][0]['constellationId'] != null){
        	infostring = infostring.concat("<p>他是"+cons["constellation"][parseInt(data["lovermatch"][parseInt(i)][0]["constellationId"])]+"星座的.</p>");
        }

        if (data["lovermatch"][i][0]["hobbiesId"].length != 0){
        	infostring = infostring.concat("<p>他的兴趣爱好有：")
        	for (var j = 0 ; j < data["lovermatch"][i][0]["hobbiesId"].length ; j++){
        		infostring = infostring.concat(hobbies['hobby'][j]+"  ")
        	}
        	infostring = infostring.concat('</p>')
        }

        console.log(infostring)
      	$("#match_spot").append('<li class="list-group-item item" id="hover-parent"><span class="badge">'+String(parseFloat(data["lovermatch"][i][1])*100)+'</span>'+data["lovermatch"][i][0]['name']+'<div class="match-avt" style="background-image: url('+data["lovermatch"][i][0]['photoAddress']+')"></div><div id="hc">'+infostring+'</div><div class="progress bar"><div class="progress-bar" role="progressbar" aria-valuenow="'+String(parseFloat(data["lovermatch"][i][1])*100)+'" aria-valuemin="0" aria-valuemax="100" style="width: '+String(parseFloat(data["lovermatch"][i][1])*100)+'%;"></div></li>')


      }
    },error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
  });
}

function getmatch2(){
  $.ajax({ // JQuery ajax function
    type: "POST", // Submitting Method
    url: 'http://'+ip_adder+'/match/',  //这里是你的api名字
    dataType: "json", // type of returned data
    data: {"n":10},
    success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
      var infostring = "";
      //infostring.concat("<p></p>")


      $("#match_spot").html("");
      for (var i = 0 ; i < data["lovermatched"].length ; i++ ){
      	infostring = "";
      //console.log(data["lovermatch"][0][0]["height"])
        if (data["lovermatched"][i][0]["height"] != null){
        	infostring = infostring.concat("<p>他的身高是"+String(data["lovermatch"][parseInt(i)][0]["height"])+"厘米.</p>");
        }
        if (data["lovermatched"][parseInt(i)][0]["weight"] != null){
        	infostring = infostring.concat("<p>他的体重是"+String(data["lovermatch"][parseInt(i)][0]["weight"])+"千克.</p>");
        }
        if (data["lovermatched"][parseInt(i)][0]["age"] != null){
        	infostring = infostring.concat("<p>他的今年"+String(data["lovermatch"][parseInt(i)][0]["age"])+"岁.</p>");
        }
        if (data["lovermatched"][parseInt(i)][0]["gradeId"] != null){
        	infostring = infostring.concat("<p>他现在在上"+grade["grade"][parseInt(data["lovermatch"][parseInt(i)][0]["gradeId"])]+".</p>");
        }
        if (data['lovermatched'][i][0]['universityId'] != null){
        	infostring = infostring.concat("<p>他现在"+school["school"][parseInt(data["lovermatch"][parseInt(i)][0]["universityId"])]['name']+"上学.</p>");
        }
        if (data['lovermatched'][i][0]['constellationId'] != null){
        	infostring = infostring.concat("<p>他是"+cons["constellation"][parseInt(data["lovermatch"][parseInt(i)][0]["constellationId"])]+"星座的.</p>");
        }

        if (data["lovermatched"][i][0]["hobbiesId"].length != 0){
        	infostring = infostring.concat("<p>他的兴趣爱好有：")
        	for (var j = 0 ; j < data["lovermatched"][i][0]["hobbiesId"].length ; j++){
        		infostring = infostring.concat(hobbies['hobby'][j]+"  ")
        	}
        	infostring = infostring.concat('</p>')
        }

        console.log(infostring)
      	$("#match_spot").append('<li class="list-group-item item" id="hover-parent"><span class="badge">'+String(parseFloat(data["lovermatched"][i][1])*100)+'</span>'+data["lovermatched"][i][0]['name']+'<div class="match-avt" style="background-image: url('+data["lovermatched"][i][0]['photoAddress']+')"></div><div id="hc">'+infostring+'</div><div class="progress bar"><div class="progress-bar" role="progressbar" aria-valuenow="'+String(parseFloat(data["lovermatched"][i][1])*100)+'" aria-valuemin="0" aria-valuemax="100" style="width: '+String(parseFloat(data["lovermatched"][i][1])*100)+'%;"></div></li>')


      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
  });
}


