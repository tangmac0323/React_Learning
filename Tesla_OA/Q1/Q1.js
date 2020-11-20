function solution() {
    let tableElements = document.getElementsByTagName('table');

    let max_length = 0;

    for (let tableElement of tableElements) {
        
        let tableRowElements = tableElement.getElementsByTagName('tr');

        for (let tableRowElement of tableRowElements) {
            let td_length = tableElement.getElementsByTagName('td').length;
            max_length = Math.max(td_length, max_length);
        }

    }

    return max_length;
}

console.log(solution());