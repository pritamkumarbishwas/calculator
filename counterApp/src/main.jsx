import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='counter'>
      <Counter />
    </div>
  </React.StrictMode>,
)
