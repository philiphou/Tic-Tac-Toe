// ----------------Variable Delcaration----------------//
var currentPlayer="X";
var cells=['','','','','','','','','',''];



// ---------functions----------------------------------//
// update the user action//
function handleCellPlayed(clickedCell,clickedCellIndex){
cells[clickedCellIndex]=currentPlayer;
clickedCell.innerHTML=currentPlayer;

}

// change the current player 
function handlePlyaerChange(){
    currentPlayer=currentPlayer==="X"?"O":"X";
}


function handleCellClick(clickedCellEvent){
const clickedCell=clickedCellEvent.target; // save the clicked html elements in a variable//
// get the index attribute from the clicked cell//
var clickedCellIndex=parseInt(clickedCell.getAttribute('index')) // getAttribute only retrun string value, use parseInt to convert it to number//
//check if the cell was clicked//
if(cells[clickedCellIndex]!==''){
    return;
}
// click to assign value//
handleCellPlayed(clickedCell,clickedCellIndex)
handlePlyaerChange();
}

function handleCellPlayed(clickedCell,clickedCellIndex){
  
    clickedCell.innerHTML=currentPlayer;
}
// set the game stauts back to defaults//

function handleRestartGame(){
currentPlayer="X";
cells=['','','','','','','','',''];
document.querySelectorAll(".cell").forEach(cell=>cell.innerHTML="");
}
 

// ---------------------add listeners----------------------------------------//
document.querySelectorAll('.cell').forEach(cell=>cell.addEventListener('click',handleCellClick));
document.querySelector('.restart').addEventListener('click',handleRestartGame)