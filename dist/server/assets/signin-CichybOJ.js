import { t as cn } from "./cn-Ccejyh36.js";
import { n as authClient, t as PageHead } from "./PageHead-CDooBwaj.js";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as yup from "yup";
import { CircleNotch, LockSimple, User } from "phosphor-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//#region src/routes/signin.tsx?tsr-split=component
function SignIn() {
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(yup.object({
		email: yup.string().lowercase().email("Please enter a valid email").required("Please enter the email field"),
		password: yup.string().required("Please enter the password field")
	}).required()) });
	const onSubmit = async (data) => {
		setIsLoading(true);
		if ((await authClient.signIn.email({
			email: data.email,
			password: data.password
		})).error) setError("Invalid email or password");
		else {
			setError("");
			await navigate({ to: "/panel" });
		}
		setIsLoading(false);
	};
	return /* @__PURE__ */ jsx(PageHead, {
		title: "Daniel Bernardes - Login",
		description: "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. Login.",
		children: /* @__PURE__ */ jsx("div", {
			className: "login-container",
			children: /* @__PURE__ */ jsx("div", {
				className: "login-content",
				children: /* @__PURE__ */ jsxs("div", {
					className: "login-box",
					children: [/* @__PURE__ */ jsxs("header", {
						className: "login-header",
						children: [/* @__PURE__ */ jsx(User, {
							id: "user-icon",
							size: 40,
							color: "#40DABF"
						}), /* @__PURE__ */ jsx("span", {
							className: "login-title",
							children: "Sign In"
						})]
					}), /* @__PURE__ */ jsxs("form", {
						className: "login-form",
						onSubmit: handleSubmit(onSubmit),
						children: [
							/* @__PURE__ */ jsx("input", {
								className: cn("login-input", errors.email?.message && "login-input--invalid"),
								type: "email",
								...register("email", { required: true }),
								placeholder: "Email"
							}),
							/* @__PURE__ */ jsx("input", {
								className: cn("login-input", errors.password?.message && "login-input--invalid"),
								type: "password",
								...register("password", { required: true }),
								placeholder: "Password"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "login-error",
								children: error
							}),
							/* @__PURE__ */ jsx("button", {
								className: "login-btn",
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
								}), /* @__PURE__ */ jsx("span", { children: "Sign In" })] })
							})
						]
					})]
				})
			})
		})
	});
}
//#endregion
export { SignIn as component };
