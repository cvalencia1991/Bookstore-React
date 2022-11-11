import { Link } from 'react-router-dom';
import logo from './imgs/user.jpg';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav className="d-flex p-3 align-items-center stylenav justify-content-between">
      <div className="Bookstore">
        Bookstore CMS
        <div>
          <ul className="stylemenu">
            {links.map((link) => (
              <li className="linkstyles" key={link.id}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img className="stylelogo" src={logo} alt="" />
    </nav>
  );
};

export default Navbar;
