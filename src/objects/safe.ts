import { IGameObject } from '../interfaces/IGameObject';
import { Vector } from "../helpers/types.js";

export class Safe implements IGameObject{

    image : HTMLImageElement = new Image();
    position: Vector;
    size:Vector;
    open : boolean

    constructor(
        position : Vector,
        image : string,
        private safe_multiplier : number,
        private safeNumber : number,
        size : Vector,
    ){
        this.position = position;
        this.image.src = image;
        this.safe_multiplier = safe_multiplier;
        this.safeNumber = safeNumber;
        this.size = size;
        this.open = false;
    }

    //Getters
    get multiplier():number{
        return this.safe_multiplier
    }

    get safe_number():number{
        return this.safeNumber
    }

    //Changes the safe Image according to its state (Open Close)
    changeImage(src:string){
        this.image.src = src
    }
}