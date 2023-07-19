import React from "react";
import { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";

const Hobbies = () => {
	const { hobbies } = useContext(userDataContext);
	return (
		<>
			{hobbies && hobbies.length !== 0 && (
				<>
					<div name="soft-skills">
						<h1>Hobbies</h1>
						<div className="mt-1 flex items-center gap-1 flex-wrap">
							{hobbies.map(({ hobbyName }) => {
								return (
									<span key={hobbyName} className="text-center bg-gray-200 rounded-sm p-1 px-2 leading-none">
										{hobbyName}
									</span>
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
