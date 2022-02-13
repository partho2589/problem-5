let positiveAndNegetiveNumber = [20, 30, 20, 50, 80, -90, 80, 50, 60];
function chekcPositiveNumber (number){
    let pElement = [];
     for( let i=0; i<number.length; i++){
        const positiveNumber = number[i]
        if (positiveNumber > 0){
             pElement  = positiveNumber 
        }
        else {break }
    }
    return pElement;
}
console.log(chekcPositiveNumber(positiveAndNegetiveNumber))

for ( let i = 0; i<positiveAndNegetiveNumber.length; i++){
    let element = positiveAndNegetiveNumber[i]
    if ( element > 0){
        // console.log(element)
    }
}return element