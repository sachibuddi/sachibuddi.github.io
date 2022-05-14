var input;
var button;
var state = "search";


function preload(){

    
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    
    input = createInput("","text");
    input.position(width/2 - 100,height/2);

    button = createButton("Search");
    button.position(width/2 + 70,height/2);
    button.mouseClicked(search);
}

function draw() {
    background("gray");
    fill("black");
    textSize(35);
    text("Sachi!",width/2 -25,height/2 - 25);
  
    drawSprites();
    if(state === "searched"){
        textSize(20);
        text("We didn't find any result for "+input.value(),width/2 - 150, height/2 + 50)
    }

}

function search(){
state = "searched";
}