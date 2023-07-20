import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";

export default function Education() {
	const { userEducationData } = useContext(userDataContext);

	return (
		<>
			{userEducationData && userEducationData.length !== 0 && (
				<div>
					<header className="font-bold">Education</header>
					{userEducationData.map(
						({ id, degree, school, startMonth, startYear, endMonth, endYear, city, country, currentlySchoolingThere }) => (
							<React.Fragment key={id}>
								<section>
									<span className="flex items-center">
										<span className="date flex items-center">
											{startMonth || startYear ? (
												<small className="start">
													{startMonth ?? ""} - {startYear ?? ""}
												</small>
											) : (
												""
											)}
											{endMonth || endYear || currentlySchoolingThere ? (
												<>
													{currentlySchoolingThere ? (
														<small>Present</small>
													) : (
														<small className="end">
															{endMonth ?? ""} - {endYear ?? ""}
														</small>
													)}
												</>
											) : (
												<></>
											)}
										</span>
										<span>
											<small className="city"></small>
											<small className="country"></small>
										</span>
									</span>
								</section>
							</React.Fragment>
						)
					)}
				</div>
			)}
		</>
	);
}
