const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

export class Empleado{

    constructor(nombre, ci, calculadoraDeSalario, calcularFechaDePago, metodoDePago, notificacion){
        this.nombre = nombre;
        this.ci = ci;
        this.calculadoraDeSalario = calculadoraDeSalario;
        this.calcularFechaDePago = calcularFechaDePago;
        this.metodoDePago = metodoDePago;
        this.notificacion = notificacion;
    }

    definirMetodoDePago(metodoPago){
        this.metodoDePago = metodoPago;
    }

    calcularSalario(){
        return this.calculadoraDeSalario.calcularPago();
    }

    esDiaDePago(){
        return this.calcularFechaDePago.esFechaDePago();
    }

    obtenerMetodoDePago(){
        this.metodoDePago.obtenerPago();
    }

}

