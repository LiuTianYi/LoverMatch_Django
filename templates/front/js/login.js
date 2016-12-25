$(function() {
  $("#login-btn").click(function() { // if submit button is clicked
    var username = $("#login-user").val(); 
    //lert(username)
    var password = $("#login-pass").val(); // define password variable
    //alert(password)

null



  
    $.ajax({ // JQuery ajax function
      type: "POST", // Submitting Method

      url: 'http://'+ip_addr+'/login',  //这里是你的api名字

      data: {"username":username,"password":password}, // the data that will be sent to php processor
      dataType: "json", // type of returned data
      success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
      //alert(data)
      //var t_data = {"code":0};
      //alert(t_data["code"]);
      if (data["code"]==0) {
      	window.location="./index.html"
      }else if (data["code"]==-3){
        window.location="./regsuccessremind.html"
      }else if (data['code' == -1]){
      	alert('去注册吧，你还没有注册呢')
      }else{
      	alert('尴尬，出错了，请联系工作人员吧。')
      }
      }
     });
    return false;
    });
  $('#reg-btn').click(function(){window.location="./reg.html"});
});