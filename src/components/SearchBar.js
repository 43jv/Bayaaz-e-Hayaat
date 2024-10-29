import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authorWorks, searchAuthorWorks } from './archive';

const SearchBar = () => {
  const [books, setBooks] = useState(authorWorks);  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const results = searchAuthorWorks(query);
    setSearchResults(results);
  };

  return (
    <div style={{marginTop:"10vh"}}>
      <h1>Search Books</h1>
      <input
        type="text"
        placeholder="Search by author, title, or keywords"
        value={searchQuery}
        onChange={handleSearch}
        style={{
          width: '80%',
          padding: '10px',
          fontSize: '1.2rem',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      <h1>Books</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {(searchQuery ? searchResults : books).map((book) => (
          <li key={book.id} style={{ marginBottom: '10px' }}>
             <Link
                        to={`/RenderDoc/${encodeURIComponent(book.image)}${
                          book.digitisedText
                            ? `,${encodeURIComponent(book.digitisedText)}`
                            : ""
                        }?title=${encodeURIComponent(
                          book.title
                        )}&year=${encodeURIComponent(
                          book.year 
                        )}&author=${encodeURIComponent(
                          book.author
                        )}&engInfo=${encodeURIComponent(
                          book.engInfo
                        )}&urduInfo=${encodeURIComponent(
                          book.urduInfo
                        )}&genre=${encodeURIComponent(
                          book.genre
                        )}&magazine=${encodeURIComponent(
                          book.magazine
                        )}&year=${encodeURIComponent(
                          book.year
                        )}&keywords=${encodeURIComponent(book.keywords)}`}
              style={{
                textDecoration: 'none',
                color: '#8b4513',
                fontSize: '1.2rem',
                padding: '10px',
                borderRadius: '5px',
                display: 'block',
                backgroundColor: '#f9f9f9',
                transition: 'background-color 0.3s, color 0.3s',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#8b4513';
                e.target.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f9f9f9';
                e.target.style.color = '#8b4513';
              }}
            >
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;