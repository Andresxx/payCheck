var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {NotificacionPorWPP} from "../src/ReglasDeNegocioEmpresariales/Entidades/Notificaciones/NotificacionPorWPP";
import {NotificacionPorFacebook} from "../src/ReglasDeNegocioEmpresariales/Entidades/Notificaciones/NotificacionPorFacebook";

describe('Pruebas de empleado', function() {

    beforeEach(function() {
     });

    it('Las notificaciones de WPP deberian notificar al WPP', function(){
        let notificacionPorWPP = new NotificacionPorWPP();
        expect(notificacionPorWPP.notificar()).equal("Se notificara por WPP al trabajador.");
    });
    
    it('Las notificaciones de Facebook deberian notificar al Facebook', function(){
        let notificacionPorFacebook = new NotificacionPorFacebook();
        expect(notificacionPorFacebook.notificar()).equal("Se notificara por Facebook al trabajador.");
    });
});