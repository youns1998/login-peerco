"use strict";
const MakeBtn=document.querySelector("#buttonA");
const JoinBtn=document.querySelector("#buttonB");

MakeBtn.addEventListener("click", Make);
JoinBtn.addEventListener("click", Join);

function Make() {
   
    prompt("개설하실 방의 코드를 입력해 주세요(1~100)","1");
    alert("회의 설정을 시작합니다");
    location.href ="../setting";

       
}

function Join() {
   
    prompt("입장하실 방의 코드를 입력해 주세요(1~100)","1");
    prompt("입장하실 방의 비밀번호를 입력해 주세요","");
    alert("회의실에 입장합니다");
    location.href ="/conference";

       
}






