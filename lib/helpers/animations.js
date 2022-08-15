export class animation {
    constructor(imgSrc, spriteCountX, spriteCountY, x, y, width, height, speed, view) {
        this.spritesheet = new Image();
        this.spritesheet.src = imgSrc;
        this.numberOfSpritesX = spriteCountX;
        this.numberOfSpritesY = spriteCountY;
        this.spriteWidth = width / this.numberOfSpritesX;
        this.spriteHeight = height / this.numberOfSpritesY;
        this.view = view;
        this.frameX = 0;
        this.frameY = 0;
        this.gameFrame = 5;
        this.speed = speed;
        this.Xpos = x;
        this.Ypos = y;
    }
    animateSprite(startAnim) {
        this.view.context.drawImage(this.spritesheet, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.Xpos, this.Ypos, this.spriteWidth, this.spriteHeight);
        if (startAnim) {
            this.gameFrame++;
            if (this.gameFrame % this.speed === 0)
                this.frameX < this.numberOfSpritesX - 1 ? this.frameX++ : this.frameX = 0;
        }
    }
}
//# sourceMappingURL=animations.js.map