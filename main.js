
const bassSound = document.getElementById("bsound");
const drumSound = document.getElementById("dsound");
const floorSound = document.getElementById("fsound");
const snareSound = document.getElementById("ssound");
const tempo = document.getElementById("tempo");
const slidevalue = document.getElementById("slidevalue");
const playButton = document.getElementById("playButton");

var tempoValue = tempo.value;

const diffBeats = [document.getElementById("bass"),document.getElementById("drum"),document.getElementById("floor"),document.getElementById("snare")]
const color = ["bass","drum","floor","snare"];


for(let j=0; j<diffBeats.length; j++){
    for(let i=0; i<7; i++){
        const div = document.createElement("div");
        div.id = "button"
        div.className = color[j];
        div.setAttribute("onclick","addClass(this)");
        div.addEventListener("transitionend",removeClass)
        diffBeats[j].appendChild(div);
    }
}


function addClass(event){
    event.classList.toggle("selected");
}

function removeClass(event){
    event.target.classList.remove("current");
}

function playStop(event){
    if(event.innerHTML==="PLAY"){
        event.innerHTML = "STOP";
        startPlaying();
    }else{
        event.innerHTML = "PLAY";
        stopPlaying();
    }
}

var interval; 
const bass = document.getElementsByClassName("bass");
const drum = document.getElementsByClassName("drum")
const floor = document.getElementsByClassName("floor")
const snare = document.getElementsByClassName("snare")


function startPlaying(){
    let i = 0;
    interval = setInterval(()=>{
        bassPlay(i);
        drumPlay(i);
        floorPlay(i);
        snarePlay(i);
        bass[i].classList.add("current");
        drum[i].classList.add("current");
        floor[i].classList.add("current");
        snare[i].classList.add("current");
        i = (i+1)%7 ;
    },Math.ceil((60/tempoValue)*1000));
}

function stopPlaying(){
    clearInterval(interval);
}


function bassPlay(i){
    if(bass[i].classList.contains("selected")){
        bassSound.currentTime = 0;
        bassSound.play();
    }
}

function drumPlay(i){
    if(drum[i].classList.contains("selected")){
        drumSound.currentTime = 0;
        drumSound.play();
    }
    
}

function floorPlay(i){
    if(floor[i].classList.contains("selected")){
        floorSound.currentTime = 0;
        floorSound.play();
    }
}

function snarePlay(i){
    if(snare[i].classList.contains("selected")){
        bassSound.currentTime = 0;
        snareSound.play();
    }
}

tempo.addEventListener("input",()=>{
    tempoValue = tempo.value
    slidevalue.innerHTML = tempoValue;
})

tempo.addEventListener("change",()=>{
    if(playButton.innerHTML==="STOP"){
        stopPlaying();
        startPlaying();
    }
});