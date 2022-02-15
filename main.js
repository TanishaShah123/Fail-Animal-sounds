var dog = 0;
var cat = 0;
var cow = 0;
var chicken = 0;



function startmodel() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    soundmodel = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Jz84Vr7Kp/model.json", modelloaded);
}

function modelloaded() {
    console.log("My Model Loaded");
    soundmodel.classify(getresults);
}

function getresults(errorarray, resultsarray) {
    if (errorarray) {
        console.error(errorarray);
    } else {
        console.log(resultsarray);
        randomcolor = Math.floor(Math.random() * 255);
        document.getElementById("soundname").innerHTML = resultsarray[0].label;
        document.getElementById("soundconfidence").innerHTML = Math.floor(resultsarray[0].confidence * 100) + "%";
        var imgtag = document.getElementById("img1");
        var soundname = resultsarray[0].label;
        if (soundname == "Dog") {
            imgtag.src = "Dog.gif";
        }
        if (soundname == "Cat") {
            imgtag.src = "Cat.gif";
        }
        if (soundname == "Cow") {
            imgtag.src = "Cow.gif";
        }
        if (soundname == "Chicken") {
            imgtag.src = "Chicken.gif";
        }

    }
}