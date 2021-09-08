import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from 'react';
import Link from 'next/link'


const NavigationMenu = () => {

    const [activeMenu, setActiveMenu] = useState('main');
    
    const MenuItem = (props) => {
        return ( <div>
                {!props.linkable && <a className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                    {props.rightIconSvg}
                    <i className={props.rightIcon + ' right-icon'}></i>
                        {props.title}
                    <i className={props.leftIcon + ' left-icon'}></i>
                </a>}
                {props.linkable &&  
      <Link  href={'/categories/' + props.title }>
                
                <a className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                    {props.rightIconSvg}
                    <i className={props.rightIcon + ' right-icon'}></i>
                        {props.title}
                    <i className={props.leftIcon + ' left-icon'}></i>
                </a></Link>}
                </div>
         );
    }

    return ( 
        <motion.div className='menu-dropdown' 
                    initial='hidden' animate='visible' variants={{
                    hidden: {
                         },
                    visible: {
                          transition: {duration: .2}
                         },
                     }} > 
         { activeMenu === 'main' && <AnimatePresence><motion.div initial='hidden' exit='hidden' animate='visible' variants={{
            hidden: {
              x: -300,

            },
            visible: {
              x: 0,

              transition: {duration: .3}
            },
            

          }}>
                    <MenuItem rightIcon='bi bi-grid-3x3-gap' title='Categories' leftIcon='bi bi-chevron-right' goToMenu='categories'/>
                    <MenuItem rightIcon='bi bi-info-circle' title='About' leftIcon='bi bi-chevron-right' goToMenu='about'/>
                    <MenuItem linkable rightIcon='bi bi-telephone-outbound' title='Contact Us'/>           
          </motion.div></AnimatePresence>}
          { activeMenu === 'about' && <AnimatePresence><motion.div initial='hidden' exit='hidden' animate='visible' variants={{
            hidden: {
              x: 300,

            },
            visible: {
              x: 0,

              transition: {duration: .3}
            }
          }}>
                    <MenuItem rightIcon='bi bi-chevron-left' title={<strong>About</strong>} goToMenu='main'/>
                    <MenuItem linkable rightIcon='bi bi-question-circle' title='About Us'/>  
                    <MenuItem linkable rightIcon='bi bi-cash-coin' title='Payment'/>  
                    <MenuItem linkable rightIcon='bi bi-truck' title='Shipping'/> 
                    <MenuItem linkable rightIcon='bi bi-file-earmark-text' title='Ts and Cs'/>   
                    <MenuItem linkable rightIcon='bi bi-question-circle' title='FAQs'/>         
          </motion.div></AnimatePresence>}
          { activeMenu === 'categories' && <AnimatePresence><motion.div initial='hidden' exit='hidden' animate='visible' variants={{
            hidden: {
              x: 300,
            },
            visible: {
              x: 0,
              transition: {duration: .3}
            }
          }}>
                    <MenuItem rightIcon='bi bi-chevron-left' title={<strong>Categories</strong>} goToMenu='main'/>
                    <MenuItem linkable rightIcon='bi bi-grid-3x3-gap' title='All Categories'/>
                    <MenuItem linkable rightIconSvg={<img src="/img/svg/cereal-svgrepo-com.svg" className='right-icon-svg'/>} title='Cereals'/>
                    <MenuItem linkable rightIconSvg={<img src='/img/svg/bottle-svgrepo-com.svg' className='right-icon-svg'/>} title='Drinks'/>
                    <MenuItem linkable rightIconSvg={<img src='/img/svg/circular-biscuits-svgrepo-com.svg' className='right-icon-svg'/>} title='Snacks'/>
                    <MenuItem linkable rightIconSvg={<img src='/img/svg/spices-svgrepo-com.svg' className='right-icon-svg'/>} title='Sauces & Spices'/>
                    <MenuItem linkable rightIconSvg={<img src='/img/svg/food-svgrepo-com.svg' className='right-icon-svg'/>} title='Staples'/>              
          </motion.div></AnimatePresence>}
          </motion.div>
     );
}


 
export default NavigationMenu;