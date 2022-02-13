// If a parameter is book as input, will be give as output page number.
function paperRequirements (firstbook, secondbook, thirdbook){
    const firstbookpages = 100* firstbook;
    const secondbookpages = 200 *secondbook;
    const thirdbookpages = 300 * thirdbook;
    const totalbookpages = firstbookpages + secondbookpages + thirdbookpages;
    return totalbookpages;
}
console.log(paperRequirements( 4, 2, 10));