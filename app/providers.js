// app/providers.js
"use client";

import { Provider } from "react-redux";
import store from "../src/store/store"; // adjust path as needed

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
