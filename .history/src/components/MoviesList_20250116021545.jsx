/* eslint-disable react/prop-types */
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
function MoviesList({ movies }) {
	return (
		<Row className="mt-3">
			{movies.length >= 1 ? (
				movies.map((mov) => {
					return <h1 key={mov.id}>{mov.title}</h1>;
				})
			) : (
				<h2 className="text-center p-5">لا يوجد افلام...</h2>
			)}
		</Row>
	);
}

export default MoviesList;
