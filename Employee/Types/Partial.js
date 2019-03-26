import {Employee} from '../employee.js';

export class Partial extends Employee{

    constructor(name, ci, hours){
        super(name, ci);
        this.hours = hours;
    }

}

