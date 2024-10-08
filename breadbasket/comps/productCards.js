import Link from 'next/link'

const ProductCardSection = (props) => {
  return ( 
    <div className='product-card-section'>
        <div className='section-scroll-and-title'> 
       <SectionTitle title={props.title} linkTitle={props.linkTitle}/>
      
       </div>
       <div className='product-cards-container'>
         {props.children}
       </div>
    </div>
   );
}

export default ProductCardSection;


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
 
const SectionTitle = (props) => {
  return ( 
    <div className='section-title-container'>
      <a className='section-link'>{props.linkTitle}</a>
      <p className='section-title'>{props.title}</p>
    </div>
   );
}





