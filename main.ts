class ITGTechTask
{
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    private previousUpdateTime: number = 0;

    private backgroundImage: HTMLImageElement = new Image();

    constructor()
    {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");

        this.backgroundImage.src = "graphics/background_safe_minigame.png";
        this.backgroundImage.onload = this.update.bind( this );
    }

    // Main Game Loop
    public update( currentTime: number = 0 ): void
    {
        const deltaTime: number = currentTime - this.previousUpdateTime;
        this.previousUpdateTime = currentTime;

        // Clear the canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw the background image
        this.context.drawImage( this.backgroundImage, 0, 0 );

        // Draw some text - REMOVE THIS LATER!
        this.context.font = "30px Arial";
        this.context.fillText("ITG Technical Task",
            Math.floor(Math.random() * (this.canvas.width)) + 1,
            Math.floor(Math.random() * this.canvas.height) + 1);

        window.requestAnimationFrame( this.update.bind( this ) )
      }
}

new ITGTechTask();