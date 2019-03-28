import {Employee} from '../employee.js';
import {Timesheet} from '../Timesheet.js';

export class partialTimeEmployee extends Employee{

    constructor(name, ci, amount){
        super(name, ci);
        this.amount = amount;
        this.timesheetsList = [];
    }
    calculatePayment(){
        return this.amount*this.getHoursFromTimeshets();
    }

    addATimesheet(date, checkInTime, checkOutTime, hours){
        let time = new Timesheet(date, checkInTime, checkOutTime, hours);
        this.timesheetsList.push(time);
    }

    getHoursFromTimeshets(){
        let totalHours = 0;
        this.timesheetsList.forEach(function (timesheet) {
            totalHours += timesheet.getAmountOfHous();
        });
        return totalHours;
    }



}

