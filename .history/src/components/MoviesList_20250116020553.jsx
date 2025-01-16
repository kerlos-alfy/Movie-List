/* eslint-disable react/prop-types */
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
function MoviesList({ movies }) {
	return (
		<Row className="mt-3">{movies.length >= 1 ? movies.map((movie) => <CardMovie key={movie.id} movies={movie} />) : <h1>لا يوجد افلام الان ...</h1>}</Row>
	);
}

export default MoviesList;
