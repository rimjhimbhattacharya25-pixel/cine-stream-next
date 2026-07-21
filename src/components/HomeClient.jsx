"use client";

import { useState } from "react";
import MovieGrid from "./MovieGrid";
import SearchBar from "./SearchBar";
import {
  fetchPopularMovies,
  searchMovies,
} from "../services/tmdbApi";

export default function HomeClient({ initialMovies }) {
  const [movies, setMovies] = useState(initialMovies);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [heading, setHeading] = useState("Popular Movies");

  const handleSearch = async () => {
    if (!query.trim()) {
      try {
        setLoading(true);

        const data = await fetchPopularMovies();

        setMovies(data.results || []);
        setHeading("Popular Movies");
      } catch (error) {
        console.error("Movie loading error:", error);
      } finally {
        setLoading(false);
      }

      return;
    }

    try {
      setLoading(true);

      const data = await searchMovies(query);

      setMovies(data.results || []);
      setHeading(`Search Results for "${query}"`);
    } catch (error) {
      console.error("Search error:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <div className="brand-logo">N</div>

          <div>
            <h1>NETFLIX LITE</h1>
            <p>Discover your next obsession</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <p className="section-label">MOVIE DISCOVERY</p>

          <h2>
            Find something
            <span> worth watching.</span>
          </h2>

          <p className="hero-description">
            Explore popular movies and discover your next cinematic
            obsession.
          </p>

          <SearchBar
            query={query}
            setQuery={setQuery}
            onSearch={handleSearch}
          />
        </section>

        <section className="movies-section">
          <div className="section-header">
            <div>
              <p className="section-label">CURATED FOR YOU</p>
              <h2>{heading}</h2>
            </div>

            <p className="movie-count">
              {movies.length} titles
            </p>
          </div>

          {loading ? (
            <p className="status-message">
              Loading movies...
            </p>
          ) : (
            <MovieGrid movies={movies} />
          )}
        </section>
      </main>
    </div>
  );
}