import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyBqTx_QnZPiPsByzVnyyMzm3H1h7GAhjZM',
  authDomain: 'kanban-cf28f.firebaseapp.com',
  databaseURL: 'https://kanban-cf28f.firebaseio.com',
  projectId: 'kanban-cf28f',
  storageBucket: '',
  messagingSenderId: '622374777965'
})
export const db = app.database()
