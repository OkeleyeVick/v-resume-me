import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./features/store";
// import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material";
import { MotionConfig } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
		<StyledEngineProvider injectFirst>
			<BrowserRouter>
				<MotionConfig>
					<App />
				</MotionConfig>
			</BrowserRouter>
		</StyledEngineProvider>
		{/* </Provider> */}
	</React.StrictMode>
);
