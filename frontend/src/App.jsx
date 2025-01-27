import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [products,setProducts] = useState([]);
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get("/api/products")
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()
  },[])

  // if(error){
  //   return <h1>Something went wrong</h1>
  // }

  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
      <h1>API HANDLING IN REACT</h1>

      {loading && (<h1>Loading...</h1>)}
      {error && (<h1>Something went wrong</h1>)}

      <h2>Number of products are : {products.length}</h2>
    </>
  )
}

export default App