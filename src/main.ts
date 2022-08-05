import { safeNumberPanel } from './objects/safe_number_panel.js';
import { gameLogic } from './gameLogic.js';
import { IGameObject } from './interfaces/IGameObject';
import { ViewCanvas } from './Canvas/view.js';
import { create_safes } from './helpers/helper.js';
import { safe } from './objects/safe';

//Get safepanel parameters
import { safePanelYpos, safePanelXpos, safePanelwidth, safePanelheight } from './helpers/setup.js';

//An array containing all the gameobjects
let allGameObjects : IGameObject[] = new Array();
let gameOver = true;

//Initialize the game and its elements
function start(){
    const safes = create_safes();


    const safePanel = new safeNumberPanel(
        {
            x:safePanelXpos,
            y:safePanelYpos
        },
        '../graphics/screen_safe_minigame.png',
        {
            x:safePanelwidth,
            y:safePanelheight
        }

    )
    
    const game = new gameLogic(safes, view, safePanel);

    gameOver = false;

    allGameObjects.push(safePanel);
    update(safes, game, safePanel);
}

// Main Game Loop
function update(safes:safe[], game: gameLogic, safepanel : safeNumberPanel): void
{
    view.clear();
    view.draw_bg();
    drawallobjects();
    view.draw_safes(safes);
    view.draw_text(
        safepanel.text,
        { 
            x: safePanelXpos + 30, 
            y: safePanelYpos + 76
        },
        'white',
        "bold 70px comic sans ms")







    if(!gameOver){
        gameOver = game.game_over();
    }
    else{
        gameOverScreen(game);
    }

    requestAnimationFrame( () => update(safes, game, safepanel) )
}

//Draw all the gameobjects saved in the array
function drawallobjects()
{
    allGameObjects.forEach(element => {
        view.drawSprite(element);
    });
}

function gameOverScreen(game: gameLogic){
    view.draw_text("£" + String(game.final_amount), {x:400, y : 85}, 'black', "bold 50px comic sans ms")
}
//create a new view
const view = new ViewCanvas()
start()

