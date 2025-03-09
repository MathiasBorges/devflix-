import React, { useState, useEffect } from "react";
import "./MoviesPage.css";
import { useNavigate } from "react-router-dom";

function MoviesPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      image:
        "https://musicart.xboxlive.com/7/e63b1100-0000-0000-0000-000000000002/504/image.jpg?q=90&m=6&h=270&w=270&b=%23FFFFFFFF&f=jpg&o=f&aim=true",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      title: "The Dark Knight",
      image:
        "https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      title: "Interstellar",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvUJx4dEvJMwUWOlK2dn3xgNYhTAE-DfAcw&s",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 4,
      title: "Dunkirk",
      image:
        "https://upload.wikimedia.org/wikipedia/pt/0/0b/Dunkirk_p%C3%B4ster.png",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 5,
      title: "Tenet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pddc5hd9ZAeaMLQN_cLHw0ODLO64RxN-aw&s",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ]);

  const userName = localStorage.getItem("nome");
  const isLoggedIn = localStorage.getItem("logado") == "1";

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  function logOutButton() {
    localStorage.setItem("logado", null);
    navigate("/login");
  }

  return (
    <div className="movie-page">
      <header className="header">
        <div className="logo">DEVFLIX</div>
        <div className="user-info">
          <span>Bem-vindo, {userName}!</span>
        </div>
        <button
          onClick={logOutButton}
          className="logOutButton"
          style={{ color: "red", padding: "5px", borderRadius: "5px" }}
        >
          Logout
        </button>
      </header>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquise por filmes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="movie-item"
            onClick={() => setSelectedMovie(movie)}
          >
            <img src={movie.image} alt={movie.title} />
            <div className="movie-title">{movie.title}</div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="video-overlay">
          <div className="video-container">
            <button className="close-button" onClick={() => setSelectedMovie(null)}>X</button>
            <video width="100%" controls autoPlay>
              <source src={selectedMovie.video} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoviesPage;
