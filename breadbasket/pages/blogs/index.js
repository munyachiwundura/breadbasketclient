import { useRouter } from "next/router";
import Link from 'next/link'
import Head from 'next/head'



const Products = (articles) => {
   const items = articles.articles
   console.log(items.map(x => x.Title))
   console.log(items)
   
    return ( 
    <div>
        <Head>
            <title>
            </title>
            <title>The Bread Basket</title>
        <meta name="description" content="All your favorite Zimbabwean Products" />
        <link rel="icon" href="/icons/breadbasketlogo.svg" />
        {/* <meta property="og:title" content={ }/> */}
        {/* <meta name="description" content={"Browse our selection of " + {  }} /> */}
        <meta property="og:image" content="/img/billboard_image.png"/>
        <meta property="og:url" content="https://thebreadbasket.herokuapp.com"/>
        </Head>
        <div>
        <div className='section-title-container'>
                    <a>-About Product</a>
                    {/* <p>{id}</p> */}
        </div>
        <div className='product-cards-container'>
        {items.map(item =>  <p>{item.Title}</p>)}
        </div>
        </div>
    
    </div> );
}
 


export async function getServerSideProps(context) {
    const res = await fetch('https://the-bread-basket.herokuapp.com/blogs/');
     const articles = await res.json();
     return{
                 props: {
                     articles
                }
            }
}

export default Products;