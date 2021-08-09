const preview = document.getElementById("preview");
const editor = document.getElementById("editor");

document.addEventListener("DOMContentLoaded",()=>{
    fillDefaultValueEditor();
    markedPreview();
    editor.addEventListener("input",handleEditor);
    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code, lang) {
          const hljs = require('highlight.js');
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        },
        pedantic: false,
        gfm: true,
        breaks: true,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });
});


function fillDefaultValueEditor(){
    editor.innerHTML = 
        `# Lorem 
## Ipsum
### Dolor
[title](https://www.example.com)

\`console.log(null);\`

- First item
- Second item
- Third item

\`\`\`
let first = 1;
\`\`\`
> blockquote
![alt text](https://images.wallpaperscraft.com/image/code_programming_symbols_140997_3840x2160.jpg)
**bold text**
![alt text](https://images.wallpaperscraft.com/image/code_programming_symbols_140997_3840x2160.jpg)
**bold text**
`;

}

function markedPreview(){
    preview.innerHTML = marked(editor.value);
}

function handleEditor(e){
    editor.innerHTML = e.target.value;
    markedPreview();
}