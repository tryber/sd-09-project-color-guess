function coloringCircles() {
    const ball = document.querySelectorAll('.ball');
    for (let index = 0; index < ball.length; index += 1) {
        rNumber = Math.floor(Math.random() * 256);
        gNumber = Math.floor(Math.random() * 256);
        bNumber = Math.floor(Math.random() * 256);
        ball[index].style.backgroundColor = `rgb(${rNumber},${gNumber},${bNumber})`;
    }
}
coloringCircles();