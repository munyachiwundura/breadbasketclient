import Link from 'next/link'
import Head from 'next/head'

const ProductsList = (articles) => {

    return ( <div>
        <Head>
            <title>
                Catalogue
            </title>
        </Head>
    <h1>Products List</h1> <ul>
    {articles.articles.map((article) =>( <li>
    <Link href={'/products/' + article.id }><a>{article.name}</a></Link></li>
    ))}</ul>
    </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/products.json');
    const articles = await res.json();
    return {
        props: {
            articles
        }
    }
}

export default ProductsList;