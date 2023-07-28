import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Smaller, Span, Span1 } from "../../../assets/theme/fontSizes";

export default function WorkExperience() {
	const { workExperienceValues } = useContext(userDataContext);
	const { workExperiences } = workExperienceValues;
	const { userWorkExperiences } = workExperiences;

	return (
		<>
			{userWorkExperiences && userWorkExperiences.length !== 0 && (
				<div>
					<Span className="text-title">Work Experience</Span>
					<div className="flex flex-col gap-y-3 mt-4">
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
										<section className="mt-1">
											{check ? (
												<>
													<div className="flex items-center gap-2">
														<div className="date flex items-center gap-1">
															{startMonth || startYear ? (
																<div className="start">
																	<Smaller className="text-small">{startMonth ?? ""}</Smaller>/
																	<Smaller className="text-small">{startYear ?? ""}</Smaller>
																</div>
															) : (
																""
															)}
															<span className="divider">-</span>
															{endMonth || endYear || currentlyWorkingThere ? (
																<div class="end">
																	{currentlyWorkingThere === true ? (
																		<Smaller className="text-small uppercase">Present</Smaller>
																	) : (
																		<div>
																			<Smaller className="text-small">{endMonth}</Smaller>/
																			<Smaller className="text-small">{endYear}</Smaller>
																		</div>
																	)}
																</div>
															) : (
																<></>
															)}
														</div>
														<div className="flex items-center gap-1">
															{city && <Smaller className="city uppercase text-small">{city},</Smaller>}
															{country && <Smaller className="country uppercase text-small">{country}</Smaller>}
														</div>
													</div>
													<div className="flex flex-col mt-1">
														<Span1 className="job-title capitalize font-extrabold">{jobTitle}</Span1>
														<Span1 className="company capitalize font-semibold">{companyName}</Span1>
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
