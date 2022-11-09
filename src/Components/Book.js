import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className=" d-flex flex-column gap-3 m-3 align-items-center flex-direction-column justify-content-center">
      {book.map((bookinfo) => (
        <div key={bookinfo.id} className="d-flex gap-3">
          <ul className="stylebook">
            <li>
              {bookinfo.author}
              :
              {bookinfo.title}
            </li>
          </ul>
          <Button onClick={() => handleDelete(bookinfo.id)}>Remove</Button>
        </div>
      ))}
    </div>
  );
};

export default Book;
