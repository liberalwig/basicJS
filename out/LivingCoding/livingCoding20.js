<!--   생활 코딩 중 자바스크립트 --> <!-- 20. 조건문(04: 논리연산자&& 앤퍼센드)-->

// &&: 둘 이상의 boolean을 하나의 true값으로 묶을 수 있게 함

if(true && true){
    alert(1);
} // output: 1 뜸

if(true && false){
    alert(1);
} // output: 안 뜸

var id = prompt('아이디를 입력해주세요');
var password = prompt('비밀번호를 입력해주세요');
if(id == 'egoing' && password === '1234'){
    alert('로그인 정보가 확인되었습니다..' + id + '님, 반갑습니다.');
} else {
    alert('아이디가 일치하지 않습니다.');
}



// ||: or연산자. 파이프

if (true || true) {
    alert(1);
} // output: 1뜸

if (true || false) {
    alert(1);
} // output: 1뜸

if (false || true) {
    alert(1);
} // output: 1뜸

if (false || false) {
    alert(1);
} // output: 안 뜸


id = prompt('아이디를 입력해주세요')
password = prompt('비밀번호를 입력해주세요')
if ( (id === 'egoing' || id === 'sori' || id === 'hello11') && password === '1111' ){
    alert('로그인 되었습니다');
} else {
    alert('로그인에 실패했습니다');
}


// ! : not. boolean의 값을 역전함
if (!true && !true) {
    alert(1);
} // output: 안 뜸

if (true && !true) {
    alert(1);
} // output: 안 뜸

if (!true && true) {
    alert(1);
} // output: 안 뜸

if (!true && !true) {
    alert(1);
} // output: 1 뜸



