
function pushHeaders(){
    for(var item in data.headers){
        program.functions.addElement(item, "div", item, 
        program.styles.defaultDisplay, program.styles.defaultSpace)
        //document.body.appendChild(program.elements[item])
        headerarray.push(program.elements[item].string)
    }
}


function pushHeaders(collection){
    for(var item in collection){
        program.functions.addElement(
            item,
            "div",
            item,
            program.styles.defaultDisplay,
            program.styles.defaultSpace
        )
        //document.body.appendChild(program.elements[item])
        headerarray.push(program.elements[item].string)
    }
}

let on = program.elements.header.events
on.click = []
on.click.push(function(){program.elements.header.string.style.backgroundColor = "blue"})
program.elements.header.string.addEventListener("click", function(){
program.elements.header.events["click"][0]()
})

let exec = program.functions;
console.log(exec)
