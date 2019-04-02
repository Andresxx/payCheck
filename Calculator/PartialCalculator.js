import {Timesheet} from '../Employee/Timesheet'

export class PartialCalculator {
    constructor(amount){
        this.amount = amount;
        this.timesheetsList = [];
    }
    calcularPago(){
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