import { SpinningWheel } from './objects/SpinningWheel.js';
import { TopTextPanel } from './objects/TopTextPanel.js';
import { SafeNumberPanel } from './objects/SafeNumberPanel.js';
import { GameLogic } from './GameLogic.js';
import { ViewCanvas } from './Canvas/ViewCanvas.js';
import { create_safes } from './helpers/helper.js';
//Get safepanel parameters
import { safePanelYpos, safePanelXpos, safePanelwidth, safePanelheight } from './helpers/setup.js';
//An array containing all the gameobjects
let allGameObjects = new Array();
let gameOver = true;
//Initialize the game and its elements
function start() {
    const safes = create_safes();
    const safePanel = new SafeNumberPanel({
        x: safePanelXpos,
        y: safePanelYpos
    }, '../graphics/screen_safe_minigame.png', {
        x: safePanelwidth,
        y: safePanelheight
    });
    const textPanel = new TopTextPanel;
    const spinWheel = new SpinningWheel({ x: 603, y: 330 }, './graphics/SpinDial1.png', './graphics/support_safe_dial_minigame.png', { x: 250, y: 250 });
    const game = new GameLogic(safes, safePanel, textPanel);
    gameOver = false;
    allGameObjects.push(safePanel, spinWheel);
    update(safes, game, safePanel, textPanel, spinWheel);
}
// Main Game Loop
function update(safes, game, safepanel, textpanel, spinWheel) {
    view.clear();
    view.draw_bg();
    view.drawSecondarySprite(spinWheel);
    drawallobjects();
    view.draw_safes(safes);
    drawalltexts(view, safepanel, textpanel);
    if (!gameOver) {
        gameOver = game.game_over();
    }
    else {
        gameOver = true;
        gameOverScreen(game, textpanel);
    }
    requestAnimationFrame(() => update(safes, game, safepanel, textpanel, spinWheel));
}
//Draw all the gameobjects saved in the array
function drawallobjects() {
    allGameObjects.forEach(element => {
        view.drawSprite(element);
    });
}
//Draw all the required texts
function drawalltexts(view1, safepanel, textpanel) {
    view1.draw_text(safepanel.text, {
        x: safePanelXpos + (gameOver == true ? 80 : 30),
        y: safePanelYpos + 76
    }, 'white', "bold", "70px", "comic sans ms");
    view1.draw_text(textpanel.text, textpanel.position, 'black', "bold", textpanel.size, "comic sans ms");
}
//Show Game Over
function gameOverScreen(game, textPanel) {
    textPanel.change_text("£" + String(game.final_amount));
}
//create a new view
const view = new ViewCanvas();
start();
//# sourceMappingURL=main.js.map