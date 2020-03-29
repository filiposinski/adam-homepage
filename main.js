//alert('Hello World!');
console.log('Hello World!');

let liczba = 5;

function test() {
    console.log('Hello');
    liczba = 9;
}

function calculate(x) {
    return x * 3;
}

test();
console.log(liczba);

console.log(calculate(liczba));