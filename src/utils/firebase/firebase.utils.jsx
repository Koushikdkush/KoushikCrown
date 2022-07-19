import { initializeApp } from 'firebase/app';
import {
    getAuth, signInWithPopup, GoogleAuthProvider,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut, onAuthStateChanged,
}
    from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDzgOongCE62943pk1oP4McLuFqdGq-xnQ",
    authDomain: "crwn-clothing-db-7c6b5.firebaseapp.com",
    projectId: "crwn-clothing-db-7c6b5",
    storageBucket: "crwn-clothing-db-7c6b5.appspot.com",
    messagingSenderId: "272686702589",
    appId: "1:272686702589:web:428ae10b5abb6d1c510394",
    measurementId: "G-1GLEL25R7T"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
provider.getCustomParameters({
    prompt: 'Choose Your Account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signinwithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore();

// Products
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })
    await batch.commit();
    console.log('done')
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)

    const Snapshot = await getDocs(q)
    return Snapshot.docs.map((docsnapShot) => docsnapShot.data())


}


export const CreateUserdocFromAuth = async (userAuth, additionalInfo = {}) => {

    if (!userAuth) return
    const userDocref = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocref);


    if (!userSnapshot.exists()) {
        const { displayname, email } = userAuth
        const createdAt = new Date();
        try {
            await setDoc(userDocref, {
                displayname, email, createdAt, ...additionalInfo
            })
        }
        catch (error) {
            console.log('error creating the user ', error.message);
        }

    }
    return userSnapshot;

}

export const createAuthUserWithEmailandPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const siginAuthUserEmailandPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}


export const signoutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
    return new Promise((reslove, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            unsubscribe()
            reslove(userAuth)
        },
            reject
        )

    })
}