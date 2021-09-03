import { motion } from "framer-motion";

const Search = () => {
    return ( 
        <motion.div className="searchbox-container" initial='hidden'  animate='visible' variants={{
            hidden: {
              height:0,

            },
            visible: {
              height:'auto',
              transition: {duration: .2}
            },
            

          }}>
<div className="searchbox-logo">
<i id='searchboxLogo' className='bi bi-basket'></i>
</div>
<div className='search-form'>
<div className='searchbox'>
<form>
<input className='search-input' placeholder='Search'/>
<button className='search-submit'> <i className="bi bi-search"></i></button>
</form>
</div>
<div className='search-suggestions'>
<p>Popular Searches</p>
<ul>
<li>Mazoe Orange Crush</li>
<li>Pfuko Maheu Original</li>
<li>Cerevita Chocomalt</li>
<li>Royco Usvi Mix Beef</li>
</ul>
</div>
</div>
<div className='searchbox-close'>

</div>

</motion.div>
     );
}
 
export default Search;