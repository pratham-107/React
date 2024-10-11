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


                                       ///CHANGING COLOR CHANGING USING REDUCEr///
//  import React, { useReducer } from 'react'

// const App = () => {
// function reducer(state, action) {
// if (action.type === 'red') {
// return { color: 'red' }
// } else if (action.type === 'blue') {
// return { color: 'blue' }
// } else if (action.type === 'green') {
// return { color: 'green' }
// } else {
// return state
// }
// }
// let initialState = {color:'white'};
                                         
// let [state, dispatch] = useReducer(reducer, initialState)
                                         
// return (
// <div style={{ backgroundColor: state.color, height: '100vh' }}>
// <h2>Background Color: {state.color}</h2>
// <button onClick={() => dispatch({ type: 'red' })}>Red</button>
// <button onClick={() => dispatch({ type: 'blue' })}>Blue</button>
// <button onClick={() => dispatch({ type: 'green' })}>Green</button>
// </div>
// )
// }
                                         
// export default App
                                         








import React, { useReducer } from 'react'
import './App.css'
import Home from './Home'
import Cart from './Cart'
import Navbar from './Navbar'


const App = () => {
  return (
    <div>
      <Home />
      <Cart />
      <Navbar />

      <div className="card">
      <img 
        src="https://via.placeholder.com/300" 
        alt="Sample Image" 
        className="card-image"
      />
      <h2 className="card-heading">Card Heading</h2>
      <button className="card-button">Click Me</button>
    </div>

    </div>
  )
}


export default App