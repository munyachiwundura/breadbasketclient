import Layout from '../comps/layout'
import '../styles/globals.css'
import '../styles/navigation.css'
import '../styles/product.css'
import '../styles/home.css'
import '../styles/footer.css'
import '../styles/cart.css'
import '../styles/search.css'
import '../styles/login.css'
import '../styles/checkout.css'
import '../styles/categories.css'






function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
