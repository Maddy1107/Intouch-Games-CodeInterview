export class ViewCanvas {
    constructor() {
        this.backgroundImage = new Image();
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
        this.backgroundImage.src = "graphics/background_safe_minigame.png";
        this.draw_bg();
    }
    // Clear the canvas
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    // Draw the background image
    draw_bg() {
        this.context.drawImage(this.backgroundImage, 0, 0);
    }
    //Draw the sprites
    drawSprite(object) {
        this.context.drawImage(object.image, object.position.x, object.position.y, object.size.x, object.size.y);
    }
    //Draw the safes
    draw_safes(safes) {
        safes.forEach(element => {
            this.drawSprite(element);
        });
    }
}
//# sourceMappingURL=view.js.map