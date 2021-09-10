import {useRouter}  from 'next/router'

import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Footer from "./footer";
import Navigation from "./navigation";


const Layout = ({children}) => {
  const router = useRouter()
  
    return ( 
    <div>
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Navigation/>
            <AnimatePresence>
              <motion.div key={router.route}
                          initial='hidden' 
                          exit='pageExit' 
                          animate='visible' 
                          variants={{
                            hidden: {
                                    opacity: 0,
                                    },
                            visible: {
                                    opacity: 1,
                                    transition: {duration: 2}
                                    },
                            pageExit: {
                                    backgroundColor: '#ffffff',
                                    opacity:0,
                                    transition: {duration: 1}
                            },
                          }}>
                {children}
              </motion.div>
            </AnimatePresence>
          <Footer/>
        </body>
    </div> 
     );
}
 
export default Layout;