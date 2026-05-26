import React from "react";

const BookCard = ({ book, handleDelete, handleEdit }) => {
  return (
    <div className="book-card">
      <img
        className="book-image"
        src={`https://covers.openlibrary.org/b/title/${book.title}-L.jpg`}
        alt={book.title}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x400?text=No+Cover";
        }}
      />

      <div className="book-content">
        <h3 className="book-title">{book.title}</h3>

        <div className="book-info">
          <p className="book-text">
            <strong>Author:</strong> {book.author}
          </p>

          <div className="book-chips">
            <span className="genre-chip">{book.genre}</span>

            <span className="year-chip">{book.year}</span>
          </div>
        </div>

        <div className="button-group">
          <button className="edit-btn" onClick={() => handleEdit(book)}>
            Edit
          </button>

          <button className="delete-btn" onClick={() => handleDelete(book.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
