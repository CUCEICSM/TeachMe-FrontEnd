function toggleList(e){
  var header = e.children(":first");
  var list = e.children(":last");
  clearList();
  if(list.css("display") != "flex"){

    header.css("border-bottom", "5px solid rgba(15, 54, 187, 1)");
    header.css("border-left", "50px solid rgba(15, 54, 187, 1)");
    list.fadeIn(300);
    list.css("display", "flex");
  }
}

function clearList(){
  $('.card h3').css("border-bottom", "5px solid #F0F0F0");
  $('.card h3').css("border-left", "0px solid rgba(15, 54, 187, 1)");
  $('.card ul').fadeOut(300);
}

function addVote(e){
  var count = parseInt( e.find($('.solicitudes')).html() );
  e.find($('.solicitudes')).html(count+1);
  var genCount = parseInt( e.parent().parent().find($('h3 .solicitudes')).html());
  e.parent().parent().find($('h3 .solicitudes')).html(genCount + 1);
  e.find('.far').remove();
  e.append('<i class="fas fa-thumbs-up" title="Eliminar solicitud" onclick="remVote($(this).parent());"></i>');
}

function remVote(e){
  var count = parseInt( e.find($('.solicitudes')).html() );
  e.find($('.solicitudes')).html(count-1);
  var genCount = parseInt( e.parent().parent().find($('h3 .solicitudes')).html());
  e.parent().parent().find($('h3 .solicitudes')).html(genCount - 1);
  e.find('.fas').remove();
  e.append('<i class="far fa-thumbs-up" title="Añadir solicitud" onclick="addVote($(this).parent());"></i>');
}
