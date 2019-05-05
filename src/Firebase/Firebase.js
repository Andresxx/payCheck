let admin = require('firebase-admin');


let serviceAccount = require("../../boletas-de-pago-a5393-firebase-adminsdk-swovw-4299b1a229.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://boletas-de-pago-a5393.firebaseio.com"
});



let db = admin.database();
let ref = db.ref("/acceso_restringido/empresa");

let boletasRef = ref.child("boletasDePago")
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

function subirArchivo(archivoJSON) {
  let currentKey;
    boletasRef.push(archivoJSON).then(function() {
    console.log("curent key is " + boletasRef.key);
    process.exit(0);
  });
  
}
function descargarArchivo(id){
}

module.exports = {subirArchivo};