import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initialAuthnitcation=()=>{
    initializeApp(firebaseConfig);
}
export default initialAuthnitcation;