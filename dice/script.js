if (localStorage.getItem("startTime") == null) {
  localStorage.setItem("startTime", Date.now());
  var diceCount = 3;
  var diceFace = 6;
  var score = 0;
  var upgrades = {"1": 0, "2": 0};
  save();
} else {
  var diceCount = parseInt(localStorage.getItem("dice").split("d")[0]);
  var diceFace = parseInt(localStorage.getItem("dice").split("d")[1]);
  var score = parseFloat(localStorage.getItem("score"));
  var upgrades = localStorage.getItem("upgrades");
}

function delay(milliseconds){
  var start = new Date().getTime();
  var end = 0;
  while((end - start) < milliseconds) {
    end = new Date().getTime();
  }
}

function save() {
  localStorage.setItem("score", score);
  localStorage.setItem("dice", diceCount + "d" + diceFace);
  localStorage.setItem("upgrades", upgrades);
}

function updateCount() {
  var totalRoll = 0;
  for (let i = 0; i < diceCount; i++) {
    totalRoll += Math.floor(Math.random() * diceFace + 1);
  }
  document.getElementById("roll").innerText = totalRoll;
  score += totalRoll;
}

function refreshPage() {
  document.getElementById("point").innerText = score;
  document.getElementById("diceCount").innerText = diceCount;
  document.getElementById("diceSides").innerText = diceFace;
}

setInterval(refreshPage, 10);
setInterval(updateCount, 1000);
setInterval(save, 60000);