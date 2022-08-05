//import { Dimbo } from './../../fonts/DimboItalic.ttf'
//import { Titan } from './../../fonts/TitanOne-Regular.ttf';
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
            const pos = {
                x: element.position.x + (element.size.x / 2) - 8,
                y: element.position.y + (element.size.y / 2) + 20
            };
            this.draw_text(String(element.safe_number), pos, 'white', "bold 50px comic sans ms");
        });
    }
    //Draw Text
    draw_text(text, pos, color, fonttype) {
        this.context.font = fonttype;
        this.context.fillStyle = color;
        this.context.fillText(text, pos.x, pos.y);
    }
}
//# sourceMappingURL=view.js.map