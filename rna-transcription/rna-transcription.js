
export const toRna = (Dna) =>
Dna.split('').map(nucleotide => transcriptionMap[nucleotide]).join('')


let transcriptionMap = {
'G': 'C',
'C':'G',
'T':'A',
'A':'U',
'':''
}