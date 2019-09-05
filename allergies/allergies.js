
class Allergies{
    constructor(num){
        this.num = num;
        this.allergies = createList(this.num);       
    }

    list(){
        return this.allergies;
    }

    allergicTo(allergy){
        return this.allergies.includes(allergy);
    }
}

const allergies = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];

function createList(num){
    return allergies.filter((_, i) => Math.pow(2,i) & num);
} 







module.exports = {
    Allergies
}