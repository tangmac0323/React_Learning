const solution = (str) => {
  // create a dictionary
  let charCount = {};
  let charSet = new Set();
  let charCountArr_deletion = {};

  let a_Ascii_code = "a".charCodeAt(0);
  let z_Ascii_code = "z".charCodeAt(0);

  for (let i = a_Ascii_code; i <= z_Ascii_code; i++) {
    charCount[String.fromCharCode(i)] = 0;
    charSet.add(String.fromCharCode(i));
    //charCountArr_deletion[String.fromCharCode(i)] = 0;
  }

    //console.log(charCountArr_deletion);

  [...str].forEach((c) => {
    charCount[c] += 1;
  });

  // Create items array
  let charCountArr = Object.keys(charCount).map(function (key) {
    return [key, charCount[key]];
  });

  //console.log(charCountArr);

  // Sort the array based on the second element
  charCountArr.sort(function (first, second) {
    //console.log(second[0] + ' ' + first[0]);
    return second[1] - first[1];
  });

  // loop the array and do the deduction
  const charCountArr_length = charCountArr.length;

  let deletionCount = 0;

  // 
  for (let i = 0; i < charCountArr_length - 1; i++) {
    while (charCountArr[i][1] <= charCountArr[i + 1][1] && charCountArr[i + 1][1] > 0) {
        charCountArr[i + 1][1] -= 1;
        //charCountArr_deletion[charCountArr[i + 1][0]] += 1;
        deletionCount += 1;
    }
  }

  //console.log(charCountArr_deletion);

  //return charCountArr;
  return deletionCount;
};


const dict_test = () => {
  let dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4 , 'e': 5};




  for ( const elem in dict) {
    console.log("key: " + elem + "\t value: " + dict[elem]);
  }


}

const mapTest = () => {
  let mapA = new Map();

  mapA['a'] = 1;
  mapA['b'] = 2;
  mapA['c'] = 3;

  console.log(mapA);


  mapA['a'] = 4;


  console.log(mapA);

}


const setTest = () => {

  let setA = new Set();

  setA.add('a');
  setA.add('b');
  setA.add('c');


  console.log(setA);
}
//aabbcc
//aab 

//a b

// example
// 4
// xamp


// mapTest();

// setTest();

//console.log(solution("ashfdsklfjsaklfsahdsfjdhfskfsaaaaaaabbbvvvcccdddeeefffttttttujujyjmjjjwodvefbhujikmcdjnkxmzow"));
// console.log(solution("aaaabbbbccccdddd"));
// console.log(solution("aaaa"));
// console.log(solution("cccaaabbb"));
//console.log(solution('abcdefghijk'));

console.log(solution("aaaabbbbccccdddeef"));

//dict_test();

// for(var i = 0; i<5;i++){  setTimeout(()=>{         console.log(i)         , i*1000)}
