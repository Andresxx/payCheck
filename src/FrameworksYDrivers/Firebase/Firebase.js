class FirebaseDB {

  constructor() {
    this.admin = require('firebase-admin');
    this.serviceAccount = require("../../../boletas-de-pago-a5393-firebase-adminsdk-swovw-4299b1a229.json");
    this.admin.initializeApp({
      credential: this.admin.credential.cert(this.serviceAccount),
      databaseURL: "https://boletas-de-pago-a5393.firebaseio.com"
    });
    this.db = this.admin.database();
    this.ref = this.db.ref("/acceso_restringido/empresa");
    this.boletasRef = this.ref.child("boletasDePago");
    this.empleadosRef = this.ref.child("empleados");
  }

  subirBoletaPromesa(archivoJSON) {
    return new Promise((resolve, reject) => {
      resolve(this.boletasRef.push(archivoJSON).key);
    })
  }

  subirEmpleadoPromesa(archivoJSON) {
    return new Promise((resolve, reject) => {
      resolve(this.empleadosRef.push(archivoJSON).key);
    })
  }

  borrarBoleta(claveBoleta) {
    this.boletasRef.child(claveBoleta).remove();
  }

  borrarEmpleado(claveEmpleado) {
    this.empleadosRef.child(claveEmpleado).remove();
  }

  descargarBoletasPromesa() {
    return new Promise((resolve, reject) => {
      this.boletasRef.once('value', snapshot => {
        resolve(snapshot.val());
      });
    })
  }

  descargarEmpleadosPromesa() {
    return new Promise((resolve, reject) => {
      this.empleadosRef.once('value', snapshot => {
        resolve(snapshot.val());
      });
    })
  }

}


const instanciaDB =  new FirebaseDB();
Object.freeze(instanciaDB);

module.exports = {
  instanciaDB
};