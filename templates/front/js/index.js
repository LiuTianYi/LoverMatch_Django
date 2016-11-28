


var dat;
var features;
var percentage;

$(function() {

  $("#uploadphoto").click(function(){
    window.location="photo_form.html"
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
    data: {"n":1},
    success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
      matchli = data
    }
  });
}


