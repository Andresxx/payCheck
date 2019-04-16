let admin = require('firebase-admin');


let serviceAccount = require("../../boletas-de-pago-arqui-firebase-adminsdk-xhitp-9a1e2d3621.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://boletas-de-pago-arqui.firebaseio.com"
});

let db = admin.database();
let ref = db.ref("/acceso_restringido/empresa");

let boletasRef = ref.child("boletasDePago")
function subirArchivo(archivoJSON) {
    boletasRef.push(archivoJSON);
    console.log("archivo subido exitosamente");
}

module.exports = {subirArchivo};