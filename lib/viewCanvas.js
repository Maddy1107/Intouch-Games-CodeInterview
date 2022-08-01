var viewCanvas = /** @class */ (function () {
    function viewCanvas() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
    }
    // Clear the canvas
    viewCanvas.prototype.clear = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    //Draw Sprites
    viewCanvas.prototype.draw = function (img, src, posX, posY) {
        img.src = src;
        this.context.drawImage(img, posX, posY);
    };
    return viewCanvas;
}());
export { viewCanvas };
//# sourceMappingURL=viewCanvas.js.map