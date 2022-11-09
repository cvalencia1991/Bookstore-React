import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="d-flex  flex-column align-items-center justify-content-center">
      <Button onClick={handleStatus}>Check Status</Button>
      <div className="stylestatus">
        <p>{status}</p>
      </div>
    </div>
  );
};

export default Categories;
