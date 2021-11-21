import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoding] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoding(false);
    console.log(movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : <h1>{movie.title}</h1>}</div>;
}

export default Detail;
