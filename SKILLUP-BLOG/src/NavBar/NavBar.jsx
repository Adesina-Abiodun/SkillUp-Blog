import './NavBar.css'
import {NavLink, Link} from 'react-router-dom';
import { useState } from 'react';
import fsvg from './images/facebook.svg'
import tsvg from './images/twitter.svg'
import isvg from './images/instagram.svg'
import ysvg from './images/youtube.svg'


const NavBar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginStat = ()=>{

    }

    return ( 
        <div className='navbar'>
        <header>
            <h3>SkillupAfrica Blog</h3>
        </header>

        <nav className="nav">
            <div className="nav-list">
                <ul>
                    <NavLink to={'/'}><li>Home</li></NavLink>
                    <NavLink to={'/post/:id'}><li>Articles</li></NavLink>
                    <NavLink to={'/editor/:id'}><li>About us</li></NavLink>
                </ul>
            </div>

            <div className="clicks">
                <div className="icons">
                    <Link to={"https://www.facebook.com/skillupafrica1"} target="_blank"> <img src={fsvg} alt="" /></Link>
                    <Link to={''} target="_blank"><img src={tsvg} alt="" /></Link>
                    <Link to={'https://www.instagram.com/_skillupafrica/'} target="_blank"><img src={isvg} alt="" /></Link>
                    <Link to={''} target="_blank"><img src={ysvg} alt="" /></Link>
                </div>

                <div className="post-button">
                    <button onClick={loginStat}>Post your article</button>
                </div>
               
            </div>
        </nav>
    </div>
     );
}
 
export default NavBar;