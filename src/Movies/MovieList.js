import MovieDetail from "./Movie"

export default function Movies (props){

    return (
        <div>

            This is list of movies;
            Total Movies:{props.moviesList.length}
            <div>
                {props.moviesList.map((mov) =>  <MovieDetail mov={mov}></MovieDetail>)}
           
            </div>
        </div>
    );
}