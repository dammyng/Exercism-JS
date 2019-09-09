export class Matrix {
  constructor(matrixString) {
    this.matrixRows = matrixString.split("\n").map(rowItem => rowItem.split(' ').map(Number))
  }


  get rows() {
    return this.matrixRows
  }

  get columns() {
    // a, b is used for basic comparator
    var longestRow = this.matrixRows.reduce((a, b) => (a.length > b.length ? a : b), [])
    return longestRow.map((_, i) => this.matrixRows.map(row => row[i]))
  }
}