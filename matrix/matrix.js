

export class Matrix {
  constructor(matrixString) {
    this.matrixString = matrixString
  }


  get rows() {
    return splitAtNewline(this.matrixString).map(rowItem=> [...rowItem]).map(i=>i.map(j=>Number(j)))

  }

  get columns() {
    let h= []
    let k = []
    const row = this.rows
    var longs = row.reduce((a, b) => (a.length > b.length ? a : b),[]).length

    for (let i = 0; i < longs; i++) {
      row.forEach(element => {
        k.push(element[i])
      });
      h.push(k)
      k=[]
    }
return h  }
}
let splitAtNewline = (matrixString) => matrixString.split("\n").map(item=> item.split(' '))

