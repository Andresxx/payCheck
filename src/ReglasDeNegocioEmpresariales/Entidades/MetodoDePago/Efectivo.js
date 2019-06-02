export class Efectivo {

    constructor(monto) {
        this.sePago = false;
        this.monto = monto;
    }

    obtenerPago() {
        return "Efectivo";
    }

    pagar(){
        this.sePago = true;
    }

}