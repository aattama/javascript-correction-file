/* parameter: help to put in a value into a fuction  */

function playGame (palyerMove) {
    const computerMove= pickcomputerMove ()
    let result = '';
    if (palyerMove === 'scissor') {
        if (computerMove==='rock') {
            result = 'You lose.';
        }else if (computerMove === 'paper') {
            result = 'you win.';
        }else if (computerMove === 'scissor'){
            result = 'tie.'
        }
    }else if (palyerMove === 'paper') {
        let result = '';
if (computerMove==='rock') {
    result = 'You win.';
}else if (computerMove === 'paper') {
    result = 'Tie.';
}else if (computerMove === 'scissor'){
    result = 'You lose.'
}
    }else if (palyerMove === 'rock') {if (computerMove==='rock') {
        result = 'tie.';
    }else if (computerMove === 'paper') {
        result = 'you lose.';
    }else if (computerMove === 'scissor'){
        result = 'You win.'
    }}


   
    alert (`You picked ${palyerMove}.computer picked ${computerMove}.${result}`);
}



function pickcomputerMove () {
    const randomNumber = Math.random();

    let computerMove= '' ;
    
    if (randomNumber >= 0 && randomNumber < 1/3){
         computerMove='rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
const computerMove='paper';
    }else if (randomNumber >= 2/3 && randomNumber < 1){
      computerMove='scissor';
    }
return computerMove;
}







 /* les learn parameter 
 parameter helps to put a value into a function for example  */


/* you can as well save to value or calll two value in a parameter for example  */

/* the 0.1 serve as a default vale  */
 function calculateTax (cost, totalcost= 0.1 ) {
    console.log (cost * totalcost)
 }

 calculateTax (9000, 0.2)
 calculateTax (7000)