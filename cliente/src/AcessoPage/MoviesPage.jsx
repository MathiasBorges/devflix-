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
      video: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "The Dark Knight",
      image:
        "https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg",
      video: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
      id: 3,
      title: "Interstellar",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvUJx4dEvJMwUWOlK2dn3xgNYhTAE-DfAcw&s",
      video: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      id: 4,
      title: "Dunkirk",
      image:
        "https://upload.wikimedia.org/wikipedia/pt/0/0b/Dunkirk_p%C3%B4ster.png",
      video: "https://www.youtube.com/embed/F-eMt3SrfFU"
    },
    {
      id: 5,
      title: "Tenet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pddc5hd9ZAeaMLQN_cLHw0ODLO64RxN-aw&s",
      video: "https://www.youtube.com/embed/LdOM0x0XDMo"
    },
    {
      id:6,
      title:"All Gegagedigedagedago compilation 1-20",
      image:"https://i.ytimg.com/vi/9s_nZFvzSkQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLALauc2BiaY9purDmHDifYiorj81g",
      video:"https://www.youtube.com/watch?v=9s_nZFvzSkQ&pp=ygULbWVtZSBudWdnZXQ%3D"
    },
  ]);

  const userName = localStorage.getItem("nome");
  const isLoggedIn = localStorage.getItem("logado") == '1';

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
        <div className="logo">DEVFLIX
        <div className="user-info">
          <span>Bem-vindo, {userName}!</span>
        </div>
        </div>
        <button onClick={logOutButton} className="logOutButton" style={{ color: "red", padding: "5px", borderRadius: "5px" }}>Logout</button>
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
          <div key={movie.id} className="movie-item" onClick={() => setSelectedMovie(movie)}>
            <img src={movie.image} alt={movie.title} />
            <div className="movie-title">{movie.title}</div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setSelectedMovie(null)}>X</span>
            <iframe
              width="100%"
              height="400"
              src={selectedMovie.video}
              title={selectedMovie.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoviesPage;
