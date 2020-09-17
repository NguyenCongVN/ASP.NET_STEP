import {
  SelectActivity,
  SELECT_ACTIVITY,
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

export function _SelectActivity(activity: IActivity): SelectActivity {
  return {
    type: SELECT_ACTIVITY,
    payload: activity,
  };
}
