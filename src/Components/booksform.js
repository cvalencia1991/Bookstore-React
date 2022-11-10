import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

const Booksform = () => {
  const bookid = uuid();
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
      item_id: bookid,
      ...book,
      category: 'book',
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="m-3 d-flex justify-content-center align-items-stretch gap-3 flex-direction-row">
      <input name="title" type="text" placeholder="Booktitle" onChange={handleChange} required />
      <input name="author" type="author" placeholder="Author" onChange={handleChange} required />
      <Button variant="primary" type="Submit">Add New</Button>
    </form>
  );
};

export default Booksform;
