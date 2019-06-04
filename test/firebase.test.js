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


  it('Deberia poder subir una boleta de pago a la base de datos', async () => {
    let kSoft = new Empresa();
    let tarjetasDeAsistencia = new Asistencias();
    tarjetasDeAsistencia.agregarTarjetaDeAsistencia('08-03-2019', '08:00', '17:00', 8);
    let calculadoraEmpleadoTiempoParcial = new CalculadoraEmpleadoParcial(900, tarjetasDeAsistencia);
    let empleadoPorTiempoParcial = new Empleado('TEST7777777777777777', 9999, calculadoraEmpleadoTiempoParcial);
    let boletaEnJSON = kSoft.generarBoletaDePagoEnJSON(empleadoPorTiempoParcial);
    await instanciaDB.subirBoletaPromesa(boletaEnJSON).then((claveBoleta) => {
      instanciaDB.borrarBoleta(claveBoleta);
      setTimeout(() => {}, 8000);
    });

  });

  it('Deberia poder subir un empleado a la base de datos', async () => {
    let tarjetasDeAsistencia = new Asistencias();
    tarjetasDeAsistencia.agregarTarjetaDeAsistencia('08-03-2019', '08:00', '17:00', 8);
    let calculadoraEmpleadoTiempoParcial = new CalculadoraEmpleadoParcial(900, tarjetasDeAsistencia);
    let em = {
      nom: "123",
      ape: "1234",
      cal: calculadoraEmpleadoTiempoParcial
    };
    await instanciaDB.subirEmpleadoPromesa(em).then((clave) => {
      instanciaDB.borrarEmpleado(clave)
    });
  });

  it('Deberia poder descargar las boletas', async () => {
    await instanciaDB.descargarBoletasPromesa().then((boletasDescargadas) => {
      console.log(boletasDescargadas);
    });
  });

  it('Deberia poder descargar los empleados', async () => {

    await instanciaDB.descargarEmpleadosPromesa().then((empleadosDescargados) => {
      console.log(empleadosDescargados);

    });
  });

  it('Deberia poder descargar las boletas', async () => {
    await instanciaDB.recuperarBoletasDelDiaActual().then((boletasDescargadas) => {
    });
  });

  after(() => {
    process.exit(0);
  });
});