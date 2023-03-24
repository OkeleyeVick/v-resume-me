import { Route, Routes } from "react-router-dom";
import "./assets/css/animation.css";
import LandingPage from "./MainComponents/LangingPageComps/LandingPage";
import ResumePage from "./MainComponents/ResumePageComps/ResumePage";
import SelectTemplate from "./MainComponents/ResumePageComps/SelectTemplate";

function App() {
	return (
		<div className="App selection:text-main selection:bg-main group selection:bg-opacity-10">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/create-resume" element={<ResumePage />} />
				<Route path="/select-template" element={<SelectTemplate />} />
			</Routes>
		</div>
	);
}
export default App;
