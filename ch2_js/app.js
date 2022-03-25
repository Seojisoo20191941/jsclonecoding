// const title=document.getElementById("title"); //Id, Class 이름으로 호출
// title.innerText="Got you!";

// const title=document.querySelector(".hello h1"); 
// 단 하나의 element호출. h1이 많아도 첫번째거만 가져옴. 다 가져오고 싶다면, querySelectorAll
// .hello는 class, #hello는 id. css처럼.
// 뭐든 호출, 찾을 수 있는 것, querySelector. css처럼 가져옴

// console.dir(title);
//console.log와 비슷. 
//but, log는 요소를 html과 같은 트리구조로 출력, dir는 요소를 json과 같은 트리구조로 출력

const title=document.querySelector("h1");
function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color="blue";

}
function handleMouseEnter(){//마우스 갖다댔을 때
    console.log("mouse is here!");
    title.innerText="Mouse is here!";
}
function handleMouseLeave(){//마우스 치웠을 때
    title.innerText="Mouse is gone!"
}
function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
    console.log("tomato!");
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("good!");
}
title.onclick=handleTitleClick;
//= title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
//클릭이벤트 listener

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);




