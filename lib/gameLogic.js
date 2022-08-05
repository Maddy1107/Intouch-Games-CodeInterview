export class gameLogic {
    constructor(safes, view, safepanel) {
        this.initial_amount = 2000; //initial bet money
        this.numbers_already_appeared = []; //numbers in the dial already appeared
        this.multipliers_already_appeared = new Map(); //Keep track of similar multiplier
        this.current_safe = 0; //which safe has to be opened
        this.current_multiplier = 0; //final multiplie selected
        this.total_safes = []; //store all safes
        //Take a keyboard event and process it
        this.processInput = (e) => {
            if (e.code === 'Space') {
                if (this.number_of_tries > 0) {
                    this.perform_logic();
                    this.number_of_tries--;
                }
            }
        };
        document.addEventListener('keydown', this.processInput);
        this.number_of_tries = 4;
        this.total_safes = safes;
        this.final_amount = 0;
        this.got_same_multiplier = false;
        this.canvas = view;
        this.safe_panel = safepanel;
    }
    //Main Game logic
    perform_logic() {
        let rand_num = 0;
        rand_num = this.choose_random_number();
        while (true) {
            if (this.numbers_already_appeared.includes(rand_num)) {
                rand_num = this.choose_random_number();
            }
            else {
                this.numbers_already_appeared.push(rand_num);
                break;
            }
        }
        this.current_safe = rand_num;
        if (this.current_safe > 0) {
            this.open_safe(false);
            this.canvas.draw_text("SAFE " + String(this.current_safe), { x: 400, y: 85 }, 'black', "bold 50px comic sans ms");
            this.current_safe = 0;
        }
    }
    //Choose a random number from 1 - 9
    choose_random_number() {
        return Math.floor(Math.random() * 9) + 1;
    }
    //Open the safe
    open_safe(gameComplete) {
        this.total_safes.forEach(element => {
            if (element.safe_number == this.current_safe) {
                element.changeImage('./graphics/safe_open_minigame.png');
                this.safe_panel.text += String(this.current_safe) + ' ';
                this.safe_panel.changeText(this.safe_panel.text);
                console.log(this.safe_panel.text[0]);
                this.got_same_multiplier = this.check_if_same_multiplier(element.multiplier);
                console.log(this.current_safe, this.multipliers_already_appeared, this.got_same_multiplier);
            }
        });
        // for(let i = 0; i < this.total_safes.length; i++) {
        //     if(this.total_safes[i].safe_number == this.current_safe){
        //         this.total_safes[i].changeImage('./graphics/safe_open_minigame.png')
        //         this.got_same_multiplier =  this.check_if_same_multiplier(this.total_safes[i].mu);
        //         console.log(this.current_safe, this.multipliers_already_appeared, this.got_same_multiplier)
        //         break;
        //     }
        // }
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
        console.log(this.current_safe, this.multipliers_already_appeared);
        if (this.multipliers_already_appeared.get(multiplier) >= 2) {
            this.current_multiplier = multiplier;
            return true;
        }
        return false;
    }
    //To Do when got same multiplier
    game_over() {
        if (this.got_same_multiplier) {
            console.log(this.current_multiplier);
            this.final_amount += (this.current_multiplier * this.initial_amount);
            this.number_of_tries = 0;
            this.open_safe(true);
            console.log(this.final_amount);
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=gameLogic.js.map