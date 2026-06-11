import { a as getRequestHeaders, n as createServerFn, r as TSS_SERVER_FUNCTION } from "../server.js";
import { t as auth } from "./auth-L5P58OcY.js";
//#region node_modules/.pnpm/@tanstack+start-server-core@1.169.9/node_modules/@tanstack/start-server-core/dist/esm/createServerRpc.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/lib/session.ts?tss-serverfn-split
var getSession_createServerFn_handler = createServerRpc({
	id: "2e754e79ecbc3ea29bcdc5ac4b4c293139886f91b0e54a07784e950dce2c87b5",
	name: "getSession",
	filename: "src/lib/session.ts"
}, (opts) => getSession.__executeServer(opts));
var getSession = createServerFn({ method: "GET" }).handler(getSession_createServerFn_handler, async () => {
	return auth.api.getSession({ headers: getRequestHeaders() });
});
//#endregion
export { getSession_createServerFn_handler };
