let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');

//sol
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.arc(700,100,80,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//casa
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'sienna';
ctx.strokeStyle = 'sienna';
ctx.fillRect(370,320,257,300);
ctx.strokeRect(370,320,257,300);
ctx.closePath();
 
//chao
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.strokeStyle = 'grey';
ctx.fillRect(1,610,900,400);
ctx.strokeRect(1,610,900,400);
ctx.closePath();

//porta
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'SaddleBrown';
ctx.strokeStyle = 'SaddleBrown';
ctx.fillRect(475,510,50,98);
ctx.strokeRect(475,510,50,98);
ctx.closePath();

//janela
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'LightBlue';
ctx.strokeStyle = 'LightBlue';
ctx.fillRect(390,430,80,80);
ctx.strokeRect(390,430,80,80);
ctx.closePath();

//janela
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'LightBlue';
ctx.strokeStyle = 'LightBlue';
ctx.fillRect(530,430,80,80);
ctx.strokeRect(530,430,80,80);
ctx.closePath();

//tronco1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'SaddleBrown';
ctx.strokeStyle = 'SaddleBrown';
ctx.fillRect(200,410,50,200);
ctx.strokeRect(200,410,50,200);
ctx.closePath();

//arvore1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(220,410,75,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//tronco2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'SaddleBrown';
ctx.strokeStyle = 'SaddleBrown';
ctx.fillRect(760,610,50,130);
ctx.strokeRect(760,610,50,130);
ctx.closePath();

//arvore2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(785,540,75,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//lago1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'SkyBlue';
ctx.strokeStyle = 'SkyBlue';
ctx.arc(20,630,120,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//lago2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'SkyBlue';
ctx.strokeStyle = 'SkyBlue';
ctx.arc(400,880,120,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//lagosq1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'SkyBlue';
ctx.strokeStyle = 'SkyBlue';
ctx.fillRect(0,640,140,300);
ctx.strokeRect(0,640,140,300);
ctx.closePath();

//lagosq2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'SkyBlue';
ctx.strokeStyle = 'SkyBlue';
ctx.fillRect(100,762,275,220);
ctx.strokeRect(100,762,275,220);
ctx.closePath();

//telhado
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.moveTo(350,330);
ctx.lineTo(350+150,330-150);
ctx.lineTo(350+150+150,330);
ctx.fill();
ctx.stroke();
ctx.closePath();

//acabei finalmente