var board = document.getElementById("board");
var cells = board.getElementsByTagName("li");
var resetButton = document.getElementById("reset-button");
var X_or_O = true; // true = X; false = O

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function (e) {
    if (e.target.textContent === "") {
      var symbol = X_or_O ? "X" : "O";
      e.target.innerHTML =
        "<span class='" + symbol.toLowerCase() + "'>" + symbol + "</span>";
      X_or_O = !X_or_O;
    }
  });
}

resetButton.addEventListener("click", function () {
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
});
