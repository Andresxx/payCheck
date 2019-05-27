import {
  Empleado
} from "../src/Empleado/Empleado";
import {
  CalculadoraEmpleadoFijo
} from "../src/CalculadoraSalario/CalculadoraEmpleadoFijo";
import {
  CalculadoraEmpleadoParcial
} from "../src/CalculadoraSalario/CalculadoraEmpleadoParcial";
import {
  Asistencias
} from "../src/Tarjetas/Asistencias";
import {
  Empresa
} from "../src/Empresa/Empresa";
import {
  GeneradorDeBoletasDePago
} from "../src/GeneradorDeBoletasDePago/GeneradorDeBoletasDePago";
import {
  ClasificadorMensual
} from "../src/ClasificadorFechaDePago/ClasificadorMensual";
import {
  ClasificadorSemanal
} from "../src/ClasificadorFechaDePago/ClasificadorSemanal";

import {
  Deposito
} from '../src/MetodoDePago/Deposito'
import {
  Efectivo
} from '../src/MetodoDePago/Efectivo'
import {
  Cheque
} from "../src/MetodoDePago/Cheque";

import {
  subirEmpleadoPromesa
} from "../src/Firebase/Firebase";
import {
  borrarEmpleado
} from "../src/Firebase/Firebase";
import {
  subirBoletaPromesa
} from "../src/Firebase/Firebase";
import {
  borrarBoleta
} from "../src/Firebase/Firebase";

import {
  descargarBoletasPromesa
} from "../src/Firebase/Firebase";

import {
  descargarEmpleadosPromesa
} from "../src/Firebase/Firebase";



describe('PRUEBAS BASE DE DATOS', () => {


  it('Deberia poder subir un empleado a la base de datos', () => {
    let tarjetasDeAsistencia = new Asistencias();
    tarjetasDeAsistencia.agregarTarjetaDeAsistencia('08-03-2019', '08:00', '17:00', 8);
    let cheque = new Cheque();
    let calculadoraEmpleadoTiempoParcial = new CalculadoraEmpleadoParcial(900, tarjetasDeAsistencia);
    let clasificadorSemanal = new ClasificadorSemanal();
    let empleadoPorTiempoParcial = new Empleado('TEST666666666666666', 9999, calculadoraEmpleadoTiempoParcial, clasificadorSemanal, cheque, "whatsapp");
    subirEmpleadoPromesa(empleadoPorTiempoParcial).then((clave) => {
      setTimeout(() => {
        borrarEmpleado(clave);
        process.exit(0);
      }, 4000);
    });
  });

  it('Deberia poder subir una boleta de pago a la base de datos', () => {
    let kSoft = new Empresa();
    let tarjetasDeAsistencia = new Asistencias();
    tarjetasDeAsistencia.agregarTarjetaDeAsistencia('08-03-2019', '08:00', '17:00', 8);
    let calculadoraEmpleadoTiempoParcial = new CalculadoraEmpleadoParcial(900, tarjetasDeAsistencia);
    let empleadoPorTiempoParcial = new Empleado('TEST7777777777777777', 9999, calculadoraEmpleadoTiempoParcial);
    let boletaEnJSON = kSoft.generarBoletaDePagoEnJSON(empleadoPorTiempoParcial);
    subirBoletaPromesa(boletaEnJSON).then((claveBoleta) => {
      setTimeout(() => {
        //borrarBoleta(claveBoleta);
        process.exit(0);
      }, 10000);
      borrarBoleta(claveBoleta);
    });
  });

  it('Deberia poder descargar las boletas', () => {
    descargarBoletasPromesa().then((boletasDescargadas) => {
      // setTimeout(() => {

      // }, 6000);
      console.log(boletasDescargadas);
    });
  });

  it('Deberia poder descargar los empleados', () => {
    descargarEmpleadosPromesa().then((empleadosDescargados) => {
      // setTimeout(() => {

      // }, 6000);
      console.log(empleadosDescargados);
    });
  });

});