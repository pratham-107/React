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
                                         





                        ///MENU DATA ////

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Home from './Home';
// import Cart from './Cart';
// import Navbar from './Navbar';

// const App = () => {
//   let [recipes, setRecipes] = useState([]);
//   let [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/recipes')
//       .then((res) => res.json())
//       .then((data) => {
//         setRecipes(data.recipes);
//       });
//   }, []);

//   const addToCart = (recipe) => {
//     setCartItems((prevItems) => [...prevItems, recipe]);       //previous items ko dekhne ke liye
//   };

//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <Cart cartItems={cartItems} />

//       <div className="card-container">

        // {recipes.map((recipe) => (
        //   <div key={recipe.id} className="card">
        //     <img src={recipe.image} alt={recipe.name} className="card-image" />

        //     <h2 className="card-heading">{recipe.title} {recipe.name}</h2>

        //     <button className="card-button" onClick={() => addToCart(recipe)}>Add to Cart</button>

        //   </div>
        // ))}

//       </div>

//     </div>
//   );
// };

// export default App;




// import React, { useState } from 'react'

// const App = () => {
//   let [count,setcount] = useState(0)
//   let [bgcolor,setbgcolor] = useState('white');

//   function fun1(){
//     setcount(count+1)

//     let color = ['red','blue','green','yellow','black','pink','purple']

//     setbgcolor(color[count % bgcolor.length])
//   }

//   return (
//     <div>
//       <p style={{backgroundColor: bgcolor,height:'200px'}}>{count}</p>
//       <button onClick={fun1}>click</button>
//     </div>
//   )
// }

// export default App








