import React from "react";
import { useContext } from "react";
import { themeContext, userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Span, Span1 } from "../../../assets/theme/fontSizes";

const Hobbies = () => {
	const { hobbies } = useContext(userDataContext);
	return (
		<>
			{hobbies && hobbies.length !== 0 && (
				<>
					<div name="soft-skills">
						<Span className="text-title">Hobbies</Span>
						<div className="flex items-center gap-[5px] flex-wrap mt-2">
							{hobbies.map(({ hobbyName, id }) => {
								return (
									<React.Fragment key={id}>
										<Span1 key={hobbyName}>
											{hobbyName.trim()}
											{hobbies.at(-1).hobbyName === hobbyName ? "" : ","}
										</Span1>
									</React.Fragment>
								);
							})}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Hobbies;
