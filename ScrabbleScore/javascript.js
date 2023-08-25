const inputWord = prompt("enter your word");
function calculateScrabbleScore(word) {
    const letterValue = {
        'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
        'D': 2, 'G': 2,
        'B': 3, 'C': 3, 'M': 3, 'P': 3,
        'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
        'K': 5,
        'J': 8, 'X': 8,
        'Q': 10, 'Z': 10
    };
    let score1 = 0;
    word = word.toUpperCase();
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (letterValue.hasOwnProperty(letter)) {
            score1 += letterValue[letter];
        }
    }
        return score1;
}
console.log( inputWord);
console.log( calculateScrabbleScore(inputWord));


