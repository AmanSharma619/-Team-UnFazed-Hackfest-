const loggedin=false

document.querySelectorAll(".defbutton").forEach(e=>{
    e.addEventListener("click",()=>{
        if(loggedin==false){
            window.location.href="../HTML/register.html"
        }
    })
})
document.getElementById("home").addEventListener("click",()=>{
    window.location.href="/Home"
})
document.getElementById("about").addEventListener("click",()=>{
    window.location.href="/AboutUs"
})
document.getElementById("bos").addEventListener("click",()=>{
    window.location.href="/BuyOrSell"
})
document.getElementById("contact").addEventListener("click",()=>{
    window.location.href="/faqs"
})
document.getElementById("login").addEventListener("click",()=>{
    window.location.href="/register"
})
if(loggedin==true){
    document.getElementById("login").addEventListener("click",()=>{
    window.location.href="/profile"
})
}
document.getElementById("submit").addEventListener("click",()=>{
    loggedin=true
})


