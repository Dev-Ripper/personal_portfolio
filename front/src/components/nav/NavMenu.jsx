import React, { useState } from 'react';
import { BrowserRouter, NavLink, Switch } from 'react-router-dom';
import Routes from './Routes';
import '../style/NavMenu.css';

function NavMenu() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const linkTo = (path, content) => (
    <NavLink activeClassName="current" className="link" exact to={path}>
      {content}
    </NavLink>
  );
  return (
    <div>
      <BrowserRouter>
        {!isMenuOpened
          ? <button className="burger-menu-opened" type="button" onClick={() => setIsMenuOpened(true)}>≣</button>
          : (
            <nav>
              <button className="burger-menu-closed" type="button" onClick={() => setIsMenuOpened(false)}>x</button>
              <ul>
                <li>{linkTo('/', 'Home')}</li>
                <li>{linkTo('/portfolio', 'Portfolio')}</li>
                <li>{linkTo('/contact', 'Contact')}</li>
                <li>{linkTo('/connect', 'Connect')}</li>
              </ul>
            </nav>
          )}

        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default NavMenu;
