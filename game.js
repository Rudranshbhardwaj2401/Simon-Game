var buttonColours=["red","blue","green","yellow"]
var gamePattern=[];
var level = 0;
var userClickedPattern=[];
var started = false;
function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);
    randomNumber = Math.floor(Math.random()*4);
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);
}

$(".btn").on("click", function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
playsound(userChosenColour);
animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function playsound(name){
    var mysound1 = new Audio("./sounds/" + name+ ".mp3");
    mysound1.play();

}
function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function () { $("." + currentColour).removeClass("pressed"); },200)
}

$(document).on("keypress", function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

function checkAnswer(x){
if(userClickedPattern[x]===gamePattern[x]){
    if (userClickedPattern.length === gamePattern.length) { setTimeout(function () { nextSequence(); }, 1000) ;}
}
else{
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () { $("body").removeClass("game-over"); },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
}
}


    function startOver() {

        //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
        level = 0;
        gamePattern = [];
        started = false;
    }
