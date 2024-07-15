//WHAT'S LEFT
//1. HANDLE AGAIN BUTTON
//2. HANDLE HIGHSCORE UPDATION
//3. AND ALL DONE😁

const secret = Math.trunc(Math.random() * 20) +1;
let win =0;
const body = document.querySelector("body");
let score = 20;
let highscore = 0;
document.querySelector('.highscore').textContent = String(highscore);

const again = document.querySelector('.again');
again.addEventListener('click', ()=>{
    document.querySelector('.guess').value = "";
    location.reload();
});

document.querySelector('.check').addEventListener('click' , ()=>{
    const guess = Number(document.querySelector('.guess').value);
    if (!guess && win===0)
    {
        console.log(document.querySelector('.guess').value);
        document.querySelector('.message').textContent = "Please enter a number";
    }
    else if(guess === secret && win===0)
    {
        win =1;
        body.style.backgroundColor = "#60b347";
        document.querySelector('.number').textContent = secret;
        document.querySelector('.message').textContent = "Correct number found";
        if (score>highscore) {
            highscore = score;
            let sco = String(highscore);
        }
        document.querySelector('.highscore').textContent = String(highscore);
    }
    else if (guess > secret && win===0)
    {
        if(score>0)
        {
            document.querySelector('.message').textContent = "Too high!!";
            score-=1;
        }
        if(score===0)
        {
            document.querySelector('.message').textContent = "You lost the game";
        }
        document.querySelector('.score').textContent = String(score);
    }
    else if(guess< secret && win===0)
    {
        if(score>0)
            {
                document.querySelector('.message').textContent = "Too low!!";
                score-=1;
            }
            if(score===0)
            {
                document.querySelector('.message').textContent = "You lost the game";
            }
            document.querySelector('.score').textContent = String(score);
    }
});

