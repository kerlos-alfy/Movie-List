import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		getAllMovies();
	}, []);
	const getAllMovies = async () => {
		const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=3ac2c05f95f92e69875f1b70453ca0cd&language=ar&page=1");
		setMovies(res.data.results);
		console.log(res.data.results);
	};

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
