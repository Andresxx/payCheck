export class Deposito {

    constructor(numeroCuenta, monto) {
        this.numeroCuenta = numeroCuenta;
        this.monto = monto;
        this.sePago = false; 
    }

    obtenerPago() {
        return "Deposito";
    }

    pagar(){
        this.sePago = true;
    }

}