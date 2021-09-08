import { motion } from "framer-motion";
import { useState } from "react";
import Link from 'next/link'

const Search = () => {
const [search, setSearch] = useState("")
const commonSearches = ['Lyons Peanut Butter',
'RabRoy Tomatoe Sauce',
'Lobels Apricots',
'Cerevita Choco and Malt',
'Cerevita Corn and Banana',
'Pfuko Strawberry',
'Pfuko Original',
'Pfuko Buttermilk',
"Fun 'n Fresh Passion Fruit",
"Fun 'n Fresh Orange and Mango",
"Fun 'n Fresh Mixed Fruit",
'Cascade Orange',
'Mazoe Peach',
'Mazoe Blackberry',
'Mazoe Orange Crush']

const suggestions = commonSearches.filter(str => str.toLowerCase().includes(search.toLowerCase()))
 
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

<div className='search-form'>
<div className='searchbox'>
<form>
<input className='search-input' placeholder='Search' onChange={e => setSearch(e.target.value)} value={search}/>
<button className='search-submit'> <i className="bi bi-search"></i></button>
</form>
</div>
<div className='search-suggestions'>
<p>Popular Searches</p>
<ul>{suggestions.slice(0, 5).map(suggestion => <Link href={'/products/' + suggestion }><li>{suggestion}</li></Link>)}</ul>
</div>
</div>
<div className='searchbox-close'>

</div>

</motion.div>
     );
}
 



export default Search;