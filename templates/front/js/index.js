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
      alert(data)
      }
     });
  });

  $("#nav-matched").click(function(){
    //alert("change color");
    $("#nav-match").css({"background-color":"#f8f8f8"});
    $("#nav-matched").css({"background-color":"#e7e7e7"});

    $.post('http://localhost:8018/login', {} ,function(data){
      alert(data);

    }, "json");

  });
  
  $("#nav-match").click(function(){
    //alert("change color");
    $("#nav-matched").css({"background-color":"#f8f8f8"});
    $("#nav-match").css({"background-color":"#e7e7e7"});
    $.post('http://localhost:8018/matchlist2',function(data){
      //alert(data);
      ohome = data["data"]["hometownId"];
      oschool = data["data"]["hometownId"];
      ohobby = data["data"]["hometownId"];
      oname = data["data"]["hometownId"];
      oweight = data["data"]["hometownId"];
      ogender = data["data"]["hometownId"];
      oage = data["data"]["hometownId"];
      oheight = data["data"]["hometownId"];
      ophotoAddress = data["data"]["hometownId"];
      ouniversity = data["data"]["hometownId"];
      ofeatuers = data["data"]["hometownId"];
      ouser = data["data"]["hometownId"];
      oloverMatched = data["data"]["hometownId"];
      oloverMatch = data["data"]["hometownId"];
      ogradeId = data["data"]["hometownId"];
      overified = data["data"]["hometownId"];
      opercentage = data["data"]["hometownId"];
      oconstellationId = data["data"]["hometownId"];
      oschoresultool = data["data"]["hometownId"];
    });
  });
});


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


{"data": 
  {"hometownId": null, 
  "schoolId": null, 
  "hobbiesId": [], 
  "name": "te", 
  "weight": null, 
  "gender": null, 
  "age": null, 
  "height": null, 
  "photoAddress": null, 
  "universityId": null, 
  "features": null, 
  "user": "te", 
  "loverMatched": null, 
  "gradeId": null, 
  "verified": null, 
  "percentage": null, 
  "loverMatch": null, 
  "constellationId": null}, 
  "result": 0
}
