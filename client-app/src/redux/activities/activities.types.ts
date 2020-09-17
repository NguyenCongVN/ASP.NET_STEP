import { IActivity } from "../../app/models/activity";
export interface IActivitiesState {
  activities: IActivity[];
  selectedActivty: IActivity | null;
}

export const UPDATE_ACTIVITIES = "UPDATE_ACTIVITIES";
export const SELECT_ACTIVITY = "SELECT_ACTIVITY";

export interface UpdateActivities {
  type: typeof UPDATE_ACTIVITIES;
  payload: IActivity[];
}

export interface SelectActivity {
  type: typeof SELECT_ACTIVITY;
  payload: IActivity;
}

export type ActivitiesActionTypes = UpdateActivities | SelectActivity;
