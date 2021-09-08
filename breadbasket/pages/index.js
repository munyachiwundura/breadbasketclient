import Head from 'next/head';
import React, { useState } from 'react';
import Billboard from '../comps/billboard';
import CategoryCardSection from '../comps/categoryCards';
import ProductCardSection from '../comps/productCards';


export default function Home() {
  
  return (
    <div className='container'>
      <Head>
        <title>The Bread Basket</title>
        <meta name="description" content="All your favorite Zimbabwean Products" />
        <link rel="icon" href="/icons/breadbasketlogo.svg" />
        <meta property="og:title" content="The Bread Basket"/>
        <meta name="description" content="All your favorite Zimbabwean Products" />
        <meta property="og:image" content="https://thebreadbasket.herokuapp.com/img/billboard_image.png"/>
        <meta property="og:url" content="https://thebreadbasket.herokuapp.com"/>
      </Head>
      <body>
     <Billboard billboardTitle='All your favorite Zimbabwean products' callToAction='Shop Now'>
                <img id='billboardImageMultiProduct' className='jumbotron-image' src="/img/billboard_image.png"/>    
      </Billboard>
      <CategoryCardSection/>
      <ProductCardSection title='Explore our Top Selling Products' linkTitle='-Top Selling Products'/>
      <Billboard billboardTitle='All these great savings on your mobile' callToAction='Download App'>
          <img id='macbook' className='jumbotron-image' src="/img/macbook.png"/>
          <img id='iphone' className='jumbotron-image' src="/img/iphone.png"/>
      </Billboard>
      <ProductCardSection title='Recently Viewed Items' linkTitle='-Recently Viewed Items'/>
      </body>
    </div>
  )
}



