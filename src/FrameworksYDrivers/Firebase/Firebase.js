let admin = require('firebase-admin');
let serviceAccount = require("../../../boletas-de-pago-a5393-firebase-adminsdk-swovw-4299b1a229.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://boletas-de-pago-a5393.firebaseio.com"
});

let db = admin.database();
let ref = db.ref("/acceso_restringido/empresa");

export let boletasRef = ref.child("boletasDePago")
let empleadosRef = ref.child("empleados");

  function subirBoletaPromesa(archivoJSON) {
    return new Promise((resolve, reject) => {
      resolve(this.boletasRef.push(archivoJSON).key);
    })
  }

  function subirEmpleadoPromesa(archivoJSON) {
    return new Promise((resolve, reject) => {
      resolve(this.empleadosRef.push(archivoJSON).key);
    })
  }

  function borrarBoleta(claveBoleta) {
    this.boletasRef.child(claveBoleta).remove();
  }

  function borrarEmpleado(claveEmpleado) {
    this.empleadosRef.child(claveEmpleado).remove();
  }

  function descargarBoletasPromesa() {
    return new Promise((resolve, reject) => {
      this.boletasRef.once('value', snapshot => {
        resolve(snapshot.val());
      });
    })
  }

  function descargarEmpleadosPromesa() {
    return new Promise((resolve, reject) => {
      this.empleadosRef.once('value', snapshot => {
        resolve(snapshot.val());
      });
    })
  }

  module.exports = {
    subirBoletaPromesa,
    subirEmpleadoPromesa,
    descargarBoletasPromesa,
    descargarEmpleadosPromesa
  };
