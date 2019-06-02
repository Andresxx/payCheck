export class Cheque {

    constructor(monto, fecha, nombreLibrador){
        this.monto = monto;
        this.fecha = fecha;
        this.nombreLibrador = nombreLibrador;
        this.sePago = false;
    }

    obtenerPago(){
        return "Cheque";
    }

    pagar(){
        this.sePago = true;
    }
}