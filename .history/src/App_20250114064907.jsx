import "./App.css";
import NavBar from "./assets/components/NavBar";
import CardMovie from "./assets/components/CardMovie";
import { Container } from "react-bootstrap";
function App() {
	return (
		<div className="font color-body">
			<NavBar />
			<Container>
				<CardMovie />
			</Container>
		</div>
	);
}

export default App;
