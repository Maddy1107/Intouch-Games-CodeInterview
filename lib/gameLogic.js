export class GameLogic {
    constructor(Safes, Safepanel, textPanel, wheel) {
        this.initial_amount = 2000; //initial bet money
        this.numbers_already_appeared = []; //numbers in the dial already appeared
        this.multipliers_already_appeared = new Map(); //Keep track of similar multiplier
        this.current_Safe = 0; //which Safe has to be opened
        this.current_multiplier = 0; //final multiplie selected
        this.total_Safes = []; //store all Safes
        this.safe_digit_order = [2, 1, 9, 8, 7, 6, 5, 4, 3]; // The order of numbers on the wheel
        //Get Cursor Position
        this.getCursorPosition = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            //Check for button
            if (x <= 800 && x >= 700 && y >= 400 && y <= 500) {
                this.processInput();
            }
        };
        document.addEventListener('mousedown', this.getCursorPosition);
        this.number_of_tries = 4;
        this.total_Safes = Safes;
        this.final_amount = 0;
        this.got_same_multiplier = false;
        this.Safe_panel = Safepanel;
        this.textPanel = textPanel;
        this.wheel = wheel;
    }
    //Process the mouse press
    processInput() {
        if (this.number_of_tries > 0) {
            this.perform_logic();
            this.number_of_tries--;
        }
    }
    //Main Game logic
    //some places numbers are divided by 40 because there are 9 numbers and total
    //angle is 360, so 360/9 = 40
    perform_logic() {
        let rand_num = 0;
        let closest = 0;
        rand_num = this.choose_random_number();
        while (true) {
            closest = this.findClosestDivisible(rand_num, 40);
            if (this.numbers_already_appeared.includes(closest) || closest === 0) {
                rand_num = this.choose_random_number();
            }
            else {
                this.numbers_already_appeared.push(closest);
                break;
            }
        }
        this.wheel.numberOfSpin = closest; //the wheel is going to spin this amount of angles
        this.current_Safe = this.safe_digit_order[this.wheel.numberOfSpin / 40]; //getting the cuurent safe that has to be opened
        //setting the current safe as 0 to start the spin from that number
        let count = this.safe_digit_order.indexOf(this.current_Safe);
        for (let i = 0; i < count; i++) {
            this.safe_digit_order.push(this.safe_digit_order[i]);
        }
        this.safe_digit_order.splice(0, count);
        //
        //Start the wheel spin
        this.wheel.startSpin = true;
    }
    //Open safe only when spin is done
    checkifTimetoOpensafe() {
        if (this.current_Safe > 0 && !this.wheel.startSpin) {
            this.open_Safe(false);
            this.textPanel.change_text('Safe ' + this.current_Safe);
            this.textPanel.change_dimensions({ x: 280, y: 100 }, '100px');
            this.current_Safe = 0;
        }
    }
    //As the number can be anything and fall between 2 numbers...
    //Because of that reason, the closest divisible to 40 is found so that the arrow can fall on an exact number
    findClosestDivisible(n, m) {
        let q = Math.floor(n / m);
        let n1 = m * q;
        let n2 = (n * m) > 0 ? (m * (q + 1)) : (m * (q - 1));
        if (Math.abs(n - n1) < Math.abs(n - n2)) {
            return n1;
        }
        return n2;
    }
    //Choose a random number 0-720 for more spin
    choose_random_number() {
        //this.wheel.startSpin = true
        return Math.floor(Math.random() * 359);
    }
    //Open the Safe
    open_Safe(gameComplete) {
        this.total_Safes.forEach(element => {
            if (element.safe_number == this.current_Safe && !gameComplete) {
                element.changeImage('./graphics/Safe_open_minigame.png');
                this.draw_panel_text();
                element.open = true;
                this.got_same_multiplier = this.check_if_same_multiplier(element.multiplier);
                element.isWinningSafe = true;
            }
            else if (gameComplete) {
                element.open = true;
                element.changeImage('./graphics/Safe_open_minigame.png');
            }
        });
    }
    //Check if the multiplier already exists
    check_if_same_multiplier(multiplier) {
        const multi_check = this.multipliers_already_appeared.get(multiplier);
        if (multi_check != undefined) {
            this.multipliers_already_appeared.set(multiplier, multi_check + 1);
        }
        else {
            this.multipliers_already_appeared.set(multiplier, 1);
        }
        if (this.multipliers_already_appeared.get(multiplier) >= 2) {
            this.current_multiplier = multiplier;
            return true;
        }
        return false;
    }
    //Draw the opened safe number in the panel
    draw_panel_text() {
        this.Safe_panel.text += String(this.current_Safe) + ' ';
        this.Safe_panel.changeText(this.Safe_panel.text);
    }
    //To Do when got same multiplier
    game_over() {
        if (this.got_same_multiplier) {
            this.final_amount += (this.current_multiplier * this.initial_amount);
            this.number_of_tries = 0;
            this.Safe_panel.changeImage('./graphics/screen_Safe_win.png');
            this.Safe_panel.changeText('WIN');
            this.Safe_panel.change_dimensions({ x: 283, y: 100 }, { x: 595, y: 180 });
            this.open_Safe(true);
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=GameLogic.js.map