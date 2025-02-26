/* eslint-disable react/prop-types */
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
function MoviesList({ movies }) {
	return (
		<Row className="mt-3">
			{movies.length > 1 ? <CardMovie movies={movies} /> : <h1>لا يوجد افلام الان ...</h1>}
			<CardMovie movies={movies} />
		</Row>
	);
}

export default MoviesList;
