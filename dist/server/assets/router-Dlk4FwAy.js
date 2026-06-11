import { i as getServerFnById, n as createServerFn, r as TSS_SERVER_FUNCTION } from "../server.js";
import { n as prisma, t as auth } from "./auth-L5P58OcY.js";
import { t as cn } from "./cn-Ccejyh36.js";
import { n as store, t as createPersistor } from "./store-C-x4eXoP.js";
import { createContext, useContext, useEffect, useState } from "react";
import { ClientOnly, HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, redirect, useRouterState } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import crypto from "node:crypto";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import sendgrid from "@sendgrid/mail";
//#region src/assets/Github.svg
var SvgGithub = (props) => /* @__PURE__ */ jsx("svg", {
	width: 25,
	height: 25,
	viewBox: "0 0 25 25",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...props,
	children: /* @__PURE__ */ jsx("path", {
		d: "M8.36189 20.13C8.36189 20.2334 8.24597 20.3161 8.0998 20.3161C7.93347 20.3316 7.81754 20.2489 7.81754 20.13C7.81754 20.0266 7.93347 19.9439 8.07964 19.9439C8.23085 19.9284 8.36189 20.0111 8.36189 20.13ZM6.79436 19.8973C6.75907 20.0007 6.85988 20.1196 7.01109 20.1506C7.14214 20.2023 7.29335 20.1506 7.32359 20.0472C7.35383 19.9439 7.25806 19.825 7.10685 19.7784C6.97581 19.7423 6.82964 19.7939 6.79436 19.8973ZM9.02218 19.8095C8.87601 19.8456 8.7752 19.9439 8.79032 20.0628C8.80544 20.1661 8.93649 20.2334 9.0877 20.1972C9.23387 20.161 9.33468 20.0628 9.31956 19.9594C9.30444 19.8611 9.16835 19.7939 9.02218 19.8095ZM12.3387 0C5.34778 0 0 5.44346 0 12.6135C0 18.3465 3.51815 23.2523 8.54335 24.9789C9.18851 25.0978 9.41532 24.6894 9.41532 24.3534C9.41532 24.0329 9.4002 22.265 9.4002 21.1794C9.4002 21.1794 5.87198 21.9548 5.13105 19.6389C5.13105 19.6389 4.55645 18.1345 3.72984 17.7468C3.72984 17.7468 2.5756 16.9352 3.81048 16.9507C3.81048 16.9507 5.06552 17.0541 5.75605 18.2845C6.85988 20.2799 8.70968 19.7061 9.43044 19.3649C9.54637 18.5378 9.87399 17.9639 10.2369 17.6228C7.41936 17.3023 4.57661 16.8835 4.57661 11.9105C4.57661 10.4889 4.95968 9.77549 5.76613 8.86566C5.63508 8.52964 5.20665 7.14422 5.89718 5.35558C6.9506 5.01957 9.375 6.75134 9.375 6.75134C10.3831 6.46185 11.4667 6.31194 12.5403 6.31194C13.6139 6.31194 14.6976 6.46185 15.7056 6.75134C15.7056 6.75134 18.13 5.0144 19.1835 5.35558C19.874 7.14939 19.4456 8.52964 19.3145 8.86566C20.121 9.78066 20.6149 10.494 20.6149 11.9105C20.6149 16.899 17.6462 17.2971 14.8286 17.6228C15.2923 18.0312 15.6855 18.8066 15.6855 20.0214C15.6855 21.7635 15.6704 23.9192 15.6704 24.3431C15.6704 24.6791 15.9022 25.0875 16.5423 24.9686C21.5827 23.2523 25 18.3465 25 12.6135C25 5.44346 19.3296 0 12.3387 0ZM4.89919 17.8295C4.83367 17.8812 4.84879 18.0001 4.93448 18.0984C5.01512 18.1811 5.13105 18.2173 5.19657 18.1501C5.2621 18.0984 5.24698 17.9795 5.16129 17.8812C5.08065 17.7985 4.96472 17.7623 4.89919 17.8295ZM4.35484 17.4108C4.31956 17.478 4.36996 17.5607 4.47077 17.6124C4.55141 17.6641 4.65222 17.6486 4.6875 17.5762C4.72278 17.509 4.67238 17.4263 4.57157 17.3746C4.47077 17.3436 4.39012 17.3591 4.35484 17.4108ZM5.9879 19.2511C5.90726 19.3184 5.9375 19.4734 6.05343 19.5717C6.16935 19.6906 6.31552 19.7061 6.38105 19.6234C6.44657 19.5561 6.41633 19.4011 6.31552 19.3028C6.20464 19.1839 6.05343 19.1684 5.9879 19.2511ZM5.41331 18.4912C5.33266 18.5429 5.33266 18.6773 5.41331 18.7962C5.49395 18.9151 5.63004 18.9668 5.69556 18.9151C5.77621 18.8479 5.77621 18.7135 5.69556 18.5946C5.625 18.4757 5.49395 18.424 5.41331 18.4912Z",
		fill: "#D3D3D3"
	})
});
//#endregion
//#region src/assets/Instagram.svg
var SvgInstagram = (props) => /* @__PURE__ */ jsx("svg", {
	width: 25,
	height: 25,
	viewBox: "0 0 25 25",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...props,
	children: /* @__PURE__ */ jsx("path", {
		d: "M12.4966 8.3314C10.2014 8.3314 8.32828 10.2045 8.32828 12.4998C8.32828 14.795 10.2014 16.6681 12.4966 16.6681C14.7919 16.6681 16.665 14.795 16.665 12.4998C16.665 10.2045 14.7919 8.3314 12.4966 8.3314ZM24.9986 12.4998C24.9986 10.7736 25.0142 9.06313 24.9173 7.34013C24.8204 5.33881 24.3638 3.56264 22.9004 2.09918C21.4338 0.632595 19.6607 0.179172 17.6594 0.0822335C15.9333 -0.0147052 14.2228 0.000930124 12.4998 0.000930124C10.7736 0.000930124 9.06313 -0.0147052 7.34013 0.0822335C5.33881 0.179172 3.56265 0.635722 2.09918 2.09918C0.632595 3.56577 0.179172 5.33881 0.0822335 7.34013C-0.0147052 9.06626 0.000930124 10.7768 0.000930124 12.4998C0.000930124 14.2228 -0.0147052 15.9364 0.0822335 17.6594C0.179172 19.6607 0.635722 21.4369 2.09918 22.9003C3.56577 24.3669 5.33881 24.8204 7.34013 24.9173C9.06626 25.0142 10.7768 24.9986 12.4998 24.9986C14.2259 24.9986 15.9364 25.0142 17.6594 24.9173C19.6607 24.8204 21.4369 24.3638 22.9004 22.9003C24.3669 21.4338 24.8204 19.6607 24.9173 17.6594C25.0174 15.9364 24.9986 14.2259 24.9986 12.4998V12.4998ZM12.4966 18.9134C8.94743 18.9134 6.08305 16.049 6.08305 12.4998C6.08305 8.95056 8.94743 6.08618 12.4966 6.08618C16.0458 6.08618 18.9102 8.95056 18.9102 12.4998C18.9102 16.049 16.0458 18.9134 12.4966 18.9134ZM19.1729 7.32136C18.3442 7.32136 17.675 6.65217 17.675 5.82351C17.675 4.99484 18.3442 4.32565 19.1729 4.32565C20.0016 4.32565 20.6708 4.99484 20.6708 5.82351C20.671 6.02028 20.6324 6.21516 20.5572 6.397C20.4821 6.57884 20.3717 6.74406 20.2326 6.8832C20.0935 7.02234 19.9282 7.13266 19.7464 7.20785C19.5646 7.28304 19.3697 7.32161 19.1729 7.32136V7.32136Z",
		fill: "#D3D3D3"
	})
});
//#endregion
//#region src/assets/Linkedin.svg
var SvgLinkedin = (props) => /* @__PURE__ */ jsx("svg", {
	width: 25,
	height: 25,
	viewBox: "0 0 25 25",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...props,
	children: /* @__PURE__ */ jsx("path", {
		d: "M5.59598 25H0.412946V8.30878H5.59598V25ZM3.00167 6.03194C1.34431 6.03194 0 4.65914 0 3.00174C1.18627e-08 2.20563 0.316247 1.44213 0.87917 0.87919C1.44209 0.316254 2.20558 0 3.00167 0C3.79777 0 4.56125 0.316254 5.12418 0.87919C5.6871 1.44213 6.00335 2.20563 6.00335 3.00174C6.00335 4.65914 4.65848 6.03194 3.00167 6.03194ZM24.9944 25H19.8225V16.8748C19.8225 14.9384 19.7835 12.4551 17.1278 12.4551C14.433 12.4551 14.0201 14.5589 14.0201 16.7353V25H8.84263V8.30878H13.8136V10.5856H13.8862C14.5781 9.2742 16.2684 7.89024 18.7902 7.89024C24.0357 7.89024 25 11.3446 25 15.8313V25H24.9944Z",
		fill: "#D3D3D3"
	})
});
//#endregion
//#region src/contexts/MenuContext.tsx
var MenuContext = createContext({});
function MenuProvider({ children }) {
	const [isMenuActive, setIsActive] = useState(false);
	function activeMenu() {
		if (isMenuActive === false) setIsActive(true);
		else setIsActive(false);
	}
	return /* @__PURE__ */ jsx(MenuContext.Provider, {
		value: {
			isMenuActive,
			activeMenu
		},
		children
	});
}
//#endregion
//#region src/components/SideBar/index.tsx
var Linkedin = SvgLinkedin;
var Github = SvgGithub;
var Instagram = SvgInstagram;
var SideBar = () => {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const { isMenuActive, activeMenu } = useContext(MenuContext);
	const [isNavBarShowing, setIsNavBarShowing] = useState(true);
	useEffect(() => {
		if (isMenuActive) activeMenu();
	}, [pathname]);
	useEffect(() => {
		if (isMenuActive) {
			document.body.style.overflow = "hidden";
			return;
		}
		document.body.style.overflow = "";
	}, [isMenuActive]);
	useEffect(() => {
		if (typeof window === "undefined") return;
		let scrollPos = 0;
		const changeSize = () => {
			if (document.body.getBoundingClientRect().top > scrollPos) {
				scrollPos = document.body.getBoundingClientRect().top;
				setIsNavBarShowing(true);
				return;
			} else {
				scrollPos = document.body.getBoundingClientRect().top;
				setIsNavBarShowing(false);
				return;
			}
		};
		window.addEventListener("scroll", changeSize);
		return () => {
			window.removeEventListener("scroll", changeSize);
		};
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("sidebar", isMenuActive && "sidebar--open", !isNavBarShowing && "sidebar--hidden"),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "sidebar-avatar",
				children: /* @__PURE__ */ jsx("img", {
					src: "/avatar.png",
					alt: "Avatar picture",
					width: 200,
					height: 200
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "sidebar-menu",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "sidebar-title",
						children: "Daniel Bernardes"
					}),
					/* @__PURE__ */ jsx("div", { className: "sidebar-title-underline" }),
					/* @__PURE__ */ jsx("div", {
						className: cn("sidebar-mobile-menu", isMenuActive && "sidebar-mobile-menu--open"),
						onClick: () => activeMenu(),
						children: /* @__PURE__ */ jsx("div", { className: "sidebar-mobile-lines" })
					})
				]
			}),
			/* @__PURE__ */ jsxs("ul", {
				className: "sidebar-nav",
				children: [
					/* @__PURE__ */ jsx("li", {
						className: pathname == "/" ? "active" : "",
						children: /* @__PURE__ */ jsx("span", {
							onClick: () => activeMenu(),
							children: /* @__PURE__ */ jsx(Link, {
								to: "/",
								children: "Home"
							})
						})
					}),
					/* @__PURE__ */ jsx("li", {
						className: pathname == "/projects" ? "active" : "",
						children: /* @__PURE__ */ jsx("span", {
							onClick: () => activeMenu(),
							children: /* @__PURE__ */ jsx(Link, {
								to: "/projects",
								children: "Projects"
							})
						})
					}),
					/* @__PURE__ */ jsx("li", {
						className: pathname == "/about" ? "active" : "",
						children: /* @__PURE__ */ jsx("span", {
							onClick: () => activeMenu(),
							children: /* @__PURE__ */ jsx(Link, {
								to: "/about",
								children: "About"
							})
						})
					}),
					/* @__PURE__ */ jsx("li", {
						className: pathname == "/contact" ? "active" : "",
						children: /* @__PURE__ */ jsx("span", {
							onClick: () => activeMenu(),
							children: /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								children: "Contact"
							})
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "sidebar-social",
				children: [
					/* @__PURE__ */ jsx("a", {
						href: "https://www.linkedin.com/in/daniel-dnb/",
						target: "_blank",
						children: /* @__PURE__ */ jsx(Linkedin, { className: "sidebar-social-icon" })
					}),
					/* @__PURE__ */ jsx("a", {
						href: "https://github.com/daniel-dnb/",
						target: "_blank",
						children: /* @__PURE__ */ jsx(Github, { className: "sidebar-social-icon" })
					}),
					/* @__PURE__ */ jsx("a", {
						href: "https://www.instagram.com/dann_dnb/",
						target: "_blank",
						children: /* @__PURE__ */ jsx(Instagram, { className: "sidebar-social-icon" })
					})
				]
			})
		]
	});
};
//#endregion
//#region src/providers/AppProviders.tsx
function ClientPersistGate({ children }) {
	const [persistor, setPersistor] = useState(null);
	useEffect(() => {
		setPersistor(createPersistor());
	}, []);
	if (!persistor) return /* @__PURE__ */ jsx(Fragment, { children });
	return /* @__PURE__ */ jsx(PersistGate, {
		loading: null,
		persistor,
		children
	});
}
function AppProviders({ children }) {
	return /* @__PURE__ */ jsx(Provider, {
		store,
		children: /* @__PURE__ */ jsx(ClientPersistGate, { children: /* @__PURE__ */ jsxs(MenuProvider, { children: [/* @__PURE__ */ jsx(SideBar, {}), children] }) })
	});
}
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-DDGnQRT-.css";
//#endregion
//#region src/routes/__root.tsx
var Route$10 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1.0"
			},
			{ title: "Daniel Bernardes - Front-End Developer." },
			{
				name: "description",
				content: "Brazilian front-end developer who loves to create innovative solutions."
			},
			{
				property: "dc:creator",
				content: "Daniel Bernardes"
			},
			{
				name: "application-name",
				content: "Daniel Bernardes"
			},
			{
				name: "keywords",
				content: "Daniel, Daniel Bernardes, danielbnd, daniel bnd, Front-End, frontend, programador, developer, rio de janeiro, rj, sites, web, freelance web developer rio de janeiro"
			},
			{
				name: "twitter:image",
				content: "https://danielbnd.com/banner.png"
			},
			{
				name: "twitter:description",
				content: "Brazilian front-end developer who loves to create innovative solutions."
			},
			{
				property: "og:url",
				content: "https://danielbnd.com"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: "Daniel Bernardes - Front-End Developer."
			},
			{
				property: "og:locale",
				content: "pt_BR"
			},
			{
				property: "og:description",
				content: "Brazilian front-end developer who loves to create innovative solutions."
			},
			{
				property: "og:image",
				content: "https://danielbnd.com/banner.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
			}
		]
	}),
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(AppProviders, { children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "pt",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ClientOnly, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
//#endregion
//#region node_modules/.pnpm/@tanstack+start-server-core@1.169.9/node_modules/@tanstack/start-server-core/dist/esm/createSsrRpc.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/lib/session.ts
var getSession = createServerFn({ method: "GET" }).handler(createSsrRpc("2e754e79ecbc3ea29bcdc5ac4b4c293139886f91b0e54a07784e950dce2c87b5"));
//#endregion
//#region src/routes/signin.tsx
var $$splitComponentImporter$5 = () => import("./signin-CichybOJ.js");
var Route$9 = createFileRoute("/signin")({
	beforeLoad: async () => {
		if ((await getSession())?.user) throw redirect({ to: "/panel" });
	},
	head: () => ({
		meta: [{ title: "Daniel Bernardes - Login" }, {
			name: "description",
			content: "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. Login."
		}],
		links: [{
			rel: "canonical",
			href: "https://www.danielbnd.com/signin"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/projects.tsx
var $$splitComponentImporter$4 = () => import("./projects-DTbDnDm9.js");
var Route$8 = createFileRoute("/projects")({
	head: () => ({
		meta: [
			{ title: "Daniel Bernardes - Projects" },
			{
				name: "description",
				content: "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. My projects."
			},
			{
				property: "og:title",
				content: "Daniel Bernardes - Projects"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.danielbnd.com/projects"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/panel.tsx
var $$splitComponentImporter$3 = () => import("./panel-CLoH3OK1.js");
var Route$7 = createFileRoute("/panel")({
	beforeLoad: async () => {
		const session = await getSession();
		if (!session?.user || session.user.role !== "ADMIN") throw redirect({ to: "/signin" });
	},
	head: () => ({
		meta: [{ title: "Daniel Bernardes - Panel" }, {
			name: "description",
			content: "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer."
		}],
		links: [{
			rel: "canonical",
			href: "https://www.danielbnd.com/panel"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$2 = () => import("./contact-95UJP6E5.js");
var Route$6 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Daniel Bernardes - Contact" },
			{
				name: "description",
				content: "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. Contact me."
			},
			{
				property: "og:title",
				content: "Daniel Bernardes - Contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.danielbnd.com/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-RGou_bZ1.js");
var Route$5 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "Daniel Bernardes - About" },
			{
				name: "description",
				content: "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. About me."
			},
			{
				property: "og:title",
				content: "Daniel Bernardes - About"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.danielbnd.com/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-8sDLinlU.js");
var Route$4 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Daniel Bernardes" },
			{
				name: "description",
				content: "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer."
			},
			{
				property: "og:title",
				content: "Daniel Bernardes"
			},
			{
				property: "og:description",
				content: "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.danielbnd.com/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routes/api/sendEmail.ts
var Route$3 = createFileRoute("/api/sendEmail")({ server: { handlers: { POST: async ({ request }) => {
	const apiKey = process.env.SENDGRID_API_KEY;
	if (!apiKey) return new Response(null, { status: 500 });
	const body = await request.json();
	try {
		sendgrid.setApiKey(apiKey);
		await sendgrid.send({
			to: "daniielbnd@gmail.com",
			from: {
				email: "daniielbnd@gmail.com",
				name: body.name
			},
			replyTo: body.email,
			subject: body.subject,
			html: `
              <p>${body.message}</p>
            `
		});
	} catch {
		return new Response(null, { status: 500 });
	}
	return new Response(null, { status: 200 });
} } } });
//#endregion
//#region src/routes/api/readProjects.ts
var Route$2 = createFileRoute("/api/readProjects")({ server: { handlers: { GET: async () => {
	try {
		const projects = await prisma.projects.findMany();
		return Response.json(projects);
	} catch {
		return Response.json({ error: "Something is wrong" }, { status: 404 });
	}
} } } });
//#endregion
//#region src/routes/api/auth/$.ts
var Route$1 = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: async ({ request }) => auth.handler(request),
	POST: async ({ request }) => auth.handler(request)
} } });
//#endregion
//#region src/routes/api/admin/createProject.ts
var Route = createFileRoute("/api/admin/createProject")({ server: { handlers: { POST: async ({ request }) => {
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session?.user || session.user.role !== "ADMIN") return new Response(null, { status: 401 });
	try {
		const body = await request.json();
		const project = await prisma.projects.create({ data: {
			key: crypto.randomUUID(),
			title: body.title,
			description: body.description,
			github: body.github,
			site: body.site,
			imgs: body.imgs,
			technologies: body.technologies
		} });
		return Response.json({ data: project });
	} catch {
		return Response.json({ error: "Something is wrong" }, { status: 404 });
	}
} } } });
//#endregion
//#region src/routeTree.gen.ts
var SigninRoute = Route$9.update({
	id: "/signin",
	path: "/signin",
	getParentRoute: () => Route$10
});
var ProjectsRoute = Route$8.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$10
});
var PanelRoute = Route$7.update({
	id: "/panel",
	path: "/panel",
	getParentRoute: () => Route$10
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$10
});
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$10
});
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var ApiSendEmailRoute = Route$3.update({
	id: "/api/sendEmail",
	path: "/api/sendEmail",
	getParentRoute: () => Route$10
});
var ApiReadProjectsRoute = Route$2.update({
	id: "/api/readProjects",
	path: "/api/readProjects",
	getParentRoute: () => Route$10
});
var ApiAuthSplatRoute = Route$1.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$10
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	PanelRoute,
	ProjectsRoute,
	SigninRoute,
	ApiReadProjectsRoute,
	ApiSendEmailRoute,
	ApiAdminCreateProjectRoute: Route.update({
		id: "/api/admin/createProject",
		path: "/api/admin/createProject",
		getParentRoute: () => Route$10
	}),
	ApiAuthSplatRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true
	});
}
//#endregion
export { getRouter };
