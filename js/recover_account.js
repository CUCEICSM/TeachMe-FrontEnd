function ShowContent(toHide, toShow){
    var th = document.getElementById(toHide);
    var ts = document.getElementById(toShow);
    
    ts.style.display = "flex";
    
    th.style.display = "none";
    
}

function Cancel(){
    window.location.href = "start.html";
}

function ResetComplete(){
    window.location.href = "main.html";
}