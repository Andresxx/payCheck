const express = require('express');
const app = express();
const port = 3000;
// const FabricaEmpleados = require('../src/FabricaEmpleados/FabricaEmpleados.js');
import {FabricaEmpleados} from "../src/FabricaEmpleados/FabricaEmpleados";
app.get('/', function (req, res) {
    let empleadoJson = {
        nombre: "Expresso",
        ci: 45555,
        salario: 50000
    }
    var prueba = {a: "asd", b: "xfs", tipoDeEmpleado: "fijo"};
    let empleado = new FabricaEmpleados(prueba);
    console.log(empleado.obtenerInstanciaDelEmpleado());

    res.send(empleadoJson);
    
  });


  module.exports = {
    inicio: function(req, res) {
        if (!req.body.name) {
            res.send('An error occurred: Name is a required paramter');
        }
    }
};


app.post('/', function(req, res){
    console.log(req.body);
    res.send(req.body);    
});
  


app.listen(port, () => console.log(`App currently on port: ${port}!`))