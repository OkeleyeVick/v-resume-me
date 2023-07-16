import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorView } from "prosemirror-view";
import { Icon } from "@iconify/react";
import OrderedList from "@tiptap/extension-ordered-list";
import Underline from "@tiptap/extension-underline";
import { isActive } from "@tiptap/react";
import Blockquote from "@tiptap/extension-blockquote";

const Tiptap = () => {
	console.clear();

	EditorView.prototype.updateState = function updateState(state) {
		if (!this.docView) return; // This prevents the matchesNode error on hot reloads
		this.updateStateInner(state, this.state.plugins != state.plugins);
	};

	const content = `<ol>
          <li>A list item</li>
          <li>And another one</li>
        </ol>

        <ol start="5">
          <li>This item starts at 5</li>
          <li>And another one</li>
        </ol>`;
	const editor = useEditor({
		extensions: [StarterKit, OrderedList, Underline],
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
				<label className="text-lg font-semibold text-slate-700 mb-[1px]">Description</label>
				<span className="text-[.8rem] mb-2 text-label_clr">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, fuga nihil! Asperiores dicta aliquid quae doloremque quod.
				</span>
			</div>
			<div className="bg-input_clr rounded-sm p-2 before:bg-main relative before:absolute before:bottom-0 before:h-[1.5px] before:w-full before:content-normal before:left-0 before:right-0 focus-within:before:scale-x-100 before:scale-x-0 before:transition before:duration-300 before:ease-in-out">
				<div className="flex items-center">
					<div className="flex items-center gap-1 px-1">
						<button onClick={() => editor.chain().focus().toggleBold().run()}>
							<Icon icon="healthicons:b" className="w-4 h-4" />
						</button>
						<button onClick={() => editor.chain().focus().toggleItalic().run()}>
							<Icon icon="healthicons:i" className="w-4 h-4" />
						</button>
						<button onClick={() => editor.chain().focus().toggleStrike().run()}>
							<Icon icon="tabler:strikethrough" className="w-4 h-4" />
						</button>
						<button onClick={() => editor.chain().focus().toggleUnderline().run()}>
							<Icon icon="fe:underline" className="w-4 h-4" />
						</button>
					</div>
					<div className="divider bg-slate-300 relative inline-flex h-[22px] w-[1px]"></div>
					<div className="flex items-center px-1 gap-[5px]">
						<button
							onClick={() => editor.chain().focus().toggleOrderedList().run()}
							className={isActive === "" ? "bg-main text-white p-1" : " "}>
							<Icon icon="ant-design:ordered-list-outlined" className="w-4 h-4" />
						</button>
						<button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
							<Icon icon="ant-design:unordered-list-outlined" className="w-4 h-4" />
						</button>
					</div>
				</div>
				<EditorContent editor={editor} placeholder="e.g " />
			</div>
		</div>
	);
};

export default Tiptap;
