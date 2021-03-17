import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBv44JPPQoImY8w0DDBFSlvEraIE58oQgY",
  authDomain: "ex3-produits-7e626.firebaseapp.com",
  projectId: "ex3-produits-7e626",
  storageBucket: "ex3-produits-7e626.appspot.com",
  messagingSenderId: "343154393616",
  appId: "1:343154393616:web:fb4cc05002f29c6dd18095"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;