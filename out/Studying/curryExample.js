// 기존 방식
const add = (a,b) => a+b;
const sub = (a,b) => a-b;

console.log(add(10, 10)); // 20
console.log(add(10, 20)); // 30
console.log(add(10, 30)); // 40
console.log(add(10, 40)); // 50

console.log(sub(10, 1)); // 9
console.log(sub(10, 2)); // 8
console.log(sub(10, 3)); // 7
console.log(sub(10, 4)); // 6

// 기존 방식의 함수를 커링을 이용하여 구성.
const _add = a => b => a+b;
const _sub = a => b => a-b;

const add10 = _add(10);
const sub10 = _sub(10);

console.log(add10(10)); // 20
console.log(add10(20)); // 30
console.log(add10(30)); // 40
console.log(add10(40)); // 50

console.log(sub10(1)); // 9
console.log(sub10(2)); // 8
console.log(sub10(3)); // 7
console.log(sub10(4)); // 6