const txt = document.querySelector('h1');
txt.addEventListener('click', function() {
        const rain = document.createElement('div');
        rain.classList.add('rain');
        rain.innerText = "💧";
        document.body.appendChild(rain);
        rain.style.left = Math.random() * 98 + 'vw';
        setTimeout(() => {
            rain.remove();
        }, 3000);
    });
    setInterval(() => {
        rain
    },400);