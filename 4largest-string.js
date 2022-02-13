
let friendName = ['Pronto', 'Md Marup Ali', 'Oni', 'Rasel', 'Nahar', 'Saila'];
// let friendName = 'partho';
function bestFriend (friendName){
    if ( typeof friendName != 'object'){
        return 'Sorry sir your input is not string type.' + 'Pleace type string parameter.'
    }
    let largest = friendName[0];
    for( let i=0; i<friendName.length; i++){
        const element = friendName[i]
        if( element < largest ){
            largest = element
        }
   }
   return largest
}
console.log(bestFriend(friendName));
