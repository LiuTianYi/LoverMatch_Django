$(function() {

  $("#uploadphoto").click(function(){
    window.location="./upload_avatar.html"
  });

 $(window).load(function() {

    


   $.ajax({ // JQuery ajax function
      type: "POST", // Submitting Method
      url: 'http://168.63.205.250/showInfo',  //这里是你的api名字
      //data: {"username":"te"}, // the data that will be sent to php processor
      dataType: "json", // type of returned data
      success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
        if (data["result"]==-1)
          window.location="./login.html"
        ohome = data["data"]["hometownId"];
        oschool = data["data"]["schoolId"];
        ohobby = data["data"]["hobbiesId"];
        oname = data["data"]["name"];
        oweight = data["data"]["weight"];
        ogender = data["data"]["gender"];
        oage = data["data"]["age"];
        oheight = data["data"]["height"];
 //       ophotoAddress = data["data"]["photoAddress"];
        ouniversity = data["data"]["universityId"];
        ofeatuers = data["data"]["features"];
        ouser = data["data"]["user"];
        oloverMatched = data["data"]["loverMatched"];
        oloverMatch = data["data"]["loverMatch"];
        ogradeId = data["data"]["gradeId"];
//        overified = data["data"]["verified"];
        opercentage = data["data"]["percentage"];
        oconstellationId = data["data"]["constellationId"];
//        oschoresultool = data["data"]["result"];
          $("#usernamelabel").html(oname)
      }
     });

    if (ofeatuers == null && opercentage == null){
      alert("请完善你的个人信息和你希望找到的人！");
      location.reload() ;

    }

  });

  $("#nav-matched").click(function(){
    //alert("change color");
    $("#nav-match").css({"background-color":"#f8f8f8"});
    $("#nav-matched").css({"background-color":"#e7e7e7"});



  });
  
  $("#nav-match").click(function(){
    //alert("change color");
    $("#nav-matched").css({"background-color":"#f8f8f8"});
    $("#nav-match").css({"background-color":"#e7e7e7"});

  });
});

var matchli;

function getmatch(){
  $.ajax({ // JQuery ajax function
    type: "POST", // Submitting Method
    url: 'http://168.63.205.250/match/',  //这里是你的api名字
    dataType: "json", // type of returned data
    data: {"n":10},
    success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
      matchli = data
    }
  });
}


var ohome;
var oschool;
var ohobby;
var oname;
var oweight;
var ogender;
var oage;
var oheight;
var ophotoAddress;
var ouniversity;
var ofeatuers;
var ouser;
var oloverMatched;
var oloverMatch;
var ogradeId;
var overified;
var opercentage;
var oconstellationId;
var oresult;




