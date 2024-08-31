import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import isPreloadReducer from './states/isPreload/reducer';
import leaderboardsReducer from './states/leaderboards/reducer';

const rootReducer = combineReducers({
  isPreload: isPreloadReducer,
  loadingBar: loadingBarReducer,
  leaderboards: leaderboardsReducer,
});

export const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState,
});

export const store = setupStore();
