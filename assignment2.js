//Assignment 2


//forEach()

console.log("forEach()");
let arr = [1, 2, 3];

function myEach(callback, ...arr) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

function printEach(item) {
    console.log(item);
}

myEach(printEach, ...arr);

//map()

console.log("map()");

let arrM = [4, 5, 6];

function myMap(num, callback, ...arrM) {
    let arrNew = [];
    for (let i = 0; i < arrM.length; i++) {
        arrNew[i] = callback(arrM[i], num);
    }
    console.log(arrNew);
}


function mult(element, num) {
    return element * num;
}

myMap(2, mult, ...arrM);

//filter()

console.log("filter()");

let arr2 = [5, 8, 10, 11, 12, 13];

function myFilter(callback, ...arr2) {
    let arrF = [];
    for (let i = 0; i < arr2.length; i++) {
        arrF.push(callback(arr2[i]));
    }
    for (let i = 0; i < arrF.length; i++) {
        if (arrF[i] === '') {
            arrF.splice(i, 1);
        }
    }
    arrF.shift();
    console.log(arrF);
}


function lessThan(element) {
    if (element < 11) {
        return '';
    }
    return element;
}

myFilter(lessThan, ...arr2);

//some()

console.log("mySome");


let arrS = [1, 2, 3, 5, 10];

function mySome(callback, num, ...arrS) {
    let valueBool;
    for (let i = 0; i < arrS.length; i++) {
        valueBool = callback(arrS[i], num);
    }
    console.log(valueBool);
}

function atLeastLessThan(item, num) {
    if (item < num) {
        return true;
    }
    return false;
}

mySome(atLeastLessThan, 11, ...arrS);

//every()

console.log("myEvery");


let arrE = [10, 20, 30, 40];

function myEvery(callback, num, ...arrE) {
    let valueBool = 1;
    let isTrue;
    for (let i = 0; i < arrE.length; i++) {
        isTrue = callback(arrE[i], num);
        if (isTrue === false) {
            valueBool = 0;
        }
    }

    if (valueBool === 0) {
        console.log(false);
    } else {
        console.log(true);
    }
}

function greaterThan(item, num) {
    if (item < num) {
        return true;
    }
    return false;
}
myEvery(greaterThan, 37, ...arrE);

//reduce()

console.log("myReduce");

let arrR = [1, 2, 1, 1];

function myReduce(callback, ...arrR) {
    let sum = 0;
    for (let i = 0; i < arrR.length; i++) {
        sum += callback(arrR[i]);
    }
    console.log(sum);
}

function addElements(items) {
    return items;
}

myReduce(addElements, ...arrR);

//includes()

console.log('myIncludes');

let arrI = [2, 5, 6, 8];

function myIncludes(num, ...rest) {
    let bin = 0
    let val;
    for (let i = 0; i < rest.length; i++) {
        if (rest[i] === num) {
            bin += 1;
        }
    }

    if (bin > 0) {
        val = true;
    } else {
        val = false;
    }
    return console.log(val);
}

myIncludes(2, ...arrI);

//indexOf()

console.log('indexOf');

arrIndex = [1, 5, 10, 14, 28];

function myIndexOf(element, arrIn) {
    let index = -1;
    for (let i = 0; i < arrIn.length; i++) {
        if (arrIn[i] === element) {
            index = i;
        }
    }
    return console.log(index);
}

myIndexOf(10, arrIndex);

console.log('push');

arrEle = [1, 2, 3];

function myPush(elementToAdd, arrP) {
    arrP[arrP.length] = elementToAdd;
    return arrP;
}

console.log(myPush(5, arrEle));


console.log('lastIndexOf');

elements = [100, 200, 400, 200, 400, 500, 200];

function myUnshift(itemsArr, item) {
    let currIndex = -1;
    for (let i = 0; i < itemsArr.length; i++) {
        if (itemsArr[i] === item) {
            currIndex = i;
        }
    }
    return console.log(currIndex);
}

myUnshift(elements, 300);
myUnshift(elements, 200);

//Object.keys()

console.log('Object.keys');

let tourism = { Country: 'Italy', Capital: 'Rome', Monuments: 'Colosseum' }

function grabKeys(object) {
    let keys = [];
    let index = 0;
    for (let key in object) {
        keys[index] = key;
        index++;
    }
    return console.log(keys);
}

grabKeys(tourism);

//Object.values()

console.log('Object.value');

function grabValues(object) {
    let values = [];
    let index = 0;
    for (let val in object) {
        values[index] = object[val];
        index++;
    }
    return console.log(values);
}

grabValues(tourism);

//Miscellaneous Problems 

console.log('Sum of a range');

// function range(){

// }
// function sum(){

// }


//Miscellaneous Problems (Zeroes)

arrZ = [0, 1, 0, 3, 12];

function moveZeros(nums) {
    nums.sort((a, b) => (a === 0) - (b === 0));
    console.log(nums);
}

console.log('Miscellaneous Problem moveZeros');
console.log(arrZ);
moveZeros(arrZ);