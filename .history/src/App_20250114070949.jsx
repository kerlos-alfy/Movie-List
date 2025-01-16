import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./assets/components/NavBar";
import MoviesList from "./assets/components/MoviesList";
function App() {
	return (
		<div className="font color-body">
			<NavBar />
			<Container>
				<h1 className="text-center mt-5">Movies List</h1>
				<MoviesList />
			</Container>
		</div>
	);
}

export default App;
