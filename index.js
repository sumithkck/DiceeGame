var randomNumber1 = 0;
var randomNumber2 = 0;
var string1 = "";
var string2 = "";
var player1Score = 0;
var virtualPlayerScore = 0;
var count = 0;
var playerName;

function diceClicked() {


    if (count < 10 && playerName.length > 0) {
        randomNumber1 = Math.floor(Math.random() * 6) + 1;
        string1 = "images/dice" + randomNumber1 + ".png";
        document.querySelectorAll("img")[0].setAttribute("src", string1);


        randomNumber2 = Math.floor(Math.random() * 6) + 1;
        string2 = "images/dice" + randomNumber2 + ".png";
        document.querySelectorAll("img")[1].setAttribute("src", string2);

        if (randomNumber1 > randomNumber2) {
            player1Score += 10;
            document.getElementsByTagName("p")[1].innerHTML = player1Score;
        } else if (randomNumber1 < randomNumber2) {
            virtualPlayerScore += 10;
            document.getElementsByTagName("p")[3].innerHTML = virtualPlayerScore;

        } else {
            player1Score += 5;
            virtualPlayerScore += 5;
            document.getElementsByTagName("p")[1].innerHTML = player1Score;
            document.getElementsByTagName("p")[3].innerHTML = virtualPlayerScore;
        }
        count++;
    } else {

        document.getElementsByTagName("h2")[0].style.visibility = "visible";
        alert("All 10 attempst are over");

        if (player1Score > virtualPlayerScore) {
            var st1 = playerName + " wins with a score of " + player1Score + "  out of 100 and please click play button after clicking reset button to play again";
            document.getElementsByTagName("h2")[0].innerHTML = st1;
        } else if (player1Score < virtualPlayerScore) {
            var st2 = "Computer wins with a score of " + virtualPlayerScore + " out of 100 and please click play button after clicking reset button to play again";
            document.getElementsByTagName("h2")[0].innerHTML = st2;
        } else {
            document.getElementsByTagName("h2")[0].innerHTML = "Scores are tied and please click play button after clicking reset button to play again";
        }
        document.querySelectorAll("img")[0].style.visibility = "hidden";
        document.querySelectorAll("img")[1].style.visibility = "hidden";
        count = 0;
    }
}

function playButtonClicked() {
    playerName = prompt("Enter your name");
    document.getElementsByTagName("p")[0].innerHTML = playerName;
}

function resetButtonClicked() {
    document.getElementsByTagName("p")[0].innerHTML = "Player 1";
    document.getElementsByTagName("h2")[0].style.visibility = "hidden";
    player1Score = 0;
    virtualPlayerScore = 0;
    document.getElementsByTagName("p")[1].innerHTML = player1Score;
    document.getElementsByTagName("p")[3].innerHTML = virtualPlayerScore;
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
    document.querySelectorAll("img")[0].style.visibility = "visible";
    document.querySelectorAll("img")[1].style.visibility = "visible";
}