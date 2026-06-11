import { t as cn } from "./cn-Ccejyh36.js";
import { n as TextColor, t as BackgroundText } from "./backgroundText-BHBd6OMm.js";
import { t as PageBackground } from "./PageBackground-C45ph-_f.js";
import { t as PageHead } from "./PageHead-CDooBwaj.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
//#region src/components/ContactBackgroundText/ContactBackgroundText.tsx
var ContactBackgroundText = ({ children }) => {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(BackgroundText, { children: [
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
			children: " Contact"
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
		"export default",
		/* @__PURE__ */ jsx(TextColor, {
			color: "blue",
			children: " Contact"
		})
	] }) });
};
//#endregion
//#region src/components/ContactBackgroundText/Description.tsx
var Description = ({ children }) => {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		"\xA0\xA0\xA0\xA0\xA0\xA0",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: "<"
		}),
		"p",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: ">"
		}),
		children,
		"\xA0\xA0\xA0\xA0\xA0\xA0",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: "</"
		}),
		"p",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: ">"
		}),
		/* @__PURE__ */ jsx("br", {})
	] });
};
//#endregion
//#region src/components/ContactBackgroundText/FormBox.tsx
var FormBox = ({ children }) => {
	return /* @__PURE__ */ jsxs("div", { children: [
		"\xA0\xA0\xA0\xA0\xA0\xA0",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: "<"
		}),
		"form",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: ">"
		}),
		children,
		"\xA0\xA0\xA0\xA0\xA0\xA0",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: "</"
		}),
		"form",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: ">"
		}),
		/* @__PURE__ */ jsx("br", {})
	] });
};
//#endregion
//#region src/components/ContactBackgroundText/Title.tsx
var Title = ({ children }) => {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		"\xA0\xA0\xA0\xA0\xA0\xA0",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: "<"
		}),
		"h2",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: ">"
		}),
		children,
		"\xA0\xA0\xA0\xA0\xA0\xA0",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: "</"
		}),
		"h2",
		/* @__PURE__ */ jsx(TextColor, {
			color: "white",
			children: ">"
		}),
		/* @__PURE__ */ jsx("br", {})
	] });
};
//#endregion
//#region src/components/ContactForm/index.tsx
var ContactForm = () => {
	const [nameError, setNameError] = useState("bottom-bar");
	const [emailError, setEmailError] = useState("bottom-bar");
	const [subjectError, setSubjectError] = useState("bottom-bar");
	const [messageError, setMessageError] = useState("bottom-bar");
	const validationContact = yup.object({
		name: yup.string().required("Empty field"),
		email: yup.string().lowercase().email("Invalid email").required("Invalid email"),
		subject: yup.string().required("Empty field"),
		message: yup.string().required("Empty field")
	});
	const initialValues = {
		name: null,
		email: null,
		subject: null,
		message: null
	};
	const handleSendEmail = ({ name, email, subject, message }) => {
		axios({
			method: "post",
			url: "/api/sendEmail",
			data: {
				name,
				email,
				subject,
				message
			}
		}).then(() => window.location.reload()).catch(() => {
			alert("Something went wrong");
		});
	};
	return /* @__PURE__ */ jsx(Formik, {
		initialValues,
		onSubmit: (values) => handleSendEmail(values),
		validationSchema: validationContact,
		children: ({ errors, touched }) => /* @__PURE__ */ jsxs(Form, { children: [
			/* @__PURE__ */ jsxs("div", {
				className: "contact-bottom-bar",
				children: [
					/* @__PURE__ */ jsx(Field, {
						type: "text",
						name: "name",
						placeholder: "Name",
						maxLength: 25,
						className: "contact-input",
						onClick: () => {
							setNameError("bottom-bar name-active");
						}
					}),
					touched.name ? /* @__PURE__ */ jsx("div", { className: "bottom-bar name-active" }) : /* @__PURE__ */ jsx("div", { className: nameError }),
					errors.name && touched.name ? /* @__PURE__ */ jsx("div", { className: "bottom-bar name-red" }) : null
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "contact-bottom-bar",
				children: [
					/* @__PURE__ */ jsx(Field, {
						type: "email",
						name: "email",
						placeholder: "Email",
						maxLength: 50,
						className: "contact-input",
						onClick: () => {
							setEmailError("bottom-bar email-active");
						}
					}),
					touched.email ? /* @__PURE__ */ jsx("div", { className: "bottom-bar email-active" }) : /* @__PURE__ */ jsx("div", { className: emailError }),
					errors.email && touched.email ? /* @__PURE__ */ jsx("div", { className: "bottom-bar email-red" }) : null
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "contact-bottom-bar",
				children: [
					/* @__PURE__ */ jsx(Field, {
						type: "text",
						name: "subject",
						placeholder: "Subject",
						maxLength: 50,
						className: "contact-input",
						onClick: () => {
							setSubjectError("bottom-bar subject-active");
						}
					}),
					touched.subject ? /* @__PURE__ */ jsx("div", { className: "bottom-bar subject-active" }) : /* @__PURE__ */ jsx("div", { className: subjectError }),
					errors.subject && touched.subject ? /* @__PURE__ */ jsx("div", { className: "bottom-bar subject-red" }) : null
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "contact-bottom-bar",
				children: [
					/* @__PURE__ */ jsx(Field, {
						as: "textarea",
						className: "contact-input text-area",
						name: "message",
						placeholder: "Message",
						maxLength: 500,
						onClick: () => {
							setMessageError("bottom-bar message-active");
						}
					}),
					touched.message ? /* @__PURE__ */ jsx("div", { className: "bottom-bar message-active" }) : /* @__PURE__ */ jsx("div", { className: messageError }),
					errors.message && touched.message ? /* @__PURE__ */ jsx("div", { className: "bottom-bar message-red" }) : null
				]
			}),
			/* @__PURE__ */ jsx("button", {
				type: "submit",
				className: "contact-btn",
				children: "Submit"
			})
		] })
	});
};
//#endregion
//#region src/assets/Email.svg
var SvgEmail = (props) => /* @__PURE__ */ jsx("svg", {
	width: 26,
	height: 20,
	viewBox: "0 0 26 20",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...props,
	children: /* @__PURE__ */ jsx("path", {
		d: "M23.4 0H2.6C1.17 0 0.013 1.125 0.013 2.5L0 17.5C0 18.875 1.17 20 2.6 20H23.4C24.83 20 26 18.875 26 17.5V2.5C26 1.125 24.83 0 23.4 0ZM23.4 5L13 11.25L2.6 5V2.5L13 8.75L23.4 2.5V5Z",
		fill: "#262626"
	})
});
//#endregion
//#region src/assets/Location.svg
var SvgLocation = (props) => /* @__PURE__ */ jsx("svg", {
	width: 22,
	height: 28,
	viewBox: "0 0 22 28",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...props,
	children: /* @__PURE__ */ jsx("path", {
		d: "M11 0C8.08369 0.00344047 5.28779 1.16347 3.22564 3.22563C1.16348 5.28778 0.00345217 8.08367 1.17029e-05 11C-0.00348119 13.3832 0.774992 15.7018 2.21601 17.6C2.21601 17.6 2.51601 17.995 2.56501 18.052L11 28L19.439 18.047C19.483 17.994 19.784 17.6 19.784 17.6L19.785 17.597C21.2253 15.6996 22.0034 13.3821 22 11C21.9966 8.08367 20.8365 5.28778 18.7744 3.22563C16.7122 1.16347 13.9163 0.00344047 11 0ZM11 15C10.2089 15 9.43553 14.7654 8.77773 14.3259C8.11993 13.8864 7.60724 13.2616 7.30449 12.5307C7.00174 11.7998 6.92253 10.9956 7.07687 10.2196C7.23121 9.44372 7.61217 8.73098 8.17158 8.17157C8.73099 7.61216 9.44373 7.2312 10.2197 7.07686C10.9956 6.92252 11.7998 7.00173 12.5307 7.30448C13.2616 7.60723 13.8864 8.11992 14.3259 8.77772C14.7654 9.43552 15 10.2089 15 11C14.9987 12.0605 14.5768 13.0771 13.827 13.827C13.0771 14.5768 12.0605 14.9987 11 15Z",
		fill: "#262626"
	})
});
//#endregion
//#region src/components/ContactInformations/index.tsx
var ContactInformations = (props) => {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("contact-info", props.Side === "left" && "contact-info--left", props.Side === "right" && "contact-info--right"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "contact-location-box",
				children: [/* @__PURE__ */ jsx("div", {
					className: "contact-circle",
					children: /* @__PURE__ */ jsx(SvgLocation, {})
				}), /* @__PURE__ */ jsx("span", { children: "Rio de Janeiro, Brazil" })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "contact-email-box",
				children: [/* @__PURE__ */ jsx("div", {
					className: "contact-circle contact-circle--link",
					children: /* @__PURE__ */ jsx(SvgEmail, {})
				}), /* @__PURE__ */ jsx("a", {
					href: "mailto: daniielreis@live.com",
					children: "daniielreis@live.com"
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: cn("contact-img", props.Side === "left" && "contact-img--left") })
		]
	});
};
//#endregion
//#region src/routes/contact.tsx?tsr-split=component
function Contact() {
	return /* @__PURE__ */ jsx(PageHead, {
		title: "Daniel Bernardes - Contact",
		description: "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. Contact me.",
		children: /* @__PURE__ */ jsx(PageBackground, { children: /* @__PURE__ */ jsx("div", {
			className: "page-container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "page-grid page-grid--wide",
				children: [/* @__PURE__ */ jsx("div", {
					className: "page-grid-col",
					children: /* @__PURE__ */ jsxs(ContactBackgroundText, { children: [
						/* @__PURE__ */ jsx(Title, { children: /* @__PURE__ */ jsx("h2", {
							className: "contact-title-content",
							children: "Contact Me"
						}) }),
						/* @__PURE__ */ jsx(Description, { children: /* @__PURE__ */ jsxs("p", {
							className: "contact-description-content",
							children: [
								"If you have any job opportunities, do not hesitate and contact me, I will be analyzing all proposals. ",
								/* @__PURE__ */ jsx("br", {}),
								" ",
								"However, if you have other request or question, don't hesitate to use the form."
							]
						}) }),
						/* @__PURE__ */ jsx(FormBox, { children: /* @__PURE__ */ jsx("div", {
							className: "contact-form-content",
							children: /* @__PURE__ */ jsx(ContactForm, {})
						}) }),
						/* @__PURE__ */ jsx(ContactInformations, { Side: "left" })
					] })
				}), /* @__PURE__ */ jsx("div", {
					className: "page-grid-col page-grid-col--right-contact",
					children: /* @__PURE__ */ jsx(ContactInformations, { Side: "right" })
				})]
			})
		}) })
	});
}
//#endregion
export { Contact as component };
