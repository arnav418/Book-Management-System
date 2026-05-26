import { useEffect, useState } from "react";
import { getBooks, addBook, deleteBook, updateBook } from "../services/api";

import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import EditModal from "../components/EditModal";
import AddBookModal from "../components/AddBookModal";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [showForm, setShowForm] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [deleteToast, setDeleteToast] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editedBook, setEditedBook] = useState({
    id: "",
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.data);
    } catch (err) {
      setError("Failed to fetch books");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBook = async (e) => {
    e.preventDefault();

    try {
      const response = await addBook(newBook);

      setBooks((prevBooks) => [...prevBooks, response.data]);

      setNewBook({
        title: "",
        author: "",
        genre: "",
        year: "",
      });

      setShowForm(false);

      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);

      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));

      setDeleteToast(true);

      setTimeout(() => {
        setDeleteToast(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditClick = (book) => {
    setEditedBook(book);
    setIsModalOpen(true);
  };

  const handleModalChange = (e) => {
    setEditedBook({
      ...editedBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await updateBook(editedBook.id, editedBook);

      setBooks(
        books.map((book) => (book.id === editedBook.id ? response.data : book)),
      );

      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" || book.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="app-container">
      <div className="hero-section">
        <div className="theme-toggle-wrapper">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>

        <h1 className="hero-title">My Library</h1>

        <p className="hero-subtitle">Discover • Organize • Manage Your Books</p>
      </div>

      <div className="top-controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <FilterBar
          books={books}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />

        <button className="toggle-form-btn" onClick={() => setShowForm(true)}>
          + Add New Book
        </button>
      </div>

      {showForm && (
        <AddBookModal
          newBook={newBook}
          handleChange={handleChange}
          handleAddBook={handleAddBook}
          closeModal={() => setShowForm(false)}
        />
      )}

      <div className="books-container">
        {filteredBooks.length === 0 ? (
          <p className="empty-message">
            📚 Oops! No books found — Add some amazing books to your library ✨
          </p>
        ) : (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              handleDelete={handleDelete}
              handleEdit={handleEditClick}
            />
          ))
        )}
      </div>

      {isModalOpen && (
        <EditModal
          editedBook={editedBook}
          handleChange={handleModalChange}
          handleSave={handleSave}
          closeModal={() => setIsModalOpen(false)}
        />
      )}

      {showToast && (
        <div className="toast success-toast">Book Added Successfully</div>
      )}

      {deleteToast && (
        <div className="toast delete-toast">Book Deleted Successfully</div>
      )}
    </div>
  );
};

export default Home;
