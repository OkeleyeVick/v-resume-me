import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import "../../../assets/css/fonts.css";

const font = {
	Syne: "Syne",
};
function SearchModal() {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<Transition appear show={isOpen} as="div">
				<Dialog as="div" className="relative z-30" onClose={closeModal}>
					<Transition.Child
						as="div"
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black bg-opacity-40" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto" style={{ fontFamily: font.Syne }}>
						<div className="flex min-h-full items-center justify-center p-4 text-center font-font_family">
							<Transition.Child
								as="div"
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95">
								<Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
									<div className="grid grid-cols-5">
										<div className="bg-red-50 p-4 col-span-3">
											<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
												Enter Title Search
											</Dialog.Title>
											<div className="mt-2">
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro aut, aliquam ipsum labore non,
												illo officia, culpa at sit inventore assumenda? Iusto iure, officiis numquam quibusdam dolorem earum
												natus!
											</div>
											<div className="mt-4">
												<button
													type="button"
													className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-blue-500 focus-visible:ring-offset-2"
													onClick={closeModal}>
													Close
												</button>
											</div>
										</div>
										<div className="board bg-hoverBgClr p-4 col-span-2">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit quod maiores ratione
											aliquam, earum magni a magnam ipsum? Reiciendis at enim, voluptas architecto commodi autem dolorem quae
											officiis accusamus.
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

export default SearchModal;
