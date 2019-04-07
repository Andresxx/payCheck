import {TarjetaDeAsistencia} from './TarjetaDeAsistencia';

export class Asistencias {

    constructor(){
        this.listaTarjetasDeAsistencia = [];
    }

    agregarTarjetaDeAsistencia(fecha, checkInTime, checkOutTime, horas){
        let tarjetaAsistencia = new TarjetaDeAsistencia(fecha, checkInTime, checkOutTime, horas);
        this.listaTarjetasDeAsistencia.push(tarjetaAsistencia);
    }

    obtenerHorasDeTarjetasDeAsistencia(){
        let horasTotales = 0;
        this.listaTarjetasDeAsistencia.forEach(function (tarjetaAsistencia) {
            horasTotales += tarjetaAsistencia.obtenerMontoPorHoras();
        });
        return horasTotales;
    }

}