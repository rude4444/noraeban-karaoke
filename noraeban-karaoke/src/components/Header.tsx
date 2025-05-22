import './Header.scss'
import { useState } from 'react';
import Logo from '/src/assets/noraeban-logo.svg';
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className={menuActive ? 'active' : ''}>
        
        <ul>
          <li><a href="#" className="reserve">Забронировать</a></li> 
          <li><a href="#">Меню</a></li>
          <li><a href="#">Каталог песен</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
        
      </nav>
      <div className="burger" onClick={() => setMenuActive(!menuActive)}>
        <a href="#" style={{}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
      </div>
    </header>
  );
};

export default Header;