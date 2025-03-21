import '../AboutMe/AboutMe.css';
import line from '../../assets/images/line.svg'
import me from '../../assets/images/me.png'


const AboutMe=()=>{
    return(
        <>
        <section id='about-me' className="about-me container">
            <h2 className='section__title'><span className="violet">#</span>about_me <img src={line} alt=""/></h2>
            <div className="about-me__info">
                <div className="about-me__info-text"><h3>Hello, i’m Farrukh!</h3>

                <p className='text-first'>I’m a self-taught front-end developer based in Tashketn, Uzbekistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
                
                <p className='text-second'>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
</div>
                <div className="about-me__info-photo"><img src={me} alt="" /></div>

            </div>
            
        </section>
        </>
    );
};

export default AboutMe;