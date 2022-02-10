var darkBg      = "#121212";
var darkBg2     = "#1c1c1c";
var darkText    = "#d3d3d3";
var darkLine    = "#454545";
var darkInput   = "#333333";

var lightBg     = "#ffffff";
var lightBg2    = "#f7f7f7";
var lightText   = "#666666";
var lightLine   = "#d3d3d3";
var lightInput  = "#ffffff";

function setColors(val){

    var body    = document.getElementById("body");
    var text    = document.getElementsByClassName("text");
    var content = document.getElementById("mainContent");
    var line    = document.getElementsByClassName("linecol");
    var input   = document.getElementsByClassName("input");

    if (val == "dark"){
        //Hintergrundfarbe ändern
        body.style.setProperty("--background", darkBg);
        content.style.setProperty("--background2", darkBg2);
        for (let i = 0; i < text.length; i++) {
            //Textfarbe ändern
            text.item(i).style.setProperty("--text", darkText);
        }
        for (let i = 0; i < line.length; i++) {
            //Linienfarbe ändern
            line.item(i).style.setProperty("--line", darkLine);
        }
        for (let i = 0; i < input.length; i++) {
            //input ändern
            input.item(i).style.setProperty("--input", darkInput);
        }

    }
    else if (val == "light"){
        //Hintergrundfarben ändern
        body.style.setProperty("--background", lightBg);
        content.style.setProperty("--background2", lightBg2);
        for (let i = 0; i < text.length; i++) {
            //Textfarbe ändern
            text.item(i).style.setProperty("--text", lightText);
        }
        for (let i = 0; i < line.length; i++) {
            //Linienfarbe ändern
            line.item(i).style.setProperty("--line", lightLine);
        }
        for (let i = 0; i < line.length; i++) {
            //Linienfarbe ändern
            line.item(i).style.setProperty("--line", lightInput);
        }
    }
}