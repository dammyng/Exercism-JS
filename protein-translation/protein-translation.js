//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (codons) => {
  let protein = []
  if (codons) {
    var splitProtein = codons.match(/.{3}/g)
    splitProtein.map(item => {
      let result = condoCheck(item)
      result == null ? splitProtein.length = 0 :
        protein.push(result)
    })
    return protein
  } else {
    return protein
  }
};

let condoCheck = (condo) => {
  let protein = null

  if (condo == "AUG")
    protein = "Methionine"
  else if (condo == "UUU" || condo == "UUC") {
    protein = "Phenylalanine"
  } else if (condo == "UUA" || condo == "UUG") {
    protein = "Leucine"
  } else if (condo == "UCU" || condo == "UCC" || condo == "UCA" || condo == "UCG") {
    protein = "Serine"
  } else if (condo == "UAU" || condo == "UAC") {
    protein = "Tyrosine"
  } else if (condo == "UGU" || condo == "UGC") {
    protein = "Cysteine"
  } else if (condo == "UGG") {
    protein = "Tryptophan"
  } else if (condo == "UAA" || condo == "UAG" || condo == "UGA") {
    protein = null
  } else {
    throw new Error("Invalid codon")
  }
  return protein
}