import styles from "../styles/cartPage.module.css"
import React, { useState, useEffect} from 'react';
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Head from 'next/head'



const Cart = () => {
    
    const [cartLoading, setCartLoading] = useState(true)
    const [cartData, setCartData] = useState("")
    const [lines, setCartLines] = useState("")
    
    const cartApi = async () => {
        const res = await fetch('https://the-bread-basket.herokuapp.com/api/basket/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + localStorage.getItem("Token")
        }
    });

    const data = await res.json();
    setCartData(data)
    setCartLines(data.lines) 
    setCartLoading(false) 
}

useEffect(() => {
    cartApi() 
},[])


    return ( 
        <div className="page_content">
            <Head>
        
        <title>Shopping Cart</title>
        
    <link rel="icon" href="/icons/breadbasketlogo.svg" />
    
    </Head>
            <div className='section-title-container'>
        
                <a>-Cart</a>
                <p>Shopping Cart</p>
            </div>
            <div className={styles.row}>
                <button className={styles.clear_all_btn}>Clear All</button>
            </div>
        <div>
            <div className={styles.table_header}>
                <p className={styles.table_cell_2}>Product</p>
                <p className={styles.table_cell}>Price</p>
                <p className={styles.table_cell}>Quantity</p>
                <p className={styles.table_cell}>Total Price</p>
                <p className={styles.table_cell}></p>
            </div>
            {!cartLoading && <CartLines url={lines}/>}
        </div>
        <div className={styles.container}>
            <div id={styles.cartTotals} className="section-title-container">
                <a>-Your Totals</a>
                <p>Total  <span className={styles.price_title}>R{parseInt(cartData.total_incl_tax) + 50}</span> </p>
            <Link href='/checkout/'>
                <button id={styles.checkoutButton} className='primary-button'>Checkout</button>
                </Link>
            </div>
        <div className={styles.totals_container}>
            <div className={styles.totals}>
                <p>Cart Total</p>
                <p>R{parseInt(cartData.total_incl_tax)}</p>
            </div>
            <div className={styles.totals}>
                <p>Shipping</p>
                <p>R50</p>
            </div>
            <div id={styles.subtotal} className={styles.totals}>
                <p>Subtotal</p>
                <p>R{parseInt(cartData.total_incl_tax) + 50}</p>
            </div>
        </div>
                  
        </div>
    </div> 
    );
}

const CartLines = (props) => {
    const url = props.url
    const [cartProducts, setCartProducts] = useState([{url: 'loading'}])
    const [cartProductsLoaded, setCartProductsLoaded] = useState(false)
    console.log("the link",url)
    const cartLinesApi = async () => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + localStorage.getItem("Token")
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
},[])

    return ( 
        <div>
            {cartProductsLoaded && cartProducts.map(x => <CartItem productLink={x.product} quantity={x.quantity}  price={x.price_incl_tax} link={x.url}/> )}
        </div>
     );
}

const CartItem = (props) => {

    const [productDetail, setProductDetail] = useState("")
    const [productLoaded, setProductLoaded] = useState("")
    const [displayItem, setDisplayItem] = useState(true)
    const [ammount, setAmmount] = useState (props.quantity)

    const url = props.productLink
    const link = props.link
    console.log("bata ",url)

    const cartProductsApi = async () => {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Token " + localStorage.getItem("Token")
            }
        });
    
        const data = await response.json()
        setProductDetail(data)
        setProductLoaded(false)
        {productDetail.length > 0 && setProductLoaded(true), 1000}
        console.log("Products", productDetail)
    }

    const DeleteItem = async () => {
        const res = await fetch(link, {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Token " + localStorage.getItem("Token")
            }

        }); 
        console.log(link, "was deleted")
        setDisplayItem(false)
        
    }
    
    useEffect(() => {
        cartProductsApi()
    }, [])

    return (<AnimatePresence> {displayItem && <motion.div className={styles.container}
        initial={{x:0}}
        animate={{x:0}}
        exit={{x:'100%'}}
    >
        <div className={styles.table_cell_2}>
        <div className='cart-product-image-container'>
            <img src={productDetail? productDetail.images[0].original: ""}></img>
        </div>
            <p className={styles.product_title}>{productDetail.title}</p>
        </div>
        <div className={styles.table_cell}>
            <p className='cart-product-price'>R{props.price}</p>
        </div>
        <div className={styles.table_cell}>
        <div className='quantity-selector'>
                            <i onClick={() => setAmmount(ammount > 1 ? ammount - 1 : ammount)} className='bi bi-chevron-down'></i>
                            <p>{ammount}</p>
                            <i onClick={() => setAmmount(ammount < 20 ? ammount + 1 : ammount)} className='bi bi-chevron-up'></i>
                        </div>
            
        </div>
        <div className={styles.table_cell}>
            <p className='cart-product-price'>R{props.price*ammount}</p>
        </div>
        <div className={styles.table_cell}>
        <button className='secondary-button' onClick={() => DeleteItem()}><i className='bi bi-trash'></i></button>
        </div>

    </motion.div>}</AnimatePresence> );
}
 
 




export default Cart;
