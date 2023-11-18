let LivingCreature = require("./LivingCreature")

module.exports = class Ball extends LivingCreature{
    constructor(x, y, ) {
        super(x,y,)
        this.energy = 25
    }


    mul() {

        let emptyCells = this.chooseCell(0)
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            let Bal = new Ball(newX, newY, 5)
            ballArr.push(Bal)
            this.ener



        }
    }

    eat() {
        let foods = this.chooseCell(1,2,3,4)
        let food = random(foods)

        if (food) {
            this.energy++

            let newX = food[0]
            let newY = food[1]

            for (let i in grassArray) {
                if (newX == grassArray[i].x && newY == grassArray[i].y) {
                    grassArray.splice(i, 1)
                    break;
                }
            }

            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }
            for (let i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                    break;
                }
            }
            for(let i in eaterArr){
                if(newX == eaterArr[i].x && newY == eaterArr[i].y){
                    eaterArr.splice(i,1)
                    break
                }
            }


            matrix[newY][newX] = 5

            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            if (this.energy >= 28) {
                this.mul()
            }



        } else {
            this.move()
        }
    }

    move() {
        this.energy--;
		var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[newY][newX] = 5;

            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }

    }

    die() {
		matrix[this.y][this.x] = 0;
	}



}
