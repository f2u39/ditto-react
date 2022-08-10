import History from '@mui/icons-material/History';
import Bookmarks from '@mui/icons-material/Bookmarks';
import VideoGameAsset from '@mui/icons-material/VideogameAsset';
import './Nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="nav-li"><a href="/act"><History className="nav-icon" /></a></li>
        <li className="nav-li"><a href="/word"><Bookmarks className="nav-icon" /></a></li>
        <li className="nav-li"><a href="/game"><VideoGameAsset className="nav-icon" /></a></li>
      </ul>
    </nav>
  )
}

export default Nav;
