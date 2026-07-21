// import Image from "next/image";
// import Link from "next/link";
// import { IMAGE_BASE_URL } from "../services/tmdbApi";

// export default function MovieCard({ movie }) {
//   const poster = movie?.poster_path
//     ? `${IMAGE_BASE_URL}${movie.poster_path}`
//     : "https://placehold.co/500x750?text=No+Poster";

//   const year = movie?.release_date
//     ? movie.release_date.slice(0, 4)
//     : "N/A";

//   const rating =
//     typeof movie?.vote_average === "number"
//       ? movie.vote_average.toFixed(1)
//       : "N/A";

//   return (
//     <div className="movie-card">
  
//       <div className="poster-container">
//         <Image
//           src={poster}
//           alt={movie?.title || "Movie Poster"}
//           width={500}
//           height={750}
//           className="movie-poster"
//           priority={false}
//         />

//         <div className="rating-badge">
//           ⭐ {rating}
//         </div>
//       </div>

//       <div className="movie-info">
//         <h3>{movie?.title || "Unknown Movie"}</h3>
//         <p>{year}</p>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import { IMAGE_BASE_URL } from "../services/tmdbApi";

export default function MovieCard({ movie }) {
  const poster = movie?.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : "https://placehold.co/500x750?text=No+Poster";

  const year = movie?.release_date
    ? movie.release_date.slice(0, 4)
    : "N/A";

  const rating =
    typeof movie?.vote_average === "number"
      ? movie.vote_average.toFixed(1)
      : "N/A";

  return (
    <Link href={`/movie/${movie.id}`} className="movie-card">
      <div className="poster-container">
        <Image
          src={poster}
          alt={movie?.title || "Movie Poster"}
          width={500}
          height={750}
          className="movie-poster"
          priority={false}
        />

        <div className="rating-badge">
          ⭐ {rating}
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie?.title || "Unknown Movie"}</h3>
        <p>{year}</p>
      </div>
    </Link>
  );
}