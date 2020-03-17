function InitializeContent(){
  var list = document.getElementsByClassName("topic-content");

  for(i = 0; i < list.length; i++){    
    list[i].style.display = "none";
  }

}
function ShowContent(materia){  

  var x = document.getElementById(materia);
  var list = document.getElementsByClassName("topic-content");

  for(i = 0; i < list.length; i++){
    if(list[i].id != materia)
      list[i].style.display = "none";
  }
    
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}