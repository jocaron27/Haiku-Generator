var fs = require('fs');

function createHaiku(structure, syllablesArr){
    var arrOfWords;
    return structure.map(function(syls){
        arrOfWords = syllablesArr[syls];
        return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
      }).join('\n');
}

module.exports = {
    createHaiku: createHaiku,
};