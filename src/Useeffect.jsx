import { useState, useeffect } from "react";

// const Useeffect = () => {
//     let [count,setcount]=useState(0)
//     let [city,setcity] = useState('delhi')
//     useEffect(()=>{
//         console.log('helloooo');
        
//     },[city])
//     function A(){
//         setcount(count+1)
//     }


//     function b(){
//         setcity('mumbai')
//     }
    
//   return (
//     <div><p>{count}</p>
//         <button onClick={A}>clickk</button>


//         <p>{city}</p>
//         <button onClick={b}>click</button>

//     </div>
//   )
// }

// export default Useeffect


// import React from 'react'

// const Useeffect = () => {
//     let [data,setData]=useState([])
//     useEffect(()=>{
//         fetch('https://dummyjson.com/recipes').then((res)=>{
//             return res.json()
//         }).then((data)=>{
//             setData(data.recipes)
//         })
//     },[])
//   return (
//     <div id='card'>Useeffect
//         {
//             data.map((a,b,c)=>{
//                 console.log(a,"heheh")
//             data.filter(()=>{
//                 return a.mealType = 'dinner'

//             })

//                 return (<div>
//                     <img height='50px' width='50px' src={a.image} alt="" />
//                     <p>{a.name}</p>
//                 </div>)
//             })
//         }
//     </div>
//   )
// }

// export default Useeffect





const useeffect = () => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [mealType, setMealType] = useState("breakfast");
  
    useeffect(() => {
      fetch("https://dummyjson.com/recipes")
        .then((res) => res.json())
        .then((data) => {
          setData(data.recipes);
          setFilterData(data.recipes.filter((recipe) => recipe.mealType === "breakfast"));
        });
    }, []);
  
    const filterRecipes = (type) => {
      const filtered = data.filter((recipe) => recipe.mealType === type);
      setFilterData(filtered);
      setMealType(type);
    };
  
    return (
      <div id="card">
        <h1>Recipes</h1>
        <button onClick={() => filterRecipes("breakfast")}>Breakfast</button>
        <button onClick={() => filterRecipes("lunch")}>Lunch</button>
        <button onClick={() => filterRecipes("dinner")}>Dinner</button>
  
        <div>
          {filterData.length === 0 ? (
            <p>No recipes available for {mealType}</p>
          ) : (
            filterData.map((recipe) => (
              <div key={recipe.id}>
                <img height="50px" width="50px" src={recipe.image} alt={recipe.name} />
                <p>{recipe.name}</p>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default useeffect;

