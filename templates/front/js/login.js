$(function() {
  $("#login-btn").click(function() { // if submit button is clicked
    var username = $("#login-user").val(); 
    alert(username)
    var password = $("#login-pass").val(); // define password variable
    alert(password)

    if ($('#remember').is(':checked')) {
            // save username and password
            localStorage.userName = username;
            localStorage.password = password;
            localStorage.checkBoxValidation = $('#remember').val();
        } else {
            localStorage.userName = "手机号码";
            localStorage.password = "密码";
            localStorage.checkBoxValidation = '';
        } 

  
    $.ajax({ // JQuery ajax function
      type: "POST", // Submitting Method
      url: 'api_name',  //这里是你的api名字
      data: 'username='+ username + '&password=' + password, // the data that will be sent to php processor
      dataType: "json", // type of returned data
      success: function(data) { // if ajax function results success 这里返回你后台检查通过或者不通过的信息
      if (data == 0) { // if the returned data equal 0
      //$('.errormess').html('Wrong Login Data'); // print error message
      } else { // if the reurned data not equal 0
      //$('.errormess').html('<b style="color: green;">you are logged. wait for redirection</b>');// print success message   
      //document.location.href = './index.html'; // redirect to the private area  
      }
      }
     });
    return false;
    });
});