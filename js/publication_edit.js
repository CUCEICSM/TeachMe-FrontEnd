var lastIndex = 0;
var editorSelected = false;
var selfContent = false;

const articleEditor = new EditorJS({
    holderId: 'article-editorjs',
    placeholder: 'Escribamos una publicación asombrosa!',
    tools:{
        
        header:{
            class: Header
        },
        list:{
            class:List,
            inlineToolbar: true
        },
        embed:{
            class: Embed
        },
        image: SimpleImage,
        checklist: {
            class: Checklist,
            inlineToolbar: true,
        },
        quote: Quote,
        table: {
            class: Table,
            inlineToolbar: true
        },
        Marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M',
        },
        linkTool: {
            class: LinkTool,
            endpoint: 'http://127.0.0.1:5500/fetchUrl'
        },
        inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+C',
            inlineToolbar: true
        },
        attaches: {
            class: AttachesTool,
            config: {
              endpoint: 'http://127.0.0.1:5500/uploadFile'
            }
        },
        code: CodeTool,
        delimiter: Delimiter,
        MarkerTool:{
            class: MarkerTool
        }
    }
});

const attachEditor = new EditorJS({
    holderId: 'attaches-editorjs',
    placeholder: 'Escribe tus notas del video',
    tools:{        
        header:{
            class: Header
        },
        list:{
            class:List,
            inlineToolbar: true
        },
        embed:{
            class: Embed
        },
        checklist: {
            class: Checklist,
            inlineToolbar: true,
        },
        quote: Quote,
        table: {
            class: Table,
            inlineToolbar: true
        },
        inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+C',
            inlineToolbar: true
        },
        code: CodeTool,
        delimiter: Delimiter,
        MarkerTool:{
            class: MarkerTool
        }
    }
});

function DisplayEditor(type){

    if(type == "articulo"){
        
        document.getElementById("article-editor").style.display = "inline";
        document.getElementById("video-editor").style.display = "none";
        document.getElementById("document-editor").style.display = "none"; 
        document.getElementById("attaches-editor").style.display = "none";
        document.getElementById("images-container").style.display = "inline";

        
    }else if(type == "ejercicio"){
        
        document.getElementById("article-editor").style.display = "inline";
        document.getElementById("video-editor").style.display = "none";
        document.getElementById("document-editor").style.display = "none";  
        document.getElementById("attaches-editor").style.display = "none";
        document.getElementById("images-container").style.display = "inline";
        
    }else if(type == "ejemplo"){
        
        document.getElementById("article-editor").style.display = "inline";
        document.getElementById("video-editor").style.display = "none";
        document.getElementById("document-editor").style.display = "none"; 
        document.getElementById("attaches-editor").style.display = "none"; 
        document.getElementById("images-container").style.display = "inline";
        
    }
    else if(type == "video"){
        document.getElementById("article-editor").style.display = "none";
        document.getElementById("video-editor").style.display = "inline";
        document.getElementById("document-editor").style.display = "none";  
        document.getElementById("attaches-editor").style.display = "inline";      
        document.getElementById("images-container").style.display = "none";  
        
    }else if(type="document"){
        document.getElementById("article-editor").style.display = "none";
        document.getElementById("video-editor").style.display = "none"; 
        document.getElementById("document-editor").style.display = "inline"; 
        document.getElementById("attaches-editor").style.display = "inline";
        document.getElementById("images-container").style.display = "none";
    }

    if(!editorSelected){
        document.getElementById("own-content").style.display = "inline";
        document.getElementById("botones").style.display = "flex";
        editorSelected = true;
    }
}

function SetTypeEmbed(type){
    /*if(type == "link"){
        document.getElementById("link-embed").style.display = "inline";
        document.getElementById("upload-embed").style.display = "none";
    }else if(type =="subir"){
        document.getElementById("upload-embed").style.display = "inline";
        document.getElementById("link-embed").style.display = "none";
    }*/
}

function SetTypeDocument(type){
    if(type == "link"){
        document.getElementById("document-link").style.display = "inline";
        document.getElementById("document-upload").style.display = "none";
    }else if(type =="subir"){
        document.getElementById("document-link").style.display = "none";
        document.getElementById("document-upload").style.display = "inline";
    }
}

let sB = document.getElementById("saveButton");

sB.addEventListener('click',function(){
    articleEditor.save().then((outputData) =>
    SavePublication(outputData));
})

function SavePublication(myData){
    
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(myData)));
    element.setAttribute('download', "documento.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
    
    
}

function ClearEditor(){
    articleEditor.clear();
    lastIndex = -1;

}

function InsertBlock(toAdd){   
    
    articleEditor.caret.setToBlock(lastIndex,"end");
    articleEditor.blocks.insert(toAdd);
    articleEditor.caret.setToBlock(lastIndex+1,"end");
}

function TellMyIndex(){
    lastIndex = articleEditor.blocks.getCurrentBlockIndex();
    console.log(lastIndex);
}

function SearchEmbed(){
    var link = document.getElementById("embed-input").value;
    var aux = document.getElementById("video-embed");
    var videoId = getId(link);
    aux.src = "https://www.youtube.com/embed/" + videoId;
    aux.style.display = "inline";

}

function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}

function ShowExternalInput(){
    if(selfContent){
        selfContent = false;
        document.getElementById("external-content").style.display = "inline-flex";
    }else if(!selfContent){
        selfContent = true;
        document.getElementById("external-content").style.display = "none";
    }
}

function AddImage(){
    

    let items_wrapper = document.getElementById("images-items");

    
    items_wrapper.style.display = "flex";
    

    let d = document.createElement("div");
    let l = document.createElement("label");
    let i = document.createElement("img");
    let b = document.createElement("i");
    //i.src = document.getElementById("input-image").value;
    i.src = "https://www.w3schools.com/images/w3schools_green.jpg";
    l.innerHTML = document.getElementById("image-description-input").value;
    b.className += "fas fa-trash";
    b.addEventListener('click',function(){
        if(b.parentElement.parentElement.childElementCount == 1){
            items_wrapper.style.display = "none";
        }
        
        b.parentElement.parentElement.removeChild(b.parentElement);
        
    });

    d.appendChild(l);
    d.appendChild(i);
    d.appendChild(b);

    d.className += "img-label";

    items_wrapper.appendChild(d);

    
}
