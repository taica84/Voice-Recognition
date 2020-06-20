

var btn = document.getElementById('btn');
var myVoice = document.getElementById('me');
var jarvisVoice = document.getElementById('jarvis');

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;
var recognition = new SpeechRecognition();

recognition.onstart = function (){
    console.log('you can talk now , Tony Stark');

};

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    myVoice.innerHTML = text;
    talk(text);
}

function talk(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text.includes('time')){
        speech.text = 'It is ' + new Date().getHours() + " : " +  new Date().getMinutes() + ' right now';
    }else if(text.includes('like')){
        speech.text = 'i know you like JAVASCRIPT , is your favourite programming language';
    }



    window.speechSynthesis.speak(speech);
    jarvisVoice.innerHTML = speech.text;
}













/*
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const greetings = [
    'im very good,mother fucker',
    'im fine,son of a bitch',

];

const SpeechRecognition = 
window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('voice is activated');
};


recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.result[current][0].transcript;
    content.textContent = transcript ;
    console.log(transcript)
    readOutLoud(transcript);
     
};


//add the listener to the button

btn.addEventListener('click' , () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    if(message.includes('how are you')) {
      const finalText =  greetings[Math.floor(Math.random() * greetings.length)];
      speech.text = finalText;
    }

    
    speech.volume = 1 ;
    speech.rate = 1 ;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}


  */