let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');

//sol
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.arc(230,55,34,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//casa
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'sienna';
ctx.strokeStyle = 'sienna';
ctx.fillRect(150-35,128,70,100);
ctx.strokeRect(150-35,128,70,100);
ctx.closePath();

//porta
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#663C1F';
ctx.strokeStyle = '#663C1F';
ctx.fillRect(150-6,175,12,40);
ctx.strokeRect(150-6,175,12,40);
ctx.closePath();

//janela1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#4cacf1';
ctx.strokeStyle = '#4cacf1';
ctx.fillRect(150-30,150,22,22);
ctx.strokeRect(150-30,150,22,22);
ctx.closePath();

//janela2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#4cacf1';
ctx.strokeStyle = '#4cacf1';
ctx.fillRect(150+8,150,22,22);
ctx.strokeRect(150+8,150,22,22);
ctx.closePath();

//tronco1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'SaddleBrown';
ctx.strokeStyle = 'SaddleBrown';
ctx.fillRect(48,177,16,33);
ctx.strokeRect(48,177,16,33);
ctx.closePath();

//arvore1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(56,152,25,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//chao
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.strokeStyle = 'grey';
ctx.fillRect(0,210,300,90);
ctx.strokeRect(0,210,300,90);
ctx.closePath();

//tronco2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'SaddleBrown';
ctx.strokeStyle = 'SaddleBrown';
ctx.fillRect(240,230,16,35);
ctx.strokeRect(240,230,16,35);
ctx.closePath();

//arvore1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(248,207,25,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//lago1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#1591EA';
ctx.strokeStyle = '#1591EA';
ctx.arc(10,218,36,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//lago2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#1591EA';
ctx.strokeStyle = '#1591EA';
ctx.arc(120,290,36,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//lagosq1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#1591EA';
ctx.strokeStyle = '#1591EA';
ctx.fillRect(0,220,46,100);
ctx.strokeRect(0,220,46,100);
ctx.closePath();

//lagosq2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#1591EA';
ctx.strokeStyle = '#1591EA';
ctx.fillRect(40,254,85,220);
ctx.strokeRect(40,254,85,220);
ctx.closePath();

//telhado
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'coral';
ctx.strokeStyle = 'coral';
ctx.moveTo(150,90);
ctx.lineTo(150+35,128);
ctx.lineTo(150-36,128);
ctx.fill();
ctx.stroke();
ctx.closePath();

//finalmente acabou T_T