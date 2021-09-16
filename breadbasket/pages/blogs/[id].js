import {useRouter}  from 'next/router'
import BlogPostCard from '../../comps/blogPostCard'
import ProductCard from '../../comps/productCard'
import Billboard from '../../comps/billboard'
import styles from "../../styles/blogPostPage.module.css"


const BlogPostPage = (articles) => {
    const router = useRouter()
    const{id} = router.query
    const selectArticle = articles.articles.filter(x => {return x.Title == id})
    const currentArticle = selectArticle[0]
    const otherArticles = articles.articles.filter(x => {return x.Title !== id})
    console.log(otherArticles)
    return (<div> <div className={styles.page}>
        <div className={styles.left_column}>
            <div className='section-title-container'>
                <a>-Blogs</a>
                <p>{currentArticle.Title}</p>
            </div>
            <p>{currentArticle.Intro}</p>
            <p className={styles.author}>By {currentArticle.Author}</p>
            <p className={styles.date_created}>Published 01/06/1999</p>
                <div className={styles.cover_container}>
                <img className={styles.cover} src={"https://the-bread-basket.herokuapp.com" +currentArticle.Cover}/>
                </div>
           <div dangerouslySetInnerHTML={{__html: currentArticle.Paragraph}} ></div>
           
        </div>
        <div className={styles.right_column}>
            <div className='section-title-container'>
                <a>-More</a>
                <p>Read Next</p>
            </div>
            {otherArticles.map(post => <BlogPostCard cover={"https://the-bread-basket.herokuapp.com" +post.Cover} blogTitle={post.Title} blogCategory="drinks"/>)}
        </div>
        <div className={styles.featured}>
        <div className='section-title-container'>
                <a>-Featured Products</a>
                <p>Featured in This Blog</p>
            </div>
                <div className='product-cards-container'>
                    <ProductCard category='Drinks' price='50' title='Mazoe Orange Crush' image="/img/mazoe_orange.png"/>
                    <ProductCard category='Drinks' price='50' title='Mazoe Orange Crush' image="/img/mazoe_orange.png"/>
                </div>
                </div>
              
                </div>
                <div className={styles.billboard}>   
                <Billboard  billboardTitle='All these great savings on your mobile' callToAction='Download App'>
          <img id='macbook' className='jumbotron-image' src="/img/macbook.png"/>
          <img id='iphone' className='jumbotron-image' src="/img/iphone.png"/>
        </Billboard>
                
                </div>
                
        </div>
        
     );
}
 


export async function getStaticProps(context) {
    const res = await fetch('https://the-bread-basket.herokuapp.com/blogs/');
    const articles = await res.json();
    
        
     return{
                 props: {
                     articles
                }
            }
}

export async function getStaticPaths() {
    const res = await fetch('https://the-bread-basket.herokuapp.com/blogs/');
    const articles = await res.json();
    

    const paths = articles.map(article => {
        return {params: {id: article.Title}}

    })

    return {
        paths,
        fallback: false
    }
}

export default BlogPostPage;