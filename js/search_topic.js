var post = $(".post");
    $(".posted").html("");

    post.each(function(){
      $(this).appendTo(".posted");
      $(".post .row-top .favs").appendTo(".post .row-bottom");
      $(".post .row-top .favs").remove();
      $(".post .row-top .columns .name").prependTo(".post .row-bottom");
      $(".post .row-top .columns .name").remove();

      $(".post").toggleClass("post-list");
      $(".post").toggleClass("post");
    });

var notFound = false;

function ShowNotFound(){
    if(!notFound){
        document.getElementById("results").style.display = "none";
        document.getElementById("not-found-message").style.display = "block";
        notFound = true;
    }else if(notFound){
        document.getElementById("results").style.display = "flex";
        document.getElementById("not-found-message").style.display = "none";
        notFound = false;
    }
}

var showingTypes = false;
function ShowTypes(tipo){
    var myLabel = document.getElementById("type-label");

    if(!showingTypes){
        //tipos.style.display = "flex";
        $('.desplegable-list').show();
        showingTypes = true;    
    }else if(showingTypes){
        //tipos.style.display = "none";
        showingTypes = false;
        $('.desplegable-list').hide();
        if(tipo != undefined)
            myLabel.innerHTML = "Tipo: " + tipo;
    }
    
}