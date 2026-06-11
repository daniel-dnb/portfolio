import { t as cn } from "./cn-Ccejyh36.js";
import { a as asyncSetProjects, i as useAppSelector, r as useAppDispatch } from "./store-C-x4eXoP.js";
import { n as TextColor, t as BackgroundText } from "./backgroundText-BHBd6OMm.js";
import { t as ConsoleBox } from "./ConsoleBox-DzEjW0Lb.js";
import { t as PageBackground } from "./PageBackground-C45ph-_f.js";
import { t as PageHead } from "./PageHead-CDooBwaj.js";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ConsoleHomePage/index.tsx
var consoleColorMap = {
	green: "console-color-green",
	pink: "console-color-pink",
	purple: "console-color-purple",
	yellow: "console-color-yellow",
	red: "console-color-red",
	grey: "console-color-grey",
	white: "console-color-white"
};
function ConsoleTextColor({ color, font, children }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn(consoleColorMap[color], font && "console-font-nanum"),
		children
	});
}
function Typewriter({ anim, children }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn("console-typewriter", `console-anim-${anim}`),
		children
	});
}
function Static({ step, children }) {
	return /* @__PURE__ */ jsx("span", {
		className: `console-static-${step}`,
		children
	});
}
var ConsoleHomePage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "console-text",
		children: [
			/* @__PURE__ */ jsx(ConsoleTextColor, {
				color: "yellow",
				children: "danielbnd"
			}),
			" in",
			" ",
			/* @__PURE__ */ jsx(ConsoleTextColor, {
				color: "purple",
				children: "www/"
			}),
			" ",
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx(ConsoleTextColor, {
				color: "red",
				font: true,
				children: "> "
			}),
			/* @__PURE__ */ jsxs(Typewriter, {
				anim: 1,
				children: [
					/* @__PURE__ */ jsx(ConsoleTextColor, {
						color: "green",
						children: "yarn"
					}),
					" ",
					/* @__PURE__ */ jsx(ConsoleTextColor, {
						color: "yellow",
						children: "create"
					}),
					" next-app portfolio",
					" "
				]
			}),
			/* @__PURE__ */ jsxs(Static, {
				step: 1,
				children: [
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx(ConsoleTextColor, {
						color: "yellow",
						children: "danielbnd"
					}),
					" in",
					" ",
					/* @__PURE__ */ jsx(ConsoleTextColor, {
						color: "purple",
						children: "www/"
					}),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx(ConsoleTextColor, {
						color: "green",
						font: true,
						children: "> "
					})
				]
			}),
			/* @__PURE__ */ jsxs(Typewriter, {
				anim: 2,
				children: [/* @__PURE__ */ jsx("span", {
					className: "console-color-green",
					children: " cd "
				}), /* @__PURE__ */ jsx(ConsoleTextColor, {
					color: "pink",
					children: "portfolio"
				})]
			}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsxs(Static, {
				step: 2,
				children: [
					/* @__PURE__ */ jsx(ConsoleTextColor, {
						color: "yellow",
						children: "danielbnd"
					}),
					" in",
					" ",
					/* @__PURE__ */ jsx(ConsoleTextColor, {
						color: "purple",
						children: "www/portfolio/"
					}),
					" ",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx(ConsoleTextColor, {
						color: "green",
						font: true,
						children: "> "
					})
				]
			}),
			/* @__PURE__ */ jsxs(Typewriter, {
				anim: 3,
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "console-color-green",
						children: "code "
					}),
					/* @__PURE__ */ jsx(ConsoleTextColor, {
						color: "pink",
						children: "."
					}),
					" "
				]
			}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsxs(Static, {
				step: 3,
				children: [
					/* @__PURE__ */ jsx(ConsoleTextColor, {
						color: "yellow",
						children: "danielbnd"
					}),
					" in",
					" ",
					/* @__PURE__ */ jsx(ConsoleTextColor, {
						color: "purple",
						children: "www/portfolio/"
					}),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx(ConsoleTextColor, {
						color: "green",
						font: true,
						children: "> "
					})
				]
			}),
			/* @__PURE__ */ jsxs(Typewriter, {
				anim: 4,
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "console-color-green",
						children: "pnpm"
					}),
					" ",
					/* @__PURE__ */ jsx(ConsoleTextColor, {
						color: "yellow",
						children: "dev"
					})
				]
			}),
			" ",
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx(Static, {
				step: 4,
				children: /* @__PURE__ */ jsx(ConsoleTextColor, {
					color: "white",
					children: "pnpm 10.23.0"
				})
			}),
			" ",
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx(Static, {
				step: 5,
				children: /* @__PURE__ */ jsx(ConsoleTextColor, {
					color: "grey",
					children: "$ vite dev"
				})
			}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsxs(Static, {
				step: 6,
				children: [
					/* @__PURE__ */ jsx(ConsoleTextColor, {
						color: "green",
						children: "ready"
					}),
					" - started server on ",
					/* @__PURE__ */ jsx("span", {
						className: "link",
						children: "http://localhost:3000"
					})
				]
			})
		]
	});
};
//#endregion
//#region src/components/HomeBackgroundText/HomeBackgroundText.tsx
var HomeBackgroundText = ({ children }) => {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(BackgroundText, { children: [
		"import ",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: "React"
		}),
		" from",
		" ",
		/* @__PURE__ */ jsx(TextColor, {
			color: "yellow",
			children: "'react'"
		}),
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx("br", {}),
		"const ",
		/* @__PURE__ */ jsx(TextColor, {
			color: "blue",
			children: "Home"
		}),
		":",
		" ",
		/* @__PURE__ */ jsx(TextColor, {
			color: "purple",
			children: "React.FC"
		}),
		" =",
		" ",
		/* @__PURE__ */ jsx(TextColor, {
			color: "yellow",
			children: "()"
		}),
		" ",
		"=>",
		" ",
		/* @__PURE__ */ jsx(TextColor, {
			color: "yellow",
			children: "{"
		}),
		/* @__PURE__ */ jsx("br", {}),
		"\xA0\xA0",
		"return (",
		/* @__PURE__ */ jsx("br", {}),
		"\xA0\xA0\xA0\xA0",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: "<"
		}),
		"div",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: ">"
		}),
		/* @__PURE__ */ jsx("br", {}),
		children,
		"\xA0\xA0\xA0\xA0",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: "</"
		}),
		"div",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: ">"
		}),
		/* @__PURE__ */ jsx("br", {}),
		"\xA0\xA0",
		")",
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx(TextColor, {
			color: "yellow",
			children: "}"
		}),
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx("br", {}),
		"export default ",
		/* @__PURE__ */ jsx(TextColor, {
			color: "blue",
			children: "Home"
		})
	] }) });
};
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const projects = useAppSelector((state) => state.projects);
	useEffect(() => {
		if (projects.data === void 0) dispatch(asyncSetProjects());
	}, [dispatch, projects.data]);
	return /* @__PURE__ */ jsx(PageHead, {
		title: "Daniel Bernardes",
		description: "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer.",
		children: /* @__PURE__ */ jsx(PageBackground, { children: /* @__PURE__ */ jsx("div", {
			className: "page-container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "page-grid",
				children: [/* @__PURE__ */ jsx("div", {
					className: "page-grid-col",
					children: /* @__PURE__ */ jsx(HomeBackgroundText, { children: /* @__PURE__ */ jsx("div", {
						className: "home-container",
						children: /* @__PURE__ */ jsxs("div", {
							className: "INSIDE",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "home-title",
									children: /* @__PURE__ */ jsxs("h1", { children: [
										"Hi,",
										/* @__PURE__ */ jsx("br", {}),
										"I'm ",
										/* @__PURE__ */ jsx("span", { children: "Daniel" })
									] })
								}),
								/* @__PURE__ */ jsx("div", {
									className: "home-subtitle",
									children: "I'm a Brazilian frontend developer."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "home-cta",
									onClick: () => navigate({ to: "/contact" }),
									children: "Contact Me!"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "home-console",
									children: /* @__PURE__ */ jsx(ConsoleBox, {
										title: "portfolio",
										window: "Small",
										height: "40rem",
										children: /* @__PURE__ */ jsx(ConsoleHomePage, {})
									})
								})
							]
						})
					}) })
				}), /* @__PURE__ */ jsx("div", {
					className: "page-grid-col page-grid-col--right",
					children: /* @__PURE__ */ jsx(ConsoleBox, {
						title: "portfolio",
						width: "36.5vw",
						window: "Large",
						height: "40rem",
						children: /* @__PURE__ */ jsx(ConsoleHomePage, {})
					})
				})]
			})
		}) })
	});
}
//#endregion
export { Home as component };
