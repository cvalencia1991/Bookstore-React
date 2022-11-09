import Book from '../Components/Book';
import Booksform from '../Components/booksform';

const Books = () => (
  <>
    <Book />
    <div>
      <h1 className="styleheadaddbook">Add new book </h1>
      <Booksform />
    </div>
  </>
);

export default Books;
