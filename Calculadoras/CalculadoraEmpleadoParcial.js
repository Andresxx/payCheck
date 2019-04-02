import {TarjetaDeAsistencia} from '../Empleado/TarjetaDeAsistencia'

export class CalculadoraEmpleadoParcial {
    constructor(monto){
        this.monto = monto;
        this.listaDeHojasDeTiempo = [];
    }
    calcularPago(){
        return this.monto*this.obtenerHorasDeLasHojasDeTiempo();
    }

    agregarHojaDeTiempo(fecha, checkInTime, checkOutTime, horas){
        let hojaDeTiempo = new TarjetaDeAsistencia(fecha, checkInTime, checkOutTime, horas);
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