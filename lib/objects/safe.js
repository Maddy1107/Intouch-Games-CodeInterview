export class Safe {
    constructor(position, image, safe_multiplier, safeNumber, size) {
        this.safe_multiplier = safe_multiplier;
        this.safeNumber = safeNumber;
        this.image = new Image();
        this.position = position;
        this.image.src = image;
        this.safe_multiplier = safe_multiplier;
        this.safeNumber = safeNumber;
        this.size = size;
        this.open = false;
    }
    //Getters
    get multiplier() {
        return this.safe_multiplier;
    }
    get safe_number() {
        return this.safeNumber;
    }
    //Changes the safe Image according to its state (Open Close)
    changeImage(src) {
        this.image.src = src;
    }
}
//# sourceMappingURL=safe.js.map