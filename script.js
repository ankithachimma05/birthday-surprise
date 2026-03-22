/* ---------------- PAGE LOAD ---------------- */
window.onload=function(){
confetti({particleCount:120,spread:100});
};

/* ---------------- GIFT ---------------- */
function openGift(){
let gift=document.getElementById("giftBox");
gift.classList.add("openGift");

setTimeout(()=>{
document.getElementById("giftPage").style.display="none";
document.getElementById("page1").classList.remove("hidden");

/* 🎵 START MUSIC HERE */
let music=document.getElementById("bgMusic");
music.volume=0;
music.currentTime=0;
music.play();

/* smooth fade-in */
let vol=0;
let fade=setInterval(()=>{
if(vol<1){
vol+=0.05;
music.volume=vol;
}else{
clearInterval(fade);
}
},200);

typeText();

},800);
}

/* ---------------- TITLE ---------------- */
function typeText(){
let text="Happy Birthday My Girll ❤️";
let i=0;
let el=document.getElementById("typing");

let interval=setInterval(()=>{
el.innerHTML+=text[i];
i++;
if(i==text.length) clearInterval(interval);
},80);
}

/* ---------------- START STORY ---------------- */
function startStory(){
document.getElementById("page1").style.display="none";
document.getElementById("slideshow").classList.remove("hidden");
startSlideshow();
}

/* ---------------- MEMORIES ---------------- */
let memories=[
{year:"2019",img:"images/pic2019.jpg",text:"The year where it all started 💫"},
{year:"2020",img:"images/pic2020.jpg",text:"Our bond became deeply emotional 💖"},
{year:"2021",img:"images/pic2021.jpg",text:"A year full of changes 🔄"},
{year:"2022",img:"images/pic2022.jpg",text:"I started fearing losing you 😔"},
{year:"2023",img:"images/pic2023.webp",text:"I learned to accept everything 🌿"},
{year:"2024",img:"images/pic2024.jpg",text:"My fear became real 💔"},
{year:"2025",img:"images/pic2025.jpg",text:"7 months without you… but I missed you every day 😢"},
{year:"2026",img:"images/pic2026.jpg",text:"Still hoping for forever 🤞💞"}
];

let index=0;

/* ---------------- SLIDESHOW ---------------- */
function startSlideshow(){
showMemory();

let slide=setInterval(()=>{
index++;
if(index<memories.length){
showMemory();
}else{
clearInterval(slide);
document.getElementById("videoButton").classList.remove("hidden");
}
},5000);
}

/* ---------------- CINEMATIC MEMORY ---------------- */
function showMemory(){

let img=document.getElementById("memoryImage");
let text=document.getElementById("memoryText");

/* reset animation */
img.className="";

/* set image */
img.src=memories[index].img;

/* 🎬 RANDOM EFFECT */
let effects=["zoomIn","zoomOut","panLeft","panRight"];
let randomEffect=effects[Math.floor(Math.random()*effects.length)];
img.classList.add(randomEffect);

/* fade effect */
img.style.opacity=0;
setTimeout(()=>{
img.style.opacity=1;
},200);

/* year */
document.getElementById("yearText").innerText=memories[index].year;

/* typing text */
text.innerHTML="";
let i=0;
let msg=memories[index].text;

let type=setInterval(()=>{
text.innerHTML+=msg[i];
i++;
if(i==msg.length) clearInterval(type);
},40);

/* confetti */
confetti({particleCount:100,spread:120});
}

/* ---------------- VIDEO ---------------- */
function showVideo(){

document.getElementById("slideshow").style.display="none";
document.getElementById("videoPage").classList.remove("hidden");

let music=document.getElementById("bgMusic");
let video=document.getElementById("birthdayVideo");

/* STOP MUSIC */
music.pause();

/* PLAY VIDEO */
video.play();

startHearts();
}

/* resume music after video */
document.getElementById("birthdayVideo").addEventListener("ended",function(){
let music=document.getElementById("bgMusic");
music.play();
});

/* ---------------- HEARTS ---------------- */
function startHearts(){
setInterval(()=>{
let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="💖";
heart.style.left=Math.random()*100+"%";
heart.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),5000);
},400);
}

/* ---------------- CAKE ---------------- */
function showCake(){
document.getElementById("videoPage").style.display="none";
document.getElementById("cakePage").classList.remove("hidden");
}

/* knife drag */
let knife=document.getElementById("knifeEmoji");
let cutting=false;

knife.onmousedown=function(){
cutting=true;

document.onmousemove=function(e){
if(cutting){
knife.style.left=e.pageX-50+"px";
if(e.pageX>250) finishCake();
}
};
};

document.onmouseup=function(){cutting=false;};

function finishCake(){
document.getElementById("cakeEmoji").innerHTML="🍰🍰";

setTimeout(()=>{
document.getElementById("cakePage").style.display="none";
document.getElementById("finalPage").classList.remove("hidden");

confetti({particleCount:300,spread:150});
},1000);
}