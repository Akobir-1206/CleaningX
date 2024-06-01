  
import './header.css'
import headerIMG from "./images/header.svg"
import Button from "./button"


function Header() {

  return (
    <>
        <div className='header'>
        <div className="header__left">
            
            <ul className='header__list'>
                <li><img className='headerimg' src={headerIMG} alt=""/></li>
              <li className='header__leftlink'>
              <a className='header__link'  href="#">Home</a>
              <a className='header__link' href="#">About</a>
              <a className='header__link' href="#">Service</a>
              <a className='header__link' href="#">Articles</a>
              <a className='header__link' href="#">Contact</a>
              </li>
               <li className='header__rightlink'>
              <a className='header__link' href="#">Cart(0)</a> 
                <Button/>
                
              </li>
            </ul>
        </div>
              
        </div>
    
    </>
  )
}

export default Header
