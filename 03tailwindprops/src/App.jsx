import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />
      <div className="mt-4">
        <p className="text-sm text-slate-600">Counter: {count}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setCount((c) => c + 1)}>
          Increment
        </button>
      </div>
    </div>
  )
}

export default App