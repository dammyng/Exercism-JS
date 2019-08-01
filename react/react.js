export const InputCell = function (v) {
    this.value = v
    this.setValue = function (x) {
        this.value = x
    }
    this.fn = function (x) {
        return x[0].value + 1
    }

    this.input = function(x){
        return x[0].value + x[1].value * 10
    }
}

export const ComputeCell = function (cellArray, fn) {
    this.value = fn(cellArray)
    this.value = fn(cellArray)
}
export const CallbackCell = (value) => {
    return value
}