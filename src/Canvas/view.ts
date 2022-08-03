import { safe } from '../objects/safe.js';
import { IGameObject } from './../interfaces/IGameObject';
export class ViewCanvas{

    canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private backgroundImage: HTMLImageElement = new Image();

    constructor()
    { 
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");

        this.backgroundImage.src = "graphics/background_safe_minigame.png";
        this.draw_bg();
    }

    // Clear the canvas
    clear():void{
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    // Draw the background image
    draw_bg():void{
        this.context.drawImage( this.backgroundImage, 0, 0 );
    }

    //Draw the sprites
    drawSprite(object:IGameObject | safe):void{
        this.context.drawImage(object.image, object.position.x, object.position.y, object.size.x, object.size.y)
    }

    //Draw the safes
    draw_safes(safes : safe[]):void{
        safes.forEach(element => {
            this.drawSprite(element)
        });
    }

}