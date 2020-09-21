var sudoku = [[3, 0, 6, 5, 0, 8, 4, 0, 0],  
              [5, 2, 0, 0, 0, 0, 0, 0, 0],  
              [0, 8, 7, 0, 0, 0, 0, 3, 1],  
              [0, 0, 3, 0, 1, 0, 0, 8, 0],  
              [9, 0, 0, 8, 6, 3, 0, 0, 5],  
              [0, 5, 0, 0, 9, 0, 6, 0, 0],  
              [1, 3, 0, 0, 0, 0, 2, 5, 0],  
              [0, 0, 0, 0, 0, 0, 0, 7, 4],  
              [0, 0, 5, 2, 0, 6, 3, 0, 0]];
  //checking is the input is valid or not
 function check(Array, row, column, n){ 
   for (let k = 0; k < 9; k++) {
   var horz_matrix = 3 * Math.floor(row / 3) ;
  var vert_matrix = 3 * Math.floor(column / 3);
   if (Array[row][k] == n || Array[k][column] == n || Array[horz_matrix][vert_matrix] == n) {
                     return false;
                    }
                }
                return true;
            } 
//solving sudoku   
function solving(sudoku){ 
   for(var i = 0;i < sudoku.length;i++){
       for(var j = 0;j < sudoku[i].length;j++){
           if(sudoku[i][j] === 0){
            for (let n = 1; n <= 9; n++){
                if (check(sudoku, i,j,n)) {
                    sudoku[i][j] = n ;
                    if (solving(sudoku)) {
                        return true;
                       } else {
                        sudoku[i][j] = 0;
                       }
                      }
                    }
                    return false;
                  }
                }
              }
              return true;
}
            solving(sudoku); 
            console.log(sudoku);
