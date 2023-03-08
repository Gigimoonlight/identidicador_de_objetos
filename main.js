function setup(){
    canvas= createCanvas(400, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('MobileNet', modelLoaded);
}
function draw(){
    image(video, 0, 0, 399, 299);
    classifier.classify(video, gotResult);
}

function modelLoaded(){
    console.log("sush:solangelo-caleo");
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    document.getElementById("resultObjectName").innerHTML=results[0].label;
    document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidence.toFixed(2);
}