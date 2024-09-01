'use server'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword , GoogleAuthProvider, signInWithPopup,signInWithRedirect  } from 'firebase/auth';
import {auth} from "@/lib/firebase";
import {re} from "prisma/build/child";

function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}


function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

const googleProvider = new GoogleAuthProvider();

export async function signInWithGoogle() {
    await signInWithRedirect(auth, googleProvider);
}
