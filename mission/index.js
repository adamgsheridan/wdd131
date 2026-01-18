
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#3b3b3b';
        logo.src = "byui-logo-white.png";
        document.body.style.color = 'white';
        document.querySelector('h2').style.color = 'rgb(124, 124, 218)';
        document.getElementById('container').style.outline = '1px solid white';
    } else {
        document.body.style.backgroundColor = 'aliceblue';
        logo.src = "byui-logo-blue.webp";
        document.body.style.color = 'black';
        document.querySelector('h2').style.color = 'rgb(94, 94, 208)';
        document.getElementById('container').style.outline = '1px solid black';
    }
}