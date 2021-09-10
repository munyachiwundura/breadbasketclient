import styles from "../styles/blogPostCard.module.css"
import Link from 'next/link'


const BlogPostCard = (props) => {
    return ( 
        <Link href={'/blogs/' + props.blogTitle }>
        <div className={styles.card}>
                <div className={styles.container} >
                    <img className={styles.image} src={props.cover}/>
                </div>
                <p className={styles.title}>{props.blogTitle}</p>
                <div className={styles.category}>
                    <p className={styles.category_title}>{props.blogCategory}</p>   
                </div>        
        </div>
        </Link>
     );
}
 
export default BlogPostCard;