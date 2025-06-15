const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const chars = "01";
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = new Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, x) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, x * fontSize, y * fontSize);

    drops[x] = (y * fontSize > canvas.height && Math.random() > 0.975) ? 0 : y + 1;
  });
}

setInterval(drawMatrix, 120);
