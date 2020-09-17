import {
  IActivitiesState,
  ActivitiesActionTypes,
  UPDATE_ACTIVITIES,
  SELECT_ACTIVITY,
} from "./activities.types";
const INITIAL_STATE: IActivitiesState = {
  activities: [],
  selectedActivty: null,
};

export const activitiesReducer = (
  state = INITIAL_STATE,
  action: ActivitiesActionTypes
): IActivitiesState => {
  switch (action.type) {
    case UPDATE_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case SELECT_ACTIVITY:
      return {
        ...state,
        selectedActivty: action.payload,
      };
    default:
      return state;
  }
};
