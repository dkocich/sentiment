function rand (limit) {
    return Math.floor(Math.random() * limit);
}

function createRandomWord (length) {
    let consonants = 'bcdfghjklmnpqrstvwxyz!@#$%^&*()_+":;\'?><~`';
    let vowels = 'aeiou';
    let word = '';

    // Split
    consonants = consonants.split('');
    vowels = vowels.split('');

    // Create word
    for (let i = 0; i < length / 2; i++) {
        const randConsonant = consonants[rand(consonants.length)];
        const randVowel = vowels[rand(vowels.length)];

        word += (i===0) ? randConsonant.toUpperCase() : randConsonant;
        word += i*2<length-1 ? randVowel : '';
    }

    return word;
}

module.exports = function (length) {
    const words = [];
    for (let i = 0; i < length; i++) {
        words.push(createRandomWord(rand(20)));
    }

    return words.join(' ');
};
