import { t as cn } from "./cn-Ccejyh36.js";
import { jsx } from "react/jsx-runtime";
//#region src/theme/backgroundText.tsx
var textColorClassMap = {
	white: "code-txt-white",
	blue: "code-txt-blue",
	purple: "code-txt-purple",
	yellow: "code-txt-yellow"
};
var BackgroundText = ({ children }) => {
	return /* @__PURE__ */ jsx("div", {
		className: "code-bg",
		children
	});
};
var TextColor = ({ color, children }) => {
	return /* @__PURE__ */ jsx("span", {
		className: cn(textColorClassMap[color]),
		children
	});
};
//#endregion
export { TextColor as n, BackgroundText as t };
