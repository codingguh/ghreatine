import { loadingBarReducer } from "react-redux-loading-bar";
import leaderboardsReducer from './leaderBoards/reducer';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
      leaderboards: leaderboardsReducer,
      loadingBar: loadingBarReducer,
    },
  });
  
  export default store;