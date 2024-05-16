function changeDescColor() {
    const description = document.getElementById('description');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    description.style.color = '#' + randomColor;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    document.getElementById('changeColorButton').addEventListener('click', changeDescColor);
});