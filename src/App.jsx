import { Route, Routes } from "react-router-dom";
import "./assets/css/animation.css";
import LandingPage from "./MainComponents/LangingPageComps/LandingPage";
import ResumePage from "./MainComponents/ResumePageComps/ResumePage";

function App() {
	return (
		<div className="App selection:text-green-800 selection:bg-main selection:bg-opacity-10">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/create-resume" element={<ResumePage />} />
			</Routes>
		</div>
	);
}
export default App;
