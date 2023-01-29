//En este caso subiremos albumes
const admin = require ('firebase-admin');
const serviceAccount = require("./json/key_service_account.json");
const data = require("./json/conciertos.json");
const collectionKey = "Conciertos"; //Nombre la de la coleccion
admin.initializeApp ({
    credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
if (data && (typeof data === "object")) {
    Object.keys(data).forEach(docKey => {
        firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) =>{
            console.log("Documento "+docKey+ " escrito exitosamente!");
        }).catch((error) => {
            console.error("Error al esctibir el documento: "+error)
        });
    });
}