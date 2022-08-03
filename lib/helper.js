import { safe } from './safe.js';
//Get safe parameters
import { safe_XPadding, safe_YPadding, safe_width, safe_height } from './setup.js';
const allSafeMultiplier = [15, 16, 17, 18, 19, 20];
let currsafeMultiplier = new Array(3);
export function create_safes() {
    let safeArray = new Array(3 * 3);
    const cols = 3;
    const rows = 3;
    let count = 0;
    select_3_multipliers();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const mul = get_random_multiplier();
            safeArray.push(new safe({
                x: i * 170 + safe_XPadding,
                y: j * 150 + safe_YPadding
            }, "../graphics/safe_minigame.png", mul, ++count, {
                x: safe_width,
                y: safe_height
            }));
        }
    }
    return safeArray;
}
function get_random_multiplier() {
    return currsafeMultiplier[Math.floor(Math.random() * currsafeMultiplier.length)];
}
function select_3_multipliers() {
    let rand_mul = 0;
    currsafeMultiplier = [];
    while (currsafeMultiplier.length != 3) {
        rand_mul = allSafeMultiplier[Math.floor(Math.random() * allSafeMultiplier.length)];
        currsafeMultiplier.push(rand_mul);
        allSafeMultiplier.splice(allSafeMultiplier.indexOf(rand_mul), 1);
    }
}
//# sourceMappingURL=helper.js.map