import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import formReducer from "./form";
import siteReducer from "./site";
import languageReducer from "./language";

const rootReducer = combineReducers({
  user: userSlice,
  form: formReducer,
  site: siteReducer,
  language: languageReducer,
});

export { rootReducer };
