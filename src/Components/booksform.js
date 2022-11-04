import Button from 'react-bootstrap/Button';

const Booksform = () => (
  <>
    <form className="m-3 d-flex justify-content-center align-items-stretch gap-3 flex-direction-row">
      <input type="text" placeholder="Booktitle" />
      <input type="Author" placeholder="Author" />
      <Button variant="primary" type="Submit">AddBook</Button>
    </form>
  </>

);

export default Booksform;
