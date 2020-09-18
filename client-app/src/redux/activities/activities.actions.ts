import {
  SelectActivity,
  SELECT_ACTIVITY,
  SetEditMode,
  SET_EDITMODE,
  UpdateActivities,
  UPDATE_ACTIVITIES,
} from "./activities.types";
import { IActivity } from "../../app/models/activity";
export function _UpdateActivities(activities: IActivity[]): UpdateActivities {
  return {
    type: UPDATE_ACTIVITIES,
    payload: activities,
  };
}

export function _SelectActivity(activity: IActivity | null): SelectActivity {
  return {
    type: SELECT_ACTIVITY,
    payload: activity,
  };
}

export function _SetEditMode(editMode: boolean): SetEditMode {
  return {
    type: SET_EDITMODE,
    payload: editMode,
  };
}
