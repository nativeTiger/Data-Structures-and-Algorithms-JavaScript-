//ITERATING THE TWO DIMENSIONAL ARRAY AND MULTIDIMENSIONAL ARRAY.


//Two dimensional array.
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}

printMatrix(averageTemp);

//Multidimensional Array.
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        for (let z = 0; z < matrix[i][j].length; z++) {
            console.log(matrix[i][j][z]);
        }
    }
}

