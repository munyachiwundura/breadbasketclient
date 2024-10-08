import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const Login = () => {
    const [login, selectLogin] = useState(true)
    const [revealPassword, showPassword] = useState(true)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [registerUsername, setRegisterUsername] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")


    const login_api = async (props) => {
        const res = await fetch('https://the-bread-basket.herokuapp.com/api/login/', {
        method: 'POST',
        body: JSON.stringify({
           username : username,
           password : password
        }),
        headers: {
            'Content-Type': 'application/json'
        }

    });
    
    
    const data = await res.json();
    console.log(data)
    localStorage.setItem('Token', data)
    localStorage.setItem('Login', true)
    alert("youre signed in")
    location.reload();
    return(data)
    }
    
    const register_api = async (props) => {
        const res = await fetch('https://the-bread-basket.herokuapp.com/api/register/', {
        method: 'POST',
        body: JSON.stringify({
           email : registerUsername,
           password1 : registerPassword,
           password2 : registerPassword
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    
    const data = await res.json();
    console.log(data)
    localStorage.setItem('Token', data)
    localStorage.setItem('Login', true)
    alert("user added", data)
    location.reload();
    return(data)
    }

    return ( 
        
    <motion.div className='side-menu' 
        initial='hidden' exit='hidden' animate='visible' variants={{
        hidden: {
          x: 350,
        },
        visible: {
          x: 0,
          transition: {duration: .3}
        },
      }}>
        <div className='side-menu-header'>
                <i className='bi bi-person'></i>
                <p>Login</p>     
        </div>
        <div className='login-container'>
            <div className='login-or-register'>
                <div id={login && 'activeForm'} className='login'  onClick={()=> selectLogin(true)}>
                    <p>Sign In To Account</p>
                </div>
                <div id={!login && 'activeForm'} className='register' onClick={()=> selectLogin(false)}>
                    <p>Register New Account</p>
                </div>
            </div>

{login && <motion.form onSubmit={() => login_api()} className='login-form'
            initial='hidden' exit='hidden' animate='visible' variants={{
                hidden: {
                x: 350,
                },
                visible: {
                x: 0,
                transition: {duration: .2}
                },
            }}
            >
            <div className='login-inputs'>
   
                <div>
                    <input type='email' placeholder='Email address or phone number' onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <input onChange={(e) => setPassword(e.target.value)} type={revealPassword? 'password': 'text'} placeholder='Password'/>
                    <i className={revealPassword? 'bi bi-eye-slash' : 'bi bi-eye'} onClick={()=> showPassword(!revealPassword)}></i>
                </div>
            </div>
            <div className='login-button'>
                <button type="submit" className='primary-button'>Sign In</button>
            </div>
            <div className='forgot-password'>
                <p>Have you forgotten your password?</p>
                <a>Click Here</a>
            </div>
          </motion.form>}
{!login && <motion.form onSubmit={() => register_api()} className='login-form'
initial='hidden' exit='hidden' animate='visible' variants={{
    hidden: {
      x: 350,
    },
    visible: {
      x: 0,
      transition: {duration: .2}
    },
  }}
>
            <div className='login-inputs'>
                <div>
                    <input onChange={(e) => setRegisterUsername(e.target.value)} type='email' placeholder='Full Name'/>
                </div>
                <div>
                    <input onChange={(e) => setRegisterPassword(e.target.value)} type={revealPassword? 'password': 'text'} placeholder='Password'/>
                    <i className={revealPassword? 'bi bi-eye-slash' : 'bi bi-eye'} onClick={()=> showPassword(!revealPassword)}></i>
                </div>
                <div>
                    <input type='email' placeholder='Capcha'/>
                </div>
                
            </div>
            <div className='terms-checkbox'><input type='checkbox'/><p>Agree to our terms and conditions</p></div>
            <div className='register-button'>
                
                <button type="submit" className='primary-button'>Register</button>
            </div>
          </motion.form>}
        </div>
        
    </motion.div>
    
    
     );
}
 
export default Login;