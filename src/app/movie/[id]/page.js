// import Image from "next/image";
// import { fetchMovieById, IMAGE_BASE_URL } from "../../../services/tmdbApi";

// export async function generateMetadata({ params }) {
//   const movie = await fetchMovieById(params.id);

//   return {
//     title: movie.title,
//     description: movie.overview,
//   };
// }

// export default async function MovieDetails({ params }) {
//   const movie = await fetchMovieById(params.id);

//   const poster = movie.poster_path
//     ? `${IMAGE_BASE_URL}${movie.poster_path}`
//     : "https://placehold.co/500x750?text=No+Poster";

//   return (
//     <main
//       style={{
//         maxWidth: "1200px",
//         margin: "50px auto",
//         padding: "20px",
//         color: "white",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           gap: "40px",
//           alignItems: "flex-start",
//         }}
//       >
//         <Image
//           src={poster}
//           alt={movie.title}
//           width={350}
//           height={520}
//         />

//         <div>
//           <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
//             {movie.title}
//           </h1>

//           <p>
//             <strong>Release Date:</strong>{" "}
//             {movie.release_date || "N/A"}
//           </p>

//           <p>
//             <strong>Rating:</strong>{" "}
//             {movie.vote_average || "N/A"}
//           </p>

//           <br />

//           <h2>Overview</h2>

//           <p style={{ lineHeight: 1.8 }}>
//             {movie.overview || "No overview available."}
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }
import Image from "next/image";
import { fetchMovieById, IMAGE_BASE_URL } from "../../../services/tmdbApi";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const movie = await fetchMovieById(id);

  return {
    title: movie.title,
    description: movie.overview,
  };
}

export default async function MovieDetails({ params }) {
  const { id } = await params;

  const movie = await fetchMovieById(id);

  const poster = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : "https://placehold.co/500x750?text=No+Poster";

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "50px auto",
        padding: "20px",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        <Image
          src={poster}
          alt={movie.title}
          width={350}
          height={520}
        />

        <div>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            {movie.title}
          </h1>

          <p>
            <strong>Release Date:</strong>{" "}
            {movie.release_date || "N/A"}
          </p>

          <p>
            <strong>Rating:</strong>{" "}
            {movie.vote_average || "N/A"}
          </p>

          <br />

          <h2>Overview</h2>

          <p style={{ lineHeight: 1.8 }}>
            {movie.overview || "No overview available."}
          </p>
        </div>
      </div>
    </main>
  );
}