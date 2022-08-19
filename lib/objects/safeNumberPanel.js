export class SafeNumberPanel {
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
    //Change the text when new safe opened
    changeText(newtext) {
        this.text = newtext;
    }
    //Change the dimention to smmothly transition between 2 different images for win and close
    change_dimensions(size, pos) {
        this.size = size;
        this.position = pos;
    }
}
//# sourceMappingURL=SafeNumberPanel.js.map