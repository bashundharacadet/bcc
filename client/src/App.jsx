import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // Fetch data from backend and display it here

  const [message, setMessage] = useState('')

  useEffect(()=>{
    fetch('http://localhost:7445/hi')
    .then(res => res.text())
    .then(data => setMessage(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <><h1>School App</h1>
    <p>Data from backend: {message}</p>

    </>
  )
}

export default App
