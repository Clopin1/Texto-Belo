const img = document.querySelector("img");

let scale = 1.4;

function grwBtn() {
    scale += 0.1;

    img.style.transition = "transform 1s ease";

    img.style.transform = `
        scaleX(${scale})
        scale(${scale - 0.4})
        skewX(12deg)
    `;
}