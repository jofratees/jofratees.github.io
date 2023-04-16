var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// 小球的初始位置和速度
var x = 200;
var y = 200;
var vx = 0;
var vy = 0;

// 弹簧的参数
var spring = 0.1;
var friction = 0.8;
var targetX = x;
var targetY = y;

function update() {
    // 计算小球的加速度
    var ax = (targetX - x) * spring;
    var ay = (targetY - y) * spring;

    // 更新小球的速度和位置
    vx += ax;
    vy += ay;
    vx *= friction;
    vy *= friction;
    x += vx;
    y += vy;

    // 绘制小球和弹簧
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(targetX, targetY);
    ctx.strokeStyle = "#0095DD";
    ctx.stroke();
    ctx.closePath();

    // 循环调用 update 函数
    requestAnimationFrame(update);
}

// 监听鼠标移动事件，更新弹簧的目标位置
canvas.addEventListener("mousemove", function(event) {
    targetX = event.clientX;
    targetY = event.clientY;
});

// 开始游戏
update();
