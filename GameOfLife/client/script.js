var socket = io()

side = 30

function setup() {
    createCanvas(30 * side, 30 * side)
    background("acacac")
}

function grel(matrix) {
    console.log(matrix);

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];
            if (obj == 1) {
                fill("green");
                rect(x * side, y * side, side, side)
                text("☘️", x*side, y*side )

            }
            else if (obj == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                text("❄️", x*side, y*side)
            }
            else if (obj == 3) {
                fill("red");
                rect(x * side, y * side, side, side)
                text("💧", x*side, y*side )

            }
            else if (obj == 4) {
                fill("blue")
                rect(x * side, y * side, side, side)
                text("⚡️", x*side, y*side)

            }
            else if (obj == 5) {
                fill("orange")
                rect(x * side, y * side, side, side)
                text("☀️", x*side, y*side )


            } else {
                fill("grey")
                rect(x * side, y * side, side, side)
            }
        }
    }

}

setInterval(
    function () {
        socket.on('send matrix', grel)
    }, 1000
)

