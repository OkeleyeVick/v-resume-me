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
					<div className="flex items-center flex-wrap gap-[5px] mt-2">
						{languages.map(({ languageName }, index) => {
							return (
								<React.Fragment key={index}>
									<Span1 key={index}>
										{languageName}
										{languages.at(-1).languageName === languageName ? "" : ","}
									</Span1>
								</React.Fragment>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default Language;
