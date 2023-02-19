import {useState} from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit}/>
  };



  return (
    <div className="book-show">
      <img alt="books" src="https://picsum.photos/300/200" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>/</button>
        <button className="delete" onClick={handleDeleteClick}>x</button>
      </div>
    </div>
  );
};

export default BookShow;