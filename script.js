// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(`Bredd på canvas: ${canvas.width}, Höjd på canvas: ${canvas.height}`);

function drawPicture() {
  const height = 1.1*midY
  const width = midX*0.5
  c.fillStyle = "#008000"
  c.strokeRect(canvas.width*0.1, canvas.height-height, width, height+1)
  c.strokeRect(canvas.width*0.9-width, canvas.height-height, width, height+1)
  c.beginPath();
  c.moveTo(canvas.width*0.1, canvas.height-height);
  c.lineTo(canvas.width*0.1+(width/2), canvas.height-height-(midY*0.4));
  c.lineTo(canvas.width*0.1+width, canvas.height-height);
  c.moveTo(canvas.width*0.9-width, canvas.height-height);
  c.lineTo(canvas.width*0.9-width+(width/2), canvas.height-height-(midY*0.4));
  c.lineTo(canvas.width*0.9, canvas.height-height); 
  c.stroke();
  c.beginPath();
  c.moveTo(midX-canvas.width*0.075*0.53, midY*1.424);
  c.ellipse(midX, midY, canvas.width*0.075, midY/2, Math.PI, -1, Math.PI+1);
  c.fill();
  c.stroke();
  c.fillStyle = "#a52a2a"
  c.beginPath();
  c.moveTo(midX-canvas.width*0.075*0.53, midY*1.424);
  c.fillRect(midX-canvas.width*0.075*0.53, midY*1.424, width*0.32, canvas.height-midY*1.424+1);
  c.strokeRect(midX-canvas.width*0.075*0.53, midY*1.424, width*0.32, canvas.height-midY*1.424+1);
};

drawPicture();
