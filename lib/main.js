//import { safeSize } from './properties';
//import { safe } from "./safe"
import { viewCanvas } from './viewCanvas.js';
// Main Game Loop
function update(view) {
    console.log("Darling");
    view.clear();
    requestAnimationFrame(function () { return update(view); });
}
var view = new viewCanvas();
update(view);
//# sourceMappingURL=main.js.map