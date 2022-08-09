import History from '@mui/icons-material/History';
import Bookmarks from '@mui/icons-material/Bookmarks';
import './Nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a className='nav-link' href='#act'>
            <History className="icon" />
          </a>
        </li>

        <li>
          <a className='nav-link' href='#word'>
            <Bookmarks className="icon" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
