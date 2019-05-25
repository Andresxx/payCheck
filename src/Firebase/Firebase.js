let admin = require('firebase-admin');


let serviceAccount = require("../../boletas-de-pago-a5393-firebase-adminsdk-swovw-4299b1a229.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://boletas-de-pago-a5393.firebaseio.com"
});



let db = admin.database();
let ref = db.ref("/acceso_restringido/empresa");

let boletasRef = ref.child("boletasDePago")
/*ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});*/

function estaVacio(objeto) {
  for (var clave in objeto) {
    if (objeto.hasOwnProperty(clave))
      return false;
  }
  return true;
}

function subirArchivoPromesa(objetoJSON, referenciaBaseDeDatos) {
  return promesa = new Promise((resolve, reject) => {
    if (estaVacio(objetoJSON)) {
      reject('Error')
    } else {
      referenciaBaseDeDatos.push(archivoJSON);
      resolve('Correcto')
    }
  });
}

// function descargarBoletasPromesa(objetoJSON){
//   return promesa = new Promise((resolve, reject) => {
//     if(){
//       reject('Error')
//     }
//     else{
//       referenciaBaseDeDatos.push(archivoJSON);
//       resolve('Correcto')
//     }
//   });
// }

function subirArchivoConPromesa(objetoJSON, referenciaBaseDeDatos) {
  subirArchivoPromesa(objetoJSON, referenciaBaseDeDatos).then()
}

function subirArchivo(archivoJSON) {
  let resultado = false;
  boletasRef.push(archivoJSON).then(() =>
      process.exit(0)
    )
    .catch(function (resultado) {
      console.log("Hubo un error al subir la boleta");
      resultado = false;
    });
  return resultado;
}

function descargarArchivoEnJson(argu) {
  return argu;
}

function descargarBoletas() {
  let boletasEnJSON;
  // console.log("Inicio");
  boletasRef.once("value", async function (snapshot) {
    boletasEnJSON = await snapshot.val();
    process.exit(0);
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
  console.log("xdxd");
  return boletasEnJSON;
  
}
11111

function calbackDownload() {

}

async function descAwait() {
  let jsonBoletas = await descargarBoletas();
  console.log("LAS BOLETAS SOOOOON: ");
  console.log(jsonBoletas);
}

let promiseDownload = new Promise(function (resolve, reject) {
  descargarBoletas();
});
module.exports = {
  subirArchivo,
  descargarBoletas,
  descAwait
};