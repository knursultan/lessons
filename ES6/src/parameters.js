function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
}

greet('Hi', 'Bill');
greet('Hi');
greet();


function sum() {
    console.log(arguments instanceof Array);

    var sum = 0;

    Array.prototype.forEach.call(arguments, function (value) {
        sum += value;
    });
    console.log(sum);
}

function sum(...values) {
    console.log(values instanceof Array);
    let sum = 0;
    values.forEach(function (value) {
        sum += value;
    });

    console.log(sum);
}

function sum(...values) {
    console.log(
        values.reduce(function (prevValue, curValue) {
            return prevValue + curValue;
        })
    );
}

sum(5, 6, 7);