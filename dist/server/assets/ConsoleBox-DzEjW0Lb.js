import { t as cn } from "./cn-Ccejyh36.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ConsoleBox/index.tsx
var ConsoleBox = (props) => {
	const containerStyle = {
		...props.width ? { width: props.width } : {},
		...props.margintop ? { marginTop: props.margintop } : {}
	};
	const bodyStyle = { ...props.height ? { height: props.height } : {} };
	return /* @__PURE__ */ jsxs("div", {
		className: cn("console-box", props.window === "Large" && "console-box--large", props.window === "Small" && "console-box--small"),
		style: containerStyle,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "console-titlebar",
			style: { width: props.width },
			children: [/* @__PURE__ */ jsxs("div", {
				className: "console-controls",
				children: [
					/* @__PURE__ */ jsx("div", { className: "traffic-light traffic-light--red" }),
					/* @__PURE__ */ jsx("div", { className: "traffic-light traffic-light--yellow" }),
					/* @__PURE__ */ jsx("div", { className: "traffic-light traffic-light--green" })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "console-titlebar-title",
				children: [props.title, " : node — Konsole"]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "console-body",
			style: bodyStyle,
			children: props.children
		})]
	});
};
//#endregion
export { ConsoleBox as t };
