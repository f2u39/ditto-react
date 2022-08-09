import { header } from '../../profile';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className='header center'>
      <Nav />
    </header>
  )
}

export default Header;
