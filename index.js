var span=document.querySelector("span");
var body=document.querySelector("body");

body.style.backgroundColor=span.innerText;
function generate_color(){
    var randomColor="";
    var characters="abcdef0123456789";

    for(i=0;i<6;i++){
        randomColor=randomColor+characters[Math.floor(Math.random()*16)];

    }
    span.innerText="";
    body.style.backgroundColor="#"+randomColor;
}