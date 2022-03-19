//변수
const a=5; // 변하지 않는 값
let b=2; // 변할 수 있는 값_업데이트 허용
b=6;
var c=1; // 변할 수 있는 값_업데이트 허용. But 옛날에 존재한 변수라서 웬만하면 쓰지 마. 업데이트 되어도 됐다는 걸 알려주지 않음 

//array 배열 
const daysOfWeek=["mon"];
daysOfWeek.push("Tue"); //배열 추가

//Object. 일일이 하나씩 선언하는 것보다 훨씬 편함
const player={
    name:"jisoo",
    points:10,
    fat:true,
};
console.log(player);
console.log(player.name);
player.points=15; //이런식으로 추가 가능!

//function
function sayHello(nameOfPerson, age) {
    console.log(nameOfPerson);
}
sayHello("soo",24);

const player={
    name:"soo",
    sayHello:function(otherName){
        console.log("hi"+otherName)
    },
};
player.sayHello("jisoo");
player.name="soosoo"; //이름 변경

//recap
const sum={
    a:function(numOne, numTwo){
        return numOne+numTwo;
    },
};

let plus=sum.a(1,2);

//type
const age=24;
console.log(typeof age); //number라고 나옴. 
parseInt("24"); //숫자로 바꿔줌.

//NaN 확인하기
isNaN(age); //true, false로 나옴.

if(isNaN(age)){

}else if(age<18 && isNaN(age)){ //&& || 사용

}else{

}
const ageScan=parseInt(prompt("How old?")) //prompt 입력받음
