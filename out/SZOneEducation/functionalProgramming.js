/*
함수형 프로그램 Functional Programming
 */

=========
1. 기본문법
=========

1-0. 변수선언
var, let, const
    scope : 변수의 유효범위

var    함수스코프
let    블럭스코프
const  블럭스코프

1-1. 객체(JSON : JavaScript Oject Notation)
객체리터럴 : {k:v,k:v,k:[{}]}
생성자방식 : new

1-2. 함수(*****)(일급객체)

함수선어문 : function add(a,b){ }
함수표현식 : let add = function(a,b){}

1-3. 배열
    []
주요 method : push,pop,slice

==============
2. 함수형 프로그램
==============
----------------
    2-0. sample data
----------------
    let students = [{name:'홍길동',age: 32 }
    ,{name:'이순신 ',age: 62}
    ,{name:'을지문덕 ',age: 13}
    ,{name:'김구',age: 22}
    ,{name:'이소룡',age: 47}]



---------------------
    2-1. filter
---------------------
   // 필터조건에 넣어보고 true인 애들만 반환함. 5개 넣어도 조건에 맞는 원소만 반환함

    let filter = function(data,predi){
        let rslt =[] ;
        for( let i =0 ; i< data.length; i++){
            if(predi(data[i])) rslt.push(data[i]);
        }
        return rslt ;
    }

호출
filter([1,2,3,4,5],function(val){
    return val > 2 ;}) // output: [3,4,5]

------------------
    2-2. map
------------------
// 배열에 담긴 원소에 모두 적용시켜서 반환해줌. 5개 넣으면 5개 나옴

    let map = function(data,mapper){
        let rslt =[] ;
        for(let i =0 ; i< data.length; i++){
            rslt.push(mapper(data[i]));
        }
        return rslt ;
    }

호출
map([1,2,3,4,5],function(val){return val*val*2 ;}) // output: [2, 8, 18, 32, 50]

--------------------
    2-3. each
--------------------
//리턴값 없이 돌려주기만 함

    let each = function(data,iter){
    for( let i =0 ; i< data.length; i++){
        iter(data[i]);
        }
    }

-----------------------------------------
    2-3-1. refactoring filter
-----------------------------------------

    let filter = function(data,predi){
        let rslt =[];

        each(data,function(val){
        if(predi(val)) rslt.push(val);
        })

        return rslt ;
    }

호출
filter([1,2,3,4,5],function(val){ return val > 2 ;}) // output: [3, 4, 5]

--------------------------------------
    2-3-2. refactoring map
--------------------------------------

    let map = function(data,mapper){
        let rslt =[] ;

        each(data,function(val){rslt.push(mapper(val));})
        return rslt ;
    }

호출
map([1,2,3,4,5],function(val){ return val*val*2 ;}) // output: [2, 8, 18, 32, 50]


----------------------------------
    2-3-3. sample data 적용
----------------------------------
    filter(students,function(student){ return student.age > 30})
    // output:  [{…}, {…}, {…}] => {name: '홍길동', age: 32}, {name: '이순신 ', age: 62}, {name: '이소룡', age: 47}

    map(students,function(student){ return `${student.name}의 나이 : ${student.age}`})
    // output: ['홍길동의 나이 : 32', '이순신 의 나이 : 62', '을지문덕 의 나이 : 13', '김구의 나이 : 22', '이소룡의 나이 : 47']

----------------------------------------------------
    2-4. CURRY , closeur
함수와 인자가 다 채워질때까지 실행을 연기하는 함수
----------------------------------------------------

let curry = function(fn){
return function(a,b) {
    if(arguments.length == 2) return fn(a,b)
    return function (b) {
        return fn(a,b)
    }}}


let curryr = function(fn){
    return function(a,b) {
        if(arguments.length == 2) return fn(a,b)
        return function (b) {
            return fn(b,a)
        }}}


호출)let _filter  = curryr(filter)
let over30 = _filter(function(user){ return user.age > 30})
over30([{name :'a',age: 33},{name : 'b', age: 50},{name : 'c', age : 22}]


----------------------
    2-5. reduce
----------------------

    배열예)
[1,2,3,4,5].reduce(function(acc,val){ return acc += val},1000)

let reduce = function(data,iter,memo){

    if(arguments.length == 2){
        memo =  data[0] ;
        data =  Array.prototype.slice.call(data,1);
    }

    each(data,function(val){
        memo = iter(memo,val)
    })

    return memo ;
}

호출
reduce([function(val){ return val*10},function(val){return val +10 ;},console.log],
    function(acc,fn){  return fn(acc)},100)



