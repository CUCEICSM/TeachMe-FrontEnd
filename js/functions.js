var vista = "grid";
var menuView = false;

function listView(){
  if(vista == "grid"){
    var post = $(".post");
    $(".posted").html("");

    post.each(function(){
      $(this).appendTo(".posted");

      $(".post .row-top .left .stars").appendTo(".post .row-top .right");
      $(".post .row-top .left .stars").remove();
      $(".post .row-top .left .views").appendTo(".post .row-top .right");
      $(".post .row-top .left .views").remove();
      $(".post .row-top .right .name").prependTo(".post .row-bottom");
      $(".post .row-top .right .name").remove();

      $(".post").toggleClass("post-list");
      $(".post").toggleClass("post");
    });

    vista = "lista";
  }
}

function gridView(){
  if(vista == "lista"){
    var post = $(".post-list");
    $(".posted").html("");

    post.each(function(){
      $(this).appendTo(".posted");

      $(".post-list .row-top .right .stars").appendTo(".post-list .row-top .left");
      $(".post-list .row-top .right .stars").remove();
      $(".post-list .row-top .right .views").appendTo(".post-list .row-top .left");
      $(".post-list .row-top .right .views").remove();
      $(".post-list .row-bottom .name").prependTo(".post-list .row-top .right");
      $(".post-list .row-bottom .name").remove();

      $(".post-list").toggleClass("post");
      $(".post-list").toggleClass("post-list");
    });

    vista = "grid";
  }
}

function checkMenu(){
  if(menuView == true){
    $('.drop-down').hide(300);
    $('.notification-list').hide(300);
    menuView = false;
  }
}

function toggleMenu(){
  if(menuView == false){
    $('.drop-down').show(300);
    menuView = true;
  }
  else{
    $('.drop-down').hide(300);
    menuView = false;
  }
}

function toggleNotifications(){
  if(menuView == false){
    $('.notification-list').show(300);
    menuView = true;
  }
  else{
    $('.notification-list').hide(300);
    menuView = false;
  }
}
