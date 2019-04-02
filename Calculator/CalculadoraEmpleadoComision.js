import {TarjetaDeVenta} from '../Employee/TarjetaDeVenta';

export class CalculadoraEmpleadoComision{

    constructor(salarioBaseDelKardex, porcentajeDeComision){
        this.listaDeVentas = [];
        this.salarioBaseDelKardex = salarioBaseDelKardex;
        this.porcentajeDeComision = porcentajeDeComision;
    }

    calcularPago(){
        return (this.salarioBaseDelKardex+(this.porcentajeDeComision*this.calcularMontoDeVentas()));
    }

    agregarVenta(fecha, monto){
        let venta = new TarjetaDeVenta(fecha, monto);
        this.listaDeVentas.push(venta);
    }

    calcularMontoDeVentas(){
        let montoTotal = 0;
        this.listaDeVentas.forEach(function (venta) {
            montoTotal += venta.getAmountSold();
        });
        return montoTotal;
    }
}