import { useState } from 'react';
import History from '@mui/icons-material/History';
import './Nav.css'

const Nav = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav>
      <ul>
        <li>
          <a href='#act' onClick={toggleNavList} className='link link--nav'>
            <History />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
