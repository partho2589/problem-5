// If a parameter is feet as input, will be give as output inche.

function feetToince(feet){
    if( typeof feet != 'number'){
       return 'Sorry, Sir pleace crect you input.'
    }
    else if ( feet < 0){
        return 'Sorry, Sir pleace creat you input number.'
    }
    var ince= feet * 12;
    return ince;
}
console.log( feetToince(50));