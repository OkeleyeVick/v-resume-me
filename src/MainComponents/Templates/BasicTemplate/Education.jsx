import React, { useContext } from "react";
import { themeContext, userDataContext } from "../../ResumePageComps/CreateResumePage";
import { DescriptionText, Smaller, Span, Span1 } from "../../../assets/theme/fontSizes";

export default function Education() {
	const { userEducationData } = useContext(userDataContext);

	const {
		themeSelection: {
			userResumeColor: {
				selectedColor: { color },
			},
		},
	} = useContext(themeContext);

	return (
		<>
			{userEducationData && userEducationData.length !== 0 && (
				<div>
					<Span
						className="text-title relative before:absolute before:h-[1px] before:-translate-y-1 before:top-0 before:w-3/5 before:bg-slate-500 opacity-80"
						style={{ color: `${color}` }}>
						Education
					</Span>
					<div className="flex flex-col gap-y-3 mt-1">
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
													<div className="flex flex-col mt-1">
														<Span1 className="degree font-extrabold">{degree}</Span1>
														<Span1 className="school font-normal">{school}</Span1>
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
															{endMonth || endYear || currentlySchoolingThere ? (
																<div className="end">
																	{currentlySchoolingThere === true ? (
																		<Smaller className="text-small uppercase">Present</Smaller>
																	) : (
																		<>
																			<Smaller className="text-small">{endMonth ?? ""}</Smaller>/
																			<Smaller className="text-small">{endYear ?? ""}</Smaller>
																		</>
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
