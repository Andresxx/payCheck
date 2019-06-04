import {
  Empleado
} from "../src/ReglasDeNegocioEmpresariales/Entidades/Empleado/Empleado";

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
  ClasificadorSemanal
} from "../src/ReglasDeNegocioEmpresariales/Entidades/ClasificadorFechaDePago/ClasificadorSemanal";

import {
  Cheque
} from "../src/ReglasDeNegocioEmpresariales/Entidades/MetodoDePago/Cheque";

import {
  instanciaDB
} from "../src/FrameworksYDrivers/Firebase/Firebase"


describe('PRUEBAS BASE DE DATOS', () => {


  it('Deberia poder subir un empleado a la base de datos', () => {
    let tarjetasDeAsistencia = new Asistencias();
    tarjetasDeAsistencia.agregarTarjetaDeAsistencia('08-03-2019', '08:00', '17:00', 8);
    let cheque = new Cheque();
    let calculadoraEmpleadoTiempoParcial = new CalculadoraEmpleadoParcial(900, tarjetasDeAsistencia);
    let clasificadorSemanal = new ClasificadorSemanal();
    let empleadoPorTiempoParcial = new Empleado('TEST666666666666666', 9999, calculadoraEmpleadoTiempoParcial, clasificadorSemanal, cheque, "whatsapp");
    instanciaDB.subirEmpleadoPromesa(empleadoPorTiempoParcial).then((clave) => {
      setTimeout(() => {
        process.exit(0);
      }, 4000);
      borrarEmpleado(clave);

    });
  });

  it('Deberia poder subir una boleta de pago a la base de datos', () => {
    let kSoft = new Empresa();
    let tarjetasDeAsistencia = new Asistencias();
    tarjetasDeAsistencia.agregarTarjetaDeAsistencia('08-03-2019', '08:00', '17:00', 8);
    let calculadoraEmpleadoTiempoParcial = new CalculadoraEmpleadoParcial(900, tarjetasDeAsistencia);
    let empleadoPorTiempoParcial = new Empleado('TEST7777777777777777', 9999, calculadoraEmpleadoTiempoParcial);
    let boletaEnJSON = kSoft.generarBoletaDePagoEnJSON(empleadoPorTiempoParcial);
    instanciaDB.subirBoletaPromesa(boletaEnJSON).then((claveBoleta) => {
      setTimeout(() => {
        process.exit(0);
      }, 4000);
      borrarBoleta(claveBoleta); 
    });

  });

  it('Deberia poder descargar las boletas', () => {
    instanciaDB.descargarBoletasPromesa().then((boletasDescargadas) => {
      // setTimeout(() => {

      // }, 6000);
      console.log(boletasDescargadas);
      process.exit(0);
    });
  });

  it('Deberia poder descargar los empleados', () => {

    instanciaDB.descargarEmpleadosPromesa().then((empleadosDescargados) => {
      // setTimeout(() => {

      // }, 6000);
      console.log(empleadosDescargados);
      process.exit(0);

    });
  });
});