import '../Contacts/Contacts.css';
import line from '../../assets/images/line.svg'
import tg from '../../assets/icons/tg-icon.svg'
import inst from '../../assets/icons/ig-icon.svg'

const Contacts=()=>{
    return(
        <>
        
        <section id='contacts' className="contacts container">
            <h2 className='section__title'><span className="violet">#</span>contacts <img src={line} alt=""/></h2>
            <div className="contacts__box">
            <div className="contacts__info"><p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p></div>

            <div className="contacts__links">
                <h3>Message me here</h3>
                <div className="contacts__icons">
                <div className="icon__link"><a href="https://t.me/Creator_1_st"><img src={tg} alt="" />@Creator_1_st</a></div>
                <div className="icon__link"><a href="https://instagram.com/n.ai_sora"><img src={inst} alt="" />@n.ai_sora</a></div>
                
                
                </div>
                
            </div></div>
        </section>
        
        </>
    )
}

export default Contacts;