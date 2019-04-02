import {Timesheet} from '../Employee/Timesheet'

export class PartialCalculator {
    constructor(monto){
        this.monto = monto;
        this.listaDeHojasDeTiempo = [];
    }
    calcularPago(){
        return this.monto*this.obtenerHorasDeLasHojasDeTiempo();
    }

    agregarHojaDeTiempo(fecha, checkInTime, checkOutTime, horas){
        let hojaDeTiempo = new Timesheet(fecha, checkInTime, checkOutTime, horas);
        this.listaDeHojasDeTiempo.push(hojaDeTiempo);
    }

    obtenerHorasDeLasHojasDeTiempo(){
        let horasTotales = 0;
        this.listaDeHojasDeTiempo.forEach(function (hojaDeTiempo) {
            horasTotales += hojaDeTiempo.obtenerMontoPorHoras();
        });
        return horasTotales;
    }
}