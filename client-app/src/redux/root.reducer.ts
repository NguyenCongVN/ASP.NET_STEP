import { combineReducers } from "redux";
import { activitiesReducer } from "./activities/activities.reducer";

export const rootReducer = combineReducers({
  activities: activitiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
