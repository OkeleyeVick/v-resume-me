import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorView } from "prosemirror-view";
import { Icon } from "@iconify/react";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";

const Tiptap = () => {
	// console.clear();

	EditorView.prototype.updateState = function updateState(state) {
		if (!this.docView) return; // This prevents the matchesNode error on hot reloads
		this.updateStateInner(state, this.state.plugins != state.plugins);
	};

	const content = `<div >Enter your summary...</div>`;
	const editor = useEditor({
		extensions: [
			StarterKit,
			Underline,
			TextAlign.configure({
				types: ["heading", "paragraph"],
			}),
		],
		content: content,
		editorProps: {
			attributes: {
				class: "min-h-[200px] focus-visible:outline-none outline-none transition duration-300 ease-in-out p-2 pt-3 text-sm text-slate-600 selection:bg-opacity-20",
			},
		},
	});

	return (
		<div className="mt-6">
			<div className="flex flex-col">
				<label className="text-lg font-semibold text-slate-700 mb-[1px]">Professional Summary</label>
				<span className="text-[.8rem] mb-2 text-label_clr">
					Write a brief summary about yourself. Mention your role, experience & <span className="text-slate-600">most importantly</span> -
					your biggest achievements, best qualities and skills.
				</span>
			</div>
			<div className="bg-input_clr rounded-sm p-2 before:bg-main relative before:absolute before:bottom-0 before:h-[1.5px] before:w-full before:content-normal before:left-0 before:right-0 focus-within:before:scale-x-100 before:scale-x-0 before:transition before:duration-300 before:ease-in-out">
				<div className="flex items-center">
					<div className="flex items-end gap-1 px-1">
						<button className="text-slate-500 hover:text-main" onClick={() => editor.chain().focus().toggleBold().run()}>
							<Icon icon="bx:bold" className="w-[1.1rem] h-[1.1rem] translate-y-[1px]" />
						</button>
						<button className="text-slate-500 hover:text-main" onClick={() => editor.chain().focus().toggleItalic().run()}>
							<Icon icon="bx:italic" className="w-4 h-4" />
						</button>
						<button className="text-slate-500 hover:text-main" onClick={() => editor.chain().focus().toggleStrike().run()}>
							<Icon icon="ic:round-strikethrough-s" className="w-[1.1rem] h-[1.1rem] translate-y-[1px]" />
						</button>
						<button className="text-slate-500 hover:text-main" onClick={() => editor.chain().focus().toggleUnderline().run()}>
							<Icon icon="mdi:format-underline" className="w-4 h-4" />
						</button>
					</div>
					<div className="divider bg-slate-300 relative inline-flex h-[22px] w-[1px]"></div>
					<div className="flex items-center px-1 gap-[5px]">
						<button onClick={() => editor.chain().focus().setTextAlign("left").run()} className="text-slate-500 hover:text-main">
							<Icon icon="majesticons:text-align-left" className="w-5 h-5" />
						</button>
						<button onClick={() => editor.chain().focus().setTextAlign("center").run()} className="text-slate-500 hover:text-main">
							<Icon icon="ci:text-align-center" className="w-5 h-5" />
						</button>
						<button onClick={() => editor.chain().focus().setTextAlign("right").run()} className="text-slate-500 hover:text-main">
							<Icon icon="humbleicons:align-text-right" className="w-5 h-5" />
						</button>
						<button onClick={() => editor.chain().focus().setTextAlign("justify").run()} className="text-slate-500 hover:text-main">
							<Icon icon="ph:text-align-justify-bold" className="w-5 h-5" />
						</button>
					</div>
				</div>
				<EditorContent editor={editor} />
			</div>
		</div>
	);
};

export default Tiptap;
