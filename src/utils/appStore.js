import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import GptSearch from "../components/GptSearch";
import gptReducer from './gptSlice'
import configReducer from "../utils/configSlice";


const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});
export default appStore;
