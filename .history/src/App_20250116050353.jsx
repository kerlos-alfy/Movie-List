import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
	const [movies, setMovies] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const getAllMovies = async () => {
		const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=3ac2c05f95f92e69875f1b70453ca0cd&language=ar");
		setMovies(res.data.results);
		setPageCount(res.data.total_pages);
	};
	const search = async (word) => {
		if (word === "") {
			getAllMovies();
		} else {
			const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3ac2c05f95f92e69875f1b70453ca0cd&query=${word}&language=ar`);
			setMovies(res.data.results);
			setPageCount(res.data.total_pages);
		}
	};

	//get current page
	const getPage = async (page) => {
		const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`);
		setMovies(res.data.results);
		setpageCount(res.data.total_pages);
	};

	useEffect(() => {
		getAllMovies();
	}, []);
	return (
		<div className="font color-body">
			<NavBar search={search} />
			<Container>
				<h1 className="text-center mt-5">Movies List</h1>
				<MoviesList movies={movies} pageCount={pageCount} />
			</Container>
		</div>
	);
}

export default App;
