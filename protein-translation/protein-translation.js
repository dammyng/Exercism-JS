//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (codons) => {
  let protein = []
  if (codons) {
    var splitProtein = codons.match(/.{3}/g)

    for (let i = 0; i < splitProtein.length; i++) {
      const element = splitProtein[i];
      let result = RNATable[element]

      if (!result)
        throw new Error("Invalid codon")

      if (result && result == 'STOP') break
      protein.push(result)
    }
  }

  return protein

};

let RNATable = {
  'AUG': "Methionine",
  'UUU': 'Phenylalanine',
  'UUC': 'Phenylalanine',
  'UUA': 'Leucine',
  'UUG': 'Leucine',
  'UCU': 'Serine',
  'UCC': 'Serine',
  'UCA': 'Serine',
  'UCG': 'Serine',
  'UAU': 'Tyrosine',
  'UAC': 'Tyrosine',
  'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP',
  'UAG': 'STOP',
  'UGA': 'STOP'
}