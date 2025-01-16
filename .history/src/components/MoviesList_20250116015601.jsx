import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
function MoviesList({ movies }) {
	return (
		<Row className="mt-3">
			<CardMovie movies={movies} />
		</Row>
	);
}

export default MoviesList;
