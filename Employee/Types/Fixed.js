import {Employee} from '../employee.js';

export class Fixed extends Employee{

    constructor(name, ci, amount){
        super(name, ci);
        this.amount = amount;
    }

}

