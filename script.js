const menuItems = document.querySelectorAll("nav li");
const countdownBox = document.getElementById("countdown-box");
const countdownTimer = document.getElementById("countdown-timer");

const redirectLinks = {
  bank: "bankflash.html",
  usdt: "usdt1.html",
  btc: "btc1.html",
  bnb: "bnb1.html",
  eth: "eth1.html",
  usdc: "come.html"
};

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const section = item.dataset.section;
    const link = redirectLinks[section];

    countdownBox.classList.add("show");
    let count = 5;
    countdownTimer.textContent = count;

    const timer = setInterval(() => {
      count--;
      countdownTimer.textContent = count;
      if (count <= 0) {
        clearInterval(timer);
        window.location.href = link;
      }
    }, 1000);
  });
});

document.querySelectorAll('.fade-reveal').forEach(el => {
  const text = el.textContent;
  el.innerHTML = [...text].map((char, i) =>
    `<span style="--i:${i}">${char}</span>`
  ).join('');
});
