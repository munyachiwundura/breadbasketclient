const Footer = () => {
    return ( <div className='footer'>
    <div className='footer-text'>
        <h1>Subscribe to Our Newsletter</h1>
        <p>Promotions, New Products and sales directly to your Inbox</p>
    </div>
    <div className='mailing-list-signup-container'>
        <div className='mailing-list-signup'>
            <input className='mailing-list-input'/>
            <button className='mailing-list-submit'>Sign Me Up</button>
        </div>
        
    </div>
    <div className='footer-links-container'>
            <div className='footer-brand'>
                <i id='footerLogo' className='bi bi-basket'></i>
            </div>
            <div className='footer-links'>
                <h1>My profile</h1>
                <ul>
                    <li>Sign Up</li>
                    <li>My Orders</li>
                </ul>
            </div>
            <div className='footer-links'>
                <h1>Customer Services</h1>
                <ul>
                    <li>Contact Us</li>
                    <li>Advertise For Us</li>
                </ul>
            </div>
            <div className='footer-links'>
                <h1>About</h1>
                <ul>
                    <li>About Us</li>
                    <li>Our Mission</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div/>
        </div>
        <div className='footer-social-media-links'>
            <i className='bi bi-youtube'></i>
            <i className='bi bi-facebook'></i>
            <i className='bi bi-instagram'></i>
            <i className='bi bi-twitter'></i>


        </div>
</div> );
}
 
export default Footer;