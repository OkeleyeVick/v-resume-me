import { Route, Router, Routes } from "react-router-dom";
import "./assets/css/animation.css";
import LandingPage from "./MainComponents/LandingPage";
import ResumePage from "./MainComponents/ResumePage";

function App() {
	return (
		<div className="App selection:text-green-800 selection:bg-main selection:bg-opacity-10">
			<Routes>
				<Route path="/" element={<LandingPage />} />
			</Routes>
		</div>
	);
}
export default App;
