import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Book = (props) => {
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };
  const { title, author } = props;
  return (
    <div className="d-flex align-items-center justify-content-center gap-3 m-3">
      <ul className="m-0 p-0 stylebook">
        <li>
          {title}
          :
          {author}
        </li>
      </ul>
      <Button>Remove</Button>
    </div>
  );
};

export default Book;
