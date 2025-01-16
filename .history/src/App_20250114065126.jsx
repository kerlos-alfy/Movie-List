import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./assets/components/NavBar";
import CardMovie from "./assets/components/CardMovie";
import MoviesList from "./assets/components/MoviesList";
function App() {
	return (
		<div className="font color-body">
			<NavBar />
			<Container>
				<CardMovie />
				<MoviesList />
			</Container>
		</div>
	);
}

export default App;
