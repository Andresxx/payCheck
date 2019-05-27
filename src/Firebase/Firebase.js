let admin = require('firebase-admin');
let serviceAccount = require("../../boletas-de-pago-a5393-firebase-adminsdk-swovw-4299b1a229.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://boletas-de-pago-a5393.firebaseio.com"
});

let db = admin.database();
let ref = db.ref("/acceso_restringido/empresa");

let boletasRef = ref.child("boletasDePago");
let empleadosRef = ref.child("empleados");
// ref.once("value", function(snapshot) {
//   console.log(snapshot.val());
// });

function subirBoleta(archivoJSON) {
  boletasRef.push(archivoJSON).then(function () {
    console.log("curent key is " + boletasRef.key);
    process.exit(0);
  }).catch(function (resultado) {
    console.log("Hubo un error al subir el archivo");
  });
}

function subirEmpleado(archivoJSON) {
  empleadosRef.push(archivoJSON).then(function () {
    console.log("curent key is " + empleadosRef.key);
    process.exit(0);
  }).catch(() => {
    console.log("Hubo un error al subir el archivo");
  });
}

function subirBoletaPromesa(archivoJSON) {
  return new Promise((resolve, reject) => {
    resolve(boletasRef.push(archivoJSON).key);
  })
}

function subirEmpleadoPromesa(archivoJSON) {
  return new Promise((resolve, reject) => {
    resolve(empleadosRef.push(archivoJSON).key);
  })
}

function borrarBoleta(claveBoleta){
  console.log("BORRANDO BOLETA");
  boletasRef.child(claveBoleta).remove();
}

function borrarEmpleado(claveEmpleado){
  console.log("BORRANDO Empleado");
  empleadosRef.child(claveEmpleado).remove();
}


module.exports = {
  subirBoleta,
  subirEmpleado,
  subirEmpleadoPromesa,
  borrarEmpleado,
  subirBoletaPromesa,
  borrarBoleta
};