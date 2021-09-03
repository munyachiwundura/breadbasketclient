import Link from 'next/link'

const ProductCardSection = (props) => {
  return ( 
    <div className='product-card-section'>
        <div className='section-scroll-and-title'> 
       <SectionTitle title={props.title} linkTitle={props.linkTitle}/>
       <SectionScroll />
       </div>
       <div className='product-cards-container'>
         <ProductCard category='Drinks' price='15' title='Pfuko Maheu Original' image="/img/pfuko_maheu_original.png" />
         <ProductCard category='Cereals' price='60' title='Cerevita Cocoa & Malt' image="/img/cerevita_choco_and_malt.png"/>
         <ProductCard category='Drinks' price='50' title='Mazoe Orange Crush' image="/img/mazoe_orange.png"/>
         <ProductCard category='Sauces' price='30' title='RabRoy Tomatoe Sauce' image="/img/rabroy_tomatoe_sauce.png"/>
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

const SectionScroll = () => {
  return ( 
    <div className='section-scroll-container'>
      <button className="circular-button"><i className='bi bi-chevron-left'></i></button>
      <button className="circular-button"><i className='bi bi-chevron-right'></i></button>
    </div>
   );
}



