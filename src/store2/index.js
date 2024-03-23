import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { rootReducer } from "./root-reducer";
import { loadState, saveState } from "./local-storage";
import { throttle } from "lodash";

// export const store = createStore(rootReducer, devToolsEnhancer());

export const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState, devToolsEnhancer());

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos,
      });
    }, 1000)
  );

  return store;
};
