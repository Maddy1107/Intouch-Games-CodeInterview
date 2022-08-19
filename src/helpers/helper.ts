import { Safe } from '../objects/Safe.js';
//Get safe parameters
import { safe_XPadding,safe_YPadding, safe_width, safe_height} from './setup.js';

const allSafeMultiplier = [15, 16, 17, 18, 19, 20];
const openImages = [
    "../graphics/coins.png",
    "../graphics/diamond.png",
    "../graphics/gold.png",
    "../graphics/notes.png",
    "../graphics/ring.png",
];//all images to show after safe opened

let currsafeMultiplier:number[] = new Array(3);//array for the 3 distinct multiplier
let currSafeImage:string[] = new Array(3);//array for 3 distinct images

//Create safes and store in an array to draw later
export function create_safes(): Safe[]{

    let safeArray :Safe[] = new Array(3*3);

    const cols = 3;
    const rows = 3;

    let count = 0;

    select_3_multipliers()

    let map = currsafeMultiplier.reduce((acc, e) => acc.set(e, (acc.get(e) || 0)), new Map());

    for(let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++) {

            const mul = get_random_multiplier(map);

            map.set(mul, map.get(mul) + 1)

            safeArray.push(new Safe(
                {
                    x: j * 170 + safe_XPadding,
                    y: i * 150 + safe_YPadding
                },
                "../graphics/safe_minigame.png",
                mul,
                ++count,
                currSafeImage[currsafeMultiplier.indexOf(mul)],
                {
                    x: safe_width,
                    y: safe_height
                }
                ))
        }
    }
    return safeArray;
}

//Get a random multiplier from 3 selected multipliers
function get_random_multiplier(map:Map<number, number>) : number{
    let rand = 0

    rand = currsafeMultiplier[Math.floor(Math.random() * currsafeMultiplier.length)]

    while(true){
       if(map.get(rand) < 3){
        
        return rand
       }
       else{
        rand = currsafeMultiplier[Math.floor(Math.random() * currsafeMultiplier.length)]
       }
   }
}

//Select 3 different unique multipliers and images form all the multiplier and imageslist
function select_3_multipliers():void{
    let rand_mul = 0
    let rand_imageSRC = ""

    currsafeMultiplier = []
    currSafeImage = []

    while(currsafeMultiplier.length != 3){

        rand_mul = allSafeMultiplier[Math.floor(Math.random() * allSafeMultiplier.length)]
        rand_imageSRC = openImages[Math.floor(Math.random() * openImages.length)]

        currsafeMultiplier.push(rand_mul);
        currSafeImage.push(rand_imageSRC);

        allSafeMultiplier.splice(allSafeMultiplier.indexOf(rand_mul),1)
        openImages.splice(openImages.indexOf(rand_imageSRC),1)
    }
}