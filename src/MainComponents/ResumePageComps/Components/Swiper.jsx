import { Popover, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { Fragment } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Swiper() {
	return (
		<Popover className="relative" layout>
			{({ open }) => (
				<>
					<Popover.Button className="inline-flex w-full justify-center rounded-[3px] bg-main shadow-sm px-4 py-4 text-sm font-medium text-white hover:bg-hoverBgClr transition duration-150 ease-linear focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 gap-2 items-end">
						<Icon
							icon="streamline:interface-help-customer-support-1-customer-headset-help-microphone-phone-support"
							className="w-5 h-5"
						/>
					</Popover.Button>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1">
						<Popover.Panel className="absolute bottom-full right-0 z-20 w-72 md:w-80 h-80  -translate-y-2">
							<div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 h-full flex flex-col gap-y-4 p-4">
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
										<SplideSlide style={{ height: "100%" }}>
											<div style={{ height: "100%" }}>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab? Soluta animi voluptate
												corrupti ipsam blanditiis labore aliquid voluptates provident accusantium quo praesentium laborum,
												laboriosam reprehenderit expedita amet tenetur non. Lorem ipsum dolor sit amet consectetur adipisicing
												elit. Doloribus, ab? Soluta animi voluptate corrupti ipsam blanditiis labore aliquid voluptates
												provident accusantium quo praesentium laborum, laboriosam reprehenderit expedita amet tenetur non.
											</div>
										</SplideSlide>
										<SplideSlide style={{ height: "100%" }}>
											<div style={{ height: "100%" }}>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab? Soluta animi voluptate
												corrupti ipsam blanditiis labore aliquid voluptates provident accusantium quo praesentium laborum,
												laboriosam reprehenderit expedita amet tenetur non.
											</div>
										</SplideSlide>
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
