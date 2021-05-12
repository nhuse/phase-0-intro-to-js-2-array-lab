const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name) {
    const newAppendCatArr = [...cats, name];
    return newAppendCatArr;
}

function prependCat(name) {
    const newPrependCatArr = [name, ...cats];
    return newPrependCatArr;
}

function removeLastCat() {
    const newRemoveLastCatArr = cats.slice(0,-1);
    return newRemoveLastCatArr;
}

function removeFirstCat() {
    const newRemoveFirstCatArr = cats.slice(1);
    return newRemoveFirstCatArr;
}