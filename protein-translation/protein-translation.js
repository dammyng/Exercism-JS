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

      if (RNA && RNA == StopCondo) break
      protein.push(RNA)
    }
  }

  return protein

};

export const splitProtein = (codons) => codons.match(/.{1,3}/g)

const StopCondo = "STOP"
const Phenylalanine = "Phenylalanine"
const Leucine = "Leucine"
const Serine = "Serine"
const Tyrosine = "Tyrosine"
const Cysteine = "Cysteine"

let RNATable = {
  'AUG': "Methionine",
  'UUU': Phenylalanine,
  'UUC': Phenylalanine,
  'UUA': Leucine,
  'UUG': Leucine,
  'UCU': Serine,
  'UCC': Serine,
  'UCA': Serine,
  'UCG': Serine,
  'UAU': Tyrosine,
  'UAC': Tyrosine,
  'UGU': Cysteine,
  'UGC': Cysteine,
  'UGG': 'Tryptophan',
  'UAA': StopCondo,
  'UAG': StopCondo,
  'UGA': StopCondo,
}