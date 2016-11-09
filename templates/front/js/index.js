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
      alert(data);
    });
  });
});
