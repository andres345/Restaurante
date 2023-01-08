import firebase from "firebase/app";
import "firebase/auth";
//import vue from "vue";

const firebaseConfig = {
    apiKey: 'AIzaSyCN_W-dmmHprjMNdE7nPnYDRsWOrCg1HUU',
    authDomain: 'burgerumm.firebaseapp.com',
    projectId: 'burgerumm',
    storageBucket: 'burgerumm.appspot.com',
    messagingSenderId: '707717867922',
    appId: '1:707717867922:web:e6f9b1afd2a5231512794b'
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Creando inicio de sesión
// -->Utils
//const auth = firebase.auth();
//const db = firebase.firestore();

/*const fire = new vue({
    data:{

    },
    methods:{
        state(collback){
            auth.onAuthStateChanged(function(user){
                collback(user);
            })
        },
        register(data){
            return auth.createUserWithEmailAndPassword(data.email, data.pass);
        },
        login(data){
            return auth.signInWithEmailAndPassword(data.email, data.pass);
        },
        logout(){
            auth.signOut();
        }
    }
})*/

//Exports
//export { auth };
export const db = firebase.database();
