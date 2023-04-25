import React, { useContext } from "react";
import PersonalDetails from "./BasicTemplateComponents/PersonalDetails";
import "../assets/css/fonts.css";
import { componentContext } from "../MainComponents/ResumePageComps/CreateResumePage";

const BasicTemplate = () => {
	const { font } = useContext(componentContext);
	return (
		<div className="bg-white min-h-[100vh] p-4 grid grid-cols-3 gap-4" style={{ fontFamily: font, fontSize: "10px" }}>
			<section className="col-span-1 bg-[#DEAB52] py-4 px-3">
				<PersonalDetails />
			</section>
			<section className="col-span-2 text-xs">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero necessitatibus nihil doloribus fuga quae magnam aut temporibus fugit
				dicta, neque numquam amet totam? Porro sequi corrupti et, nulla ad perspiciatis est dolorem! Consequuntur tempore hic laudantium
				voluptatibus ut similique neque voluptatem, eligendi accusamus ipsa unde aut labore quaerat odio nostrum quos temporibus assumenda
				sed! Totam, repellat! Doloribus asperiores nobis ipsa voluptatum delectus eum corporis quos exercitationem ea est, optio vel.
				Explicabo totam doloribus quibusdam, rem adipisci modi maiores. Libero similique eligendi commodi atque tempora nisi, sapiente
			</section>
		</div>
	);
};

export default BasicTemplate;
