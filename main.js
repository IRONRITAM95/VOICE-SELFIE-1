var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition();

function start(){
  document.getElementById("textbox").innerHTML = "" ;
  recognition.start();
}

recognition.onresult = function(event){
   
    console.log(event);

    var content = event.results[0][0].transcript ;

    document.getElementById("textbox").innerHTML= content ;
    console.log(content);
    if(content == "take my selfie"){
    console.log("taking selfie ..........") ;
    speak();
}
}

camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:100 
});

function speak(){
   var speech = window.speechSynthesis ;
   speak_data = "say    cheeeeeeeeeeeeeeeeeeeeeeeese" ;
   var utterthis = new SpeechSynthesisUtterance(speak_data);
   speech.speak(utterthis) ;
   Webcam.attach(camera);
   setTimeout(function(){
     take_pic();
     save();
   }, 5000);
}