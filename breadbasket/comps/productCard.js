import Link from 'next/link'

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

export default ProductCard;
