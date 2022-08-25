import LogoTitle from '../../assets/images/I LOVE YOU.png'
import { Link } from 'react-router-dom';
import './index.scss';

const Contact = () =>{

    return(
        <div className = "container ho-page">
                <div className = "text-zone">
                <h1>
                <img src ={LogoTitle} alt="developer"/>
               </h1>
            </div>
        </div>
    );
}
export default Contact