let btn = document.querySelector("button");
let userHeading = document.querySelector("h2");
let userParagraph = document.querySelector("user-paragraph");

function setUser() {
    let userName = prompt('Username:');
    localStorage.setItem('name', userName);
    userHeading.textContent = 'Welcome' + userName;
    userParagraph.remove;
}

if (!localStorage.getItem('name')) {
    setUser()
} else {
    let storedName = localStorage.getItem('name');
    userHeading.textContent = 'Welcome' + storedName;
}

btn.onclick = function() {
    setUser()
}