//Ziplist

function zipList(l1, l2) {
    let retVal = [];
    let len = 0;
    if(l1.length > l2.length){
        len = l1.length;
    } else {
        len = l2.length;
    }
    for(let i = 0; i < len; i++){
        retVal.push(l1.shift());
        retVal.push(l2.shift())
    }
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheFunctionalWay(l1, l2){
    let retVal = [];
    let len = 0;
    let lis = "";
    if(l1.length > l2.length){
        len = l1.length;
        lis = "l1";
    } else {
        len = l2.length;
        lis = "l2";
    }
    if(lis == "l1"){
        l1.forEach((thing) =>{
            retVal.push(l1.shift());
            retVal.push(l2.shift());
        })
    }
}

console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));