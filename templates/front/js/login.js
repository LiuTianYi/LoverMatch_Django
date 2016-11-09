$(function() {
  $("#login-btn").click(function() { // if submit button is clicked
    var username = $("#login-user").val(); 
    //lert(username)
    var password = $("#login-pass").val(); // define password variable
    //alert(password)





  
    $.ajax({ // JQuery ajax function
      type: "POST", // Submitting Method
      url: 'http://168.63.205.250/login',  //这里是你的api名字
      data: {"username":username,"password":password}, // the data that will be sent to php processor
      dataType: "json", // type of returned data
      success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
      //alert(data)
      //var t_data = {"code":0};
      //alert(t_data["code"]);
      if (data["code"]==0) {
      	window.location="./regsuccess.html"
      }
      }
     });
    return false;
    });
  $('#reg-btn').click(function(){window.location="./reg.html"});
});