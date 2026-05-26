import React from "react";

const BookForm = ({ newBook, handleChange, handleAddBook }) => {
  return (
    <form className="form-container" onSubmit={handleAddBook}>
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={newBook.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={newBook.author}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={newBook.genre}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="year"
        placeholder="Publication Year"
        value={newBook.year}
        onChange={handleChange}
        required
      />

      <button type="submit" className="add-btn">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
