let loggedin=false

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


async function submitForm(event) {

    // Collect form data
    const item = document.getElementById('item').value;
    const price = document.getElementById('price').value;

    // Create a FormData object if you're uploading files
    const formData = new FormData();
    formData.append('item', item);
    formData.append('price', price);

    // Add the file (if included)
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput.files.length > 0) {
        formData.append('photo', fileInput.files[0]);
    }

    // Send data to the backend via fetch
    const response = await fetch('http://localhost:3000/FillForm', {
        method: 'POST',
        body: formData, // Send the form data, including the file
        headers: {
            "Content-Type": "application/json",
          }
    });

    const result = await response.json();
    if (response.ok) {
        alert('Commodity submitted successfully!');
    } else {
        alert('Error: ' + result.error);
    }
}