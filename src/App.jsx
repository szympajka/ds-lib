import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button>Hello</Button>
    </div>
  )
}

export default App
