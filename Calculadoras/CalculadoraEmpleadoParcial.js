import {Ventas} from './Asistencias.js';

export class CalculadoraEmpleadoParcial {
    constructor(monto, tarjetasDeAsistencia){
        this.monto = monto;
        this.tarjetasDeAsistencia = tarjetasDeAsistencia;
    }

    calcularPago(){
        return this.monto*this.tarjetasDeAsistencia.obtenerHorasDeTarjetasDeAsistencia();
    }


}