const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg')

let load = 0;

let interval = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(interval);
    }

    // console.log(load);

    loadText.innerText = `${load}%`;
    loadText.style.opacity = 1 - (load / 100);

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// scale one range of numbers to another-range
function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}