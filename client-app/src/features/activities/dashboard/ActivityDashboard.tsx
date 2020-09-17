import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../../form/ActivityForm";
interface IProp {
  activities: IActivity[];
}
const ActivityDashboard = ({ activities }: IProp) => {
  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <ActivityList activities={activities} />
        </Grid.Column>

        <Grid.Column width={6}>
          <ActivityDetail />
          <ActivityForm />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ActivityDashboard;
