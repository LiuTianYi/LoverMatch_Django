function validEmail(v) {
    var r = new RegExp("[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    return (v.match(r) == null) ? false : true;
}

$(function() {
  $("#submit").click(function() { // if submit button is clicked
    var un1 = $("#InputName").val(); 
    //alert(username)
    var em1 = $("#InputEmailFirst").val(); // define password variable
    //alert(password)
    var em2 = $("#InputEmailSecond").val(); // define password variable
    //alert(password)
    var pw1 = $("#PasswordFirst").val(); // define password variable
    //lert(password)
    var pw2 = $("#PasswordSecond").val(); // define password variable
    //alert(password)

    if (un1==""){
    	$("#namelabel").css({"color":"red"});
    	$("#namelabel").text("这里要填昵称的呀，不然无法给你找对象的。");
    	$("#InputName").css({"border-color":"red"});
    	$("#InputName").focus();
    	return false;
    }
    else{
    	$("#namelabel").css({"color":"black"});
    	$("#InputName").css({"border-color":"black"});
    	$("#namelabel").text("昵称");
    }

    if (em1==""){
    	$("#email1label").css({"color":"red"});
    	$("#email1label").text("这里要填昵称的呀，不然无法给你找对象的。");
    	$("#InputEmailFirst").css({"border-color":"red"});
    	$("#InputEmailFirst").focus();
    	return false;
    }
    else{
    	$("#email1label").css({"color":"black"});
    	$("#InputEmailFirst").css({"border-color":"black"});
    	$("#email1label").text("邮箱");
    }

    if (!validEmail(em1)){
    	$("#email1label").css({"color":"red"});
    	$("#email1label").text("蒙我吧，这哪是邮箱呀。");
    	$("#InputEmailFirst").css({"border-color":"red"});
    	$("#InputEmailFirst").focus();
    	return false;    	
    }
    else{
    	$("#email1label").css({"color":"black"});
    	$("#InputEmailFirst").css({"border-color":"black"});
    	$("#email1label").text("邮箱");
    }

    if (em2==""){
    	$("#email2label").css({"color":"red"});
    	$("#email2label").text("麻烦你再填一次的啦。");
    	$("#InputEmailSecond").css({"border-color":"red"});
    	$("#InputEmailSecond").focus();
    	return false;
    }
    else{
    	$("#email2label").css({"color":"black"});
    	$("#InputEmailSecond").css({"border-color":"black"});
    	$("#email2label").text("确认邮箱");
    }


    if (!validEmail(em2)){
    	$("#email2label").css({"color":"red"});
    	$("#email2label").text("上面明明是邮箱，到这儿怎么不是了呢？");
    	$("#InputEmailSecond").css({"border-color":"red"});
    	$("#InputEmailSecond").focus();
    	return false;    	
    }
    else{
    	$("#email2label").css({"color":"black"});
    	$("#InputEmailSecond").css({"border-color":"black"});
    	$("#email2label").text("确认邮箱");
    }



     if (pw1==""){
    	$("#password1label").css({"color":"red"});
    	$("#password1label").text("密码呢。");
    	$("#PasswordFirst").css({"border-color":"red"});
    	$("#PasswordFirst").focus();
    	return false;
    }
    else{
    	$("#password1label").css({"color":"black"});
    	$("#PasswordFirst").css({"border-color":"black"});
    	$("#password1label").text("密码");
    }

    if (pw2==""){
    	$("#password2label").css({"color":"red"});
    	$("#password2label").text("再填一次密码啦。");
    	$("#PasswordSecond").css({"border-color":"red"});
    	$("#PasswordSecond").focus();
    	return false;
    }
    else{
    	$("#password2label").css({"color":"black"});
    	$("#PasswordSecond").css({"border-color":"black"});
    	$("#password2label").text("确认密码");
    }



    if (em1 != em2){
    	//alert("无法提交，邮箱不一致！");
    	$("#InputEmailFirst").css({"border-color":"red"});
    	$("#InputEmailSecond").css({"border-color":"red"});
    	$("#email2label").css({"color":"red"});
    	$("#email1label").text("这个邮箱");
    	$("#email1label").css({"color":"red"});
    	$("#email2label").text("和这个邮箱不一样呀。");
    	$("#InputEmailFirst").focus();
    	return false;
    }
    else{
    	$("#InputEmailFirst").css({"border-color":"black"});
    	$("#InputEmailSecond").css({"border-color":"black"});
    	$("#email1label").css({"color":"black"});
    	$("#email1label").text("邮箱");
    	$("#email2label").css({"color":"black"});
    	$("#email2label").text("确认邮箱");
    	//alert("same");
    	if (pw1 != pw2){
    		//alert("无法提交，密码不一致！");
    		$("#PasswordFirst").css({"border-color":"red"});
    		$("#PasswordSecond").css({"border-color":"red"});
    		$("#password1label").css({"color":"red"});
    		$("#password1label").text("虽然你看不见");
    		$("#password2label").css({"color":"red"});
    		$("#password2label").text("但是这两密码不一样的");
    		$("#PasswordFirst").focus();
    		return false;
    	}else{
    		$("#PasswordFirst").css({"border-color":"black"});
    		$("#PasswordSecond").css({"border-color":"black"});
    		$("#password1label").css({"color":"black"});
    		$("#password1label").text("密码");
    		$("#password2label").css({"color":"black"});
    		$("#password2label").text("确认密码");
			$.ajax({ 
		      type: "POST", 
		      url: 'http://'+ip_adder+'/signup/',  
		      data: {"name":un1,"username":em1,"password":pw1},
		      dataType: "json", 
		      success: function(data) { 
		      	if (data["code"]==0){
                    window.location="./regsuccess.html"
                }else if(data['code']==-1){
                	$("#InputEmailFirst").css({"border-color":"red"});
			    	$("#InputEmailSecond").css({"border-color":"red"});
			    	$("#email1label").css({"color":"red"});
			    	$("#email1label").text("邮箱已经注册了");
			    	$("#email2label").css({"color":"red"});
			    	$("#email2label").text("邮箱已经注册了");
                }else if(data['code']==-2){
                	$("#namelabel").css({"color":"red"});
			    	$("#namelabel").text("昵称已经使用了！");
			    	$("#InputName").css({"border-color":"red"});
			    	$("#InputName").focus();
                }
                else{
                    window.location="./regfail.html"
                }
		      }
		     });
    	}
    }





  
    
    return false;
    });
  
});