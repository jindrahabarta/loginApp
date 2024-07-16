import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyCBRLMrTctrEHtigi-Ie1Iw7Nw07aQZ1ak',
    authDomain: 'login1-2f2fd.firebaseapp.com',
    projectId: 'login1-2f2fd',
    storageBucket: 'login1-2f2fd.appspot.com',
    messagingSenderId: '895601919319',
    appId: '1:895601919319:web:6f705e91345de4788fea12',
    measurementId: 'G-WTGV27THC4',
}

const useDb = () => {
    initializeApp(firebaseConfig)
    const db = getFirestore()
    // const dbImg = getStorage()
    return { db }
}

export default useDb
