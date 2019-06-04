const nodemailer = require('nodemailer');

export class NotificacionPorMail {
    constructor() {

    }

    notificar() {
        var transportador = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'carlos.jorge7412@gmail.com',
                clientId: '1089811245289-c9ft80jmrnif15qd58mhlkct5nb2487q.apps.googleusercontent.com',
                clientSecret: 'cDIAz0H2OQ0E0kSZJmRjWHJz',
                refreshToken: '1/EqRznim-LMZ_mZihAHZbb5bCmlYIGA31aX21KwaeOO8'
            }
        })
        
        var configuracionDelCorreo = {
            from: 'carlos.jorge7412@gmail.com',
            to: this.email,
            subject: 'Pago',
            text: 'Se le hizo su pago correctamente!'
        }

        transportador.sendMail(configuracionDelCorreo, function(err, res){  
            if(err) {
                return err;
            }
            else{
                return res;
            }
        })
    }
}