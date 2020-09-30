// The length of trail (8 by default; put more for longer "tail")
var trailLength = 20

// URL of cursor image. Embedded SVG image of a circle in this case.
var path = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='10' width='10'%3E%3Ccircle cx='5' cy='5' r='5' fill='red' /%3E%3C/svg%3E"

var i, d = 0

// prepares the script
function initTrail() {
    // prepare the image array
    images = new Array()
    for (let i = 0; i < parseInt(trailLength); i++) {
        images[i] = new Image()
        images[i].src = path
    }

    // prepare the storage for the coordinates
    storage = new Array()
    for (let i = 0; i < images.length * 3; i++) {
        storage[i] = 0
    }
    for (let i = 0; i < images.length; i++) {
        // make divs
        document.write('<div id="obj' + i + '" style="position: absolute; z-Index: 100; height: 0; width: 0"><img src="' + images[i].src + '"></div>')
    }
    trail()
}
function trail() { // trailing function
    for (i = 0; i < images.length; i++) { // for every div/layer
        document.getElementById("obj" + i).style.top = storage[d] + 'px' // the Y-coordinate
        document.getElementById("obj" + i).style.left = + storage[d + 1] + 'px' // the X-coordinate
        d = d + 2
    }
    for (i = storage.length; i >= 2; i--) { // save the coordinate for the div/layer that's behind
        storage[i] = storage[i - 2]
    }
    d = 0 // reset for future use
    var timer = setTimeout("trail()", 10) // call recursively 
}
function processEvent(e) { // catches and processes the mousemove event 
    // console.log(e);
    storage[0] = e.pageY - 9
    storage[1] = e.pageX - 6
}

initTrail()
document.onmousemove = processEvent // start capturing
