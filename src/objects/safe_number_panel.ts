import { IGameObject } from '../interfaces/IGameObject';
import { Vector } from "../helpers/types.js";

export class safeNumberPanel implements IGameObject{

    image : HTMLImageElement = new Image();
    position: Vector;
    size:Vector;
    empty : boolean
    text : string

    constructor(
        position : Vector,
        image : string,
        size : Vector,
    ){
        this.position = position;
        this.image.src = image;
        this.size = size;
        this.empty = false;
        this.text = ""
    }

    //Changes the safe Image according to its state (Open Close)
    changeImage(src:string){
        this.image.src = src
    }

    changeText(newtext : string)
    {
        this.text = newtext
    }
}