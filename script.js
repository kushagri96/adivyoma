/* COUNTDOWN */

const targetDate = new Date("June 15, 2026 00:00:00").getTime();

setInterval(function(){

let now = new Date().getTime();

let distance = targetDate - now;

let days = Math.floor(distance/(1000*60*60*24));
let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
let seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
days+"d "+hours+"h "+minutes+"m "+seconds+"s until launch";

},1000);


/* STARFIELD */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars=[];

for(let i=0;i<200;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
});
}

function drawStars(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

stars.forEach(s=>{
ctx.beginPath();
ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
ctx.fill();
});

requestAnimationFrame(drawStars);

}

drawStars();


/* ROCKET IMAGE ROTATION */

let rocket = document.getElementById("rocketModel");
let rotation = 0;
let dragging=false;

rocket.addEventListener("mousedown",()=>dragging=true);

window.addEventListener("mouseup",()=>dragging=false);

window.addEventListener("mousemove",(e)=>{
if(dragging){
rotation+=e.movementX;
rocket.style.transform="rotate("+rotation+"deg)";
}
});
