import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {  useEffect, useState } from "react";
import Rive from 'rive-react';


const Cart = () => {

    const token = localStorage.getItem("Token")
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

useEffect(() => {cartApi()},[])

    return ( 

    <motion.div className='side-menu'>
        <div className='side-menu-header'>      
            <i className='bi bi-cart'></i>
            <p>My Cart</p>  
     </div>
        <div className='cart-products-container'>
            
{cartLoading?  <Rive src="breadbasketlogo.riv"/> : <CartLines lines={lines}/>}


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
        <div className='cart-buttons'>
                <Link href='/checkout/'>
                <button className='primary-button'>Checkout</button>
                </Link>
                <button className='secondary-button'>Edit Cart</button>
            </div>
    </motion.div>
    
    
     );
}

const CartLines = (props) => {
    const token = localStorage.getItem("Token")
    const [cartProducts, setCartProducts] = useState([{url: 'loading'}])
    const [cartProductsLoaded, setCartProductsLoaded] = useState(false)
    const cartLinesApi = async () => {
    
    const response = await fetch(props.lines, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token
        }
    });

    const dat = await response.json()
    const prods = await setCartProducts(dat)
    console.log(dat)
    console.log(cartProducts)
    {cartProducts.length > 0 && setCartProductsLoaded(true), 1000}
}

useEffect(() => {cartLinesApi()},[])

    
    return ( 
<div className='cart-products'>

               {cartProductsLoaded?  cartProducts.map(x => <CartProduct link={x.url} url={x.product} quantity={x.quantity} title='Cerevita Cocoa and Malt' price={x.price_incl_tax}/>) :  <Rive src="breadbasketlogo.riv"/> }    

</div>
     );
}
 

const CartProduct = (props) => {
    const url = props.url
    const link = props.link
    const token = localStorage.getItem("Token")
    
    const [productDetail, setProductDetail] = useState("")
    const [displayItem, setDisplayItem] = useState(true)


    const DeleteItem = async () => {
        const res = await fetch(link, {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Token " + token
            }

        }); 
        console.log(link, "was deleted")
        setDisplayItem(false)
    }

    const Products_api = async () => {
        const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token
        }
    }); 

    const data = await res.json();

    console.log("product details",data)
    setProductDetail(data)
    }
    
    useEffect(() => {Products_api()},[])


    
    return ( 
        <AnimatePresence>
    {displayItem && <motion.div className='cart-product-card'
initial={{x:0}}
animate={{x:0}}
exit={{x:350}}
    
    >
        <div className='cart-product-image-container'>
            <img src={productDetail? productDetail.images[0].original: ""}></img>
        </div>
        <div className='cart-product-title-and-price-container'>
            <p className='cart-product-title'>{productDetail.title}</p>
            <p className='cart-product-quantity'>Quantity: {props.quantity}</p>
            <p className='cart-product-price'>R{props.price}</p>
        </div>
        <button className='secondary-button cart-product-delete' onClick={() => DeleteItem()}><i className='bi bi-trash'></i></button>
    </motion.div>}
    </AnimatePresence>
    
    );
}



export default Cart;