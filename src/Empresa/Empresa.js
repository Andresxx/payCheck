import {GeneradorDeBoletasDePago} from "../GeneradorDeBoletasDePago/GeneradorDeBoletasDePago.js";

const nodemailer = require('nodemailer');

export class Empresa {

    constructor(){
        this.empleados = [];
    }

    obtenerListaDeEmpleados(){
        return this.empleados;
    }

    agregarEmpleado(empleado){
        this.empleados.push(empleado);
    }

    generarBoletaDePago(empleado) {
        this.boleta = new GeneradorDeBoletasDePago(empleado);
        return this.boleta.generarBoleta();
    }

    generarBoletaDePagoEnJSON (empleado){
        this.boleta = new GeneradorDeBoletasDePago(empleado);
        return this.boleta.generarBoletaEnJSON();
    }

    generarBoletasDePagoParaTodosLosEmpleados() {
        let boletasDePago = [];
        this.empleados.forEach(empleado => {
            if(this.generarBoletaDePago(empleado)) {
                boletasDePago.push(this.generarBoletaDePago(empleado));
            }
        });
        return boletasDePago;
    }

    notificacionPorEmail(destinatario) {
        var transportador = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                    type: 'OAuth2',
                    user: 'carlos.jorge7412@gmail.com',
                    clientId: '1089811245289-c9ft80jmrnif15qd58mhlkct5nb2487q.apps.googleusercontent.com',
                    clientSecret: 'cDIAz0H2OQ0E0kSZJmRjWHJz',
                    refreshToken: '1/fam9usNelA9lY3VQiX6M_WdVMlZILN0m-I8XmiAYSsvNchfyrqifIPi9J323BJqn'
            }
        })
        
        var configuracionDelCorreo = {
            from: 'carlos.jorge7412@gmail.com',
            to: destinatario,
            subject: 'Nodemailer test',
            text: 'Hola mundillo'
        }

        transportador.sendMail(configuracionDelCorreo, function(err, res){
            if(err)
                console.log("No se pudo enviar el mail");
            else
                console.log("Se envio correctamente el mail");
        })
    }

    guardarUnEmpleadoEnLaBaseDeDatos(empleado) {
        //asdasdasd
    }

    crearEmpleado(empleadoJson) {
        empleado = fabricaDeEmpleados.crearEmpleado(empleadoJson);
        guardarUnEmpleadoEnLaBaseDeDatos(empleado);
    }
}