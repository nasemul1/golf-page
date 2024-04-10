import './Fixed.css'
import hero from '../assets/hero.mp4'

const Fixed = () => {
    return (
        <>
            <div id="nav">
                <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg" alt="logo" className="logo" />
                <h4>Toptracer Range</h4>
                <h4>Golf Lessons</h4>
                <h4>Adventure Golf</h4>
                <h4>Coffee Shop</h4>
                <h4>Leagues</h4>
            </div>
            <video autoPlay loop muted src={hero} id='hero-vid'></video>
        </>
    );
}
 
export default Fixed;