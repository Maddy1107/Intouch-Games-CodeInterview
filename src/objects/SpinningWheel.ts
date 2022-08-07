import { IGameObject } from '../interfaces/IGameObject';
import { Vector } from "../helpers/types.js";

export class SpinningWheel implements IGameObject{

    image : HTMLImageElement = new Image();
    secondaryImage : HTMLImageElement = new Image();
    position: Vector;
    size:Vector;

    constructor(
        position : Vector,
        wheelImage : string,
        secondaryImage: string,
        size : Vector,
    ){
        this.position = position;
        this.image.src = wheelImage;
        this.secondaryImage.src = secondaryImage
        this.size = size;
    }

    //Changes the safe Image according to its state (Open Close)
    changeBGImage(src:string){
        this.secondaryImage.src = src
    }

    //Changes the safe Image according to its state (Open Close)
    changeWheelImage(src:string){
        this.image.src = src
    }
}