let potatoImage = document.querySelector("#potatoSad");

potatoImage.onclick = function() {
    let imageSrc = potatoImage.getAttribute("src")
    if (imageSrc === "potato-sad.jpg") {
        potatoImage.setAttribute('src', 'potato-happy.jpg');
        potatoImage.setAttribute('style', 'height:100px;width:auto');
    } else {
        potatoImage.setAttribute('src', 'potato-sad.jpg');
        potatoImage.setAttribute('style', 'height:150px;width:auto');
    }
}