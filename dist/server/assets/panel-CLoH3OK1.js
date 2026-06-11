import { t as PageBackground } from "./PageBackground-C45ph-_f.js";
import { t as PageHead } from "./PageHead-CDooBwaj.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CircleNotch, FilePlus, LockSimple } from "phosphor-react";
//#region src/routes/panel.tsx?tsr-split=component
function Panel() {
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [github, setGithub] = useState("");
	const [site, setSite] = useState("");
	const [imgs, setImgs] = useState([]);
	const [technologies, setTechnologies] = useState([]);
	const handleCreateProject = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		setError("");
		if (!(await fetch("/api/admin/createProject", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				title,
				description,
				github,
				site,
				imgs,
				technologies: technologies.map((technology) => ({
					name: technology,
					alt: technology,
					url: ""
				}))
			})
		})).ok) setError("Something went wrong");
		setIsLoading(false);
	};
	return /* @__PURE__ */ jsx(PageHead, {
		title: "Daniel Bernardes",
		description: "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer.",
		children: /* @__PURE__ */ jsx(PageBackground, { children: /* @__PURE__ */ jsx("div", {
			className: "panel-container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "panel-box",
				children: [/* @__PURE__ */ jsxs("header", {
					className: "panel-header",
					children: [/* @__PURE__ */ jsx(FilePlus, {
						id: "user-icon",
						size: 40,
						color: "#40DABF"
					}), /* @__PURE__ */ jsx("span", {
						className: "panel-title",
						children: "Create new project"
					})]
				}), /* @__PURE__ */ jsxs("form", {
					className: "panel-form",
					onSubmit: handleCreateProject,
					children: [
						/* @__PURE__ */ jsx("input", {
							className: "panel-input",
							type: "text",
							placeholder: "Title",
							onChange: (e) => setTitle(e.target.value),
							required: true
						}),
						/* @__PURE__ */ jsx("textarea", {
							className: "panel-textarea",
							placeholder: "Description",
							onChange: (e) => setDescription(e.target.value),
							required: true
						}),
						/* @__PURE__ */ jsx("input", {
							className: "panel-input",
							type: "text",
							placeholder: "Github",
							onChange: (e) => setGithub(e.target.value)
						}),
						/* @__PURE__ */ jsx("input", {
							className: "panel-input",
							type: "text",
							placeholder: "Site",
							onChange: (e) => setSite(e.target.value)
						}),
						/* @__PURE__ */ jsx("input", {
							className: "panel-input",
							type: "text",
							placeholder: "IMG",
							onChange: (e) => setImgs([...imgs, e.target.value]),
							required: true
						}),
						/* @__PURE__ */ jsx("input", {
							className: "panel-input",
							type: "text",
							placeholder: "Technologies",
							onChange: (e) => setTechnologies([...technologies, e.target.value]),
							required: true
						}),
						/* @__PURE__ */ jsx("span", {
							className: "panel-error",
							children: error
						}),
						/* @__PURE__ */ jsx("button", {
							className: "panel-btn",
							type: "submit",
							disabled: isLoading,
							children: isLoading ? /* @__PURE__ */ jsx(CircleNotch, {
								id: "circle-icon",
								size: 24,
								weight: "bold"
							}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(LockSimple, {
								id: "lock-icon",
								size: 24,
								weight: "bold"
							}), /* @__PURE__ */ jsx("span", { children: "Submit" })] })
						})
					]
				})]
			})
		}) })
	});
}
//#endregion
export { Panel as component };
