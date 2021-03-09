import {fire} from "../config/firebase-config";

export const useUser = () => fire.auth().currentUser;

export const authLogin = async ({ email, password }) => {
    await fire.auth().signInWithEmailAndPassword(email, password);
};
