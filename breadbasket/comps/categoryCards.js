const CategoryCardSection = () => {
    return ( <div className='category-cards-section'>
    <div className='section-scroll-and-title'> 
     <SectionTitle title='Shop by Category' linkTitle='-Categories'/>
     <SectionScroll />
     </div>
     <div className='category-cards-container'>
      <CategoryCard title='Cereals' icon={<img src="/img/svg/cereal-svgrepo-com.svg" className='category-card-svg'/>}/>
      <CategoryCard title='Drinks' icon={<img src="/img/svg/cereal-svgrepo-com.svg" className='category-card-svg'/>}/>
      <CategoryCard title='Snacks' icon={<img src="/img/svg/cereal-svgrepo-com.svg" className='category-card-svg'/>}/>
      <CategoryCard title='Sauces & Spices' icon={<img src="/img/svg/cereal-svgrepo-com.svg" className='category-card-svg'/>}/>
      <CategoryCard title='Staples' icon={<img src="/img/svg/cereal-svgrepo-com.svg" className='category-card-svg'/>}/>
     </div>
  </div> );
}
 
export default CategoryCardSection;

const CategoryCard = (props) => {
    return ( 
      <div className='category-card'>
  {props.icon}
        <p className='category-card-text'>{props.title}</p>
      </div>
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