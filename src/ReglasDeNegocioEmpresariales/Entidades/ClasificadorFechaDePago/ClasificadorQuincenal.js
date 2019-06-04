export class ClasificadorQuincenal{
    constructor(){      
    }
    
    esFechaDePago(){
        let fechaActula = new Date();
        return this.numeroDeSemana(fechaActula) % 2 == 0 && this.esViernes(fechaActula);
    }

    calularNumeroDeSemana(fechaActual){
        let fecha = new Date(fechaActual.getFullYear(),0,1);
        let numeroDeSemana = 1;
        while(fechaActual.getMonth() != fecha.getMonth() && fechaActual.getDate() != fecha.getDate()){
            if(fecha.getDay() == 5)
                numeroDeSemana += 1;
            fecha.setDate(fecha.getDate() + 1);
        }
        return numeroDeSemana;
    }
    
    esViernes(fechaActual){
        return fechaActual.getDay() === 5;
    }
}