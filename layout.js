const CFonts = require("cfonts")
const colors = require("colors")

module.exports = (client) => {
    CFonts.say(`Luxus|W`, {
        font: 'slick',              // define the font face
        align: 'center',              // define text alignment
        colors: ['red', 'red', 'red'],         // define all colors
        background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1,           // define letter spacing
        lineHeight: 1,              // define the line height
        space: true,                // define if the output text should have empty lines on top and on the bottom
        maxLength: '0',             // define how many character can be on one line
        gradient: false,            // define your two gradient colors
        independentGradient: false, // define if you want to recalculate the gradient for each new line
        transitionGradient: false,  // define if this is a transition between colors directly
        env: 'node'                 // define the environment CFonts is being executed in
    })
    console.log(colors.bold.red("\n Made by [Xanny#1111]   --- Credits to Nexon For Toolbox!"))
}