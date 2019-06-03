var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {NotificacionPorWPP} from "../src/ReglasDeNegocioEmpresariales/Entidades/Notificaciones/NotificacionPorWPP";

describe('Pruebas de empleado', function() {

    beforeEach(function() {
     });

     it('Las notificaciones de WPP deberian notificar al WPP', function(){
        let notificacionPorWPP = new NotificacionPorWPP();
        expect(notificacionPorWPP.notificar()).equal("Se notificara por WPP al trabajador.");
    }); 
});