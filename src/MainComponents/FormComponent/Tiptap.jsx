import React, { useContext } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorView } from "prosemirror-view";
import { Icon } from "@iconify/react";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";

export const ButtonIcon = ({ iconName, iconClassName, ButtonClassName, buttonFunction }) => (
	<button type="button" onClick={buttonFunction} className={`${ButtonClassName} flex items-center`}>
		<Icon icon={iconName} className={`${iconClassName} pointer-events-none`} />
	</button>
);

const Tiptap = ({ onUpdate, text }) => {
	// console.clear();

	EditorView.prototype.updateState = function updateState(state) {
		if (!this.docView) return; // This prevents the matchesNode error on hot reloads
		this.updateStateInner(state, this.state.plugins != state.plugins);
	};

	const content = `${text}`;
	const editor = useEditor({
		extensions: [
			StarterKit,
			Underline,
			BulletList.configure({
				HTMLAttributes: {
					class: "list-disc",
				},
			}),
			ListItem,
			OrderedList.configure({
				HTMLAttributes: {
					class: "list-decimal",
				},
			}),
			TextAlign.configure({
				types: ["heading", "paragraph"],
			}),
		],
		content: content,
		editorProps: {
			attributes: {
				class: "min-h-[200px] focus-visible:outline-none outline-none transition duration-300 ease-in-out p-2 text-sm text-slate-600 selection:bg-opacity-20",
			},
		},
		//listen for update
		onUpdate({ editor }) {
			const userText = editor.getHTML();
			onUpdate(userText);
		},
	});

	const buttons = [
		[
			{
				buttonFunction: () => editor?.chain().focus().toggleBold().run(),
				iconName: "bx-bold",
				iconClassName: "w-[1.1rem] h-[1.1rem] translate-y-[1px]",
			},
			{
				buttonFunction: () => editor?.chain().focus().toggleItalic().run(),
				iconName: "bx-italic",
				iconClassName: "w-4 h-4",
			},
			{
				buttonFunction: () => editor?.chain().focus().toggleStrike().run(),
				iconName: "ic:round-strikethrough-s",
				iconClassName: "w-[1.1rem] h-[1.1rem] translate-y-[1px]",
			},
			{
				buttonFunction: () => editor?.chain().focus().toggleUnderline().run(),
				iconName: "mingcute:underline-fill",
				iconClassName: "w-4 h-4",
			},
		],
		[
			{
				buttonFunction: () => editor?.chain().focus().setTextAlign("left").run(),
				iconName: "uim:align-left",
				iconClassName: "w-5 h-5",
			},
			{
				buttonFunction: () => editor?.chain().focus().setTextAlign("center").run(),
				iconName: "uil:align-center",
				iconClassName: "w-5 h-5",
			},
			{
				buttonFunction: () => editor?.chain().focus().setTextAlign("right").run(),
				iconName: "uil:align-right",
				iconClassName: "w-5 h-5",
			},
			{
				buttonFunction: () => editor?.chain().focus().setTextAlign("justify").run(),
				iconName: "uil:align-justify",
				iconClassName: "w-5 h-5",
			},
		],
		[
			{
				buttonFunction: () => editor?.chain().focus().toggleOrderedList().run(),
				// iconName: "nimbus:ordered-list",
				iconName: "uil:list-ol-alt",
				// iconClassName: "w-5 h-5",
				iconClassName: "w-[1.15rem] h-[1.15rem] scale-[0.95]",
			},
			{
				buttonFunction: () => editor?.chain().focus().toggleBulletList().run(),
				// iconName: "fluent:text-bullet-list-ltr-24-filled",
				iconName: "uil:list-ul",
				iconClassName: "w-5 h-4 scale-[1.35] -translate-y-[1px]",
			},
		],
	];

	return (
		<div className="bg-input_clr rounded-sm px-2 before:bg-main relative before:absolute before:bottom-0 before:h-[1.5px] before:w-full before:content-normal before:left-0 before:right-0 focus-within:before:scale-x-100 before:scale-x-0 before:transition before:duration-300 before:ease-in-out ">
			<div className="flex items-center py-2 gap-[2px]">
				{buttons.map((eachArray, arrayIndex) => {
					return (
						<div className="flex items-end gap-1 px-1" key={arrayIndex}>
							{eachArray.map(({ buttonFunction, iconName, iconClassName }, buttonIndex) => (
								<React.Fragment key={buttonIndex}>
									{
										<ButtonIcon
											iconName={iconName}
											buttonFunction={buttonFunction}
											iconClassName={`${iconClassName}`}
											ButtonClassName="text-slate-500"
										/>
									}
								</React.Fragment>
							))}
						</div>
					);
				})}
			</div>
			<div className="ps-2">
				<EditorContent editor={editor} />
			</div>
		</div>
	);
};

export default Tiptap;
