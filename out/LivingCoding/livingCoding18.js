<!--   생활 코딩 중 자바스크립트 --> <!-- 18. 조건문(02: else, else if)-->

if (true) {
    alert(1);
} else {
    alert(2);
} // output: 1만 뜸

if (false) {
    alert(1);
} else {
    alert(2);
} // output: 2만 뜸


if (false) {
    alert(1);
} else if(true) {
    alert(2);
} else if (true) {
    alert(3);
} else {
    alert(4);
} // output: 2만 뜸

if (false) {
    alert(1);
} else if(fale) {
    alert(2);
} else if (true) {
    alert(3);
} else {
    alert(4);
} // output: 3만 뜸

if (false) {
    alert(1);
} else if(false) {
    alert(2);
} else if (false) {
    alert(3);
} else {
    alert(4);
} // output: 4만 뜸