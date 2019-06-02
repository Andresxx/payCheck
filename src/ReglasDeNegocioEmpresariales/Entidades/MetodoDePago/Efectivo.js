export class Efectivo {

    constructor() {
        this.sePago = false;
    }

    obtenerPago() {
        return "Efectivo";
    }

    pagar(){
        this.sePago = true;
    }

}