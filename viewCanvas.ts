export class viewCanvas{

    canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;


    constructor(){
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
    }

    // Clear the canvas
    clear():void
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    //Draw Sprites
    draw(img:HTMLImageElement, src:string, posX:number, posY:number): void
    {
        img.src = src;
        this.context.drawImage( img, posX, posY );
    }
}