import React from "react";
import { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { H1, H2, Span } from "../../../assets/theme/fontSizes";

const Language = () => {
	const { languages } = useContext(userDataContext);
	return (
		<>
			{languages && languages.length !== 0 && (
				<span>
					<H1>Languages</H1>
					<div className="flex flex-wrap gap-1 mt-1">
						{languages.map(({ languageName }, index) => {
							return (
								<Span className="bg-gray-200 rounded-sm p-1 px-2 leading-none" key={index}>
									{languageName}
								</Span>
							);
						})}
					</div>
				</span>
			)}
		</>
	);
};

export default Language;
