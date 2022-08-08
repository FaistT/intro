let potatoImage = document.querySelector(".potato");

potatoImage.addEventListener('click', () => {
    let potatoIamgeAttribute = potatoImage.getAttribute('src');
    if (potatoIamgeAttribute === 'potato-sad.jpg') {
        potatoImage.setAttribute('src', 'potato-happy.jpg');
        potatoImage.setAttribute('class', '.potato')
    } else {
        potatoImage.setAttribute('src', 'potato-sad.jpg');
        potatoImage.setAttribute('class', '.potato')
    }
})