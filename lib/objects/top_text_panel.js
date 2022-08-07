export class TopTextPanel {
    constructor() {
        this.text = 'Match a pair of symbols for a safe multiplier! TOUCH THE DIAL TO SPIN YOUR 4 DIGIT COMBINATION';
        this.position = { x: 55, y: 50 };
        this.size = '35px';
    }
    change_text(text) {
        this.text = text;
    }
    change_dimensions(pos, size) {
        this.position = pos;
        this.size = size;
    }
}
//# sourceMappingURL=top_text_panel.js.map