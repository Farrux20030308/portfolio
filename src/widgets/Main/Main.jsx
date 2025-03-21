import '../Main/Main.css';
import image from '../../assets/images/image.png'
import lines from '../../assets/images/lines.svg'
import dots from '../../assets/images/dots.svg'
import rectangle from '../../assets/images/rectangle.svg'
import frame from '../../assets/images/frame.svg'

const Main=({})=>{

    return(
    <>
    <main id='main' className="main container" >
        <div className="main__text">
         <h2 className='main__title'>Farrukh is a <span className="violet">front-end</span> developer</h2>  
         <p>He crafts responsive websites where technologies meet creativity</p> 
        </div>
        <div className="main__img">
            <img className='image' src={image} alt="" />
            <img className='lines svg' src={lines} alt="" />
            <img className='main-dots svg' src={dots} alt="" />
            <p><img src={rectangle} alt="" />Currently working on <span>Portfolio</span></p>
        </div>
        
        <div className="main__quote">
            <img className='frame svg' src={frame} alt="" />
            <h2>With great power comes great electricity bill</h2>
            <img className='frame-second svg' src={frame} alt="" />
            <p>- Dr. Who</p>
            </div>
    </main>
    </>
)}

export default Main