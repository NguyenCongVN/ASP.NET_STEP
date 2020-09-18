import { IActivity } from "../../app/models/activity";
export interface IActivitiesState {
  activities: IActivity[];
  selectedActivty: IActivity | null;
  editMode: boolean;
}

export const UPDATE_ACTIVITIES = "UPDATE_ACTIVITIES";
export const SELECT_ACTIVITY = "SELECT_ACTIVITY";
export const SET_EDITMODE = "SET_EDITMODE";

export interface UpdateActivities {
  type: typeof UPDATE_ACTIVITIES;
  payload: IActivity[];
}

export interface SelectActivity {
  type: typeof SELECT_ACTIVITY;
  payload: IActivity | null;
}

export interface SetEditMode {
  type: typeof SET_EDITMODE;
  payload: boolean;
}

export type ActivitiesActionTypes =
  | UpdateActivities
  | SelectActivity
  | SetEditMode;
