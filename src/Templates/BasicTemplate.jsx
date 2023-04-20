import React from "react";
import PersonalDetails from "./BasicTemplateComponents/PersonalDetails";
import "../assets/css/fonts.css";

const fonts = {
	Syne: "Syne",
	Rubik: "Rubik",
	Sora: "Sora",
};

const BasicTemplate = () => {
	return (
		<div className="bg-white min-h-[100vh] p-4 grid grid-cols-3 gap-4" style={{ fontFamily: fonts.Syne, fontSize: "10px" }}>
			<section className="col-span-1 bg-[#DEAB52] p-4">
				<PersonalDetails />
			</section>
			<section className="col-span-2 text-xs">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero necessitatibus nihil doloribus fuga quae magnam aut temporibus fugit
				dicta, neque numquam amet totam? Porro sequi corrupti et, nulla ad perspiciatis est dolorem! Consequuntur tempore hic laudantium
				voluptatibus ut similique neque voluptatem, eligendi accusamus ipsa unde aut labore quaerat odio nostrum quos temporibus assumenda
				sed! Totam, repellat! Doloribus asperiores nobis ipsa voluptatum delectus eum corporis quos exercitationem ea est, optio vel.
				Explicabo totam doloribus quibusdam, rem adipisci modi maiores. Libero similique eligendi commodi atque tempora nisi, sapiente
				reiciendis voluptas ratione, et aspernatur aliquid quia harum unde incidunt! Quia quibusdam temporibus rem, cum dolorum ut consectetur
				veritatis molestias voluptatibus quisquam delectus eveniet molestiae ex dolore eos eaque accusantium omnis accusamus atque. Totam
				adipisci quod laborum dicta dolorem aliquam velit assumenda ratione eos ipsum voluptatem ut ducimus quam ipsa, sed atque, suscipit ad
				necessitatibus fugit quae ipsam rem. Dignissimos, illo voluptatem vel distinctio saepe fugiat maiores et explicabo quae reiciendis
				vitae magnam quod praesentium ab quam ea laborum? Alias tenetur ipsam vel? Repellendus facere recusandae rem? Harum dolor sapiente
				voluptates in ut ratione error mollitia sit, consequuntur, animi delectus aut libero ipsum. Fuga ipsam obcaecati inventore?
				Repudiandae quisquam libero dicta quaerat adipisci maiores, reiciendis a sit tempora minima voluptatum vitae suscipit corporis
				laudantium quo, labore iusto in aut? In, recusandae! Illo fugit eum consequuntur, enim adipisci perferendis non. Reiciendis ipsam
				suscipit voluptas, ea blanditiis fuga iure? Animi quos sequi earum molestias incidunt nulla corporis, consequuntur explicabo a vitae
				adipisci minus quisquam molestiae ad ut reiciendis dolore eos numquam sunt dicta ipsa repellendus itaque et? Ratione quis reiciendis
				ab! Ut ipsum, laudantium, nisi commodi ad corrupti tempora architecto veniam expedita a minus ea eligendi ab iusto. Magni recusandae
				recusandae perferendis blanditiis distinctio iste hic sed laudantium, eaque et repellendus laboriosam labore eligendi in natus nobis
				animi quas voluptate. Quibusdam alias assumenda dolorem! Culpa modi quasi tempore fuga facilis sed quidem deserunt dolorem totam
				eligendi suscipit sapiente eveniet itaque omnis reprehenderit, consequatur voluptas neque nobis voluptate nesciunt illum quibusdam
				doloribus! Quam suscipit sint veniam, saepe voluptatibus alias veritatis vel rem sunt excepturi dicta pariatur aliquam vitae in eaque
				aperiam. Facilis deleniti unde praesentium neque eligendi, officiis maxime id iusto molestias dolore esse. Culpa a nihil cumque
				ratione, ullam alias fugit iste? Autem quisquam assumenda dolores dolorem consequuntur recusandae odio eaque vitae facere soluta
				deleniti ex sint fuga, quaerat qui at fugiat ullam aut nihil molestiae vel? Labore incidunt ea culpa qui ad temporibus facilis,
				sapiente dolorum aliquam quidem. Animi, minima. Magnam placeat obcaecati ullam nihil excepturi porro beatae eos quod enim quam? Vitae
				cumque voluptatum aliquam rerum perspiciatis dolorum voluptates cupiditate labore aspernatur optio? Sed iure nobis laudantium mollitia
				magnam expedita unde repudiandae. Tempora placeat corrupti voluptates minima fuga aliquid earum iste veniam recusandae esse porro
				maiores sint nulla qui, voluptatibus iusto iure cumque voluptas optio ex unde maxime corporis. Eveniet aliquid eaque molestias ratione
				facere maiores, minima sit at minus consequuntur voluptatum magnam! Corrupti ut saepe, incidunt architecto, nisi totam deserunt
				temporibus rem praesentium laboriosam labore similique explicabo esse blanditiis! Recusandae unde, quis quae eaque optio laboriosam
				vel dolorum expedita officia, consectetur dolore provident aliquam odio deleniti magnam omnis nemo. Minima eligendi fugiat aliquid ut
				veniam hic?
			</section>
		</div>
	);
};

export default BasicTemplate;
