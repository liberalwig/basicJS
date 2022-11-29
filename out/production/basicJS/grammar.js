// 1. 함수 선언문
// 함수 이름생략 불가능
function add(x,y) {
    return x + y
}

function(x,y){
    return x + y
}


// 2-1. 함수 표현식1: 함수이름 생략
var add = function(x,y){
    return x + y
}

// 2-2. 함수 표현식1: 함수 이름 작성
var add = function plus(x,y){
    return x + y
}


// 3. Function 생성자 함수
var add = new Function('x','y', 'return x + y')


// 4. 화살표 함수
var add = (x,y) => x + y

console.dir(add)