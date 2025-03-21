import '../Projects/projects.css'
import line from '../../assets/images/line.svg'
import webpage1 from '../../assets/images/webpage1.png'
import webpage2 from '../../assets/images/webpage2.png'
import webpage3 from '../../assets/images/webpage3.jpg'
import dots from '../../assets/images/dots.svg'
import halfRectangle from '../../assets/images/half-rectangle.svg'


const Projects=()=>{
    return(
        <>
        <section id='projects' className="projects container">
            <img className='dots' src={dots} alt="" />
           <h2 className='section__title'><span className="violet">#</span>projects <img src={line} alt="" /></h2>
            <div className="project__cards"> 
                
                    


                <div className="project__cards-item">
                        <div className="card__img">
                        <img className='webpage' src={webpage2} alt="nike_screenshot" />
                        <p className='webpage-subtitle'>HTML CSS</p>
                        </div>
                        <div className="card__text">
                        <h3 className='project__cards-title'>Nike(fake)</h3>
                        <p className="project__cards-subtitle">Not original website of Nike</p>
                        <a target='blank' href="https://farrux20030308.github.io/nike/" className='project__cards-btn'>Visit site</a>
                        </div>
                        
                    </div>
                    <div className="project__cards-item">
                        <div className="card__img">
                        <img className='webpage' src={webpage1} alt="webpage_image" />
                        <p className='webpage-subtitle'>HTML CSS JS BOOTSTRAP</p>
                        </div>
                        <div className="card__text">
                        <h3 className='project__cards-title'>Imperial-school</h3>
                        <p className="project__cards-subtitle">Language-school webpage</p>
                        <a target='blank' href="https://imperial-laguage-school.uz/" className='project__cards-btn'>Visit site</a>
                        </div>
                        
                    </div>
                <div className="project__cards-item">
                        <div className="card__img">
                        <img className='webpage' src={webpage3} alt="" />
                        <p className='webpage-subtitle'>HTML CSS JS REACT</p>
                        </div>
                        <div className="card__text">
                        <h3 className='project__cards-title'>Online-Shop</h3>
                        <p className="project__cards-subtitle">My first webapp coming soon</p>
                        <span className='not_allowed'><a target='blank' href="https://imperial-laguage-school.uz/" className='project__cards-btn disabled'>Visit site</a></span>
                        </div>
                        
                    </div>
            </div>
        </section>
        </>
    )
}

export default Projects;