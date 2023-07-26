import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorView } from "prosemirror-view";
import { Icon } from "@iconify/react";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import React from "react";

export const ButtonIcon = ({ iconName, iconClassName, ButtonClassName, buttonFunction }) => (
	<button type="button" onClick={buttonFunction} className={`${ButtonClassName}`}>
		<Icon icon={iconName} className={`${iconClassName} pointer-events-none`} />
	</button>
);

const Tiptap = () => {
	console.clear();

	EditorView.prototype.updateState = function updateState(state) {
		if (!this.docView) return; // This prevents the matchesNode error on hot reloads
		this.updateStateInner(state, this.state.plugins != state.plugins);
	};

	const content = ``;
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
				iconName: "majesticons:text-align-left",
				iconClassName: "w-5 h-5",
			},
			{
				buttonFunction: () => editor?.chain().focus().setTextAlign("center").run(),
				iconName: "ci:text-align-center",
				iconClassName: "w-5 h-5",
			},
			{
				buttonFunction: () => editor?.chain().focus().setTextAlign("right").run(),
				iconName: "humbleicons:align-text-right",
				iconClassName: "w-5 h-5",
			},
			{
				buttonFunction: () => editor?.chain().focus().setTextAlign("justify").run(),
				iconName: "ph:text-align-justify-bold",
				iconClassName: "w-5 h-5",
			},
		],
		[
			{
				buttonFunction: () => editor?.chain().focus().toggleBulletList().run(),
				iconName: "fluent:text-bullet-list-ltr-24-filled",
				iconClassName: "w-5 h-5",
			},
			{
				buttonFunction: () => editor?.chain().focus().toggleOrderedList().run(),
				iconName: "nimbus:ordered-list",
				iconClassName: "w-5 h-5",
			},
		],
	];

	return (
		<div className="mt-6">
			<div className="flex flex-col">
				<label className="text-lg font-semibold text-slate-700 mb-[1px]">Professional Summary</label>
				<span className="text-[.8rem] mb-2 text-label_clr">
					Write a brief summary about yourself. Mention your role, experience & <span className="text-slate-600">most importantly</span> -
					your biggest achievements, best qualities and skills.
				</span>
			</div>
			<div className="bg-input_clr rounded-sm px-2 before:bg-main relative before:absolute before:bottom-0 before:h-[1.5px] before:w-full before:content-normal before:left-0 before:right-0 focus-within:before:scale-x-100 before:scale-x-0 before:transition before:duration-300 before:ease-in-out ">
				<div className="flex items-center py-2">
					{buttons.map((eachArray, arrayIndex) => (
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
					))}
				</div>
				<div className="ps-2">
					<EditorContent editor={editor} />
				</div>
			</div>
		</div>
	);
};

export default Tiptap;
