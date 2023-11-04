class GrassEater extends LivingCrature {
    constructor(x, y) {
        super(x,y)
        this.energy = 8;
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

    chooseCell(char) {
        this.getNewCordinatis()
        return super.chooseCell(char)
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

