export class SpinningWheel {
    constructor(position, wheelImage, secondaryImage, size) {
        this.image = new Image();
        this.secondaryImage = new Image();
        this.position = position;
        this.image.src = wheelImage;
        this.secondaryImage.src = secondaryImage;
        this.size = size;
    }
    //Changes the safe Image according to its state (Open Close)
    changeBGImage(src) {
        this.secondaryImage.src = src;
    }
    //Changes the safe Image according to its state (Open Close)
    changeWheelImage(src) {
        this.image.src = src;
    }
}
//# sourceMappingURL=SpinningWheel.js.map