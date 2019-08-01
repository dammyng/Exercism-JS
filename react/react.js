export class InputCell {
    constructor(v){
        this.value = v 
        this.observers = []

    }
    setValue(value) {
        if (this.value === value) 
            return
        this.value = value
        this.observers.forEach(o => o.onChange(this))
    }
   
    addObserver(o) {
        this.observers.push(o)
    }
}

export class ComputeCell {
    constructor(cellArray , fn){
        this.cells = cellArray

        this.fn = fn
        this.value = null
        this.cbs = []

        this.compute()
        this.addObserver(this)
    }
    addObserver(o) {
        this.cells.forEach(cell => cell.addObserver (o)) // !!
    }
    compute(){
        console.log(this.cells)
        this.value =  this.fn(this.cells)
        console.log(this.old +" ")
    }
    onChange(cell) {
        let newValue = this.fn(this.cells)
        if (this.value === newValue) return
        this.value = newValue
        this.cbs.forEach(cb => cb.onChange(this))
    }
  

}
export const CallbackCell = (value) => {
    return value
}