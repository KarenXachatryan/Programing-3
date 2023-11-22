var express = require("express")
var app = express()
var server = require("http").Server(app)
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("../client"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});

function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, eaterCount, ballCount) {
    let matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0);
        }
    }

    //Grass
    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }

    //GrassEater

    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }

    for (let i = 0; i < predatorCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < eaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
    for (let i = 0; i < ballCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }


    return matrix;
}


matrix = matrixGenerator(20, 30, 8, 14, 5, 12);

io.sockets.emit('send matrix', matrix)

grassArray = [];
grassEaterArr = []
predatorArr = []
ballArr = []
eaterArr = []

Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Ball = require("./ball")
Eater = require("./eater")

function createObject(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArray.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var grEater = new GrassEater(x, y);
                grassEaterArr.push(grEater)


            }
            else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            }
            else if (matrix[y][x] == 4) {
                let grEat = new Eater(x, y)
                eaterArr.push(grEat)
            }
            else if (matrix[y][x] == 5) {
                let Bal = new Ball(x, y)
                ballArr.push(Bal)
            }
        }
    }

    io.sockets.emit('send matrix', matrix)

}
function game() {
    for (var i in grassArray) {
        grassArray[i].mul()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat()
    }
    for (var i in ballArr) {
        ballArr[i].eat()
    }
    for (var i in eaterArr) {
        eaterArr[i].eat()
    }
    io.sockets.emit("send matrix", matrix);
}
setInterval(game, 1000)

io.on('connection', function () {
    createObject(matrix)
})