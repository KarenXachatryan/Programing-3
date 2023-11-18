var socket = io()

side = 30

function setup() {
        createCanvas(7*side, 13 * side)
        background("acacac")
}

function grel(matrix){
        console.log(matrix);

        for (var y = 0; y < matrix.length; y++) {
                for (var x = 0; x < matrix[y].length; x++) {
                    var obj = matrix[y][x];
                    if (obj == 1) {
                        fill("green");
                        rect(x * side, y * side, side, side)
                    }
                     if (obj == 2) {
                        fill("yellow");
                        rect(x * side, y * side, side, side);
                    }
                    if(obj == 3){
                        fill("red");
                        rect(x * side, y * side, side, side)
                    }
                    if(obj == 4){
                        fill("blue")
                        rect(x * side, y * side, side, side)
                    }
                    else if(obl == 5){
                        fill("orange")
                        rect(x * side, y * side, side, side)

                    }
                }
            }

        }

            setInterval(
                function () {
                socket.on('send matrix', grel)
                },1000
            )

