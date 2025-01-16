import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
function MoviesList({ movies }) {
	return (
		<Row className="mt-3">
			<CardMovie />
			<CardMovie />
			<CardMovie />
			<CardMovie />
			<CardMovie />
			<CardMovie />
			<CardMovie />
			<CardMovie />
			<CardMovie />
			<CardMovie />
			<CardMovie />
			<CardMovie />
			<CardMovie />
		</Row>
	);
}

export default MoviesList;
