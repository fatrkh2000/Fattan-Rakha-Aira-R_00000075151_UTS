let score = 0;
let autoClickerLevel = 0;
let autoClickerSpeed = 0;

function addScore() {
  score++;
  updateScore();
}

function updateScore() {
  document.getElementById("score").innerHTML = score;
}

function buyUpgrade(price, level) {
  if (score >= price) {
    score -= price;
    autoClickerLevel = level;
    autoClickerSpeed = 100 / level;
    setInterval(addScore, autoClickerSpeed);
    updateScore();
    updateUpgrades();
  } else {
    alert("Not enough money!");
  }
}

function updateUpgrades() {
  const upgradeElements = document.querySelectorAll(".buy-btn");
  upgradeElements.forEach((element, index) => {
    if (score < parseInt(element.previousElementSibling.innerHTML)) {
      element.disabled = true;
    } else {
      element.disabled = false;
    }
  });
}
