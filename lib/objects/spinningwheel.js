export class SpinningWheel {
    constructor(position, wheelImage, secondaryImage, spinButton, size) {
        this.image = new Image();
        this.secondaryImage = new Image();
        this.spinButton = new Image();
        this.position = position;
        this.image.src = wheelImage;
        this.secondaryImage.src = secondaryImage;
        this.size = size;
        this.spinButton.src = spinButton;
        this.startSpin = false;
        this.timeGap = 0;
        this.numberOfSpin = 0;
        this.angleOfSpin = 0;
    }
    //change the bg image
    changeBGImage(src) {
        this.secondaryImage.src = src;
    }
    //change the wheel image
    changeWheelImage(src) {
        this.image.src = src;
    }
    //draw the spin button on the wheel
    drawButton(view) {
        view.context.drawImage(this.spinButton, this.position.x + this.size.x / 2 - 35, this.position.y + this.size.y / 2 - 35);
    }
    //check if the wheel hast to be spinned
    update() {
        if (this.startSpin) {
            if (this.numberOfSpin >= 0) {
                this.timeGap++;
                if (this.timeGap % 1 == 0) {
                    this.angleOfSpin += 1;
                    this.numberOfSpin -= 1;
                }
            }
            else {
                this.startSpin = false;
                this.numberOfSpin = 0;
            }
        }
    }
    //draw the wheel and spin when needed
    draw(view) {
        if (this.startSpin || this.angleOfSpin > 0) {
            view.context.save();
            view.context.translate(this.position.x + this.size.x / 2, this.position.y + this.size.y / 2);
            view.context.rotate(this.angleOfSpin * Math.PI / 180);
            view.context.drawImage(this.image, 0 - this.size.x / 2, 0 - this.size.y / 2, this.size.x, this.size.y);
            view.context.translate(-this.position.x, -this.position.y);
            view.context.restore();
        }
        else {
            if (this.angleOfSpin <= 0) {
                view.context.drawImage(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
            }
        }
        this.update();
    }
}
//# sourceMappingURL=SpinningWheel.js.map