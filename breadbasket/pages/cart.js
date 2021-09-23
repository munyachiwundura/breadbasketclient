import styles from "../styles/cart.module.css"
import React, { useState, useEffect } from 'react';


const Cart = () => {
    
    const [token, setToken] = useState("")
    const [cartLoading, setCartLoading] = useState(true)
    const [cartData, setCartData] = useState("")
    const [lines, setCartLines] = useState("")
    

    const cartApi = async () => {
        const res = await fetch('https://the-bread-basket.herokuapp.com/api/basket/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token
        }
    });

    const data = await res.json();

    console.log("funny json response", res)
    console.log("the cart", data)
    console.log("the lines link", data.lines)

    setCartData(data)
    setCartLines(data.lines)
    setCartLoading(false)
   
}

useEffect(() => {
    setToken(localStorage.getItem("Token"))
    cartApi()
},[token])

    return ( <div>
            <div className='section-title-container'>
                <a>-Cart</a>
                <p>View Your Cart</p>
            </div>
            <button className="secondary-button">Clear All</button>
        <div>
            <div>
                <p>Products</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total Price</p>
            </div>
            {!cartLoading && <CartLines url={lines}/>}
        </div>
        <div>
        <div className='cart-totals'>
            <div>
                <p>Cart Total</p>
                <p>R{parseInt(cartData.total_incl_tax)}</p>
            </div>
            <div>
                <p>Shipping</p>
                <p>R50</p>
            </div>
            <div className='cart-total'>
                <p>Subtotal</p>
                <p>R{parseInt(cartData.total_incl_tax) + 50}</p>
            </div>
        </div>
                  
        </div>
    </div> );
}

const CartLines = (props) => {
    const url = props.url
    const [token, setToken] = useState("")
    const [cartProducts, setCartProducts] = useState([{url: 'loading'}])
    const [cartProductsLoaded, setCartProductsLoaded] = useState(false)
    console.log("the link",url)

    const cartLinesApi = async () => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token
        }
    });
console.log(response, "bata chipatterb")
    const data = await response.json()
    setCartProducts(data)
    console.log("The products", cartProducts)
    {cartProducts.length > 0 && setCartProductsLoaded(true), 1000}
}

useEffect(() => {
    cartLinesApi()
    setToken(localStorage.getItem("Token"))
},[token])

    return ( 
        <div>
            
        </div>
     );
}
 



export default Cart;
