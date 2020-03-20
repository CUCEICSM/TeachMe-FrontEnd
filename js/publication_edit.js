class MyTool{
    constructor({data, api}){
        this.api = api;
        // ...
      }

    GetCurrentIndex(){
        return this.api.blocks.getCurrentBlockIndex();
    }
}

var lastIndex = 0;

const editor = new EditorJS({
    holderId: 'editorjs',
    placeholder: 'Escribamos una publicación asombrosa!',
    tools:{
        
        header:{
            class: Header
        },
        list:{
            class:List
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
            class: Table
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
        },
        Manager:{
            class:MyTool
        }
    }
});



/*let sB = document.getElementById("saveButton");

sB.addEventListener('click',function(){
    editor.save().then((outputData) =>
    SavePublication(outputData));
})*/

function SavePublication(){
    editor.save().then((outputData) =>
    SavePublication(outputData));
}

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
    editor.clear();

}

function InsertBlock(toAdd){   
    
    editor.caret.setToBlock(lastIndex,"end");
    editor.blocks.insert(toAdd);
    editor.caret.setToBlock(lastIndex+1,"end");
}

function TellMyIndex(){
    lastIndex = editor.blocks.getCurrentBlockIndex();
    console.log(lastIndex);
}
