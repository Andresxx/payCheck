import {
  Empleado
} from "../src/ReglasDeNegocioEmpresariales/Entidades/Empleado/Empleado";
import {
  CalculadoraEmpleadoFijo
} from "../src/ReglasDeNegocioEmpresariales/Entidades/CalculadoraSalario/CalculadoraEmpleadoFijo";
import {
  CalculadoraEmpleadoParcial
} from "../src/ReglasDeNegocioEmpresariales/Entidades/CalculadoraSalario/CalculadoraEmpleadoParcial";
import {
  Asistencias
} from "../src/ReglasDeNegocioEmpresariales/Entidades/Tarjetas/Asistencias";
import {
  Empresa
} from "../src/CasosDeUso/Empresa/Empresa";
import {
  GeneradorDeBoletasDePago
} from "../src/CasosDeUso/GeneradorDeBoletasDePago/GeneradorDeBoletasDePago";
import {
  ClasificadorMensual
} from "../src/ReglasDeNegocioEmpresariales/Entidades/ClasificadorFechaDePago/ClasificadorMensual";
import {
  ClasificadorSemanal
} from "../src/ReglasDeNegocioEmpresariales/Entidades/ClasificadorFechaDePago/ClasificadorSemanal";

import {
  Deposito
} from '../src/ReglasDeNegocioEmpresariales/Entidades/MetodoDePago/Deposito'
import {
  Efectivo
} from '../src/ReglasDeNegocioEmpresariales/Entidades/MetodoDePago/Efectivo'
import {
  Cheque
} from "../src/ReglasDeNegocioEmpresariales/Entidades/MetodoDePago/Cheque";

import {
  subirEmpleadoPromesa
} from "../src/FrameworksYDrivers/Firebase/Firebase";
import {
  borrarEmpleado
} from "../src/FrameworksYDrivers/Firebase/Firebase";
import {
  subirBoletaPromesa
} from "../src/FrameworksYDrivers/Firebase/Firebase";
import {
  borrarBoleta
} from "../src/FrameworksYDrivers/Firebase/Firebase";

import {
  descargarBoletasPromesa
} from "../src/FrameworksYDrivers/Firebase/Firebase";

import {
  descargarEmpleadosPromesa
} from "../src/FrameworksYDrivers/Firebase/Firebase";



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