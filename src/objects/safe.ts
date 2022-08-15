import { IGameObject } from '../interfaces/IGameObject';
import { Vector } from "../helpers/types.js";

export class Safe implements IGameObject{

    image : HTMLImageElement = new Image();
    secondaryImage : HTMLImageElement = new Image()
    position: Vector;
    size:Vector;
    open : boolean
    items : string[] = new Array()
    isWinningSafe : boolean

    constructor(
        position : Vector,
        image : string,
        private safe_multiplier : number,
        private safeNumber : number,
        private safePrzeImage : string,
        size : Vector,
    ){
        this.position = position;
        this.image.src = image;
        this.safe_multiplier = safe_multiplier;
        this.safeNumber = safeNumber;
        this.size = size;
        this.open = false;
        this.secondaryImage.src = safePrzeImage;
        this.isWinningSafe = false
    }

    //Getters
    get multiplier():number{
        return this.safe_multiplier
    }

    get safe_number():number{
        return this.safeNumber
    }

    get safe_prze_image():string{
        return this.safePrzeImage
    }

    //Changes the safe Image according to its state (Open Close)
    changeImage(src:string){
        this.image.src = src
    }
}