import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState(reactLogo)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={image} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h2>Change React Logo</h2>
      <input type="file" name='file' onChange={(evt) => {
        const file = evt.target.files[0]
        const formData = new FormData()
        formData.append('file', file)
        axios.post('http://localhost:3000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
          debugger
          console.log(res)
          setImage(URL.createObjectURL(file))
        }).catch(err => {
          debugger
          console.error(err)
        })
      }} />
    </>
  )
}

export default App
