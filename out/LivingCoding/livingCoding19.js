<!--   생활 코딩 중 자바스크립트 --> <!-- 19. 조건문(03: 조건문의 응용)-->

a = 1;
if(a === 1){
    alert(1);
} // output: 1뜸

prompt('당신의 나이는?') // alert창에 '당신의 나이는?'과 입력가능한 공간이 뜸. 프롬프트창에 입력시 입력한 값이 console에 뜸
17

alert(prompt('당신의 나이는?')); // alert창에 '당신의 나이는?'과 입력가능한 공간이 뜸. 프롬프트창에 입력시 입력한 값이 alert창에 뜸


id = prompt('아이디를 입력해주세요')
if(id == 'egoing'){
    alert('아이디가 일치합니다.')
} else {
    alert('아이디가 일치하지 않습니다.')
} // alert창의 prompt창에 입력한 값이 egoing이면 '아이디가 일치합니다.'라고 뜸]

var id = prompt('아이디를 입력해주세요')
'egoing'
if(id == 'egoing'){
    var password = prompt('비밀번호를 입력해주세요');
    if(password == 1234){
        alert('로그인 정보가 확인되었습니다..' + id + '님, 반갑습니다.')
    } else {
        alert('비밀번호가 일치하지 않습니다')
    }
    alert('아이디가 일치합니다.')
} else {
    alert('아이디가 일치하지 않습니다.')
} // 왜 마지막에 최종 else문꺼 alert가 뜰까?