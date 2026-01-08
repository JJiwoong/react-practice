import { useEffect,useState } from "react";
import Movie from "../components/Movie";
import styled from "./Home.module.css";

function Home(){
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  const getMoives = async() => {
      const json = await (await fetch(
        `https://yts.lt/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
      setMovies(json.data.movies);
      setLoading(false);
    }
    useEffect(()=>{
      getMoives();
  },[]);
  return (
    <div className={styled["movie-list"]}>
      {loading ? (
      <h1>Wait...</h1> 
      ) : ( 
        <>
        <h2>Movie List</h2>
        <div className={styled["movie-list_container"]}>
          {movies.map((movie)=> (
            <Movie 
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image} 
            coverImg2={movie.large_cover_image} 
            title={movie.title} 
            rating={movie.rating}
            summary={movie.summary}
            genres={movie.genres}
            />
            )
            )
          }
        </div>
        </>
      )}
    </div>
  );
}

export default Home;