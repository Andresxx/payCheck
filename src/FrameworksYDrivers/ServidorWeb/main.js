const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors')

import {FabricaEmpleados} from "../../FabricaEmpleados/FabricaEmpleados";
import {Empresa} from "../../CasosDeUso/Empresa/Empresa";
import {ControladorEmpleado} from "../../AdaptadoresDeInterfaz/Controladores/ControladorEmpleado";
import {ControladorBoletas} from "../../AdaptadoresDeInterfaz/Controladores/ControladorBoletas";

app.use(cors())
app.use(bodyParser());
app.get('/', function (req, res) {
    res.send("Bienvenido a paycheck");
});

app.post('/', function(req, res){
    console.log(req.body);
    res.send(req.body);    
});

app.post('/new-employee', function(req, res){
    let controladorEmpleado = new ControladorEmpleado();
    controladorEmpleado.crearEmpleado(req.body);
    res.send(req.body);
});

app.get('/paychecks', async (req, res)=>{
    let controladorBoletas = new ControladorBoletas();
    let boletas = await controladorBoletas.descargarBoletas();
    res.send(boletas);
 });

 app.get('/employees', async (req, res) => {
    let controladorEmpleado = new ControladorEmpleado();
    let empleados = await controladorEmpleado.descargarEmpleados();
    res.send(empleados);
 });

app.listen(port, () => console.log(`App currently on port: ${port}!`))