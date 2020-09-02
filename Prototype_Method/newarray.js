Array.prototype.getEvenAndSort = function(){
    let arr = this.filter((num) => {
        return num % 2 === 0;
    });



    
    return arr;
};


console.log([11, 2, 13, 4, 15, 6, 17, 8, 19].getEvenAndSort());