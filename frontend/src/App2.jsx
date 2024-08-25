import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App2() {

  const [products,setProducts] = useState([]);
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const [search,setSearch] = useState("");

  useEffect(() => {

    const controller = new AbortController(); //To get response in sequence
    //Debouncing for Cancelling old requests

    (async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get("/api/products?search=" + search,{
          signal: controller.signal
        }); //Race condition in API calls => large number of API calls at a time
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
      } catch (error) {

        if(axios.isCancel(error)){
          console.log("Request cancelled",error.message);
          return;
        }

        setError(true)
        setLoading(false)
      }
    })()

    //Clean up method
    //Unmounting
    return () => {
      controller.abort()
    }

  },[search])

  // if(error){
  //   return <h1>Something went wrong</h1>
  // }

  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
      <h1>API HANDLING IN REACT</h1>
      <input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />

      {loading && (<h1>Loading...</h1>)}
      {error && (<h1>Something went wrong</h1>)}

      <h2>Number of products are : {products.length}</h2>
    </>
  )
}

export default App2