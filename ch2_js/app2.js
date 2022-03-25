//클릭이벤트!
const h1=document.querySelector("h1");
//방법1
// function handleTitleClick(){
//     const currentColor=h1.style.color;
//     let newColor;
//     if(currentColor==="blue"){
//         newColor="tomato";
//     }else{
//         newColor="blue";
//     }
//     h1.style.color=newColor;//바뀌는 값을 저장까지 할 수 있는
// }

//방법2.
//"clicked"도 변수 선언해도 됨. 
// function handleTitleClick(){
//     if (h1.className==="clicked"){
//         h1.className="";
//     }else{
//         h1.className="clicked";//clicked라는 이름의 css로 변경한다
//     }
// }

//방법3
// function handleTitleClick(){
//     const clickedClass="clicked";
//     if (h1.classList.contains(clickedClass)){
//         h1.className.remove(clickedClass);
//     }else{
//         h1.className.add(clickedClass);
//     }
// }

//방법4
function handleTitleClick(){
    h1.classList.toggle("clicked");
    //clicked라는 css로 왔다갔다
}


h1.addEventListener("click", handleTitleClick);
