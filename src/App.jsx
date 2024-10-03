import React from 'react'
// import Home from './Home'
import { useState } from 'react'


const App = () => {
  // let user = 'rahul'
  // let [data,setData] = useState(0)
     let [color,setColor] = useState('blue')

  // function done(){
  //   setData(data+1)
  // }
  // function minus(){
  //   setData(data-1)
  // }
  // function res(){
  //   setData(0)
  // }


  function change(){
    setColor('red')
  }
  function rev(){
    setColor('blue')
  }

  return (
    <div style={{backgroundColor:color,height:'400px'}}>
        {/* <Home a={user}/> */}
        {/* <p>{data}</p>
        <button onClick={done}>click</button>
        <button onClick={minus}>-</button>
        <button onClick={res}>reset</button> */}

        <button onClick={change}>red</button>
        <button onClick={rev}>blue</button>
    </div>
  )
}

export default App