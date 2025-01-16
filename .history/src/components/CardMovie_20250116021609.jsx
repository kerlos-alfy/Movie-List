/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";

// eslint-disable-next-line no-unused-vars
function CardMovie({ mov }) {
	return (
		<Col xs="6" sm="6" md="4" lg="3" className="my-1">
			<div className="card">
				<img className="card__image" src="prof.jpg" alt="hu" />
				<div className="card__overlay">
					<div className="overlay__text text-center w-100 p-2">
						<p>اسم الفيلم : </p>
						<p>تاريخ الاصدار:</p>
						<p>عدد المقيمين: </p>
						<p>التقييم: </p>
					</div>
				</div>
			</div>
		</Col>
	);
}

export default CardMovie;
