import '../Footer/Footer.css';
import '../Footer/footerMedia.css';

import logo from '../../assets/icons/logo.png'
import tg from '../../assets/icons/tg-icon.svg'
import inst from '../../assets/icons/ig-icon.svg'
import github from '../../assets/icons/github-icon.svg'

const Footer=()=>{
    const reloading=()=>{
        window.location.reload()
    }
    
    return(
        <>
        <footer className='footer'>
            <div className="footer__content">
            <div className="footer__mail">
            <button onClick={reloading} className='navbar__logo-button'><img className='logo' src={logo} alt="" /><h1>N'Ai SoRA</h1></button>
            <a href="mailto:baybutaevfarrux@gmail.com">baybutaevfarrux@gmail.com</a>
            </div>

            <div className="footer__media">
                <h3>Media</h3>
                <div className="media__links">
                <a target='blank' href="https://t.me/Creator_1_st"><img src={tg} alt="" /></a>
                <a target='blank' href="https://instagram.com/n.ai_sora" className="nav-link"><img src={inst} alt="" /></a>
                <a target='blank' href="https://github.com/Farrux20030308"><img src={github} alt="" /></a>
                </div>
            </div>
            </div>
            
            <p className='copyright'>&copy;SoRA. Made by FARRUKH</p>
        </footer>
        
        
        </>
    )
}

export default Footer;