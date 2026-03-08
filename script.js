/* COUNTDOWN */
const targetDate = new Date("June 15, 2026 00:00:00").getTime();

setInterval(function(){
    let now = new Date().getTime();
    let distance = targetDate - now;

    let days = Math.floor(distance/(1000*60*60*24));
    let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m until launch";

},1000);


/* STARFIELD */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

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


/* 3D ROCKET */
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

const viewer = document.getElementById("rocket-viewer");

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(viewer.offsetWidth, 500);
viewer.appendChild(renderer.domElement);

const bodyGeometry = new THREE.CylinderGeometry(1,1,8,32);
const material = new THREE.MeshBasicMaterial({color:0xffffff});

const body = new THREE.Mesh(bodyGeometry,material);
scene.add(body);

const noseGeometry = new THREE.ConeGeometry(1,2,32);
const nose = new THREE.Mesh(noseGeometry,material);

nose.position.y=5;
scene.add(nose);

camera.position.z=15;

function animate(){
    requestAnimationFrame(animate);

    body.rotation.y+=0.01;
    nose.rotation.y+=0.01;

    renderer.render(scene,camera);
}

animate();
