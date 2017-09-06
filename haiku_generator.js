var haiku = require('./haiku');
var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){
  var array = [];    
   var lines = data.toString().split("\n"),
       lineSplit
   lines.forEach(function(line){    
    lineSplit = line.split("  ");    
    array.push([lineSplit[0], lineSplit[1]]);
  });   
  return array;
}

var myData = formatData(cmudictFile);

function getSyllablesArray() {
  var arrayWordsFull = myData;
  var finalArray = [[''], ['A'], ['APPLE'], ['BANANA'], ['TWENTY-SEVEN'], ['POSSIBILITY'], ['RESPONSIBILITY'], ['MANEUVERABILITY'], [], [], [], []];
  var nums = '0123456789'
  for (let i = 0; i < arrayWordsFull.length; i++) {
      var word = arrayWordsFull[i][0];
      if (arrayWordsFull[i][1] === undefined) {
        continue;
      }
      var syllablesAll = arrayWordsFull[i][1].split(' ');
      var syllables = [];
      for (let j = 0; j < syllablesAll.length; j++) {
        if (nums.includes(syllablesAll[j].slice(-1))) {
          syllables.push(syllablesAll[j]);
        }
      }
      var numSyllables = syllables.length;
      if (finalArray[numSyllables] === undefined) {
        finalArray[numSyllables] = [];
      }
      finalArray[numSyllables].push(word);
  }
  return finalArray;
}

var words = getSyllablesArray();

var str = haiku.createHaiku([5, 7, 5], words);

console.log(str);