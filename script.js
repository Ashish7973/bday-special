let currentPage = 1;
const totalPages = 6;

function nextPage() {
  document.getElementById("page" + currentPage).classList.remove("active");
  currentPage++;
  document.getElementById("page" + currentPage).classList.add("active");

  document.getElementById("bgMusic").play();
}

function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass.toLowerCase() === "mumu") {
    nextPage();
    typeText();
  } else {
    document.getElementById("error").innerText = "Wrong baby 😜 try again";
  }
}

function typeText() {
  const text = "From the moment I met you, my world changed forever ❤️";
  let i = 0;
  const speed = 50;
  const typing = document.getElementById("typing");

  function type() {
    if (i < text.length) {
      typing.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

const reasons = [
  "तुम्हारी मुस्कान मेरे दिन की सबसे खूबसूरत शुरुआत है ❤️",
  "तुम मेरी जिंदगी की सबसे खूबसूरत आदत बन चुकी हो 🌷",
  "तुम्हारी खुशी ही मेरी सबसे बड़ी जीत है 💕",
  "तुम वो एहसास हो, जो दिल को घर जैसा सुकून देता है 🌸",
  "तुम मेरी दुनिया नहीं हो… तुम मेरी दुनिया की वजह हो 💖",
  "तुमसे मिलकर समझ आया कि सच्चा प्यार किसे कहते हैं ✨"
];

function showReason() {
  const random = reasons[Math.floor(Math.random() * reasons.length)];
  document.getElementById("reasonBox").innerText = random;
}

let imgIndex = 1;
function changeImage() {
  imgIndex++;
  if (imgIndex > 5) imgIndex = 1;
  document.getElementById("sliderImage").src = "images/photo" + imgIndex + ".JPG";
}

function showModal() {
  document.getElementById("loveModal").style.display = "block";
}

function closeModal() {
  document.getElementById("loveModal").style.display = "none";
}
