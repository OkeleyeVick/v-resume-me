import React from "react";
import { Route, Routes } from "react-router-dom";
import PageLoader from "./MainComponents/GeneralComponents/PageLoader.jsx";
const SelectTemplate = React.lazy(() => import("./MainComponents/TemplateSelectionComps/SelectTemplate.jsx"));
const CreateResumePage = React.lazy(() => import("./MainComponents/ResumePageComps/CreateResumePage.jsx"));
const LandingPage = React.lazy(() => import("./MainComponents/LangingPageComps/LandingPage.jsx"));
const PageNotFound = React.lazy(() => import("./MainComponents/ErrorPage/PageNotFound.jsx"));

function App() {
	return (
		<div className="selection:text-main selection:bg-main group selection:bg-opacity-10">
			<React.Suspense fallback={<PageLoader />}>
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
