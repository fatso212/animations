console.log("js/functions.js is connected")

act.addFunction(
    "addStyle",
    (name, style) => program.styles[name] = style
)

act.addFunction(
    "addToObject", 
    (obj, name, addition) => obj[name] = addition
)

act.addFunction(
    "addEvent", (name, event) => program.events[name] = event
)

act.addFunction(
    "log",
    () => console.log(program.functions, program.styles, program.events, program.elements)
)

act.addFunction(
    "addElement",
    function(name, el, text, ...stylesheet ){
        let myStyles = Object.assign(...stylesheet);
        var el = document.createElement(el)
        for(var styleline in myStyles){
            el.style[styleline] = myStyles[styleline]
            //add compound style to collection
            program.functions.addStyle(name + "style", myStyles)
        }
        if(Array.isArray(text)){
            text.forEach(function(item){
                el.appendChild(item)
            })
        } else { 
        el.innerHTML = text
    }
    program.elements[name] = {}
    program.elements[name].string = el
    program.elements[name].events = {}
})



