import Button from 'react-bootstrap/Button';

const books = [{
  id: 1,
  autor: ' Gabriel garcia marquez',
  book: ' Cien años de soledad',
},
];
const Book = () => (
  <div className="d-flex align-items-center justify-content-center gap-3 m-3">
    <ul className="m-0 p-0 stylebook">
      {books.map((Booklib) => (
        <li key={Booklib.id}>
          {Booklib.autor}
          :
          {' '}
          {Booklib.book}
        </li>
      ))}
    </ul>
    <Button>Remove</Button>
  </div>
);
export default Book;
