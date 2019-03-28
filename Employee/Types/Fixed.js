import {Employee} from '../employee.js';

export class fixedTimeEmployee extends Employee{

    constructor(name, ci, amount){
        super(name, ci);
        this.amount = amount;
    }

    calculatePayment(){
        return this.amount;
    }

}

