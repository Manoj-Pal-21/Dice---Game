var randomNumber1 = Math.floor(Math.random() * 7);
if(randomNumber1 === 0){
    randomNumber1 = 1;
}
var randomimage = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomimage)
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 7);
if(randomNumber2 === 0){
    randomNumber2 = 1;
}
var randomimage1 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimage1)
console.log(randomNumber2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Win!!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Win!!";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}