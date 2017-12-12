let headerarray = [],
    eventTypes = [
        "abort",
        "beforeinput",
        "blur",
        "click",
        "compositionstart",
        "compositionupdate",
        "compositionend",
        "dblclick",
        "error",
        "focus",
        "focusin",
        "focusout",
        "input",
        "keydown",
        "keypress",
        "keyup",
        "load",
        "mousedown",
        "mouseenter",
        "mouseleave",
        "mousemove",
        "mouseout",
        "mouseover",
        "mouseup",
        "resize",
        "scroll",
        "select",
        "unload",
        "wheel"
    ]

    
let data = {
	headers:{},
	content:{},
	footers:{}
}

let addToDataObjects = function(obj, ...item){
	item.forEach(function(piece){
		obj[piece] = piece
	})
}


addToDataObjects(data.headers, "About", "Contact", "Portfolio");
addToDataObjects(data.headers, "business", "planning", "events");
data.headers.About.dropdown = "dropdown"