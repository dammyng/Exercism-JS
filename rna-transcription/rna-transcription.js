//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (DNA) =>
  DNA.split('').map(DnaChar => DnaRnaTable[DnaChar]).join('')


let DnaRnaTable = {
'G': 'C',
'C':'G',
'T':'A',
'A':'U',
'':''
}