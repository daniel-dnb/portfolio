import { useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import axios from "axios";
var ProjectsSlice = createSlice({
	name: "projects",
	initialState: {
		data: void 0,
		isLoading: false,
		error: false
	},
	reducers: {
		loadingPending: (state) => {
			state.isLoading = true;
			state.error = false;
		},
		loadingSuccess: (state) => {
			state.isLoading = false;
			state.error = false;
		},
		loadingFail: (state) => {
			state.isLoading = false;
			state.error = true;
		},
		setProjectsData: (state, { payload }) => {
			state.data = [...payload];
		}
	}
});
function asyncSetProjects() {
	return async function(dispatch) {
		dispatch(loadingPending());
		await axios.get("/api/readProjects").then((res) => {
			dispatch(setProjectsData(res.data));
			dispatch(loadingSuccess());
		}).catch((_err) => dispatch(loadingFail()));
	};
}
var { setProjectsData, loadingPending, loadingSuccess, loadingFail } = ProjectsSlice.actions;
var projects_default = ProjectsSlice.reducer;
//#endregion
//#region src/redux/store.ts
function createStorage() {
	if (typeof window === "undefined") return {
		getItem: (_key) => Promise.resolve(null),
		setItem: (_key, value) => Promise.resolve(value),
		removeItem: (_key) => Promise.resolve()
	};
	return {
		getItem: (key) => Promise.resolve(window.localStorage.getItem(key)),
		setItem: (key, value) => {
			window.localStorage.setItem(key, value);
			return Promise.resolve(value);
		},
		removeItem: (key) => {
			window.localStorage.removeItem(key);
			return Promise.resolve();
		}
	};
}
var store = configureStore({
	reducer: { projects: persistReducer({
		timeout: 100,
		key: "projects",
		version: 1,
		storage: createStorage()
	}, projects_default) },
	devTools: false,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: { ignoredActions: [
		FLUSH,
		REHYDRATE,
		PAUSE,
		PERSIST,
		PURGE,
		REGISTER
	] } })
});
var useAppDispatch = () => useDispatch();
var useAppSelector = useSelector;
var createPersistor = () => persistStore(store);
//#endregion
export { asyncSetProjects as a, useAppSelector as i, store as n, useAppDispatch as r, createPersistor as t };
