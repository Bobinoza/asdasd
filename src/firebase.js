import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBAc_b3YGDR-hHeU6icOGzcwSmtVMdQ7x0',
  authDomain: 'chat-5141a.firebaseapp.com',
  projectId: 'chat-5141a',
  storageBucket: 'chat-5141a.appspot.com',
  messagingSenderId: '1083766321794',
  appId: '1:1083766321794:web:84181775a37f0edefbfa9b'
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
