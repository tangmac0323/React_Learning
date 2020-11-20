const OVER_20_PEOPLE = 1;
const LESS_20_PEOPLE = 0;
const NECESSITY = 1;
const CHOICE = 0;

const NECESSITY_PERCENTAGE = 11;
//const CHOICE_PERCENTAGE = 89;
const NECESSITY_OVER_20_PERCENTAGE = 4.5;
const CHOICE_OVER_20_PERCENTAGE = 12.3;

const necessity_generator = (percentage) => {
    let rng = Math.random();

    return [NECESSITY, rng < percentage/100 ? OVER_20_PEOPLE : LESS_20_PEOPLE];
}

const choice_generator = (percentage) => {
    let rng = Math.random();

    return [CHOICE, rng < percentage/100 ? OVER_20_PEOPLE : LESS_20_PEOPLE];
}


const sample_generator = (sample_num) => {

    let sample_set = [];
    let target_count = 0;
    let over_20_count = 0;

    for ( let i = 0; i < sample_num; i++ ) {
        let rng = Math.random();

        let sample = [];


        if (rng < NECESSITY_PERCENTAGE/100 ) {
            sample = necessity_generator(NECESSITY_OVER_20_PERCENTAGE);
        }
        else {
            sample = choice_generator(CHOICE_OVER_20_PERCENTAGE);
        }

        if (JSON.stringify(sample) == JSON.stringify([CHOICE, OVER_20_PEOPLE])) {
            target_count += 1;
        }

        if (sample[1] === 1) {
            over_20_count += 1;
        }


        //console.log(sample);
        
        sample_set.push(sample);
    }

    //console.log(target_count);

    //console.log([CHOICE, OVER_20_PEOPLE]);

    return `${target_count/over_20_count} %`;
    
}

console.time('Sample Generator');
console.log(sample_generator(1000000));
console.timeEnd('Sample Generator');