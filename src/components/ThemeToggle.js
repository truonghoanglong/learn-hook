import React,{useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext)
    const {isLightTheme,light,dark} = toggleTheme
    const style = isLightTheme ? light : dark

    const handleOnclick = () => {
        toggleTheme(isLightTheme)
    }
    return (
        <div className={style}>  
            <button className="toggle-btn" onClick={handleOnclick}>Togglt Theme</button>
        </div>
      );
}
 
export default ThemeToggle;