let LivingCreature = require("./LivingCreature")

module.exports = class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index)
    }


    mul(){
       this.multiply++
       if(this.multiply >= 3){
       let emptyCells = this.chooseCell(0)
       let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        console.log(newCell, "GRASSSSS");
          if(this.multiply >= 5 && newCell){
                   let newX = newCell[0]
                   let newY = newCell[1]
                   let gr = new Grass(newX, newY, 1)
                   grassArray.push(gr)
                   this.multiply = 0
          }
          }
    }

}