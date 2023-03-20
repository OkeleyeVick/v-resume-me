import { Icon } from "@iconify/react";
import React from "react";
import { useIsOnline } from "react-use-is-online";

const Off_OnlineStatus = () => {
	const { isOnline } = useIsOnline();
	return (
		<>
			<div className={`rounded-lg bg-white shadow-sm transition duration-300`}>
				<div className="border-b py-3 px-4 flex items-center justify-between">
					<span className="flex items-center gap-2">
						<span className="font-bold">STATUS:</span>
						<span className={``}>ONLINE</span>
					</span>
					<button type="button" className="p-2 rounded-full transition hover:bg-gray-100">
						<Icon icon="heroicons:x-mark-20-solid" className="w-6 h-6" />
					</button>
				</div>
				<div className="p-4 flex flex-col items-center gap-y-8 text-center">
					<div className="relative w-16 h-16 grid place-content-center rounded-full bg-gray-100">
						<Icon
							icon={isOnline ? "ci:wifi-high" : "ph:wifi-x-bold"}
							className={`w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600`}
						/>
						{/* <Icon
							icon="ph:wifi-x-bold"
							className={`w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 ${
								isOnline ? "opacity-0" : "opacity-1"
							}`}
						/>
						<Icon
							icon="ci:wifi-high"
							className={`w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-600 ${
								isOnline ? "opacity-1" : "opacity-0"
							}`}
						/> */}
					</div>
					<div className="">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magnam ut distinctio? Quos labore quod distinctio, quae
						nostrum inventore iusto soluta fuga reiciendis ullam ea, beatae quasi perspiciatis, non nisi?
					</div>
				</div>
			</div>
		</>
	);
};

export default Off_OnlineStatus;
