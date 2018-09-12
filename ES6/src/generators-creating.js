function* generator() {
    yield;
}

let iterator = generator();

console.log(iterator.next());
console.log(iterator.next());