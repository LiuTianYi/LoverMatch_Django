$(function() {
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


