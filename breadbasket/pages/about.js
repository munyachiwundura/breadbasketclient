import Rive from 'rive-react';
import styles from "../styles/about.module.css"


const About = (props) => {
    console.log(props)
    const basket = async () => {
        
        console.log(props.res)
    }
    return ( <div><Rive src="breadbasketlogo.riv"/><h1>
        Hie Mom
        <input type="button" value="hey ma" onClick={() => basket()}/>
    </h1></div> );
}
 
export default About;



export async function getServerSideProps(context) {
    const res = await fetch('https://the-bread-basket.herokuapp.com/api/login/', {
        method: 'POST',
        body: JSON.stringify({
           username : "munyachiwundura@gmail.com",
           password : "jLois100%s3xy"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    
    const data = await res.json();
    console.log({"erroe" : res}) 
   
     return{
                 props: {
                     data
                }
            }
}