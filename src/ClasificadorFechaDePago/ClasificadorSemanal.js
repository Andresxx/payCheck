export class ClasificadorSemanal{
    constructor(){
    }
    esFechaDePago(){
        let fechaActual = new Date();
        return this.esViernes(fechaActual);
    }

    esViernes(fechaActual){
        return fechaActual.getDay() === 5;
    }
}