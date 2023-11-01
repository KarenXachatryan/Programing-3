class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [

        ]
    }

    getNewCordinatis() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCordinatis()
        var found = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }
    mul() {

        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 2

            let grEat = new GrassEater(newX, newY)

            grassEarerArr.push(grEat)



        }
    }

    eat() {
        let emptyCells = this.chooseCell(1)
        let newCell = random(emptyCells)

        if (newCell) {
            this.energy++
            let newX = newCell[0]
            let newY = newCell[1]
            for (let i in grassArray) {
                if (newX == grassArray[i].x && newY == grassArray[i].y) {
                        grassArray.splice(i,1)
                        break;
                }
            }

            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            if(this.energy >= 12){
                    this.mul()
            }

        }
    }

}
