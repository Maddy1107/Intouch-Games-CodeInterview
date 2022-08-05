export class safeNumberPanel {
    constructor(position, image, size) {
        this.image = new Image();
        this.position = position;
        this.image.src = image;
        this.size = size;
        this.empty = false;
        this.text = "";
    }
    //Changes the safe Image according to its state (Open Close)
    changeImage(src) {
        this.image.src = src;
    }
    changeText(newtext) {
        this.text = newtext;
    }
}
//# sourceMappingURL=safe_number_panel.js.map