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
