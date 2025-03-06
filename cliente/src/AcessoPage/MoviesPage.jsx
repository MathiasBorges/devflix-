import React, { useState, useEffect } from "react";
import "./MoviesPage.css";
import { useNavigate } from "react-router-dom";

function MoviesPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      image:
        "https://musicart.xboxlive.com/7/e63b1100-0000-0000-0000-000000000002/504/image.jpg?q=90&m=6&h=270&w=270&b=%23FFFFFFFF&f=jpg&o=f&aim=true",
    },
    {
      id: 2,
      title: "The Dark Knight",
      image:
        "https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg",
    },
    {
      id: 3,
      title: "Interstellar",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvUJx4dEvJMwUWOlK2dn3xgNYhTAE-DfAcw&s",
    },
    {
      id: 4,
      title: "Dunkirk",
      image:
        "https://upload.wikimedia.org/wikipedia/pt/0/0b/Dunkirk_p%C3%B4ster.png",
    },
    {
      id: 5,
      title: "Tenet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pddc5hd9ZAeaMLQN_cLHw0ODLO64RxN-aw&s",
    },
  ]);

  const userName = localStorage.getItem("nome"); // Nome do usuário logado
  const isLoggedIn = localStorage.getItem("logado") == '1'; // Verifica se o usuário está logado

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Verifica o login na montagem do componente
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/"); // Redireciona se o usuário não estiver logado
    }
  }, [isLoggedIn, navigate]);

  // Se o usuário estiver logado, exibe o conteúdo da página
  if (!isLoggedIn) {
    return null; // Retorna nada enquanto redireciona
  }

  function logOutButton() {
      localStorage.setItem("logado",null)    
      location.reload()  
  }

  return (
    <div className="movie-page">
      {/* Header */}
      <header className="header">
        <div className="logo">DEVFLIX</div>
        <div className="user-info">
          <span>Bem-vindo, {userName}!</span>
        </div>
        <button onClick={logOutButton} className="logOutButton" style={{color:"red", padding:"5px", borderRadius:"5px"}}>Logout</button>
      </header>
      {/* Barra de pesquisa */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquise por filmes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Grade de filmes */}
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={movie.image} alt={movie.title} />
            <div className="movie-title">{movie.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesPage;
