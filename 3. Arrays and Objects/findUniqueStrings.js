
const str = ["abc", "def", "ghi", "abc", "ghi", "ccd"];

const obj = {};

for(let element of str){
    if(!obj[element]){
        obj[element] = true;
    }
}

for(let keys in obj){
    console.log(keys, obj[keys]);
}