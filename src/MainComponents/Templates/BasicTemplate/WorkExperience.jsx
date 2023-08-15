import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { DescriptionText, Smaller, Span, Span1 } from "../../../assets/theme/fontSizes";

export default function WorkExperience() {
	const {
		workExperienceValues: {
			workExperiences: { userWorkExperiences },
		},
	} = useContext(userDataContext);

	return (
		<>
			{userWorkExperiences && userWorkExperiences.length !== 0 && (
				<div>
					<Span className="text-title relative before:absolute before:h-[.6px] before:-translate-y-1 before:top-0 before:w-3/5 before:bg-slate-500 opacity-80">
						Work Experience
					</Span>
					<div className="flex flex-col gap-y-3 mt-1">
						{userWorkExperiences.map(
							({
								id,
								companyName,
								jobTitle,
								country,
								startMonth,
								startYear,
								endMonth,
								endYear,
								city,
								currentlyWorkingThere,
								description,
							}) => {
								const check =
									startMonth ||
									startYear ||
									endMonth ||
									endYear ||
									currentlyWorkingThere ||
									city ||
									country ||
									companyName ||
									jobTitle ||
									description;
								return (
									<React.Fragment key={id}>
										<section className="mt-1">
											{check ? (
												<>
													<div className="flex flex-col">
														<Span1 className="job-title font-bold">{jobTitle}</Span1>
														<Span1 className="company font-normal">{companyName}</Span1>
													</div>
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
																<div className="end">
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
															{city && <small className="city uppercase text-small">{city},</small>}
															{country && <Smaller className="country uppercase text-small">{country}</Smaller>}
														</div>
													</div>
													{description && (
														<div className="mt-1 ps-3 marker:text-gray-500 marker:text-[10px]">
															<DescriptionText textValue={description} />
														</div>
													)}
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
