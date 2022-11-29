<!--   생활 코딩 중 자바스크립트 --> <!-- 15_비교(03: ===를 사용하자)-->

var a;
alert(a); // output: undefined. 의도하지 않은 상황

var a = null;
alert(a); //output: null. 의도적으로 null로 부여한 상황

alert(undefined == null) // output: true
alert(undefined === null) // output: false

// ==에선 true를 1로 간주함
// ===는 같은 의미, 같은 데이터 타입일 때만 true인 엄격한 연산자
alert(true == 1); //output: true
alert(true === 1); //output: false
alert(true == '1'); //output: true
alert(true === '1'); //output: false

// NaN: 성립할 수 없음. 계산할 수 없음.
alert(0 === -0); //output: true
alert(NaN === NaN); // output: false


