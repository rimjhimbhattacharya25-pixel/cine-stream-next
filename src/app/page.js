import HomeClient from "../components/HomeClient";
import { fetchPopularMovies } from "../services/tmdbApi";

export default async function Home() {
  let movies = [];

  try {
    const data = await fetchPopularMovies();
    movies = data.results || [];
  } catch (error) {
    console.error("Movie loading error:", error);
  }

  return <HomeClient initialMovies={movies} />;
}