import { motion } from "framer-motion";
import Link from "next/link";
import {  useEffect, useState } from "react";

const Cart = () => {
    console.log("tapinda")
    var token = localStorage.getItem("Token")
    
    var [cartData, setCartData] = useState("")
    var [cartProducts, setCartProducts] = useState([{url: 'loading'}])

    const cartApi = async () => {
        const res = await fetch('https://the-bread-basket.herokuapp.com/api/basket/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token
        }
    });
    const data = await res.json();
    console.log("the lines", data.lines)
    
    const response = await fetch(data.lines, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token
        }
    });
    const dat = await response.json();

    console.log("between the lines" ,dat)
    setCartProducts(dat)
    setCartData(data)
    console.log( "state of mind", cartData, cartProducts)
}

useEffect(() => {cartApi()},[])


    
    

    return ( 

    <motion.div className='side-menu'>
        <div className='side-menu-header'>      
            <i className='bi bi-cart'></i>
            <p>My Cart</p>  
     </div>
        <div className='cart-products-container'>
            <div className='cart-products'>
                {cartProducts.map(x => <CartProduct url={x.url} title='Cerevita Cocoa and Malt' price='R50' image='/img/cerevita_choco_and_malt.png'/>)}     
            </div>
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
 

const CartProduct = (props) => {
    const url = props.url
    const token = localStorage.getItem("Token")
    
    const [productInfo, setProductInfo] = useState("")
    const [productDetail, setProductDetail] = useState("")

    const Products_api = async () => {
        const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token
        }
    }); 

    const data = await res.json();
    const response = await fetch(data.product)
    const detail = await response.json();

    console.log("product details",data, detail)
    setProductInfo(data)
    setProductDetail(detail)
    }
    
    useEffect(() => {Products_api()},[])


    console.log("try everythhing" ,productDetail.images)
    return ( <motion.div className='cart-product-card'>
        <div className='cart-product-image-container'>
            <img src={productDetail? productDetail.images[0].original: ""}></img>
        </div>
        <div className='cart-product-title-and-price-container'>
            <p className='cart-product-title'>{productDetail.title}</p>
            <p className='cart-product-quantity'>Quantity: {productInfo.quantity}</p>
            <p className='cart-product-price'>R{productInfo.price_incl_tax}</p>
        </div>
        <button className='secondary-button cart-product-delete'><i className='bi bi-trash'></i></button>
    </motion.div> );
}

export default Cart;