document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggle-button');
    const additionalInfo = document.getElementById('additional-info');

    button.addEventListener('click', function() {
        if (additionalInfo.style.display === 'none') {
            additionalInfo.style.display = 'block';
            button.textContent = 'Hide Additional Info';
        } else {
            additionalInfo.style.display = 'none';
            button.textContent = 'Show Additional Info';
        }
    });
});
