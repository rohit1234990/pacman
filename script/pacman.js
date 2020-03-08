function getPoint(x, y, radius, angle){
    return {x: x+Math.cos(angle)*radius, y: y+Math.sin(angle)*radius}
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath()
}

function drawPacman(ctx, pacman_orientation, point) {
    x = point.x
    y = point.y
    radius = 30

    // find out packman face direction angles
    switch (pacman_orientation) {
        case orientation.right:
            var startAngle = 0 + 0.3
            var endAngle =   6.28 - 0.3
            break
        case orientation.up:
            var startAngle = 4.71 + 0.3
            var endAngle = 4.71 - 0.3
            break
        case orientation.left:
            var startAngle = 3.14 + 0.3
            var endAngle = 3.14 - 0.3
            break
        case orientation.down:
            var startAngle = 1.57 + 0.3
            var endAngle = 1.57 - 0.3
            break  
    }

    // draw circle
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false)
    ctx.stroke()

    // draw mouth lines
    startPoint = getPoint(x, y, radius, startAngle)
    endPoint   = getPoint(x, y, radius, endAngle)

    drawLine(x, y, startPoint.x, startPoint.y)
    drawLine(x, y, endPoint.x, endPoint.y)
}
