export class Safe {
    constructor(position, image, safe_multiplier, safeNumber, safePrzeImage, size) {
        this.safe_multiplier = safe_multiplier;
        this.safeNumber = safeNumber;
        this.safePrzeImage = safePrzeImage;
        this.image = new Image();
        this.secondaryImage = new Image();
        this.items = new Array();
        this.position = position;
        this.image.src = image;
        this.safe_multiplier = safe_multiplier;
        this.safeNumber = safeNumber;
        this.size = size;
        this.open = false;
        this.secondaryImage.src = safePrzeImage;
        this.isWinningSafe = false;
    }
    //Getters
    get multiplier() {
        return this.safe_multiplier;
    }
    get safe_number() {
        return this.safeNumber;
    }
    get safe_prze_image() {
        return this.safePrzeImage;
    }
    //Changes the safe Image according to its state (Open Close)
    changeImage(src) {
        this.image.src = src;
    }
}
//# sourceMappingURL=Safe.js.map