export class TarjetaDeAsistencia{
    constructor(fecha, checkInTime, checkOutTime, amountOfHours){
        this.fecha = fecha;
        this.checkInTime = checkInTime;
        this.checkOutTime = checkOutTime;
        this.amountOfHours = amountOfHours;
    }


    obtenerMontoPorHoras(){
        return this.amountOfHours;
    }

}
