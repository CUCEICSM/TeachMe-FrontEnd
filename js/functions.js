var vista = "grid";
var menuView = false;
var notiView = false;
var comentView = false;

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
      $(".post .row-bottom .favs").appendTo(".post .row-top .right");
      $(".post .row-bottom .favs").remove();
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
      $(".post-list .row-top .right .favs").appendTo(".post-list .row-bottom");
      $(".post-list .row-top .right .favs").remove();
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
    menuView = false;
  }
  if(notiView == true){
    $('.notification-list').hide(300);
    notiView = false;
  }
}

function toggleMenu(){
  if(menuView == false){
    $('.drop-down').show(300);
    menuView = true;
    $('.notification-list').hide(300);
    notiView = false;
    $('.drop-down-coments').hide(300);
    comentView = false;
  }
  else{
    $('.drop-down').hide(300);
    menuView = false;
  }
}

function toggleNotifications(){
  if(notiView == false){
    $('.notification-list').show(300);
    notiView = true;
    $('.drop-down').hide(300);
    menuView = false;
    $('.drop-down-coments').hide(300);
    comentView = false;
  }
  else{
    $('.notification-list').hide(300);
    notiView = false;
  }
}

function toggleComents(){
  if(comentView == false){
    $('.drop-down-coments').show(300);
    comentView = true;
    $('.drop-down').hide(300);
    menuView = false;
    $('.notification-list').hide(300);
    notiView = false;
  }
  else{
    $('.drop-down-coments').hide(300);
    comentView = false;
  }
}

function selectFav(e){
  if(e.className == "fas fa-heart"){
    e.className = "far fa-heart";
    //Remover de favoritos
  }
  else {
    e.className = "fas fa-heart";
    //Añadir a favoritos
  }
}

function GoBack(){
  if(history.length == 1)
    window.close();
  window.history.back();
}
