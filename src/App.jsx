import React from "react";
import { Route, Routes } from "react-router-dom";
// import "./assets/css/animation.css";
// import LandingPage from "./MainComponents/LangingPageComps/LandingPage";
// import CreateResumePage from "./MainComponents/ResumePageComps/CreateResumePage";
// import SelectTemplate from "./MainComponents/TemplateSelectionComps/SelectTemplate";
// import PageNotFound from "./MainComponents/ErrorPage/PageNotFound";

const SelectTemplate = React.lazy(() => import("./MainComponents/TemplateSelectionComps/SelectTemplate.jsx"));
const CreateResumePage = React.lazy(() => import("./MainComponents/ResumePageComps/CreateResumePage.jsx"));
const LandingPage = React.lazy(() => import("./MainComponents/LangingPageComps/LandingPage.jsx"));
const PageNotFound = React.lazy(() => import("./MainComponents/ErrorPage/PageNotFound.jsx"));

function App() {
	return (
		<div className="selection:text-main selection:bg-main group selection:bg-opacity-10">
			<React.Suspense>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/select-template" element={<SelectTemplate />} />
					<Route path="/create-resume/:id" element={<CreateResumePage />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</React.Suspense>
		</div>
	);
}
export default App;
