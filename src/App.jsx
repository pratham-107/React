// import React from 'react'
// // import Useeffect from './Useeffect'
// // import './App.css'
// // import {Route, Routes } from 'react-router-dom'
// import Home from './Home'
// // import Navbar from './Navbar'
// // import About from './About'
// // import Contact from './Contact'
// // import Login from './Login'
// const App = () => {

  
//   return (
//     <div>
//       <h1>Home</h1>
//       {/* <Navbar/>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/Login" element={<Login />} />
//             <Route path="/Contact" element={<Contact />} />
//             <Route path="/About" element={<About />} />
//           </Routes> */}
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>
//       <Home />
//     </div>
//   )
// }

// export default App




                            // REDUCER //

// import React, { useReducer } from 'react'

// const App = () => {
//   function reducer(count, action){
//     if(action.type==='incre'){
//       return count+=1
//     }
//     else if(action.type==='decre'){
//       return count-=1
//     }
//     else if(action.type==='reset'){
//       return 0
//     }
//     else{
//       return count
//     }
//   }

//   let [count,dispatch] = useReducer(reducer,0)
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={()=>{dispatch({type:"incre"})}}>++</button>
//       <button onClick={()=>{dispatch({type:"decre"})}}>--</button>
//       <button onClick={()=>{dispatch({type:"reset"})}}>reset</button>

//     </div>
//   )
// }

// export default App


                                         ///CHANGING COLOR ///
import React, { useReducer } from 'react'

const App = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'red':
        return { ...state, color: 'red' }
      case 'blue':
        return { ...state, color: 'blue' }
      case 'green':
        return { ...state, color: 'green' }
      default:
        return state
    }
  }

  const initialState = { color: 'white' }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div style={{ backgroundColor: state.color, height: '100vh' }}>
      <h2>Background Color: {state.color}</h2>
      <button onClick={() => dispatch({ type: 'red' })}>Red</button>
      <button onClick={() => dispatch({ type: 'blue' })}>Blue</button>
      <button onClick={() => dispatch({ type: 'green' })}>Green</button>
    </div>
  )
}

export default App
