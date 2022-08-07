import { Vector } from "../helpers/types.js";

export class TopTextPanel{
    text:string;
    position : Vector;
    size:string

    constructor(){
        this.text = 'Match a pair of symbols for a safe multiplier! TOUCH THE DIAL TO SPIN YOUR 4 DIGIT COMBINATION'
        this.position = {x:55, y:50}
        this.size = '35px'
    }

    change_text(text:string){
        this.text = text
    }

    change_dimensions(pos : Vector, size:string){
        this.position = pos
        this.size = size
    }
}