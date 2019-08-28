export class Matrix {
  constructor(matrixString) {
    this.matrixString = matrixString
  }


  get rows() {
    let rowString = createRowStringArray(this.matrixString)
    let rowStringIntoNumberArray = turnEachRowStringIntoNumberArray(rowString)
    return rowStringIntoNumberArray
  }

  get columns() {
    let columns = []
    let columnItem = []

    const rowsArray = this.rows
    // a, b is used for basic comparator
    var longestRowLength = rowsArray.reduce((a, b) => (a.length > b.length ? a : b), []).length

    //Since the longest row will determine the number of columns
    for (let i = 0; i < longestRowLength; i++) {
      rowsArray.forEach(row => {
        columnItem.push(row[i])
      });
      columns.push(columnItem)
      columnItem = []
    }
    return columns
  }
}


let createRowStringArray = (matrixString) => matrixString.split("\n")
let turnEachRowStringIntoNumberArray = (rowStringArray) => rowStringArray.map(rowString => rowString.split(' ').map(Number))