import React,{useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext'
const Navbar = () => {
    //themcontext
    const {theme} = useContext(ThemeContext)
    const {isLightTheme,light,dark} = theme
    const style = isLightTheme ? light : dark
    return ( 
        <div className="navbar" style={style}>
            
            <h1>Hello Navbar</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>
     );
}
 
export default Navbar;