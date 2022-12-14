export class safe {
    constructor(position, image, safe_multiplier, safeNumber, size) {
        this.safe_multiplier = safe_multiplier;
        this.safeNumber = safeNumber;
        this.image = new Image();
        this.position = position;
        this.image.src = image;
        this.safe_multiplier = safe_multiplier;
        this.safeNumber = safeNumber;
        this.size = size;
    }
    get multiplier() {
        return this.safe_multiplier;
    }
    get safe_number() {
        return this.safeNumber;
    }
    changeImage(src) {
        this.image.src = src;
    }
}
//# sourceMappingURL=safe.js.map