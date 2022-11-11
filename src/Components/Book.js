import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const Book = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };
  const percentage = 30;
  return (

    <div className="  d-flex m-3 flex-column justify-content-center align-items-stretch gap-3">
      {book.map((bookinfo) => (
        <div key={bookinfo.item_id} id={bookinfo.item_id} className="stylebook">
          <div className="d-flex flex-column">
            <div className="d-flex gap-3">
              <ul className="stylebookitem">
                <li>
                  <h3 className="stylecategory">
                    {bookinfo.category}
                  </h3>
                  <h1 className="styletittle">{bookinfo.title}</h1>
                  <h2 className="styleathor">{bookinfo.author}</h2>
                </li>
              </ul>
            </div>
            <ul className="itemsstyle">
              <li><button className="selectitems" type="button">Comments </button></li>
              <li><button className="selectitems1" type="button" onClick={() => handleDelete(bookinfo.item_id)}>Remove</button></li>
              <li><button className="selectitems2" type="button">Edit</button></li>
            </ul>
          </div>
          <div className="stylestatus">
            <div className="stylecircleprogress">
              <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                  pathColor: `rgba(55, 156, 246, ${percentage})`,
                })}
              />
            </div>
            <div className="d-flex flex-column styleupdate">
              <div className="stylepercentage">
                {percentage}
                %
              </div>
              <div className="completed">
                Completed
              </div>
            </div>
          </div>
          <div className="styleupdate">
            <div className="currentchapter">
              CURRENT CHAPTER
            </div>
            <div className="chapter">
              chapter
            </div>
            <div className="mt-3">
              <button className="updateprogress" type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>

      ))}
    </div>
  );
};

export default Book;
