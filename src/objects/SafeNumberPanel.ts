import { IGameObject } from '../interfaces/IGameObject';
import { Vector } from "../helpers/types.js";

export class SafeNumberPanel implements IGameObject{

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

    //Change the text when new safe opened
    changeText(newtext : string)
    {
        this.text = newtext
    }

    //Change the dimention to smmothly transition between 2 different images for win and close
    change_dimensions(size : Vector, pos: Vector){
        this.size = size;
        this.position = pos
    }
}