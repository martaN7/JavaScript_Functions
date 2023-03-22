function complementaryDNAStrand(dna) {
    const dnaPairs = {
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G'
    }
    return dna.split('').map(l => dnaPairs[l]).join('');
}

console.log(complementaryDNAStrand("ATTGC"))
