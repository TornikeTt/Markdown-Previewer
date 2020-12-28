// here we created function which immediately type text in "preview" section when we type something in "editor" section
function updeat(){
    /*
        editor value take id "editor" and this "editor" is inside "marked" function p.s "marked" function is which see "#"
        for example <h1>hello world</h1> = # hello world
    */
    let editor_Value = marked( document.getElementById("editor").value ) //value we use because we want to catch all words and type immediately
    let preview = document.getElementById("preview") 
    preview.innerHTML = editor_Value 
}

/* here we created default text which should see when user come in the page */
function setDefault(){
    let text = 
`# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
- And of course there are lists.
1. And there are numbererd lists too.

![React Logo w/ Text](https://goo.gl/Umyytc) `;

    let defaultText = marked( document.getElementById("editor").value = text)
    let defaultpreview = document.getElementById("preview");
    defaultpreview.innerHTML =  defaultText
    
}


