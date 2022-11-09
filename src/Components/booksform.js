import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const Booksform = () => {
  const bookinfo = useSelector((state) => state.book);
  const bookid = bookinfo.length;

  const [book, setBook] = useState({
    author: '',
    title: '',
  });
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      ...book,
      id: bookid,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="m-3 d-flex justify-content-center align-items-stretch gap-3 flex-direction-row">
      <input name="title" type="text" placeholder="Booktitle" onChange={handleChange} />
      <input name="author" type="author" placeholder="Author" onChange={handleChange} />
      <Button variant="primary" type="Submit">Add New</Button>
    </form>
  );
};

export default Booksform;
