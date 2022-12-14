import { SpinningWheel } from './objects/SpinningWheel.js';
import { TopTextPanel } from './objects/TopTextPanel.js';
import { SafeNumberPanel } from './objects/SafeNumberPanel.js';
import { GameLogic } from './GameLogic.js';
import { IGameObject } from './interfaces/IGameObject';
import { ViewCanvas } from './Canvas/ViewCanvas.js';
import { create_safes } from './helpers/helper.js';
import { Safe } from './objects/Safe';

//Get safepanel parameters
import { safePanelYpos, safePanelXpos, safePanelwidth, safePanelheight } from './helpers/setup.js';
import { animation } from './helpers/animations.js';

//An array containing all the gameobjects
let allGameObjects : IGameObject[] = new Array();
let allanimatedObjects : animation[] = new Array();
let gameOver = true;

//Initialize the game and its elements
function start(){

    const animatedLED1 = new animation('../graphics/leds_safe_dial_minigame.png',3,1,610, 280,354, 44 ,50,view)
    const animatedLED2 = new animation('../graphics/leds_safe_dial_minigame.png',3,1,745, 280,354, 44 ,50,view)

    const safes = create_safes();


    const safePanel = new SafeNumberPanel(
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
    
    const textPanel = new TopTextPanel;

    const spinWheel = new SpinningWheel({x:623, y:330}, './graphics/SpinDial1.png','./graphics/support_safe_dial_minigame.png',
    "./graphics/SpinA.png",{x: 230, y:245});

    const game = new GameLogic(safes, safePanel, textPanel,spinWheel);

    gameOver = false;

    allGameObjects.push(safePanel);
    allanimatedObjects.push(animatedLED1,animatedLED2);
    update(safes, game, safePanel, textPanel, spinWheel);
}

// Main Game Loop
function update(safes:Safe[], game: GameLogic, safepanel : SafeNumberPanel, textpanel : TopTextPanel, spinWheel : SpinningWheel)
{
    view.clear();
    view.draw_bg();
    view.drawSecondarySprite(spinWheel,false)
    spinWheel.draw(view);
    spinWheel.drawButton(view)
    drawallobjects();
    view.draw_safes(safes,gameOver);
    drawalltexts(view,safepanel,textpanel)
    game.checkifTimetoOpensafe()

    if(!gameOver){
        gameOver = game.game_over();
    }
    else{
        gameOver = true
        gameOverScreen(game, textpanel);
    }

    requestAnimationFrame( () => update(safes, game, safepanel, textpanel, spinWheel) )
}

//Draw all the gameobjects saved in the array
function drawallobjects()
{
    allGameObjects.forEach(element => {
        view.drawSprite(element);
    });

    allanimatedObjects.forEach(element => {
        element.animateSprite(true);
    });
}

//Draw all the required texts
function drawalltexts(view1: ViewCanvas, safepanel: SafeNumberPanel, textpanel: TopTextPanel) {
    view1.draw_text(
        safepanel.text,
        { 
            x: safePanelXpos + (gameOver == true ? 80 : 30), 
            y: safePanelYpos + 76
        },
        'white',
        "bold", 
        "70px",
        "comic sans ms")

    view1.draw_text(textpanel.text, textpanel.position,'black',"bold", textpanel.size,"comic sans ms")
}

//Show Game Over
function gameOverScreen(game: GameLogic, textPanel:TopTextPanel){
    textPanel.change_dimensions({x:80, y : 100}, '80px')
    textPanel.change_text("YOU WIN ??" + String(game.final_amount) + '!')
}


//create a new view
const view = new ViewCanvas()
start()
