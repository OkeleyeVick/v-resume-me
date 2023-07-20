import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";

export const Span = ({ children }) => <span className="tracking-wide">{children}</span>;
export default function WorkExperience() {
	const { workExperienceValues } = useContext(userDataContext);
	const { workExperiences } = workExperienceValues;
	const { userWorkExperiences } = workExperiences;

	return (
		<>
			{userWorkExperiences && userWorkExperiences.length !== 0 && (
				<div className="mt-3">
					<header className="font-bold">Work Experience</header>
					<div className="flex flex-col gap-y-3 mt-2">
						{userWorkExperiences.map(
							({ id, companyName, jobTitle, country, startMonth, startYear, endMonth, endYear, city, currentlyWorkingThere }) => {
								const check =
									startMonth ||
									startYear ||
									endMonth ||
									endYear ||
									currentlyWorkingThere ||
									city ||
									country ||
									companyName ||
									jobTitle;
								return (
									<React.Fragment key={id}>
										<section>
											{check ? (
												<>
													<span className="flex items-center gap-2">
														<span className="date flex items-center gap-1">
															{startMonth || startYear ? (
																<span className="start">
																	<small>{startMonth ?? ""}</small>/<small>{startYear ?? ""}</small>
																</span>
															) : (
																""
															)}
															<span className="divider">-</span>
															{endMonth || endYear || currentlyWorkingThere ? (
																<>
																	{currentlyWorkingThere === true ? (
																		<small>Present</small>
																	) : (
																		<span className="end flex items-center">
																			<small className="tracking-wide">{endMonth ?? ""}</small>/
																			<small>{endYear ?? ""}</small>
																		</span>
																	)}
																</>
															) : (
																<></>
															)}
														</span>
														<span className="flex items-center gap-1">
															{city && <small className="city uppercase text-[.6rem]">{city},</small>}
															{country && <small className="country uppercase text-[.6rem]">{country}</small>}
														</span>
													</span>
													<div>
														<h3 className="job-title capitalize font-extrabold">{jobTitle}</h3>
														<h4 className="company capitalize font-semibold">{companyName}</h4>
													</div>
												</>
											) : (
												""
											)}
										</section>
									</React.Fragment>
								);
							}
						)}
					</div>
				</div>
			)}
		</>
	);
}
