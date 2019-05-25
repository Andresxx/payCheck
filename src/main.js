const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    empleadoJson = {
        nombre: "Expresso",
        ci: 45555,
        salario: 50000
    }
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