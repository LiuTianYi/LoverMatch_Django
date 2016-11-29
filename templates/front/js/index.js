


var dat;
var features;
var percentage;

$(function() {

  $("#uploadphoto").click(function(){
    window.location="http://168.63.205.250/photo_form.html"
  });

 

    


   $.ajax({ // JQuery ajax function
      type: "POST", // Submitting Method
      url: 'http://168.63.205.250/showInfo',  //这里是你的api名字
      //data: {"username":"te"}, // the data that will be sent to php processor
      dataType: "json", // type of returned data
      success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
        //console.log(data)
        dat = data['data'];
        features = data['features'];
        percentage = data['percentage'];
        $("#usernamelabel").text(dat["name"]);
        $("#userinfo").text("你是".concat(cons["constellation"][dat['constellationId']],"的，你的身高",dat["height"]));
        $("#user_profile_pic").css({"background-image":"url("+dat['photoAddress']+")"});

      },
      async: false
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
    url: 'http://168.63.205.250/match/',  //这里是你的api名字
    dataType: "json", // type of returned data
    data: {"n":2},
    success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
      var infostring = "";
      //infostring.concat("<p></p>")


      $("#match_spot").html("");
      for (var i = 0 ; i < data["lovermatch"].length ; i++ )
      	infostring = "";
      console.log(data["lovermatch"][0][0]["height"])
        if (data["lovermatch"][parseInt(i)][0]["height"] != null){
        	infostring.concat("<p>他的身高是"+String(data["lovermatch"][parseInt(i)][0]["height"])+".</p>");
        }
        if (data["lovermatch"][parseInt(i)][0]["weight"] != null){
        	infostring.concat("<p>他的体重是"+String(data["lovermatch"][parseInt(i)][0]["weight"])+".</p>");
        }
        if (data["lovermatch"][parseInt(i)][0]["age"] != null){
        	infostring.concat("<p>他的今年"+String(data["lovermatch"][parseInt(i)][0]["age"])+".</p>");
        }
        if (data["lovermatch"][parseInt(i)][0]["gradeId"] != null){
        	infostring.concat("<p>他现在在上"+grade["grade"][parseInt(data["lovermatch"][parseInt(i)][0]["gradeId"])]+".</p>");
        }
      	$("#match_spot").append('<li class="list-group-item item" id="hover-parent"><span class="badge">'+String(parseFloat(data["lovermatch"][i][1])*100)+'</span>'+data["lovermatch"][i][0]['name']+'<div class="match-avt" style="background-image: url('+data["lovermatch"][i][0]['photoAddress']+')"></div><div id="hc">'+infostring+'</div><div class="progress bar"><div class="progress-bar" role="progressbar" aria-valuenow="'+String(parseFloat(data["lovermatch"][i][1])*100)+'" aria-valuemin="0" aria-valuemax="100" style="width: '+String(parseFloat(data["lovermatch"][i][1])*100)+'%;"></div></li>')
    }
  });
}




