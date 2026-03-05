document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("https://coding-platform-backend-azwo.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            window.location.href = "dashboard.html";
        } else {
            document.getElementById("loginMessage").innerText = "Invalid login";
        }
    })
});
