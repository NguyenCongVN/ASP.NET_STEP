import { IActivity } from "../../app/models/activity";
export const selectActivityUtil = (
  id: string,
  activities: IActivity[]
): IActivity => activities.filter((activity) => activity.id === id)[0];
