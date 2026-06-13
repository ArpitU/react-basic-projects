import React from 'react'
import './App.css'
const App = () => {
  const [count, setCount] = React.useState(0)
  function increase(){
    console.log('increasing');
    setCount(count+1)
  }
  function decrease(){
    console.log('decreasing');
    setCount(count-1)
  }
  return (
    <div className="body">
      <h1 className="h1">{count}</h1>
      <button onClick={increase} className="button">increase</button>
      <button onClick={decrease} className="button">decrease</button>
    </div>
  )
}

export default App

