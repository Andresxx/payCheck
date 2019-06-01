const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

import {FabricaEmpleados} from "../../FabricaEmpleados/FabricaEmpleados";
import {Empresa} from "../../CasosDeUso/Empresa/Empresa";
import {ControladorEmpleado} from "../../AdaptadoresDeInterfaz/Controladores/ControladorEmpleado";

app.use(bodyParser());
app.get('/', function (req, res) {
    let empleadoJson = {
        nombre: "Expresso",
        ci: 45555,
        salario: 50000
    }
    var prueba = {a: "asd", b: "xfs", tipoDeEmpleado: "fijo"};

    res.send(empleadoJson);
    
});

app.post('/', function(req, res){
    console.log(req.body);
    res.send(req.body);    
});

app.post('/createEmployee', function(req, res){
    let empresa = new Empresa();
    empresa.crearEmpleado(req.body);
    res.send(req.body);
    console.log('body is ',typeof req.body);
});

app.post('/new-employee', function(req, res){
    let controladorEmpleado = new ControladorEmpleado();
    controladorEmpleado.crearEmpleado(req.body);
    res.send(req.body);
});

app.get('/paychecks', async (req, res)=>{
    let empresa = new Empresa();
    let boletas = await empresa.descargarBoletas();
    res.send(boletas);
 });

 app.get('/employees', async (req, res) => {
    let empresa = new Empresa();
    let empleados = await empresa.descargarEmpleados();
    res.send(empleados);
 });


 
 


app.listen(port, () => console.log(`App currently on port: ${port}!`))