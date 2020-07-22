import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { loadState, saveState } from "./loadState/localStorage";

const initialData = loadState();

const middlewares = [thunk];

const store = createStore(
    rootReducer,
    initialData,
    applyMiddleware(...middlewares)
);

store.subscribe(function() {
    saveState({ favorites: store.getState().favorites });
});

export default store;