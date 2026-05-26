const AddBookModal = ({ newBook, handleChange, handleAddBook, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="add-modal-container">
        <h2 className="modal-title">Add New Book</h2>

        <form onSubmit={handleAddBook} className="add-book-form">
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
            list="genre-options"
            required
          />

          <datalist id="genre-options">
            <option value="Action" />
            <option value="Adventure" />
            <option value="Art" />
            <option value="Autobiography" />
            <option value="Biography" />
            <option value="Business" />
            <option value="Children" />
            <option value="Classic" />
            <option value="Comics" />
            <option value="Contemporary" />
            <option value="Cooking" />
            <option value="Crime" />
            <option value="Cyberpunk" />
            <option value="Dark Fantasy" />
            <option value="Drama" />
            <option value="Dystopian" />
            <option value="Education" />
            <option value="Epic Fantasy" />
            <option value="Erotica" />
            <option value="Essay" />
            <option value="Fairy Tale" />
            <option value="Fantasy" />
            <option value="Fiction" />
            <option value="Finance" />
            <option value="Food" />
            <option value="Graphic Novel" />
            <option value="Guide" />
            <option value="Health" />
            <option value="Historical Fiction" />
            <option value="History" />
            <option value="Horror" />
            <option value="Humor" />
            <option value="Inspirational" />
            <option value="Journal" />
            <option value="Literary Fiction" />
            <option value="Magic Realism" />
            <option value="Manga" />
            <option value="Memoir" />
            <option value="Middle Grade" />
            <option value="Motivation" />
            <option value="Mystery" />
            <option value="Mythology" />
            <option value="Nature" />
            <option value="Nonfiction" />
            <option value="Paranormal" />
            <option value="Philosophy" />
            <option value="Poetry" />
            <option value="Politics" />
            <option value="Psychology" />
            <option value="Reference" />
            <option value="Religion" />
            <option value="Romance" />
            <option value="Satire" />
            <option value="Science" />
            <option value="Science Fiction" />
            <option value="Self Help" />
            <option value="Short Stories" />
            <option value="Spirituality" />
            <option value="Sports" />
            <option value="Suspense" />
            <option value="Technology" />
            <option value="Thriller" />
            <option value="Travel" />
            <option value="True Crime" />
            <option value="Urban Fantasy" />
            <option value="War" />
            <option value="Western" />
            <option value="Young Adult" />
          </datalist>

          <input
            type="number"
            name="year"
            placeholder="Publication Year"
            value={newBook.year}
            onChange={handleChange}
            required
          />

          {/* BUTTONS */}

          <div className="add-modal-buttons">
            <button type="submit" className="add-btn">
              Add Book
            </button>

            <button type="button" className="cancel-btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookModal;
