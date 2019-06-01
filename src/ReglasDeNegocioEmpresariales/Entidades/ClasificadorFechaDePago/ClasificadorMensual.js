export class ClasificadorMensual
{
    constructor(){        
    }
    esFechaDePago(){
        let fechaActual = new Date();
        return this.esElUltimoDiaDelMes(fechaActual);
    }
    
    esElUltimoDiaDelMes(fechaActual){
        let fecha = new Date(fechaActual.getTime());
        fecha.setDate(fecha.getDate() + 1);
        return fecha.getDate() === 1;
    }
}