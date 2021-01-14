import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './header.css'
function Header (){
    return (
        <nav className="header">
            <img className='header__logo' src='https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Vegetables-PNG/Fresh_Carrot_PNG_Clip_Art_Image.png?m=1534980382' alt='logo'  />
            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello User!</span>
                <span className='header__optionLineTwo'>Sign-in or Sign-out</span>
            </div>
        </nav>
    )
}
export default Header