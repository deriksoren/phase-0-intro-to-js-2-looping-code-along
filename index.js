const finalArray = [];
let names = ["Erik", "Kate", "Emma"];
let occ = "Hannukah";
function writeCards (names, occ) {
    for (let i = 0; i <names.length; i ++) {
        finalArray.push (`Thank you, ${names[i]}, for the wonderful ${occ} gift!`)
    }
return finalArray
}

let count = 0 ;
function countDown (count) {
    while (count >= 0) {
        console.log (count --);
    }
}