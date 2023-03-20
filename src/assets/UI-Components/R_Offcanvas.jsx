import { Icon } from "@iconify/react";
import React from "react";
import OffcanvasLoader from "./OffcanvasLoader";

const R_Offcanvas = () => {
	return (
		<div className={`glassmorphism absolute inset-0 overflow-hidden transition duration-200 ease-in-out`}>
			<div className={`transition shadow-custom_1 duration-200 w-3/4 md:w-2/5 absolute bg-white bottom-0 top-0 right-0`}>
				<div className="flex items-center justify-start p-2">
					<button
						type="button"
						className="p-2 rounded-full transition relative before:inset-0 before:bg-gray-200 before:[content: ''] before:absolute before:rounded-full before:scale-0 before:transition before:duration-200 before:ease-in-out hover:before:scale-100 before:-z-[1] isolate">
						<Icon icon="heroicons:x-mark-20-solid" className="w-6 lg:w-7 h-6 lg:h-7" />
					</button>
				</div>
				<div className="overflow-y-auto h-[80vh] p-4 py-0 right-offcanvas text-sm relative">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus animi quo, quidem consectetur esse ducimus, nostrum at
					nisi praesentium saepe non ea rerum necessitatibus, fuga officiis. Eaque maxime dignissimos corrupti voluptate beatae officia
					nulla aspernatur illo optio, maiores ea, nesciunt perspiciatis ad sapiente cum? Sequi fugiat nostrum sapiente dolorem ducimus
					vitae voluptatem, voluptas vero officiis nobis fugit eos cupiditate iste modi voluptatum deleniti dolor. Saepe quas deserunt neque
					doloremque quos quaerat quidem maxime soluta in aut animi placeat hic veniam debitis, temporibus culpa alias similique deleniti
					qui excepturi asperiores dignissimos. Fugiat nesciunt, nisi laboriosam ab excepturi voluptate ut maiores ex, molestias expedita
					deserunt inventore temporibus voluptatem blanditiis, eius sunt minus? Vel voluptatibus magnam dolor dolorum facere ut fugiat.
					Dolorum consequatur distinctio delectus hic esse, repudiandae ipsa saepe minima architecto blanditiis nulla quisquam at doloribus
					officiis enim id fuga facilis veritatis ex. Voluptatem laborum eos id eveniet architecto, nihil earum molestias hic laudantium,
					eum at quam tempore saepe velit. Exercitationem temporibus optio ea rem libero laudantium voluptatibus assumenda adipisci quidem
					quasi, dolores delectus quaerat nulla id, sequi corrupti quia autem praesentium incidunt! Libero officiis error hic aut, vel velit
					cupiditate, repellat, ea voluptatem voluptate numquam quaerat eos distinctio a id sequi repudiandae! Repudiandae ipsum optio autem
					temporibus! Hic iusto quis autem dignissimos excepturi nisi distinctio, tempora, iste quidem alias maiores facere aliquid ab optio
					temporibus quod, voluptatibus ipsa ut. Aperiam quidem molestiae recusandae voluptatum inventore voluptatibus, sint, a iure rem
					ratione ullam distinctio. Iure ducimus nihil laborum autem nisi dolorum beatae adipisci corporis labore assumenda? Possimus quas
					exercitationem praesentium odio itaque est deleniti soluta, tempore expedita eveniet illo sunt quibusdam maxime hic cum laboriosam
					ratione error quo esse quaerat at ab incidunt amet! Iure dolorum quam, aut tempore omnis voluptatem, doloremque est mollitia sed
					ipsum amet recusandae nemo accusantium consequatur?
				</div>
				<OffcanvasLoader />
			</div>
		</div>
	);
};

export default R_Offcanvas;
