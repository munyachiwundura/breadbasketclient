


const Categories = (categories) => {
   
    return ( <div>
        {categories.categories.map(category => 
        <p>{category.name}</p>)
        
        }
    </div> );
}
 



export async function getServerSideProps(context) {
    const res = await fetch('https://the-bread-basket.herokuapp.com/api/categories/');
     const categories = await res.json();
     return{
                 props: {
                     categories
                }
            }
}

export default Categories;