let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newBtn = document.getElementById("new-btn");
let msg = document.getElementById("msg");

let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner(box);
  });
});

const checkWinner = (box) => {
  for (let pattern of winPattern) {
    // console.log([pattern[0]], [pattern[1]], [pattern[2]]);
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        msg.innerText = `Winner is ${pos1Val}`;
        msg.style.backgroundColor = "green";
        disableBTn();
      }
    }
  }
};

const disableBTn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBTn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const resetGame = () => {
  turnO = true;
  enableBTn();
  msg.style.display = "none";
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
