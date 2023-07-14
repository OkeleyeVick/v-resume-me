import { Icon } from "@iconify/react";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

const key = import.meta.env.VITE_TINY_MCE_KEY;

const TextArea = ({ hasSubText, name, placeholder, "aria-label": ariaLabel }) => {
	const editorRef = useRef(null);
	const log = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}
	};
	return (
		<div className="input_container flex flex-col h-fit mt-9">
			<label htmlFor={name} className="text-lg font-semibold text-slate-700 mb-[1px]">
				Description
			</label>
			{hasSubText ? (
				<span className="text-[.8rem] mb-4 text-label_clr">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, fuga nihil! Asperiores dicta aliquid quae doloremque quod.
				</span>
			) : (
				""
			)}
			<div>
				<Editor
					apiKey={key}
					onInit={(evt, editor) => (editorRef.current = editor)}
					initialValue="<p>This is the initial content of the editor.</p>"
					init={{
						height: 300,
						menubar: false,
						plugins: [
							"advlist",
							"autolink",
							"lists",
							"link",
							"image",
							"charmap",
							"preview",
							"anchor",
							"searchreplace",
							"visualblocks",
							"code",
							"fullscreen",
							"insertdatetime",
							"media",
							"table",
							"code",
							"help",
							"wordcount",
						],
						toolbar:
							"undo redo | blocks | " +
							"bold italic forecolor | alignleft aligncenter " +
							"alignright alignjustify | bullist numlist outdent indent | " +
							"removeformat | help",
						content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
					}}
				/>
			</div>
		</div>
	);
};

export default TextArea;
