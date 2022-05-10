import React, {useState, useEffect} from 'react'
import './productListStyle.scss'
import ProductItem from '../ProductItem/ProductItem.jsx'
import axios from 'axios'
import { getDefaultNormalizer } from '@testing-library/react'

const API = 'https://api.escuelajs.co/api/v1/products'

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        getData();
    },[])

    const getData = async() => {
        try{
            const response = await axios.get(API);
            setProducts(response.data)
            console.log(response.data)
        } catch {
            console.log('error')
        }
     
    }


  return (
    <section id="productList">
        <ul className="productList__container">
            {products.map((product)=><ProductItem description={product.description} 
            src={product.category.image} title={product.title}  price={product.price} key={product.id}/>)}
        </ul>
    </section>
  )
}

export default ProductList