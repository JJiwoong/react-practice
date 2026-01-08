import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "./Movie.module.css"

function Movie({coverImg,id,title,summary,genres,rating}){
    return (
        <div>
          <Link to={`/movie/${id}`} className={styled.flex_box}>
          <img src={coverImg} />
          <p className={styled["movie-title"]}>
            {title}
            </p>
          {/* <p>{summary}</p> */}
          <p className={styled.rating}>Rating &#9733;{rating}</p>
          {/* <ul>
            {genres?.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul> */}
          </Link>
        </div>        
    )
    
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // summary: PropTypes.string.isRequired,
  // genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie