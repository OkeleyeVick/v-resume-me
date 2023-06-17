import { Route, Routes } from "react-router-dom";
import "./assets/css/animation.css";
import LandingPage from "./MainComponents/LangingPageComps/LandingPage";
import CreateResumePage from "./MainComponents/ResumePageComps/CreateResumePage";
import SelectTemplate from "./MainComponents/TemplateSelectionComps/SelectTemplate";
import PageNotFound from "./MainComponents/ErrorPage/PageNotFound";

function App() {
	return (
		<div className="selection:text-main selection:bg-main group selection:bg-opacity-10">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/select-template" element={<SelectTemplate />} />
				<Route path="/create-resume/:id" element={<CreateResumePage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}
export default App;
