let ip = '192.168.100.100';

let numbers = ip.split('.').map(num => parseInt(num));

console.log(numbers);

const validate = (ipArray) => ipArray.length === 4 &&
    ipArray.every(part => 0 <= part && part <= 255);

if (validate(numbers)) {
    console.log('Valid ip!')
} else {
    console.error('Invalid ip!')
}
