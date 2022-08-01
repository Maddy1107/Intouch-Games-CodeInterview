//import { safeSize } from './properties';
//import { safe } from "./safe"
import { viewCanvas } from './viewCanvas.js';


// Main Game Loop
function update(view:viewCanvas): void
{
    console.log("Darling");
    view.clear();
    requestAnimationFrame(() => update(view));
}

const view = new viewCanvas();
update(view)
