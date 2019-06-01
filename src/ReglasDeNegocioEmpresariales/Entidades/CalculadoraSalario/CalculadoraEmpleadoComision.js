export class CalculadoraEmpleadoComision{

    constructor(salarioBaseDelKardex, porcentajeDeComision, listaDeVentas){
        this.ventas = listaDeVentas;
        this.salarioBaseDelKardex = salarioBaseDelKardex;
        this.porcentajeDeComision = porcentajeDeComision;
    }

    calcularPago(){
        return (this.salarioBaseDelKardex+(this.porcentajeDeComision*this.ventas.calcularMontoDeVentas()));
    }




}