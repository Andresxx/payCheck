import {Empresa} from "../../CasosDeUso/Empresa/Empresa";

export class ControladorBoletas {
    constructor() {
        this.empresa = new Empresa();
    }

    async descargarBoletas(){
        let boletas = await this.empresa.descargarBoletas();
        return boletas;
    }

    async descargarBoletasDelDiaDeHoy(){
        let boletas = await this.empresa.obtenerBoletasDelDiaDeHoy();
        return boletas;
    }
}