import React, { useState } from 'react';
import { motion, transform } from "framer-motion";
import Link from 'next/link'



const CategoryCardSection = () => {
  const [currentSelection, setCurrentSelection] = useState(0)
    return ( <div className='category-cards-section'>
    <div className='section-scroll-and-title'> 
     <SectionTitle title='Shop by Category' linkTitle='-Categories'/>
     <SectionScroll previousAction={() => setCurrentSelection(currentSelection < 0?  currentSelection + 100 : currentSelection)}  nextAction={() => setCurrentSelection(currentSelection > -500?  currentSelection - 100 : currentSelection)}/>
     </div>
     <div className='category-cards-container ' style={{transform: `translate(${currentSelection}px)`}}
     >
      <CategoryCard title='Cereals' icon={<img src="/img/svg/cereal-svgrepo-com.svg" className='category-card-svg'/>}/>
      <CategoryCard title='Drinks' icon={<img src="/img/svg/bottle-svgrepo-com.svg" className='category-card-svg'/>}/>
      <CategoryCard title='Snacks' icon={<img src="/img/svg/circular-biscuits-svgrepo-com.svg" className='category-card-svg'/>}/>
      <CategoryCard title='Sauces & Spices' icon={<img src="/img/svg/spices-svgrepo-com.svg" className='category-card-svg'/>}/>
      <CategoryCard title='Staples' icon={<img src="/img/svg/food-svgrepo-com.svg" className='category-card-svg'/>}/>
     </div>
  </div> );
}
 
export default CategoryCardSection;

const CategoryCard = (props) => {
    return ( 
      <Link  href={'/categories/' + props.title }>
      <div className='category-card'>
  {props.icon}
        <p className='category-card-text'>{props.title}</p>
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
  
  const SectionScroll = (props) => {
    return ( 
      <div className='section-scroll-container'>
        <button onClick={props.previousAction} className="secondary-button"><i className='bi bi-chevron-left'></i></button>
        <button onClick={props.nextAction} className="secondary-button"><i className='bi bi-chevron-right'></i></button>
      </div>
     );
  }