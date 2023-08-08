import React from "react";
import { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Span, Span1 } from "../../../assets/theme/fontSizes";

const Language = () => {
	const { languages } = useContext(userDataContext);
	return (
		<>
			{languages && languages.length !== 0 && (
				<div>
					<Span className="text-title">Languages</Span>
					<div className="flex flex-wrap gap-1 mt-2">
						{languages.map(({ languageName }, index) => {
							return (
								<Span1 key={index} className="pill">
									{languageName}
								</Span1>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default Language;
