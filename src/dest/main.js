var ITGTechTask = /** @class */ (function () {
    function ITGTechTask() {
        //private previousUpdateTime: number = 0;
        this.backgroundImage = new Image();
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
        this.backgroundImage.src = "src/graphics/background_safe_minigame.png";
        this.backgroundImage.onload = this.update.bind(this);
    }
    // Main Game Loop
    ITGTechTask.prototype.update = function (currentTime) {
        //const deltaTime: number = currentTime - this.previousUpdateTime;
        //this.previousUpdateTime = currentTime;
        if (currentTime === void 0) { currentTime = 0; }
        // Clear the canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // Draw the background image
        this.context.drawImage(this.backgroundImage, 0, 0);
        window.requestAnimationFrame(this.update.bind(this));
    };
    return ITGTechTask;
}());
new ITGTechTask();
//# sourceMappingURL=main.js.map