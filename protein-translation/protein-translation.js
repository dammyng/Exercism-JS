//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (codons) => {
  let protein = []
  if (codons) {
    const RNAArray = splitProtein(codons)
    for (let i = 0; i < RNAArray.length; i++) {
      const element = RNAArray[i];
      let RNA = RNATable[element]

      if (!RNA)
        throw new Error("Invalid codon")

      if (RNA && RNA == 'STOP') break
      protein.push(RNA)
    }
  }

  return protein

};

export const splitProtein = (codons) => codons.match(/.{3}/g)

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