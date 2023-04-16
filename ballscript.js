let ball = document.getElementById("ball");
let spring = document.getElementById("spring");

let pressed = false;
document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);
document.addEventListener("mousemove", mouseMove);

let mouseX;
let mouseY;

function mouseDown(event) {
    pressed = true;
    mouseX = event.clientX;
    mouseY = event.clientY;
}

function mouseUp(event) {
    pressed = false;
}

function mouseMove(event) {
    if (pressed) {
        let newX = event.clientX;
        let newY = event.clientY;

        let springStretch = Math.min(100, Math.sqrt((newX - mouseX) ** 2 + (newY - mouseY) ** 2));
        ball.style.top = spring.offsetTop - springStretch - ball.offsetHeight + "px";
        ball.style.left = spring.offsetLeft + spring.offsetWidth / 2 - ball.offsetWidth / 2 + "px";
        spring.style.height = springStretch + "px";
    }
}
