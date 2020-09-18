import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../../form/ActivityForm";
import { RootState } from "../../../redux/root.reducer";
import { connect } from "react-redux";

interface IState {
  editMode?: boolean;
  selectedActivity: IActivity | null;
}

interface IOwnProps {
  activities: IActivity[];
}

type IProp = IState & IOwnProps;

const ActivityDashboard = ({
  activities,
  editMode,
  selectedActivity,
}: IProp) => {
  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <ActivityList activities={activities} />
        </Grid.Column>

        <Grid.Column width={6}>
          {selectedActivity ? <ActivityDetail /> : null}
          {editMode ? <ActivityForm /> : null}
        </Grid.Column>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  editMode: state.activities.editMode,
  selectedActivity: state.activities.selectedActivty,
});

export default connect<IState, any, IOwnProps, RootState>(mapStateToProps)(
  ActivityDashboard
);
