let act = program.functions

act.addStyle("default", {
    width: "100px", 
    height: "100px",
    background: "blue"
})

act.addStyle("colors", {
    beautifulBlue: "#b0f0f2"
})

act.addStyle("defaultFont", {
    fontSize: "1.4em",
    color: program.styles.colors.darkerBlue,
    textAlign: "center",
    fontFamily: "Arial"
})

act.addStyle("defaultBorder", {
    borderRadius: "10px"
})

act.addStyle("relativeSize", {
    background: program.styles.colors.beautifulBlue 
})

act.addStyle("defaultSpace", {
    padding: "1%", margin:"1.2em"
})

act.addStyle("defaultDisplay", {
    display: "inline-block"
})



