import { draws } from "./input.js";
import { bingoBoards } from "./input.js";

const evaluateBoard = (board, set) => {
   for (let i = 0; i < 5; i++) {
      let columnMatch = 0, rowMatch = 0;
      for (let j = 0; j <5; j++) {
         if (set[board[j][i]]) { columnMatch++ }
         if (set[board[i][j]]) { rowMatch++ }
      }
      if (columnMatch == 5 || rowMatch == 5) { return true }
   }
   return false;
}

let selectedSet = [];

const playBingo = () => {
   for (let draw of draws) {
      selectedSet[draw] = true;
      for (let i = 0; i < bingoBoards.length; i++) {
         let board = bingoBoards[i]; 
         if (evaluateBoard(board, selectedSet)) {
            let boardScore = 0;
            for (let i = 0; i < 5; i++) {
               for (let j = 0; j < 5; j++) {
                  if (!selectedSet[board[i][j]]) { boardScore += board[i][j] }
               }
            }
            return boardScore *= draw;
         }
      }
   }
}

console.log(playBingo());
