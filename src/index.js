
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix === 0){
        return [];
    }
    for ( let i = 0 ; i<matrix.length; i++){
        if(i%2==1){
           console.log(i)
          matrix[i].reverse();
            console.log(matrix[i])
        }
      }

      return matrix.flat();
}
