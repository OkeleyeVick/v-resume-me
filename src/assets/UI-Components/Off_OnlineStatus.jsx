import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useIsOnline } from "react-use-is-online";

const Off_OnlineStatus = () => {
	const { isOnline } = useIsOnline();
	const [s, D] = useState(false);
	return (
		<>
			<div className={`${s ? "translate-y-0" : "translate-y-10"} rounded-lg bg-white transition duration-200 shadow-custom_1`}>
				<div className="border-b py-3 px-4 flex items-center justify-between">
					<span className="flex items-center gap-2">
						<span className="font-bold">STATUS:</span>
						<span className={`uppercase font-bold ${isOnline ? "text-green-600" : "text-red-600"}`}>
							{isOnline ? "online" : "offline"}
						</span>
					</span>
					<button
						type="button"
						name="offline-online-status-button"
						onClick={() => {
							D((prev) => !prev);
						}}
						className="p-2 rounded-full transition relative before:inset-0 before:bg-gray-100 before:[content: ''] before:absolute before:rounded-full before:scale-0 before:transition before:duration-200 before:ease-in-out hover:before:scale-100 before:-z-[1] isolate">
						<Icon icon="heroicons:x-mark-20-solid" className="w-6 lg:w-7 h-6 lg:h-7" />
					</button>
				</div>
				<div className="p-4 flex flex-col items-center gap-y-8 text-center">
					<div className="relative w-16 h-16 grid place-content-center rounded-full bg-gray-100">
						<Icon
							icon={isOnline ? "ci:wifi-high" : "ph:wifi-x-bold"}
							className={`w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
								isOnline ? "text-green-600" : "text-red-600"
							}`}
						/>
					</div>
					<span className="text-lg">
						{isOnline ? "Welcome back! 🎉, let's keep on cooking your Resumé😃" : "🙁 Ensure you are connected to the internet ❗"}
					</span>
				</div>
			</div>
		</>
	);
};

export default Off_OnlineStatus;
