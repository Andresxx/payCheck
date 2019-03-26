import {Employee} from '../employee.js';

export class Employee extends Employee{

    constructor(name, ci, sales){
        super(name, ci);
        this.sales = sales;
    }

    
}

