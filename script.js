let innerBoxes = document.querySelectorAll(".inner");
let h1 = document.querySelector("h1");
let btn  = document.querySelector('button');
let i = 0;
let movesCount  = 0;
gameOver = true;
btn.addEventListener("click", function(){
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.innerText = "Reset";
    gameOver = false;
    h1.innerText = "Player 1 Turn";
    i = 0;
    movesCount  = 0;
    for(box of innerBoxes){
        box.innerText = '';
    }
})
for(boxes of innerBoxes){
    boxes.addEventListener("click", function(){
        if(gameOver == false){

        if(i%2==0){
            h1.innerText = "Player 2 Turn"
            if(this.innerText!=''){
                h1.innerHTML = "Wrong Move";
            }
            else{
                this.innerText = "X";
                i++;
                movesCount++;
                if(movesCount>4)
                check();
            }
        }
        else{
            h1.innerText = "Player 1 Turn"
            if(this.innerText!=''){
                h1.innerHTML =  "Wrong move";
            }
            else{
                this.innerText = "O";
                i++;
                movesCount++;
                if(movesCount>4)
                check();
            }
        }
        }

    })
}

function check(){
    if( (innerBoxes[0].innerText == innerBoxes[1].innerText) && (innerBoxes[1].innerText == innerBoxes[2].innerText) && (innerBoxes[2].innerText!='')  ){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Player 2 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player 1 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if( (innerBoxes[3].innerText == innerBoxes[4].innerText) && (innerBoxes[4].innerText == innerBoxes[5].innerText) && (innerBoxes[5].innerText!='')){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Player 2 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player 1 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if( (innerBoxes[6].innerText == innerBoxes[7].innerText) && (innerBoxes[7].innerText == innerBoxes[8].innerText) && (innerBoxes[8].innerText!='') ){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Player 2 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player 1 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if( (innerBoxes[0].innerText == innerBoxes[3].innerText) && (innerBoxes[3].innerText == innerBoxes[6].innerText) && (innerBoxes[6].innerText!='') ){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Player 2 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player 1 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if( (innerBoxes[1].innerText == innerBoxes[4].innerText) && (innerBoxes[4].innerText == innerBoxes[7].innerText) && (innerBoxes[7].innerText!='') ){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Player 2 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player 1 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if( (innerBoxes[2].innerText == innerBoxes[5].innerText) && (innerBoxes[5].innerText == innerBoxes[8].innerText) && (innerBoxes[8].innerText!='') ){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Player 2 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player 1 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if( (innerBoxes[0].innerText == innerBoxes[4].innerText) && (innerBoxes[4].innerText == innerBoxes[8].innerText) && (innerBoxes[8].innerText!='') ){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Player 2 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player 1 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if( (innerBoxes[2].innerText == innerBoxes[4].innerText) && (innerBoxes[4].innerText == innerBoxes[6].innerText) && (innerBoxes[6].innerText!='') ){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Player 2 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player 1 has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if(movesCount==9){
        h1.innerHTML = "Game Over <br> It's a draw <br> Press the button to restart the Game";
    }
}
