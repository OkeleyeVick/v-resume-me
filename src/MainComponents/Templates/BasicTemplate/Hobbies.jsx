import React from "react";
import { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Span, Span1 } from "../../../assets/theme/fontSizes";

const Hobbies = () => {
	const { hobbies } = useContext(userDataContext);
	return (
		<>
			{hobbies && hobbies.length !== 0 && (
				<>
					<div name="soft-skills">
						<Span className="text-title">Hobbies</Span>
						<div className="flex items-center gap-1 flex-wrap mt-4">
							{hobbies.map(({ hobbyName }) => {
								return (
									<Span1 key={hobbyName} className="pill">
										{hobbyName}
									</Span1>
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
