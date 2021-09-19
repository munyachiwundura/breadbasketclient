import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion';
import Cart from './cart';
import Search from './search';
import NavigationMenu from './navMenu';
import LogoSvg from '../public/icons/breadbasketlogo';
import Login from './login';

const Navigation = () => {
    const [openMenu, setMenuOpen] = useState(false);
    const [searching, activateSearching] = useState(false);
    const [cartOpen, openCart] = useState(false)
    const [loginOpen, openLogin] = useState(false)
    const [signedIn, setSignIn] = useState(false)
    
    function checkAuth(){
      var auth = localStorage.getItem("Login")
      setSignIn(auth)
    }
    
    function profilePage() {
      signedIn? logOut() : openLogin(!loginOpen)
    }

    function logOut() {
      alert("youre signed in")
      localStorage.removeItem('Token')
      localStorage.removeItem('Login')
      location.reload();
    }
    
    useEffect(() => checkAuth(), [loginOpen])
    

    return ( <div>

                {searching && <div>
                                <BackgroundBlur event={()=> activateSearching(!searching)}/>
                                <Search/>
                                <CloseButton event={()=> activateSearching(!searching)}/>
                              </div>}

                {cartOpen && <div className='cart-screen'>
                               <BackgroundBlur event={()=> openCart(!cartOpen)}/>
                                <Cart/>
                                <CloseButton event={()=> openCart(!cartOpen)}/>
                              </div>}
                {loginOpen && <div className='cart-screen'>
                               <BackgroundBlur event={()=> openLogin(!loginOpen)}/>
                                <Login/>
                                <CloseButton event={()=> openLogin(!loginOpen)}/>
                              </div>}

                              <nav className='nav'>
                                          <Link href="https://thebreadbasket.herokuapp.com">
                                            <div className='navlogo'>
                                                <LogoSvg/>
                                                <a className='logo-type'>Bread Basket</a>
                                            </div>
                                          </Link>
                                          <div className='nav-item menu-toggler'>
                                              <div id="nav-icon" className={openMenu && 'open'} onClick={()=> setMenuOpen(!openMenu)}>
                                                  <span></span>
                                                  <span></span>
                                                  <span></span>
                                                  <span></span>
                                              </div>          
                                            { openMenu && <div>
                                              <BackgroundBlur event={()=> setMenuOpen(!openMenu)}/>
                                              <NavigationMenu/>
                                                          </div>
                                            }
                                          </div>
                                          <ul className='nav-item icons'>
                                              <ListItem icon='bi bi-search' event={()=> activateSearching(!searching)}/>
                                              <ListItem icon={signedIn? 'bi bi-person-fill': 'bi bi-person'} event={()=> profilePage()}/>
                                              <ListItem icon='bi bi-heart'/>
                                              <ListItem icon='bi bi-cart' event={()=> openCart(!cartOpen)}/>
                                          </ul>
                              </nav>
    </div>
     );
}

const ListItem = (props) => {
    return ( 
        <li>
            <a onClick={props.event} className="nav-icon" href="#"><i className={props.icon}></i></a>
        </li>
     );
}

const CloseButton = (props) => {
  return ( 
    <motion.div
    initial='hidden' exit='hidden' animate='visible' variants={{
      hidden: {
        x: 100,
      },
      visible: {
        x: 0,
        transition: {duration: 0.2}
      },
    }}
    >
      <button onClick={props.event} className='secondary-button close-button'><i className='bi bi-x-lg'></i></button>
     </motion.div>
   );
}

const BackgroundBlur = (props) => {
  return ( 
    <motion.div onClick={props.event} className='background-blur'
    initial='hidden'  animate='visible' variants={{
    hidden: {
        opacity :0,
      },
    visible: {
        opacity : 0.5,
        transition: {duration: .2}
      },
    }}
></motion.div>
   );
}


export default Navigation;