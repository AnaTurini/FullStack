let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150);
ctx.lineTo(60,10);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150)
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'orange';
ctx.strokeStyle = 'red';
ctx.moveTo(200,200);
ctx.arc(200,200,50,1.75*Math.PI,2*Math.PI);
ctx.lineTo(200,200);
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.fillText("Olá",200,350);
ctx.strokeText("Olá",200,350)
ctx.closePath();

