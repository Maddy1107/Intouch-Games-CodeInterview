import { TopTextPanel } from './objects/ToptextPanel';
import { SafeNumberPanel } from './objects/SafeNumberPanel';
import { Safe } from "./objects/Safe";

export class GameLogic{

    initial_amount : number = 2000//initial bet money
    final_amount : number;//final_amount

    numbers_already_appeared = []//numbers in the dial already appeared
    multipliers_already_appeared = new Map()//Keep track of similar multiplier

    current_Safe = 0;//which Safe has to be opened
    current_multiplier = 0;//final multiplie selected

    number_of_tries : number;//how many tries
    total_Safes = []//store all Safes
    Safe_panel : SafeNumberPanel
    got_same_multiplier : boolean;

    textPanel: TopTextPanel

    constructor(Safes : Safe[], Safepanel:SafeNumberPanel, textPanel: TopTextPanel){
        document.addEventListener('keydown', this.processInput)
        this.number_of_tries = 4;
        this.total_Safes = Safes;
        this.final_amount = 0;
        this.got_same_multiplier = false;
        this.Safe_panel = Safepanel
        this.textPanel = textPanel
    }

    //Take a keyboard event and process it
    processInput = (e : KeyboardEvent) : void =>{
        if(e.code === 'Space'){
            if(this.number_of_tries > 0){
                this.perform_logic()
                this.number_of_tries--;
            }
        }

    }

    //Main Game logic
    perform_logic():void{
        let rand_num = 0

        rand_num = this.choose_random_number()

        while(true){
            if(this.numbers_already_appeared.includes(rand_num))
            {
                rand_num = this.choose_random_number()
            }
            else
            {
                this.numbers_already_appeared.push(rand_num)
                break;
            }
        }
        this.current_Safe = rand_num;

        if(this.current_Safe > 0){
            this.open_Safe(false);
            this.textPanel.change_text('Safe ' + this.current_Safe)
            this.textPanel.change_dimensions({x:280, y : 100}, '100px')
            this.current_Safe = 0
        }
    }

    //Choose a random number from 1 - 9
    choose_random_number() : number{
        return Math.floor(Math.random() * 9) + 1;
    }

    //Open the Safe
    open_Safe(gameComplete : boolean) {
        this.total_Safes.forEach(element => {
            if(element.Safe_number == this.current_Safe){
                element.changeImage('./graphics/Safe_open_minigame.png')
                this.draw_panel_text()
                element.open = true;
                this.got_same_multiplier =  this.check_if_same_multiplier(element.multiplier);
            }
        });
        // for(let i = 0; i < this.total_Safes.length; i++) {
        //     if(this.total_Safes[i].Safe_number == this.current_Safe){
        //         this.total_Safes[i].changeImage('./graphics/Safe_open_minigame.png')
        //         this.got_same_multiplier =  this.check_if_same_multiplier(this.total_Safes[i].mu);
        //         console.log(this.current_Safe, this.multipliers_already_appeared, this.got_same_multiplier)
        //         break;
        //     }
        // }
    }
    
    //Check if the multiplier already exists
    check_if_same_multiplier(multiplier: number) : boolean{

        const multi_check = this.multipliers_already_appeared.get(multiplier)

        if(multi_check != undefined){
            this.multipliers_already_appeared.set(multiplier, multi_check + 1)
        }
        else{
            this.multipliers_already_appeared.set(multiplier, 1)
        }
        console.log(this.current_Safe, this.multipliers_already_appeared)
        if( this.multipliers_already_appeared.get(multiplier) >= 2)
        {
            this.current_multiplier = multiplier;
            return true;
        }
        return false
    }

    draw_panel_text():void
    {
        this.Safe_panel.text += String(this.current_Safe) + ' '
        this.Safe_panel.changeText(this.Safe_panel.text)
    }

    //To Do when got same multiplier
    game_over():boolean{
        if(this.got_same_multiplier)
        {
            console.log(this.current_multiplier)
            this.final_amount += (this.current_multiplier * this.initial_amount)
            this.number_of_tries = 0
            this.Safe_panel.changeImage('./graphics/screen_Safe_win.png')
            this.Safe_panel.changeText('WIN')
            this.Safe_panel.change_dimensions({x: 283 , y:100},{x:595, y:180})
            this.open_Safe(true)
            return true;
        }
        return false
    }

}
