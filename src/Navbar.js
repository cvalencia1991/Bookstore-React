import { Link } from 'react-router-dom';

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
      text: 'categories',
    },
  ];
  return (
    <nav className="d-flex align-items-center">
      <div className="Bookstore">
        Bookstore CMS
      </div>
      <ul className="stylemenu">
        {links.map((link) => (
          <li className="linkstyles" key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
