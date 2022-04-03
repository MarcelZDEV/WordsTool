document.addEventListener('DOMContentLoaded', function () {
    const words = document.getElementById('words-box');
    const counter = document.getElementById('count');

    words.addEventListener('input', function (e) {
        const target = e.target;
        const currentLength = target.value.length;
        counter.innerHTML = `${currentLength}`;
    });
});