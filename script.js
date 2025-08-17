const cdEl = document.getElementById("countdown");
const greeting = document.getElementById("greeting");
const card = document.getElementById("card");
const music = document.getElementById("bg-music");

let countdown = 3;
const interval = setInterval(() => {
  countdown--;
  if (countdown > 0) {
    cdEl.textContent = countdown;
  } else {
    clearInterval(interval);
    cdEl.style.display = "none";

    // Nhạc
    music.play().catch(()=>console.log("Autoplay bị chặn, phát khi click"));

    // Hiện lời chúc
    greeting.style.display = "block";

    // Confetti
    let end = Date.now() + 2000;
    (function frame() {
      confetti({ particleCount: 5, spread: 120 });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();

    // Sau 3s hiện thiệp
    setTimeout(() => {
      greeting.style.display = "none";
      card.style.display = "block";
    }, 3000);
  }
}, 1000);

// Click mở thiệp
card.addEventListener("click", () => {
  card.classList.toggle("open");

  if (card.classList.contains("open")) {
    // Tim bay
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "100vh";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, 500);

    // Mưa chữ
    setInterval(() => {
      const drop = document.createElement("div");
      drop.classList.add("rain-text");
      drop.textContent = "🎉 Happy Birthday 🎉";
      drop.style.left = Math.random() * 100 + "vw";
      drop.style.animationDuration = (3 + Math.random() * 3) + "s";
      document.body.appendChild(drop);
      setTimeout(() => drop.remove(), 6000);
    }, 400);

    // Bóng bay
    setInterval(() => {
      const balloon = document.createElement("div");
      balloon.classList.add("balloon");
      balloon.textContent = ["🎈","🎉","🎊","✨"][Math.floor(Math.random()*4)];
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.fontSize = (30 + Math.random()*20) + "px";
      balloon.style.animationDuration = (5 + Math.random() * 5) + "s";
      document.body.appendChild(balloon);
      setTimeout(() => balloon.remove(), 10000);
    }, 800);

    if (music.paused) music.play();
  }
});
