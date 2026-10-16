import React, { useEffect , useState} from 'react'
import Header from './Components/Header';
import Product from './Components/Product';
import Footer from './Components/Footer';



const App = () =>{
  const [products , setproducts] = usestate([])
  useEffect(() =>{
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((date) => setProducts(data.products));

  },[])
  return(
    <div>
      <Header/>
      <Product/>
      <Footer/>
   

    </div>
  )
}
export default App