<!--   생활 코딩 중 자바스크립트 --> <!-- 21. 조건문(05: boolean의 대체재)-->

if(0){
    alert(1);
} // output: 안 뜸

if(1){
    alert(1);
} // output: 1 뜸

if('') {alert('빈 문자열')} // output: 안 뜸. js에서는 빈 문자열을 false로 간주함
if(undefined) {alert('빈 문자열')} // output: 안 뜸
if(null) {alert('빈 문자열')} // output: 안 뜸

// if() 안에는 1, true가 들어가야 true임