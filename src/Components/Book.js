import Button from 'react-bootstrap/Button';

const autor = ' Gabriel garcia marquez';
const book = ' Cien años de soledad';
const Book = () => (
  <div className="d-flex align-items-center justify-content-center gap-3">
    <ul className="m-0 p-0 stylebook">
      <li>
        Autor :
        {autor}
      </li>
      <li>
        Book :
        {book}
      </li>
    </ul>
    <Button>Remove</Button>
  </div>
);
export default Book;
