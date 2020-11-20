
const counter = (str) => {

    let charCount = {};
    let frequencyMap = {};
    let frequencyArr = [];
  
    // let a_Ascii_code = "a".charCodeAt(0);
    // let z_Ascii_code = "z".charCodeAt(0);
  
  
    // count the number of occurrence of each character
    [...str].forEach((c) => {
      if (charCount.hasOwnProperty(c)) {
        charCount[c] += 1
      }
      else {
        charCount[c] = 1;
      }
    });
  
    //console.log(charCount);
    // for (let i = a_Ascii_code; i <= z_Ascii_code; i++) {
    //   charCount[String.fromCharCode(i)] = 0;
    // }
  
    // count the frequency of each frequency
    for ( count in charCount ) {
        if (frequencyMap.hasOwnProperty(charCount[count])) {
            frequencyMap[charCount[count]] += 1;
        }
        else {
            frequencyMap[charCount[count]] = 1;
        }
    }

    console.log(frequencyMap);

    //let maxFrequency = 

    for ( freq in frequencyMap ) {
        frequencyArr.push(frequencyMap[freq]);
    }

    //console.log(frequencyArr);

    // sort the frequency map 
    // frequencyArr.sort((first, second) => {

    //     //console.log(second-first);

    //     return second - first;
    // })


    //console.log(frequencyArr);

    let count_deletion = 0;


    // loop the frequency map
    // for ( let i = 0; i < frequencyArr.length; i++ ) {
    //     while( frequencyArr[i] <= frequencyArr[i + 1]) {
    //         frequencyArr[ i + 1] -= 1;
    //         count_deletion += 1;
    //     }
    // }



    //console.log(count_deletion);
  
  }


  //counter("aaaabbbbccccdddeef");

  const freqCounter = (str) => {
    let freqArr = [];
    let deletionCount = 0;

    console.time("freqCounter - init freqArr");
    for (let i = 0; i < 26; i++) {
        freqArr.push(0);
    }
    console.timeEnd("freqCounter - init freqArr");

    console.time("freqCounter - build freqArr");
    for ( c of str ) {
        freqArr[c.charCodeAt(0) - 97] += 1;
    }
    console.timeEnd("freqCounter - build freqArr");
    //console.log(freqArr);


    console.time("freqCounter - sort");
    // sort the frequency array
    freqArr.sort((first, second) => {
        return second - first;
    })
    console.timeEnd("freqCounter - sort");

    //console.log(freqArr);


    console.time("freqCounter - for loop");

    for ( let i = 0; i < freqArr.length - 1; i++ ) {


        
        while (freqArr[i] <= freqArr[i+1] && freqArr[i + 1] > 0) {
            freqArr[i + 1] -= 1;
            deletionCount += 1;
        }

        // if (freqArr[i] === 0) {
        //     break;
        // }


    }

    console.timeEnd('freqCounter - for loop');
    

    //console.log(freqArr);

    console.log(`Delete: ${deletionCount}`);
  }


  function solution(s) {
    let occur = [];
    let del = 0;
  
    for (let i = 0; i < 26; i++) {
      occur[i] = 0;
    }
  
    for (let c of s) {
      occur[c.charCodeAt(0) - 97] += 1;
    }
  
    // sort
    occur = occur.sort((a, b) => a - b);
  
    // create a set
    const charSet = new Set();
    charSet.add(occur[0]);
  
    console.time("Solution - for loop");

    // iterate through all alphabets
    for(let i = 1; i < 26; i++) {
        if(charSet.has(occur[i])) {
          while(occur[i] && charSet.has(occur[i])) {
              occur[i] -= 1;
              del += 1;
          }
        }
  
        if(occur[i]) {
          charSet.add(occur[i]);
        }
    }
  
    console.timeEnd("Solution - for loop");

    console.log(`Delete: ${del}`);
    return del;
  }

  console.time('freqCounter');
  freqCounter("zzzzzssssssaaaabbbbccccdddeef");
  console.timeEnd('freqCounter');

  console.time('solution');
  solution("zzzzzssssssaaaabbbbccccdddeef");
  console.timeEnd('solution');


  // why do you want to join tesla
  // what do tesla address you


