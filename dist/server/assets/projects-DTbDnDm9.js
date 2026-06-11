import { a as asyncSetProjects, i as useAppSelector, r as useAppDispatch } from "./store-C-x4eXoP.js";
import { n as TextColor, t as BackgroundText } from "./backgroundText-BHBd6OMm.js";
import { t as PageBackground } from "./PageBackground-C45ph-_f.js";
import { t as PageHead } from "./PageHead-CDooBwaj.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import Slider from "react-slick";
//#region src/components/ProjectsBackgroundText/index.tsx
var ProjectsBackgroundText = ({ children }) => {
	return /* @__PURE__ */ jsxs(BackgroundText, { children: [
		"import",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: " React"
		}),
		" from",
		" ",
		/* @__PURE__ */ jsx(TextColor, {
			color: "yellow",
			children: "'react'"
		}),
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx("br", {}),
		"const",
		/* @__PURE__ */ jsx(TextColor, {
			color: "blue",
			children: " Projects"
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
		/* @__PURE__ */ jsx("div", { children }),
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
		"export default",
		/* @__PURE__ */ jsx(TextColor, {
			color: "blue",
			children: " Projects"
		})
	] });
};
//#endregion
//#region src/assets/SiteIcon.svg
var SvgSiteIcon = (props) => /* @__PURE__ */ jsx("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...props,
	children: /* @__PURE__ */ jsx("path", {
		d: "M17.75 2.3198e-06C16.078 2.3198e-06 14.492 0.660002 13.312 1.844L11.844 3.312C11.2591 3.89354 10.795 4.58507 10.4785 5.34674C10.1621 6.10842 9.99942 6.92519 10 7.75C10 8.543 10.152 9.316 10.438 10.031L12.062 8.406C11.9567 7.74148 12.0094 7.06151 12.2158 6.42113C12.4222 5.78076 12.7765 5.19799 13.25 4.72L14.719 3.251C15.1172 2.85349 15.5899 2.53839 16.1099 2.32373C16.63 2.10907 17.1874 1.99906 17.75 2C18.887 2 19.945 2.445 20.75 3.25C21.5475 4.05098 21.9952 5.13523 21.9952 6.2655C21.9952 7.39577 21.5475 8.48002 20.75 9.281L19.281 10.75C18.8827 11.1473 18.41 11.4623 17.8899 11.6767C17.3699 11.8912 16.8126 12.0011 16.25 12C16.027 12 15.809 11.977 15.594 11.937L13.969 13.563C14.6947 13.8521 15.4688 14.0004 16.25 14C17.922 14 19.508 13.34 20.688 12.156L22.156 10.688C22.7409 10.1065 23.205 9.41494 23.5215 8.65326C23.8379 7.89158 24.0006 7.07481 24 6.25C24 4.578 23.34 3.027 22.156 1.844C21.5809 1.25938 20.8951 0.795209 20.1386 0.4786C19.3821 0.161992 18.5701 -0.000708609 17.75 2.3198e-06V2.3198e-06ZM15.281 7.281L7.281 15.281L8.719 16.719L16.719 8.719L15.281 7.281ZM7.75 10C6.078 10 4.492 10.66 3.312 11.844L1.844 13.313C1.2592 13.8944 0.795206 14.5858 0.478731 15.3473C0.162256 16.1088 -0.000443996 16.9254 9.09986e-07 17.75C9.09986e-07 19.422 0.660001 20.973 1.844 22.156C2.4191 22.7406 3.10493 23.2048 3.86143 23.5214C4.61792 23.838 5.42992 24.0007 6.25 24C7.922 24 9.508 23.34 10.688 22.156L12.156 20.688C12.7409 20.1065 13.205 19.4149 13.5215 18.6533C13.8379 17.8916 14.0006 17.0748 14 16.25C14 15.457 13.848 14.684 13.562 13.969L11.937 15.594C12.0426 16.2586 11.9901 16.9387 11.7839 17.5793C11.5777 18.2198 11.2235 18.8028 10.75 19.281L9.281 20.75C8.88273 21.1473 8.41003 21.4623 7.88994 21.6767C7.36985 21.8912 6.81258 22.0011 6.25 22C5.69205 22.0009 5.13948 21.8909 4.62445 21.6763C4.10942 21.4617 3.64221 21.1468 3.25 20.75C2.45255 19.949 2.00484 18.8648 2.00484 17.7345C2.00484 16.6042 2.45255 15.52 3.25 14.719L4.719 13.25C5.11727 12.8527 5.58997 12.5378 6.11006 12.3233C6.63015 12.1088 7.18742 11.9989 7.75 12C7.973 12 8.191 12.023 8.406 12.063L10.031 10.438C9.30535 10.1486 8.53124 9.99994 7.75 10V10Z",
		fill: "#D3D3D3"
	})
});
//#endregion
//#region src/components/ProjectsModal/index.tsx
function ProjectsModal({ OnClose = () => {}, data }) {
	const database = data;
	function handleOutsideClick(e) {
		if (e.target.id === data.key) OnClose();
	}
	return /* @__PURE__ */ jsx("div", {
		className: "project-modal-overlay",
		id: data.key,
		onClick: handleOutsideClick,
		children: /* @__PURE__ */ jsxs("div", {
			className: "project-modal",
			children: [
				/* @__PURE__ */ jsx("h2", {
					className: "project-modal-title",
					children: data.title
				}),
				/* @__PURE__ */ jsx(Slider, {
					dots: true,
					infinite: false,
					arrows: false,
					draggable: true,
					speed: 200,
					rows: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
					dotsClass: "slick-dots custom-img-indicator",
					customPaging: (i) => /* @__PURE__ */ jsx("img", {
						className: "slider-img h-[60px] w-[50px] rounded-[5px] object-cover",
						src: database.imgs[i],
						alt: ""
					}),
					children: database.imgs.map((img) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", {
						href: img,
						target: "_blank",
						rel: "noreferrer",
						children: /* @__PURE__ */ jsx("img", {
							className: "project-modal-img",
							src: img,
							alt: data.title
						})
					}) }, img))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "project-modal-desc",
					children: [
						/* @__PURE__ */ jsx("h1", { children: "Description" }),
						/* @__PURE__ */ jsx("p", { children: database.description }),
						database.github || database.site ? /* @__PURE__ */ jsxs("div", {
							className: "mt-8",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "link-box-title mb-4 flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(SvgSiteIcon, {}), /* @__PURE__ */ jsx("h4", {
										className: "font-ubuntu text-[1.8rem] text-primary md:text-[2.5rem]",
										children: "Site"
									})]
								}),
								database.github && /* @__PURE__ */ jsxs("div", {
									className: "link-box-links mb-2",
									children: [/* @__PURE__ */ jsx("a", {
										className: "ml-[33px] text-primary hover:underline",
										href: database.github,
										target: "_blank",
										rel: "noreferrer",
										children: database.github.replace("https://", "")
									}), /* @__PURE__ */ jsx("span", {
										className: "ml-[3px] text-[1.4rem] brightness-[0.7]",
										children: "(Github directory)"
									})]
								}),
								database.site && /* @__PURE__ */ jsxs("div", {
									className: "link-box-links mb-2",
									children: [/* @__PURE__ */ jsx("a", {
										className: "ml-[33px] text-primary hover:underline",
										href: database.site,
										target: "_blank",
										rel: "noreferrer",
										children: database.site.replace("https://", "")
									}), /* @__PURE__ */ jsx("span", {
										className: "ml-[3px] text-[1.4rem] brightness-[0.7]",
										children: "(Website)"
									})]
								})
							]
						}) : null,
						/* @__PURE__ */ jsx("h2", {
							className: "mt-8",
							children: "Technologies"
						}),
						database.technologies.map((icon) => /* @__PURE__ */ jsxs("div", {
							className: "mt-4 flex items-center",
							children: [/* @__PURE__ */ jsx("img", {
								src: icon.url,
								alt: icon.alt,
								className: "h-10 w-10"
							}), /* @__PURE__ */ jsx("span", {
								className: "project-modal-tech-name",
								children: icon.name
							})]
						}, `${icon.name}-${icon.url}`))
					]
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					className: "project-modal-close",
					onClick: () => OnClose(),
					children: "CLOSE"
				})
			]
		}, data.key)
	});
}
//#endregion
//#region src/components/SliderProjects/index.tsx
var SliderProjects = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [modalInfos, setModalInfos] = useState(null);
	const dispatch = useAppDispatch();
	const projects = useAppSelector((state) => state.projects);
	useEffect(() => {
		if (projects.data === void 0) dispatch(asyncSetProjects());
	}, []);
	function handleOpenModal({ data }) {
		setIsModalVisible(true);
		setModalInfos(data);
	}
	useEffect(() => {
		if (isModalVisible === true) {
			document.body.style.overflow = "hidden";
			return;
		}
		document.body.style.overflow = "";
	}, [isModalVisible]);
	const settings = {
		dots: true,
		infinite: false,
		arrows: false,
		draggable: false,
		speed: 200,
		rows: 2,
		slidesToShow: 3,
		slidesToScroll: 1,
		dotsClass: "slick-dots custom-indicator",
		customPaging: (i) => /* @__PURE__ */ jsx("span", {
			className: "slider-dot",
			children: i
		}),
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
				rows: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 2
			}
		}]
	};
	if (projects.isLoading) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center gap-4 py-12",
		children: [/* @__PURE__ */ jsx("div", { className: "slider-loading" }), /* @__PURE__ */ jsxs("p", {
			className: "font-ubuntu text-[2rem] text-text",
			children: ["Loading", /* @__PURE__ */ jsx("span", {
				className: "console-typewriter console-anim-1",
				children: "..."
			})]
		})]
	});
	if (projects.error === true) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center gap-8 py-12",
		children: [/* @__PURE__ */ jsx("img", {
			src: "/PageNotFound.png",
			alt: "Page not found"
		}), /* @__PURE__ */ jsx("p", {
			className: "slider-error-text",
			children: "The page you’re looking for is currently under maintenance and will be back soon."
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "slider-projects",
		children: [isModalVisible && modalInfos ? /* @__PURE__ */ jsx(ProjectsModal, {
			OnClose: () => setIsModalVisible(false),
			data: modalInfos
		}) : null, /* @__PURE__ */ jsx(Slider, {
			...settings,
			children: projects.data && projects.data.map((data) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("span", {
				onClick: () => handleOpenModal({ data }),
				children: [/* @__PURE__ */ jsx("div", {
					className: "slider-cover",
					style: { backgroundImage: `url('${data.imgs[0]}')` }
				}), /* @__PURE__ */ jsx("div", {
					className: "slider-title",
					children: data.title
				})]
			}) }, data.key))
		})]
	});
};
//#endregion
//#region src/routes/projects.tsx?tsr-split=component
function Projects() {
	return /* @__PURE__ */ jsx(PageHead, {
		title: "Daniel Bernardes - Projects",
		description: "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. My projects.",
		children: /* @__PURE__ */ jsx(PageBackground, { children: /* @__PURE__ */ jsx("div", {
			className: "page-container",
			children: /* @__PURE__ */ jsxs(ProjectsBackgroundText, { children: [/* @__PURE__ */ jsx("h1", {
				className: "projects-title",
				children: "Projects"
			}), /* @__PURE__ */ jsx(SliderProjects, {})] })
		}) })
	});
}
//#endregion
export { Projects as component };
