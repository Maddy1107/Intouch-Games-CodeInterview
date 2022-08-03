import { Vector } from "../helpers/types.js";

//Interface common to all gameObjects
export interface IGameObject{
    image:HTMLImageElement;
    position:Vector;
    size:Vector;
}