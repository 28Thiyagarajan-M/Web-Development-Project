// alert("hi");
//Player 1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice"+ randomNumber1 + ".png";
var randomImageSource1 =  "images/" + randomImage1;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource1);


//Player 2

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + randomNumber2 +".png";
var randomImageSource2 = "images/" + randomImage2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource2);


// alert(randomImageSource1);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏆 Player 1 Win";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🏆 Player 2 Win";
}else{
    document.querySelector("h1").innerHTML = "🎀 Draw !";
}