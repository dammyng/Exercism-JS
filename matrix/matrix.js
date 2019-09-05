export class Matrix {
  constructor(matrixString) {
    this.matrixString = matrixString
  }


  get rows() {
    let rows = this.matrixString.split("\n").map(rowItem => rowItem.split(' ').map(Number))
    return rows
  }

  get columns() {
    // a, b is used for basic comparator
    var longestRow = rowsArray.reduce((a, b) => (a.length > b.length ? a : b), [])
    return longestRow.map((_, i) => this.rows.map(row => row[i]))
  }
}