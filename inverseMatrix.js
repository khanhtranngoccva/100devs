let m1 = [
    [20]
];

let m2 = `5 9 2 8 1 4
9 4 8 6 5 4
7 3 0 3 5 9
0 0 1 5 4 9
3 7 4 9 6 7
1 6 3 2 0 3`.split("\n").map(row=>row.split(" ").map(Number));

function inverse(matrix) {
    if (!Array.isArray(matrix)) return null;
    const rowCount = matrix.length;
    for (let row of matrix) {
        if (!Array.isArray(row)) return null;
        else if (row.length !== rowCount) return null;
        else if (!row.every(value=>typeof value === "number" && !isNaN(value))) return null;
    }
    let matrixDeterminant = determinant(matrix);
    console.log(matrixDeterminant);
    if (matrixDeterminant === 0) return null;
    return scalarMultiply(adjoint(matrix), 1 / determinant(matrix));
}

function determinant(matrix) {
    const matrixLength = matrix.length;
    if (matrixLength === 0) return 0;
    else if (matrixLength === 1) return matrix[0][0];
    else if (matrixLength === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    else {
        // Cofactor expansion on row 1
        let result = 0;
        for (let x = 0; x < matrixLength; x++) {
            const currentValue = matrix[0][x];
            const negativeFactor = (-1) ** x;
            const miniMatrix = [];
            for (let y = 1; y < matrixLength; y++) {
                miniMatrix.push(matrix[y].filter((value, index) => index !== x));
            }
            result += currentValue * negativeFactor * determinant(miniMatrix);
        }
        return result;
    }
}

function scalarMultiply(matrix, scalar) {
    return JSON.parse(JSON.stringify(matrix)).map(row => row.map(value => value * scalar));
}

function transpose(matrix) {
    return matrix[0].map((value, column) => matrix.map(row => row[column]));
}

function adjoint(matrix) {
    const matrixSize = matrix.length;
    const newMatrix = Array.from({length: matrixSize}, () => Array.from({length: matrixSize}));
    for (let y = 0; y < matrixSize; y++) {
        for (let x = 0; x < matrixSize; x++) {
            const miniMatrix = matrix.filter((row, rowNumber) => rowNumber !== y)
                .map(row => row.filter((column, columnNumber) => columnNumber !== x));
            newMatrix[y][x] = 1 ** (x + y) * determinant(miniMatrix);
        }
    }
    return newMatrix;
}


console.log(adjoint(m1));