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
    <>
      {book.map((bookinfo) => (
        <div
          key={bookinfo.item_id}
          id={bookinfo.item_id}
          className=" d-flex flex-column gap-3 m-3 align-items-center flex-direction-column justify-content-center"
        >
          <div className="d-flex gap-3">
            <ul className="stylebook">
              <li>
                {bookinfo.author}
                :
                {bookinfo.title}
              </li>
            </ul>
            <Button onClick={() => handleDelete(bookinfo.item_id)}>Remove</Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Book;
