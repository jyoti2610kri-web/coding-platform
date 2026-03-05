async function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let response = await fetch("http://localhost:5000/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
username:username,
password:password
})
});

let data = await response.json();

alert(data.message);

}
async function runCode(){

let code = document.getElementById("code").value;

let response = await fetch("http://localhost:5000/run",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({code:code})
});

let data = await response.json();

document.getElementById("output").innerText=data.output;

}