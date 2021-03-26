"use strict";
const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);
function register() {

    if (!id.value) return alert("insert id");

    if (password.value !== confirmPassword.value) {
        return alert("unconfirmed password");
    }


    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
    };
    
    fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success){
            location.href ="/login";
        } else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("register error");
    });
}
