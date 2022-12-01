// 1. 함수 선언문
// 함수 이름생략 불가능
function add(x,y) {
    return x + y
}


// 2-1. 함수 표현식1: 함수이름 생략: 익명함수를 변수에 넣음. 한 번 쓰고 더 쓰지 않
var add = function(x,y){
    return x + y
}

// 2-2. 함수 표현식1: 함수 이름 작성
var add = function plus(x,y){
    return x + y
}


function plus(x,y){
    return x + y
}

var qq = plus;
var ww = plus;


// 3. Function 생성자 함수
var add = new Function('x','y', 'return x + y')


// 4. 화살표 함수
var add = (x,y) => x + y


// var, let, const 차이점
var a = 5

if(true) {
    var a = 1
}

console.log(a); // output=1





















// 객체 리터럴 방식
const data = {
    name: '권보아',
    birht: {
        month: 5,
        date: 6}
}

console.log(data.birht.month) // output: 5

console.log(data['birht'].date) // output: 6

console.log(data['birht']['date'])// output: 6

delete data.name // output: true
console.log(data) // output: {birht: {…}} 이고 하단박스 클릭시 birht:{month: 5, date: 6} [[Prototype]]: Object

data.name = '권보아' // output: '권보아'
console.log(data) // output: {birht: {…}, name: '권보아'}



// 객체 참조
// <1> 객체를 변수에 담기: 서로 참조하고 값에 영향을 줌
const data = {
    name: '최미아',
    age: 22
}
const ref = data
ref.age = 30

console.log(ref.age) // output: 30


// <2> 변수를 변수에 담기: 서로 참조하지 않고 값에 영향을 주지 않음
let age = 22
let data = age
age = 30

console.log(data) // output: 22



// new 생성자와 생성자 함수
function User(name){
    this.name = name,
        this.isAmdin = false
}

let user = new User("김하이")
console.log(user.name) // output: 김하이 (얼러트 창에 뜸)
console.log(user.isAdmin) // output: false (얼러트 창에 뜸)









