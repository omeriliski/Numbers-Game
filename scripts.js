let i=0;
let number=0;
let input=document.getElementById("input-text");
randomNumber =Math.floor(Math.random() * 100);
function del(x){
    document.getElementById(x).innerHTML=" ";
}
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("check").click();
    }
  });
function compares() {
    i++;
    number = document.getElementById("input-text").value;
    document.getElementById("answer-p").innerHTML="This is your test number:";
    document.getElementById("answer-span").innerHTML=i.toString();
        if(number==""){
        document.getElementById("answer-h").innerHTML ="Write the number";
    }else{
        if(randomNumber>number){
            document.getElementById("answer-h").innerHTML = "I am thinking about higher number";
            document.getElementById("input-text").value="";
        }
        else if(randomNumber<number){
            document.getElementById("answer-h").innerHTML = "I am thinking about lower number";
            document.getElementById("input-text").value="";
        }
        else{
            alert(`You are the winner :D. You guest after ${i} times!`);
            if(confirm("You wanna play again?")){
                randomNumber =Math.floor(Math.random() * 100);
                document.getElementById("input-text").value="";
                del("answer-h");
                del("answer-p");
                del("answer-span");
                i=0;
            }
            else {
                document.getElementById("answer-h").innerHTML ="Thanks for game!";
                del("answer-p");
                del("answer-span");
                document.getElementById("input-text").style.visibility="hidden";
                document.getElementById("check").style.visibility="hidden";
            };
        }
    }
}
