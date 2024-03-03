//roll results for player 1:
var randomNumPlayer1 = Math.floor ((Math.random() * 6)) + 1;
var imageSrcPlayer1 = "images/dice" + randomNumPlayer1 + ".png";
var picturePlayer1 = document.querySelectorAll("img")[0]
picturePlayer1.setAttribute("src", imageSrcPlayer1);

//roll results for player2
var randomNumPlayer2 = Math.floor ((Math.random() * 6)) + 1;
var imageSrcPlayer2 = "images/dice" + randomNumPlayer2 + ".png"
var picturePlayer2 = document.querySelectorAll("img")[1]
picturePlayer2.setAttribute("src", imageSrcPlayer2) 


//Winner:
if (randomNumPlayer1 > randomNumPlayer2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNumPlayer1 < randomNumPlayer2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "No one wins!";
}