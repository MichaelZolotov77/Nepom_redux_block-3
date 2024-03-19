import { legacy_createStore as createStore } from "redux";

const counter = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  if (action.type === "RESET") {
    return 0;
  }
  return state;
};

export const store = createStore(counter);

export const increment = {
  type: "INCREMENT",
};

export const decrement = {
  type: "DECREMENT",
};

export const reset = {
  type: "RESET",
};
