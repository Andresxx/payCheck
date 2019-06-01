const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

import {FabricaEmpleados} from "../../FabricaEmpleados/FabricaEmpleados";
import {Empresa} from "../../CasosDeUso/Empresa/Empresa";

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
    // emplead = JSON
    console.log('body is ',typeof req.body);
});


app.listen(port, () => console.log(`App currently on port: ${port}!`))