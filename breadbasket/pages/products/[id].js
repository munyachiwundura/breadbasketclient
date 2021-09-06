import {useRouter}  from 'next/router'
import Head from 'next/head'
import productStyles from '../../styles/products.module.css'
import Billboard from '../../comps/billboard';
import ProductCardSection from '../../comps/productCards';
import Image from 'next/image'
import { useState } from 'react';


const Product = (articles) => {
    const router = useRouter()
    const{id} = router.query
    const currentProduct = articles.articles.filter(x => {return x.id == id})
  const [ammount, setAmmount] = useState (1)
    return ( 
    <div>
        <Head>
        
            <title>
                { currentProduct[0].name }
            </title>
        </Head>
<div className='product-page'>
            <div className='breadcrumbs'>
                <p>Home\ Categories \ Drinks \ Mazoe Orange Crush 2L</p>
            </div>
            <div className='product-slideshow-and-actions-container'>
                <div className='product-slideshow'>
                    <div className='product-image-thumbnails'>
                        <SlideshowThumbnail thumbanailsrc={currentProduct[0].image}/>
                        <SlideshowThumbnail thumbanailsrc={currentProduct[0].image}/>
                        <SlideshowThumbnail thumbanailsrc={currentProduct[0].image}/>
                    </div>
                    <div className='product-image'>
                        <img src={currentProduct[0].image}></img>
                        {ammount > 1 && <img id='productImageTwo' src={currentProduct[0].image}></img>}
                        {ammount > 2 && <img id={ammount > 3 ? 'productImageThreeDark' : 'productImageThree'} src={currentProduct[0].image}></img>}
                        {ammount > 3 && <p> {ammount} </p>}
                <div className='product-image-shadow'></div>

                    </div>
                </div>
                <div className='product-actions'>
                    <a>-Top Selling</a>
                    <h1>{id} </h1>
                    <div className='product-page-category-and-price'>
                        <button>Drinks</button>
                        <p>R50</p>
                    </div>
                    <div className='quantity-and-add-to-cart'>
                        <div className='quantity-selector'>
                            <i onClick={() => setAmmount(ammount > 1 ? ammount - 1 : ammount)} className='bi bi-chevron-down'></i>
                            <p>{ammount}</p>
                            <i onClick={() => setAmmount(ammount + 1)} className='bi bi-chevron-up'></i>
                        </div>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className='product-information-and-description'>
                <div className='product-description'>
                    <a>-About Product</a>
                    <h1>Description</h1>
<p>{currentProduct[0].description} </p>
                </div>
                <div className='product-information'>
                    <h1>Product Information</h1>
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



export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:3000/products.json/');
     const articles = await res.json();
     return{
                 props: {
                     articles
                }
            }
}



export default Product;