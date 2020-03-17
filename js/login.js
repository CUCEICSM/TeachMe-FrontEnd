$(document).ready(function(){
  $('body').removeClass();
  $('body').addClass('bg-purple');

  $('main').find("section").fadeOut(0);
  $('#login').fadeIn(0);

  $('.nav ul').find("li").css("text-decoration", "none");
  $("#link-login").css("text-decoration", "underline");
});

var nowYouAreIn = "login";

function showLogin(){
  if(nowYouAreIn != "login"){
    $('body').removeClass();
    $('body').addClass('bg-purple');

    $('main').find("section").fadeOut(500);
    $('#login').fadeIn(500);

    $('.nav ul').find("li").css("text-decoration", "none");
    $("#link-login").css("text-decoration", "underline");

    nowYouAreIn = "login";
  }
}

function showAbout(){
  if(nowYouAreIn != "about"){
    $('body').removeClass();
    $('body').addClass('bg-blue');

    $('main').find("section").fadeOut(500);
    $("#about").fadeIn(500);

    $('.nav ul').find("li").css("text-decoration", "none");
    $("#link-about").css("text-decoration", "underline");

    nowYouAreIn = "about";
  }
}

function showFAQ(){
  if(nowYouAreIn != "faq"){
    $('body').removeClass();
    $('body').addClass('bg-blue');

    $('main').find("section").fadeOut(500);
    $("#faq").fadeIn(500);

    $('.nav ul').find("li").css("text-decoration", "none");
    $("#link-faq").css("text-decoration", "underline");

    nowYouAreIn = "faq";
  }
}

function showContact(){
  if(nowYouAreIn != "contact"){
    $('body').removeClass();
    $('body').addClass('bg-blue');

    $('main').find("section").fadeOut(500);
    $("#contact").fadeIn(500);

    $('.nav ul').find("li").css("text-decoration", "none");
    $("#link-contact").css("text-decoration", "underline");

    nowYouAreIn = "contact";
  }
}
