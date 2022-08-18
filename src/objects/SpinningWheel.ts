import { ViewCanvas } from './../Canvas/ViewCanvas';
import { IGameObject } from '../interfaces/IGameObject';
import { Vector } from "../helpers/types.js";

export class SpinningWheel implements IGameObject{

    image : HTMLImageElement = new Image();
    secondaryImage : HTMLImageElement = new Image();
    spinButton : HTMLImageElement = new Image();
    position: Vector;
    size:Vector;
    startSpin :boolean
    angleOfSpin : number
    timeGap: number
    numberOfSpin : number

    constructor(
        position : Vector,
        wheelImage : string,
        secondaryImage: string,
        spinButton : string,
        size : Vector,
        
    ){
        this.position = position;
        this.image.src = wheelImage;
        this.secondaryImage.src = secondaryImage
        this.size = size;
        this.spinButton.src = spinButton
        this.startSpin = false;
        this.timeGap = 0;
        this.numberOfSpin = 0;
        this.angleOfSpin = 0;
    }

    changeBGImage(src:string){
        this.secondaryImage.src = src
    }

    changeWheelImage(src:string){
        this.image.src = src
    }

    drawButton(view: ViewCanvas)
    {
        view.context.drawImage(this.spinButton,this.position.x + this.size.x/2 - 35, this.position.y + this.size.y/2 - 35)
    }

    update()
    {
        if(this.startSpin)
        {
            if(this.numberOfSpin >= 0)
            {
                this.timeGap ++
                if(this.timeGap % 1 == 0){
                    this.angleOfSpin += 1
                    this.numberOfSpin -= 1
                }
            }
            else{
                this.startSpin = false;
                this.numberOfSpin = 0
            }
        }
    }

    draw(view: ViewCanvas)
    {
        if(this.startSpin || this.angleOfSpin > 0){
            view.context.save()
            view.context.translate(this.position.x + this.size.x / 2,this.position.y + this.size.y / 2)
            view.context.rotate(this.angleOfSpin * Math.PI/ 180)
            view.context.drawImage(this.image,0 - this.size.x/2 , 0 - this.size.y/2, this.size.x, this.size.y)
            view.context.translate(-this.position.x,-this.position.y)
            view.context.restore();
        }
        else{
            if(this.angleOfSpin <= 0){
                view.context.drawImage(this.image,this.position.x , this.position.y, this.size.x, this.size.y)
            }
        }
        this.update()
    }

}