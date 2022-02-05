function roll() {

  var p1name = prompt("Player 1 Name");
  var p2name = prompt("player 2 Name");
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage = "images/dice" + randomNumber1 + ".png";

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomDiceImage);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage2 = "/dice" + randomNumber2 + ".png";

  var randomurl = "images" + randomDiceImage2;

  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomurl);

  if (randomNumber1 > randomNumber2 && i = 0; i <= 5; i++) {


    document.querySelector("h1").innerHTML = "🚩" + p1name + " Wins!";


  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩" + p2name + " Wins!";
  } else {
    document.querySelector("h1").innerHTML = " It's a Draw! ";
  }

}
// hello
