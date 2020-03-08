// global variables
orientation = {left: 1, right: 2, up: 3, down: 4 }
var point = { x: 100,  y: 100}
var delta = {dx: 2, dy: 0}


// prerequiste to work with canvas
// get the handle of canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// add event listerns
canvas.addEventListener('keydown', handleKeyDown)

// default packman settings
var packmanOrientation = orientation.down



var main = function() {
    console.log('current orientation : ', packmanOrientation)
    drawPacman(ctx, packmanOrientation, point)

    window.requestAnimationFrame(main);
    
}

// initiate game loop
window.requestAnimationFrame(main);


function handleKeyDown(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch(e.code) {
        case 'ArrowUp':
            packmanOrientation = orientation.up
            point = {x: point.x, y: point.y - 5}
            console.log('Arrow up')
            break
        case 'ArrowLeft':
            packmanOrientation = orientation.left
            point = {x: point.x - 5, y: point.y}
            console.log('Arrow Left')
            break
        case 'ArrowDown':
            packmanOrientation = orientation.down
            point = {x: point.x, y: point.y + 5}
            console.log('Arrow Down')
            break
        case 'ArrowRight':
            packmanOrientation = orientation.right
            point = {x: point.x + 5, y: point.y}
            console.log('Arrow Right')
    }
    
}
