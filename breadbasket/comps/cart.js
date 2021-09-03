import { motion } from "framer-motion";
import Link from "next/link";

const Cart = () => {
    return ( 
        
    <motion.div className='side-menu'>
        <div className='side-menu-header'>      
            <i className='bi bi-cart'></i>
            <p>My Cart</p>  
     </div>
        <div>
            <div className='cart-products'>
                <CartProduct title='Cerevita Cocoa and Malt' price='R50' image='/img/cerevita_choco_and_malt.png'/>
                <CartProduct title='Cerevita Cocoa and Malt' price='R50' image='/img/cerevita_choco_and_malt.png'/>
                <CartProduct title='Cerevita Cocoa and Malt' price='R50' image='/img/cerevita_choco_and_malt.png'/>
            </div>
            <div className='cart-totals'>

            <div>
                <p>Cart Total</p>
                <p>R150</p>
            </div>
            <div>
                <p>Shipping</p>
                <p>R150</p>
            </div>
            <div className='cart-total'>
                <p>Subtotal</p>
                <p>R150</p>
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
    return ( <motion.div className='cart-product-card'>
        <div className='cart-product-image-container'>
            <img src={props.image}></img>
        </div>
        <div className='cart-product-title-and-price-container'>
            <p className='cart-product-title'>{props.title}</p>
            <p className='cart-product-quantity'>Quantity: 3</p>
            <p className='cart-product-price'>{props.price}</p>
        </div>
        <button className='secondary-button cart-product-delete'><i className='bi bi-trash'></i></button>
    </motion.div> );
}

export default {Cart, CartProduct};