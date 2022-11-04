import Button from 'react-bootstrap/Button';
import Book from '../Components/Book';

const Books = () => (
  <>
    <Book />
    <div>
      <h1 className="styleheadaddbook">Add new book </h1>
      <form className="d-flex justify-content-center align-items-stretch gap-3 flex-direction-row">
        <input type="text" placeholder="Booktitle" />
        <input type="Author" placeholder="Author" />
        <Button variant="primary" type="Submit">AddBook</Button>
      </form>
    </div>
  </>
);

export default Books;
