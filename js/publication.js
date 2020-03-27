var starRate = 0;

function drawStar(stars){

  $('.star .print').html('<i class="far fa-star"></i>');
  if(stars == 5){
    $('#star5 .print').html('<i class="fas fa-star"></i> ');
    stars = stars - 1;
  }
  if(stars == 4.5){
    $('#star5 .print').html('<i class="fas fa-star-half-alt"></i>');
    stars = stars - 0.5;
  }
  if(stars == 4){
    $('#star4 .print').html('<i class="fas fa-star"></i> ');
    stars = stars - 1;
  }
  if(stars == 3.5){
    $('#star4 .print').html('<i class="fas fa-star-half-alt"></i>');
    stars = stars - 0.5;
  }
  if(stars == 3){
    $('#star3 .print').html('<i class="fas fa-star"></i> ');
    stars = stars - 1;
  }
  if(stars == 2.5){
    $('#star3 .print').html('<i class="fas fa-star-half-alt"></i>');
    stars = stars - 0.5;
  }
  if(stars == 2){
    $('#star2 .print').html('<i class="fas fa-star"></i> ');
    stars = stars - 1;
  }
  if(stars == 1.5){
    $('#star2 .print').html('<i class="fas fa-star-half-alt"></i>');
    stars = stars - 0.5;
  }
  if(stars == 1){
    $('#star1 .print').html('<i class="fas fa-star"></i> ');
    stars = stars - 1;
  }
  if(stars == 0.5){
    $('#star1 .print').html('<i class="fas fa-star-half-alt"></i>');
    stars = stars - 0.5;
  }
}

function clearStars(){
  rateStar(starRate);
}

function rateStar(stars){
  starRate = stars;
  $('.star .print').html('<i class="far fa-star"></i>');
  if(stars == 5){
    $('#star5 .print').html('<i class="fas fa-star"></i> ');
    stars = stars - 1;
  }
  if(stars == 4.5){
    $('#star5 .print').html('<i class="fas fa-star-half-alt"></i>');
    stars = stars - 0.5;
  }
  if(stars == 4){
    $('#star4 .print').html('<i class="fas fa-star"></i> ');
    stars = stars - 1;
  }
  if(stars == 3.5){
    $('#star4 .print').html('<i class="fas fa-star-half-alt"></i>');
    stars = stars - 0.5;
  }
  if(stars == 3){
    $('#star3 .print').html('<i class="fas fa-star"></i> ');
    stars = stars - 1;
  }
  if(stars == 2.5){
    $('#star3 .print').html('<i class="fas fa-star-half-alt"></i>');
    stars = stars - 0.5;
  }
  if(stars == 2){
    $('#star2 .print').html('<i class="fas fa-star"></i> ');
    stars = stars - 1;
  }
  if(stars == 1.5){
    $('#star2 .print').html('<i class="fas fa-star-half-alt"></i>');
    stars = stars - 0.5;
  }
  if(stars == 1){
    $('#star1 .print').html('<i class="fas fa-star"></i> ');
    stars = stars - 1;
  }
  if(stars == 0.5){
    $('#star1 .print').html('<i class="fas fa-star-half-alt"></i>');
    stars = stars - 0.5;
  }
}

function postArticle(){
  $('.general-data .backPresent .logo').html('<i class="fas fa-file-alt"></i> Articulo');
  $('.content-article').fadeIn(0);
  $('.content-video').fadeOut(0);
  $('.content-excercise').fadeOut(0);
  $('.content-example').fadeOut(0);
  $('.content-document').fadeOut(0);
  $('.post').fadeIn(0);
  $('#article').fadeOut(0);
}

function postVideo(){
  $('.general-data .backPresent .logo').html('<i class="fab fa-youtube"></i>Video');
  $('.content-article').fadeOut(0);
  $('.content-video').fadeIn(0);
  $('.content-excercise').fadeOut(0);
  $('.content-example').fadeOut(0);
  $('.content-document').fadeOut(0);
  $('.post').fadeIn(0);
  $('#video').fadeOut(0);
}

function postExcercise(){
  $('.general-data .backPresent .logo').html('<i class="fas fa-chalkboard-teacher"></i> Ejercicio');
  $('.content-article').fadeOut(0);
  $('.content-video').fadeOut(0);
  $('.content-excercise').fadeIn(0);
  $('.content-example').fadeOut(0);
  $('.content-document').fadeOut(0);
  $('.post').fadeIn(0);
  $('#excercise').fadeOut(0);
}

function postExample(){
  $('.general-data .backPresent .logo').html('<i class="fas fa-file-signature"></i> Ejemplo');
  $('.content-article').fadeOut(0);
  $('.content-video').fadeOut(0);
  $('.content-excercise').fadeOut(0);
  $('.content-example').fadeIn(0);
  $('.content-document').fadeOut(0);
  $('.post').fadeIn(0);
  $('#example').fadeOut(0);
}

function postDocument(){
  $('.general-data .backPresent .logo').html('<i class="fas fa-file-pdf"></i> Documento');
  $('.content-article').fadeOut(0);
  $('.content-video').fadeOut(0);
  $('.content-excercise').fadeOut(0);
  $('.content-example').fadeOut(0);
  $('.content-document').fadeIn(0);
  $('.post').fadeIn(0);
  $('#document').fadeOut(0);
}

function visorChange(url){
  console.log(url);
  $('.visor .screen img').attr("src",url);
}

function showReport(type, reported){

  if(type == 'Comentario'){
    var user = "";
    for(var a = 0; a < reported.html().length; a++){
      if(reported.html()[a] != '<'){
        user += reported.html()[a];
      }
      else{
        break;
      }
    }
    $('.drop-down-reports .content').html(type + ": " + user);
  }
  else if(type == 'Publicación'){
    $('.drop-down-reports .content').html(type + ": " + reported);
  }
  $('.drop-down-reports').fadeToggle(300);
  $('.bg-cover').fadeToggle(300);
}
