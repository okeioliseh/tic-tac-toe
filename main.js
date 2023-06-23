var playable = true;
var currentRound = 0;
var xturn = true;
var playVal = "";
var board = [
	"","","",
	"","","",
	"","",""
];

var tiles = document.querySelectorAll(".tile");
const restart_btn = document.querySelector("#restart_btn")

const newGame = () =>{
	playable = true;
	xturn = true;
	board = [
		"","","",
		"","","",
		"","",""
	];
	tiles.forEach(tile => tile.innerHTML = "");
}
const new_game_btn = document.querySelector("#new_btn")
new_game_btn.addEventListener("click",newGame)

const restartGame = () => {
	let confirmRestart = confirm("Are you sure you want to restart this game? You will lose all game progress.")
	if(confirmRestart){
		playable = true;
		xturn = true;
		board = [
			"","","",
			"","","",
			"","",""
		];
		currentRound = 0;
		tiles.forEach(tile => tile.innerHTML = "");
	}else {
		null
	}

}

restart_btn.addEventListener("click",restartGame)

const declareWinner = (winner_on_board) => {
	playable = false
	currentRound++;

	let current_round = document.querySelector("#current_round");
	current_round.innerHTML = `Round ${currentRound}`;

	console.log(`${winner_on_board} won,refresh to start again`)
	alert(`${winner_on_board} WON!!.`)
	// let shouldRestart = confirm("Restart game?")
	// if(shouldRestart){
	// 	restartGame()
	// }else {
	// 	alert("Thanks for having fun with meee!")
	// }
}
const checkWin = () => {

	// very lomg conditions,i know i could have written better code but atleast it works lmaoo

	if(board[0] === board[4] && board[4] === board[8] && board[0] !== ""){
		declareWinner(board[0])

		// x**
		// *x*
		// **x

	}else if(board[0] === board[1] && board[1] === board[2] && board[0] !== ""){
		declareWinner(board[0])

		// xxx
		// ***
		// ***

	}else if(board[0] === board[3] && board[3] === board[6] && board[0] !== ""){
		declareWinner(board[0])

		// x**
		// x**
		// x**

	}else if(board[3] === board[4] && board[4] === board[5] && board[3] !== ""){
		declareWinner(board[3])

		// ***
		// xxx
		// ***

	}else if(board[6] === board[7] && board[7] === board[8] && board[6] !== ""){
		declareWinner(board[6])

		// ***
		// ***
		// xxx

	}else if(board[2] === board[4] && board[4] === board[6] && board[2] !== ""){
		declareWinner(board[2])

		// **x
		// *x*
		// x**

	}else if(board[1] === board[4] && board[4] === board[7] && board[1] !== ""){
		declareWinner(board[1])

		// *x*
		// *x*
		// *x*
	}else if(board[2] === board[5] && board[5] === board[8] && board[2] !== ""){
		declareWinner(board[2])

		// **x
		// **x
		// **x
	}
}

const play = (event) => {
	if(playable && board[event.target.id] === ""){
		if(xturn){
			playVal = "X"
		} else {
			playVal= "O"
		}

		xturn = !xturn;
		console.log(xturn); 
		console.log(event.target.id);
		board[event.target.id] = playVal
		event.target.innerHTML = playVal
		
		
		console.log(board)

		checkWin()
	}else {
		console.log("IT'S EITHER YOU PRESSED THE SAME TILE TWICE OR GAME ALREADY OVER!!")
	}
};


tiles.forEach(tile =>{
	tile.addEventListener("click",play);
})