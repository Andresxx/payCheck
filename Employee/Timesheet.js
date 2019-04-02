export class Timesheet{
    constructor(date, checkInTime, checkOutTime, amountOfHours){
        this.date = date;
        this.checkInTime = checkInTime;
        this.checkOutTime = checkOutTime;
        this.amountOfHours = amountOfHours;
    }


    obtenerMontoPorHoras(){
        return this.amountOfHours;
    }

}
