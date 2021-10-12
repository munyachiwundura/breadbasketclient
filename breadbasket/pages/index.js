import Head from 'next/head';
import React, { useState } from 'react';
import Billboard from '../comps/billboard';
import CategoryCardSection from '../comps/categoryCards';
import ProductCardSection from '../comps/productCards';
import ProductCard from '../comps/productCard';
import BlogPostCard from '../comps/blogPostCard'
import styles from "../styles/home.module.css"





export default function Home(props) {
  const blog_articles = props.articles
  const filteredProducts = props.products.filter(x => {return x.categories[1] === "Featured"})
  console.log(filteredProducts)
  
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
      <main>
     <Billboard billboardTitle='All your favorite Zimbabwean products' callToAction='Shop Now' link="/categories/All Categories">
                <img id='billboardImageMultiProduct' className='jumbotron-image' src="/img/billboard_image.png"/>    
      </Billboard>
      <CategoryCardSection/>
      <ProductCardSection title='Explore our Top Selling Products' linkTitle='-Top Selling Products'>
        {filteredProducts.slice(0, 6).map(item => <ProductCard category={item.categories[0]} price='30' title={item.title} image={item.images[0].original}/>) }
      </ProductCardSection>
      <Billboard billboardTitle='All these great savings on your mobile' callToAction='Download App'>
          <img id='macbook' className='jumbotron-image' src="/img/macbook.png"/>
          <img id='iphone' className='jumbotron-image' src="/img/iphone.png"/>
      </Billboard>
      <div className={styles.title_container}>
            <div className='section-title-container'>
                <a>-Blog</a>
                <p>Check Out Our Blog</p>
            </div>
            </div>
            <div className={styles.blogs_container}>
            {blog_articles.map(post => <BlogPostCard cover={"https://the-bread-basket.herokuapp.com" +post.Cover} blogTitle={post.Title} blogCategory="drinks"/>)}
            </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
    const res = await fetch('https://the-bread-basket.herokuapp.com/blogs/');
     const articles = await res.json();
     const prod = await fetch('https://the-bread-basket.herokuapp.com/api/products/');
   const products = await prod.json();
     return{
                 props: {
                     articles, products
                }
            }
}




