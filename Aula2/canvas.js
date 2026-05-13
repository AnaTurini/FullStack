let canvas = document.getElementById('canvas')
let ctx1= canvas.getContext('2d');

//sol
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'yellow';
ctx1.strokeStyle = 'yellow';
ctx1.arc(230,55,34,0*Math.PI,2*Math.PI);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

//casa
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'sienna';
ctx1.strokeStyle = 'sienna';
ctx1.fillRect(150-35,128,70,100);
ctx1.strokeRect(150-35,128,70,100);
ctx1.closePath();

//porta
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = '#663C1F';
ctx1.strokeStyle = '#663C1F';
ctx1.fillRect(150-6,175,12,40);
ctx1.strokeRect(150-6,175,12,40);
ctx1.closePath();

//janela1
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = '#4cacf1';
ctx1.strokeStyle = '#4cacf1';
ctx1.fillRect(150-30,150,22,22);
ctx1.strokeRect(150-30,150,22,22);
ctx1.closePath();

//janela2
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = '#4cacf1';
ctx1.strokeStyle = '#4cacf1';
ctx1.fillRect(150+8,150,22,22);
ctx1.strokeRect(150+8,150,22,22);
ctx1.closePath();

//tronco1
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'SaddleBrown';
ctx1.strokeStyle = 'SaddleBrown';
ctx1.fillRect(48,177,16,33);
ctx1.strokeRect(48,177,16,33);
ctx1.closePath();

//arvore1
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'green';
ctx1.strokeStyle = 'green';
ctx1.arc(56,152,25,0*Math.PI,2*Math.PI);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

//chao
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'grey';
ctx1.strokeStyle = 'grey';
ctx1.fillRect(0,210,300,90);
ctx1.strokeRect(0,210,300,90);
ctx1.closePath();

//tronco2
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'SaddleBrown';
ctx1.strokeStyle = 'SaddleBrown';
ctx1.fillRect(240,230,16,35);
ctx1.strokeRect(240,230,16,35);
ctx1.closePath();

//arvore1
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'green';
ctx1.strokeStyle = 'green';
ctx1.arc(248,207,25,0*Math.PI,2*Math.PI);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

//lago1
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = '#1591EA';
ctx1.strokeStyle = '#1591EA';
ctx1.arc(10,218,36,0*Math.PI,2*Math.PI);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

//lago2
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = '#1591EA';
ctx1.strokeStyle = '#1591EA';
ctx1.arc(120,290,36,0*Math.PI,2*Math.PI);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

//lagosq1
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = '#1591EA';
ctx1.strokeStyle = '#1591EA';
ctx1.fillRect(0,220,46,100);
ctx1.strokeRect(0,220,46,100);
ctx1.closePath();

//lagosq2
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = '#1591EA';
ctx1.strokeStyle = '#1591EA';
ctx1.fillRect(40,254,85,220);
ctx1.strokeRect(40,254,85,220);
ctx1.closePath();

//telhado
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'coral';
ctx1.strokeStyle = 'coral';
ctx1.moveTo(150,90);
ctx1.lineTo(150+35,128);
ctx1.lineTo(150-36,128);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

//finalmente acabou T_T o primeiro 

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

//quadrado azul
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'blue';
ctx2.fillRect(0,0,50,50);
ctx2.strokeRect(0,0,50,50);
ctx2.closePath();

//quadrado vermelho
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'red';
ctx2.strokeStyle = 'red';
ctx2.fillRect(250,0,50,50);
ctx2.strokeRect(250,0,50,50);
ctx2.closePath();

//quadradoturq
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'aqua';
ctx2.strokeStyle = 'aqua';
ctx2.fillRect(0,120,30,60);
ctx2.strokeRect(0,120,30,60);
ctx2.closePath();

//quadradoturq2
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'aqua';
ctx2.strokeStyle = 'aqua';
ctx2.fillRect(270,135,30,30);
ctx2.strokeRect(270,135,30,30);
ctx2.closePath();

//quadradoverm
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'red';
ctx2.strokeStyle = 'red';
ctx2.fillRect(110,151,40,40);
ctx2.strokeRect(110,151,40,40);
ctx2.closePath();

//escrita
ctx2.beginPath();
ctx2.lineWidth = 0.1;
ctx2.fillStyle = 'black';
ctx2.strokeStyle = 'black';
ctx2.font = "20px Arial"
ctx2.textAlign = "center";
ctx2.strokeText("Canvas",150,50)
ctx2.fillText("Canvas",150,50)
ctx2.closePath();

//linhameio
ctx2.beginPath();
ctx2.lineWidth = 0.1;
ctx2.fillStyle = 'green';
ctx2.strokeStyle = 'green';
ctx2.fillRect(0,150,300,1);
ctx2.strokeRect(0,150,3000,1);
ctx2.closePath();

//linhameio
ctx2.beginPath();
ctx2.lineWidth = 0.1;
ctx2.fillStyle = 'black';
ctx2.strokeStyle = 'black';
ctx2.fillRect(150,150,1,150);
ctx2.strokeRect(150,150,1,150);
ctx2.closePath();

//escada amarela
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'yellow';
ctx2.fillRect(0,240,30,60);
ctx2.strokeRect(0,240,30,60);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'yellow';
ctx2.fillRect(0,270,60,30);
ctx2.strokeRect(0,270,60,30);
ctx2.closePath();

//escada preta
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'black';
ctx2.strokeStyle = 'black';
ctx2.fillRect(270,240,30,60);
ctx2.strokeRect(270,240,30,60);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'black';
ctx2.strokeStyle = 'black';
ctx2.fillRect(240,270,60,30);
ctx2.strokeRect(240,270,60,30);
ctx2.closePath();

//circulos amarelos
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(75,225,15,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(225,225,15,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//circulos turquesa
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'aqua';
ctx2.strokeStyle = 'blue';
ctx2.arc(150,110,15,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'aqua';
ctx2.strokeStyle = 'green';
ctx2.arc(150,300,35,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//linhas triangulo
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'blue';
ctx2.moveTo(50,50);
ctx2.lineTo(150,150);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'red';
ctx2.moveTo(250,50);
ctx2.lineTo(150,150);
ctx2.stroke();
ctx2.closePath();

//circulos verdes
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.arc(150,300,53,1.5*Math.PI,2*Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.arc(150,300,70,1*Math.PI,1.5*Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.arc(150,150,70,1*Math.PI,0*Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.arc(150,150,90,1*Math.PI,1.25*Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.arc(150,150,90,1.75*Math.PI,0*Math.PI);
ctx2.stroke();
ctx2.closePath();

//borda
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'black';
ctx2.moveTo(0,0);
ctx2.lineTo(0,300);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'black';
ctx2.moveTo(0,300);
ctx2.lineTo(300,300);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'black';
ctx2.moveTo(300,300);
ctx2.lineTo(300,0);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'black';
ctx2.moveTo(300,0);
ctx2.lineTo(0,0);
ctx2.stroke();
ctx2.closePath();

//cabotudoo