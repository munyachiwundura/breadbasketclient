import {useRouter}  from 'next/router'
import Head from 'next/head'
import Billboard from '../../comps/billboard';
import ProductCardSection from '../../comps/productCards';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";


const Product = (props) => {
    
    const [token, setToken] = useState ("")
    const [ammount, setAmmount] = useState (1)
    const [prices, setPrices] = useState ("")
    const [addToCart, setAddToCart] = useState ("Add To Cart")
    
    console.log(props.articles)
    const router = useRouter()
    const{id} = router.query
    const currentProduct = props.articles.filter(x => {return x.title == id})
    console.log(currentProduct[0])
    
    const GetPrices = async () => {
        const response = await fetch(currentProduct[0].stockrecords)
        const data = await response.json();

        const res = await fetch(data[0].url)
        const dat = await res.json()

        console.log("the prices", data)
        console.log("the prices", dat)
        
        setPrices(dat)
    }

    useEffect(() => {
        setToken(localStorage.getItem("Token"))
        GetPrices()
}, [])


    const AddItem = async () => {
        setAddToCart("Adding Item!")
        const response = await fetch('https://the-bread-basket.herokuapp.com/api/basket/add-product/', {
            method: 'POST',
            body: JSON.stringify({
                url : currentProduct[0].url,
               quantity : ammount
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Token " + token
            }
            
        }); 
        alert(ammount + " " + currentProduct[0].title + " " + "was added")
        setAmmount(1)
        setAddToCart("Item Added")
        setAddToCart("Add To Cart")

    }
  

    return ( 
    <div>
        <Head>
        
            <title>
                { currentProduct[0].title }
            </title>
            <title>The Bread Basket</title>
        <meta name="description" content={currentProduct[0].description} />
        <link rel="icon" href="/icons/breadbasketlogo.svg" />
        <meta property="og:title" content={id}/>
        <meta name="description" content={currentProduct[0].description} />
        <meta property="og:image" content={currentProduct[0].images[0].original}/>
        </Head>
<div className='product-page'>
            <div className='breadcrumbs'>
                <p>Home\ Categories \ Drinks \ Mazoe Orange Crush 2L</p>
            </div>
            <div className='product-slideshow-and-actions-container'>
                <div className='product-slideshow'>
                    <div className='product-image-thumbnails'>
                        <SlideshowThumbnail thumbanailsrc={currentProduct[0].images[0].original}/>
                        <SlideshowThumbnail thumbanailsrc={currentProduct[0].images[0].original}/>
                        <SlideshowThumbnail thumbanailsrc={currentProduct[0].images[0].original}/>
                    </div>
                    <div className='product-image'>
                        <img src={currentProduct[0].images[0].original}></img>
                        {ammount > 1 && <motion.div initial='hidden' exit='hidden' animate='visible' variants={{
            hidden: {
              x: 300,
            },
            visible: {
              x: 0,
              transition: {duration: .3}
            },
            }}>
<img id='productImageTwo' src={currentProduct[0].images[0].original}></img></motion.div>}
                        {ammount > 2 && <motion.div initial='hidden' exit='hidden' animate='visible' variants={{
            hidden: {
              x: 300,
            },
            visible: {
              x: 0,
              transition: {duration: .3}
            },
            }}><img id={ammount > 3 ? 'productImageThreeDark' : 'productImageThree'} src={currentProduct[0].images[0].original}></img></motion.div>}
                        {ammount > 3 && <p> {ammount} </p>}
                <div className='product-image-shadow'></div>

                    </div>
                </div>
                <div className='product-actions'>
                    <div className='section-title-container'>
                    <a>-Top Selling</a>
                    <p>{id}</p>
                    </div>
                    <div className='product-page-category-and-price'>
                        <button>Drinks</button>
                        <p>R {prices.price}</p>
                    </div>
                    <div className='quantity-and-add-to-cart'>
                        <div className='quantity-selector'>
                            <i onClick={() => setAmmount(ammount > 1 ? ammount - 1 : ammount)} className='bi bi-chevron-down'></i>
                            <p>{ammount}</p>
                            <i onClick={() => setAmmount(ammount < prices.num_in_stock ? ammount + 1 : ammount)} className='bi bi-chevron-up'></i>
                        </div>
                        <button className='primary-button' onClick={() => AddItem()}>{addToCart}</button>
                    </div>
                </div>
            </div>
            <div className='product-information-and-description'>
                <div className='product-description'>
                <div className='section-title-container'>
                    <a>-About Product</a>
                    <p>Description</p>
                    </div>
<p className='product-description-text'>{currentProduct[0].description} </p>
                </div>
                <div className='product-information'>
                <div className='section-title-container'>
                    <p>Product Information</p>
                    </div>
                    <div className='product-information-card'>
<h2>Product brand</h2>
<p>Schewppes</p>
                    </div>
                    <div className='product-information-card'>
<h2>Product Weight</h2>
<p>2.250 kg</p>
                    </div>
                    <div className='product-information-card'>
<h2>Main Barcode</h2>
<p>60036678920841</p>
                    </div>
                </div>
            </div>
            <Billboard billboardTitle='All your favorite Zimbabwean products' callToAction='Shop Now'>
            <img id='billboardImageMultiProduct' className='jumbotron-image' src="/img/billboard_image.png"/>    
      </Billboard>
      <ProductCardSection title='Recently Viewed Items' linkTitle='-Recently Viewed Items'/>
        </div>


    </div>
        );
}


const SlideshowThumbnail = (props) => {
    return ( 
        <div className='product-thumbnail'>
            <img src={props.thumbanailsrc}></img>
            <div className='product-thumbnail-shadow'></div>
        </div>
     );
}



export async function getStaticProps(context) {
    const res = await fetch('https://the-bread-basket.herokuapp.com/api/products/');
    const articles = await res.json();
    
        
     return{
                 props: {
                     articles
                }
            }
}

export async function getStaticPaths() {
    const res = await fetch('https://the-bread-basket.herokuapp.com/api/products/');
    const articles = await res.json();
    

    const paths = articles.map(article => {
        return {params: {id: article.title}}

    })

    return {
        paths,
        fallback: false
    }
}



export default Product;