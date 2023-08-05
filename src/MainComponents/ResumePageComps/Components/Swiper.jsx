import { Popover, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { Fragment } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import db from "../../../assets/db/databsase.json";

export default function Swiper() {
	const { resumeTips } = db;

	return (
		<Popover className="relative">
			{({ open }) => (
				<>
					<Popover.Button className="inline-flex w-full justify-center rounded-[3px] bg-main shadow-md px-4 py-4 text-sm font-medium text-white hover:bg-hoverBgClr transition duration-150 ease-linear focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 gap-2 items-end">
						<Icon icon="pepicons-print:question" className="w-5 h-5 md:w-6 md:h-6" />
					</Popover.Button>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1">
						<Popover.Panel className="absolute bottom-full right-0 z-[32] w-72 md:w-80 h-64 md:h-60 -translate-y-2">
							<div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 h-full flex flex-col gap-y-3 mb-2 p-4">
								<span className="flex items-center justify-end">
									<Icon icon="fluent:chat-help-24-filled" className="text-main w-7 h-7" />
								</span>
								<section className="flex-grow">
									<Splide
										options={{
											rewind: true,
											autoplay: true,
											pauseOnHover: true,
										}}>
										{Object.entries(resumeTips).map((key, index) => {
											const [title, value] = [key[0], key[1]];
											return (
												<SplideSlide key={index} style={{ height: "100%" }}>
													<span className="flex flex-col h-full justify-around">
														<h5 className="title font-semibold">{title}</h5>
														<span className="text-[.78rem]">{value}</span>
													</span>
												</SplideSlide>
											);
										})}
									</Splide>
								</section>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
}
