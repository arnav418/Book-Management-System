const EditModal = ({ editedBook, handleChange, handleSave, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="add-modal-container">
        <h2 className="modal-title">Edit Book</h2>

        <div className="add-book-form">
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={editedBook.title}
            onChange={handleChange}
          />

          <input
            type="text"
            name="author"
            placeholder="Author"
            value={editedBook.author}
            onChange={handleChange}
          />

          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={editedBook.genre}
            onChange={handleChange}
            list="genre-options"
          />

          <datalist id="genre-options">
            <option value="Self Help" />
            <option value="Finance" />
            <option value="Motivation" />
            <option value="Fantasy" />
            <option value="Fiction" />
            <option value="Romance" />
            <option value="Thriller" />
            <option value="Science Fiction" />
            <option value="Biography" />
            <option value="History" />
            <option value="Horror" />
            <option value="Mystery" />
          </datalist>

          <input
            type="number"
            name="year"
            placeholder="Publication Year"
            value={editedBook.year}
            onChange={handleChange}
          />

          <div className="add-modal-buttons">
            <button className="add-btn" onClick={handleSave}>
              Save Changes
            </button>

            <button className="cancel-btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
