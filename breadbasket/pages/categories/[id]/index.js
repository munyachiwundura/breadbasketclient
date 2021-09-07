import { useRouter } from "next/router";
import Link from 'next/link'
import Head from 'next/head'



const Products = (products) => {
    const router = useRouter()
    const{id} = router.query
   const items = products.products
   const currentItems = id !== 'All'? items.filter(item => item.categories[0] === id ) : items; 
   console.log(id)
   console.log(items)
   console.log(currentItems)
   
    return ( 
    <div>
        <Head>
            <title>
                { id }
            </title>
        </Head>
        <div>
        <div className='section-title-container'>
                    <a>-About Product</a>
                    <p>{id}</p>
        </div>
        <div className='product-cards-container'>
        {currentItems.map(item =>  <ProductCard category={item.categories[0]} price='30' title={item.title} image={item.images[0].original}/>)}
        </div>
        </div>
    
    </div> );
}
 
const ProductCard = (props) => {
    return ( <Link href={'/products/' + props.title }>
        <div className='product-card'>
      <div className='product-image-container'>
      <img className='product-card-image' src={props.image}/>
      <div className='product-image-shaddow'></div>
      </div>
      <div className="product-card-text-container">
        <p className='product-card-title'>{props.title}</p>
        <div className='product-category-and-price'>
          <button id={props.category + '-button'}>{props.category}</button>
          <p>R{props.price}</p>
        </div>
      </div>
    </div>
    </Link>
     );
}


export async function getServerSideProps(context) {
    const res = await fetch('https://the-bread-basket.herokuapp.com/api/products/');
     const products = await res.json();
     return{
                 props: {
                     products
                }
            }
}

export default Products;