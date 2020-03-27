var lastIndex = -1;
var editorSelected = false;
var selfContent = false;
var whichEditor = 0;

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
        code: CodeTool,
        delimiter: Delimiter,
        MarkerTool:{
            class: MarkerTool
        }
    }
});

const videoEditor = new EditorJS({
    holderId: 'video-editorjs',
    placeholder: 'Escribe tus notas del video',
    tools:{        
        header:{
            class: Header
        },
        list:{
            class:List,
            inlineToolbar: true
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

const documentEditor = new EditorJS({
    holderId: 'document-editorjs',
    placeholder: 'Escribe tus notas del documento',
    tools:{        
        header:{
            class: Header
        },
        list:{
            class:List,
            inlineToolbar: true
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

    document.getElementById("editors-container").style.display = "inline";

    document.getElementById("article-editorjs").style.display = "none";    
    document.getElementById("images-container").style.display = "none";

    document.getElementById("video-editor").style.display = "none";  
    document.getElementById("video-editorjs").style.display = "none";

    document.getElementById("document-editor").style.display = "none";
    document.getElementById("document-editorjs").style.display = "none";
    

    if(type == "articulo" || type == "ejercicio" || type == "ejemplo"){
        document.getElementById("article-editorjs").style.display = "block";
        document.getElementById("images-container").style.display = "inline"; 
        whichEditor = 1; 
        
    }else if(type == "video"){        
        document.getElementById("video-editor").style.display = "inline";
        document.getElementById("video-editorjs").style.display = "block";
        whichEditor = 2; 
        
    }else if(type="document"){        
        document.getElementById("document-editor").style.display = "inline";
        document.getElementById("document-editorjs").style.display = "block";      
        whichEditor = 3;   
    }

    if(!editorSelected){
        document.getElementById("own-content").style.display = "inline";
        document.getElementById("botones").style.display = "flex";
        editorSelected = true;
    }

    lastIndex = -1;
}


function SetDocumentOpacity(opcion){
    if(opcion == "link"){
        
        document.getElementById("link-embed").style.opacity = 1;
        document.getElementById("upload-embed").style.opacity = 0.5;

    }else if(opcion == "upload"){
        
        document.getElementById("upload-embed").style.opacity = 1;
        document.getElementById("link-embed").style.opacity = 0.5;
    }
}



let sB = document.getElementById("saveButton");

sB.addEventListener('click',function(){
    switch(whichEditor){
        case 1:
            articleEditor.save().then((outputData) =>
            SavePublication(outputData));
            break;
        case 2:
            videoEditor.save().then((outputData) =>
            SavePublication(outputData));
            break;
        case 3:
            documentEditor.save().then((outputData) =>
            SavePublication(outputData));
            break;
    }
    
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

    switch(whichEditor){
        case 1:
            articleEditor.clear();
            break;
        case 2:
            videoEditor.clear();
            break;
        case 3:
            documentEditor.clear();
            break;
    }
    
    lastIndex = -1;

}

function InsertBlock(toAdd){   
    
    switch(whichEditor){
        case 1:
            articleEditor.caret.setToBlock(lastIndex,"end");
            articleEditor.blocks.insert(toAdd);
            articleEditor.caret.setToBlock(lastIndex+1,"end");
            break;
        case 2:
            videoEditor.caret.setToBlock(lastIndex,"end");
            videoEditor.blocks.insert(toAdd);
            videoEditor.caret.setToBlock(lastIndex+1,"end");
            break;
        case 3:
            documentEditor.caret.setToBlock(lastIndex,"end");
            documentEditor.blocks.insert(toAdd);
            documentEditor.caret.setToBlock(lastIndex+1,"end");
            break;
    }
    
}

function TellMyIndex(){

    switch(whichEditor){
        case 1:
            lastIndex = articleEditor.blocks.getCurrentBlockIndex();
            break;
        case 2:
            lastIndex = videoEditor.blocks.getCurrentBlockIndex();
            break;
        case 3:
            lastIndex = documentEditor.blocks.getCurrentBlockIndex();
            break;
    }
    
    
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
