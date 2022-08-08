import { header } from '../../profile';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Nav />
    </header>
  )
}

export default Header;
