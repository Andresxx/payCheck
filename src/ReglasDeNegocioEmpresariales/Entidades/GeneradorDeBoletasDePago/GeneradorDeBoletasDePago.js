export class GeneradorDeBoletasDePago {

    constructor(empleado){
        this.empleado = empleado;    
    }


    generarBoleta() {
        this.boleta = "BOLETA DE PAGO\n";
        this.boleta = this.boleta + "Nombre: " + this.empleado.nombre + "\n";
        this.boleta = this.boleta + "CI: " + this.empleado.ci + "\n";
        this.boleta = this.boleta + "Salario: " + this.empleado.calcularSalario() + "\n";
        this.boleta = this.boleta + "Fecha: " + this.obtenerFechaActualConFormato(new Date);
        return this.boleta;
    }
    
    obtenerFechaActualConFormato(fecha){
        let fechaConFormato = [fecha.getDate(), fecha.getMonth(), fecha.getFullYear()].join('/');
        return fechaConFormato;
    }

    generarBoletaEnJSON(){
        let boleta = {
            nombre : this.empleado.nombre,
            ci : this.empleado.ci,
            salario : this.empleado.calcularSalario(),
            fecha: this.obtenerFechaActualConFormato(new Date)
        };  
        return boleta;
    }
}