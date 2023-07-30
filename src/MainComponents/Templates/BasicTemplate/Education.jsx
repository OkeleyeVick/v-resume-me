import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { DescriptionText, Smaller, Span, Span1 } from "../../../assets/theme/fontSizes";

export default function Education() {
	const { userEducationData } = useContext(userDataContext);

	return (
		<>
			{userEducationData && userEducationData.length !== 0 && (
				<div>
					<Span className="text-title">Education</Span>
					<div className="flex flex-col gap-y-3 mt-4">
						{userEducationData.map(
							({
								id,
								degree,
								school,
								startMonth,
								startYear,
								endMonth,
								endYear,
								city,
								country,
								currentlySchoolingThere,
								description,
							}) => {
								const check =
									startMonth ||
									startYear ||
									endMonth ||
									endYear ||
									currentlySchoolingThere ||
									city ||
									country ||
									school ||
									degree ||
									description;
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
															{endMonth || endYear || currentlySchoolingThere ? (
																<div className="end">
																	{currentlySchoolingThere === true ? (
																		<Smaller className="text-small uppercase">Present</Smaller>
																	) : (
																		<div>
																			<Smaller className="text-small">{endMonth ?? ""}</Smaller>/
																			<Smaller className="text-small">{endYear ?? ""}</Smaller>
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
														<Span1 className="job-title font-extrabold">{degree}</Span1>
														<Span1 className="company font-semibold">{school}</Span1>
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
