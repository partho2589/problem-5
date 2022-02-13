// If a paramiter is centimeter as input,  will be give as output meter.

function centimeterToMeter (centimeter){
    if ( typeof centimeter != 'number'){
        return ' Your input is wrong.'
    }
    else if ( centimeter < 0){
        return ' Pleace positive you input number.'
    }
    let meter = centimeter * 0.01 ;
    return meter;
}
console.log(centimeterToMeter(100));