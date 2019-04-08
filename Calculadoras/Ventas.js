import {TarjetaDeVenta} from './TarjetaDeVenta';

export class Ventas {

    constructor(){
        this.listaTarjetasDeVentas = [];
    }

    agregarVenta(fecha, monto){
        let venta = new TarjetaDeVenta(fecha, monto);
        this.listaTarjetasDeVentas.push(venta);
    }

    calcularMontoDeVentas(){
        let montoTotal = 0;
        this.listaTarjetasDeVentas.forEach(function (venta) {
            montoTotal += venta.getAmountSold();
        });
        return montoTotal;
    }

}