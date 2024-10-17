var guessNum=document.getElementById("num")
var Result=document.getElementById("result")
var randomNum=Math.floor(Math.random()*10)+1
var score=document.getElementById("score")

totalscore=10
function guess(){
    var enteredNumber=guessNum.value
    if(enteredNumber == randomNum){
        console.log("You are correct")
        Result.textContent="you are correct"
        alert("You Won🎉👏")
    }
    else{
        totalscore-=1
        score.textContent="score"+totalscore
        Result.textContent="you are wrong"
        console.log("you are wrong")
        
    }
}