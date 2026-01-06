import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.lt/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);

    }
    useEffect (()=>{
        getMovie();
    },[]);
    return <h1>Detail111</h1>
}

export default Detail;