import { ViewCanvas } from "../Canvas/ViewCanvas.js"

export class animation{
    spritesheet : HTMLImageElement = new Image()
    spriteWidth : number
    spriteHeight : number
    numberOfSpritesX : number
    numberOfSpritesY : number
    view : ViewCanvas
    frameX : number
    frameY : number
    gameFrame : number
    speed : number
    Xpos : number
    Ypos : number

    constructor(
        imgSrc : string,
        spriteCountX : number,
        spriteCountY : number,
        x : number,
        y : number,
        width: number,
        height : number,
        speed : number,
        view : ViewCanvas
    ){
        this.spritesheet.src = imgSrc;
        this.numberOfSpritesX = spriteCountX
        this.numberOfSpritesY = spriteCountY
        this.spriteWidth = width/this.numberOfSpritesX
        this.spriteHeight = height/this.numberOfSpritesY;
        this.view = view
        this.frameX = 0
        this.frameY = 0
        this.gameFrame = 5
        this.speed = speed
        this.Xpos = x
        this.Ypos = y
    }

    //Animate sprite when true is passed
    //else only show the image
    animateSprite(startAnim:boolean){
        this.view.context.drawImage(
            this.spritesheet,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,
            this.spriteWidth, 
            this.spriteHeight,
            this.Xpos, 
            this.Ypos,
            this.spriteWidth, 
            this.spriteHeight
            )
            if(startAnim){
                this.gameFrame++
                if(this.gameFrame % this.speed === 0)
                    this.frameX < this.numberOfSpritesX - 1 ? this.frameX ++ : this.frameX = 0
            }
    }

}