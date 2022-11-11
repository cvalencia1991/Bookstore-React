import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

const Booksform = () => {
  const bookid = uuid();
  const [book, setBook] = useState({
    author: '',
    title: '',
    category: '',
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
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="m-3 d-flex justify-content-between align-items-stretch gap-3 flex-direction-row">
      <input style={{ width: '50%' }} name="title" type="text" placeholder="Booktitle" onChange={handleChange} required />
      <input name="author" type="author" placeholder="Author" onChange={handleChange} required />
      <input name="category" placeholder="Category" type="text" list="items" onChange={handleChange} />
      <datalist id="items">
        <option>Drama</option>
        <option>Action</option>
        <option>Science Fiction</option>
        <option>Economy</option>
      </datalist>
      <button className="Addnewbookstyle" type="submit">Add New</button>
    </form>
  );
};

export default Booksform;
