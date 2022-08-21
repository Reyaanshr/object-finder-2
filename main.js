objectName = "";
states = "";

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd",modalLoaded);
    document.getElementById("detectingobject").innerHTML = "Detecting Objects";
    objectName = document.getElementById("objectname").value;
    console.log(objectName);
}

function modalLoaded(){
    console.log("modal is loaded");
    states = true;
    console.log(states)
}

function draw(){
    image(video,0,0,380,380);
}