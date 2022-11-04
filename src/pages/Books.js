import Book from '../Components/Book';
import Booksform from '../Components/booksform';

const Books = () => (
  <>
    <Book title="Cien años de soledad" author="Gabriel garcia" />
    <div>
      <h1 className="styleheadaddbook">Add new book </h1>
      <Booksform />
    </div>
  </>
);

export default Books;
