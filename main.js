noseX=0;
noseY=0;

function preload(){
sunglasses=loadImage("https://i.postimg.cc/Dzk9Wmhf/sunglasses-removebg-preview.png");
mask=loadImage("https://i.postimg.cc/gjCCv0hK/710-7100097-face-disposable-medical-mask-png-clipart-transparent-png-removebg-preview.png")
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(noseX, noseY, 20);
    image(sunglasses, noseX-35, noseY-60, 80, 90);
    image(mask, noseX-30, noseY, 60, 50)
}

function takeSnapshot(){
save("filter-snapshot.png");
}