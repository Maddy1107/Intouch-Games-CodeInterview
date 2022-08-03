import { IGameObject } from './interfaces/IGameObject';
import { ViewCanvas } from './Canvas/view.js';
import { create_safes } from './helpers/helper.js';
import { safe } from './objects/safe';

//An array containing all the gameobjects
let allGameObjects : IGameObject[] = new Array();

//Initialize the game and its elements
function start(){
    const safes = create_safes();

    //allGameObjects.push(newSafe);
    update(safes);
}

// Main Game Loop
function update(safes:safe[]): void
{
    view.clear();
    view.draw_bg();
    drawallobjects();
    view.draw_safes(safes);
    requestAnimationFrame( () => update(safes) )
}

//Draw all the gameobjects saved in the array
function drawallobjects()
{
    allGameObjects.forEach(element => {
        view.drawSprite(element);
    });
}

//create a new view
const view = new ViewCanvas()
start()