import { animation } from './../helpers/animations.js';
export class ViewCanvas {
    constructor() {
        this.backgroundImage = new Image();
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
        this.backgroundImage.src = "graphics/background_Safe_minigame.png";
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
    //Draw the sprites
    drawSecondarySprite(object, isAnimated) {
        if (!isAnimated) {
            this.context.drawImage(object.secondaryImage, object.position.x - 26, object.position.y - 38, object.size.x + 48, object.size.y + 50);
        }
        else {
            const secondarySprite = new animation(object.secondaryImage.src, 2, 1, object.position.x, object.position.y, 300, 164, 50, this);
            secondarySprite.animateSprite(false);
        }
    }
    //Draw the Safes
    draw_safes(Safes, isgameOver) {
        Safes.forEach(element => {
            this.drawSprite(element);
            const pos = {
                x: element.position.x + (element.size.x / 2) - 8,
                y: element.position.y + (element.size.y / 2) + 20
            };
            if (!isgameOver) {
                if (element.open) {
                    this.drawSecondarySprite(element, true);
                    this.draw_text('x' + String(element.multiplier), pos, 'white ', "bold", " 50px", " comic sans ms");
                }
                else {
                    this.draw_text(String(element.safe_number), pos, 'white', "bold", "50px", "comic sans ms");
                }
            }
            else {
                if (element.isWinningSafe) {
                    this.drawSecondarySprite(element, true);
                }
                else {
                    this.draw_text('x' + String(element.multiplier), pos, 'white ', "bold", " 50px", " comic sans ms");
                }
            }
        });
    }
    //Draw Text
    draw_text(text, pos, color, fontstyle, fontsize, fontFamily) {
        this.context.font = fontstyle + ' ' + fontsize + ' ' + fontFamily;
        this.context.fillStyle = color;
        this.context.fillText(text, pos.x, pos.y);
    }
}
//# sourceMappingURL=ViewCanvas.js.map