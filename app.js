// app.js
document.addEventListener('DOMContentLoaded', () => {
    const sloganElement = document.getElementById('typing-effect');
    const slogan = "I'm just a dev...";
    let index = 0;

    function type() {
        if (index < slogan.length) {
            sloganElement.textContent += slogan[index];
            index++;
            setTimeout(type, 150); // Adjust typing speed here (in ms)
        }
    }

    type();
});
