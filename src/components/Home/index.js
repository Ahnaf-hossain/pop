import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss';
const Home = () =>{

    return(
        <div className = "container home-page">
                <div className = "text-zone">
                <h1>HAPPY 16 MONTHS MEU AMOR, <br/> 
                <br/>
                web developer
                </h1>
                <h2> Frontend dev</h2>
                <Link to="/contact" className='flat-button'> CLICK ME </Link>
            </div>
        </div>
    );
}
export default Home