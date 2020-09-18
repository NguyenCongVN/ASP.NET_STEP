import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import "./App.styles.scss";
import axios from "axios";
import { IActivity } from "./models/activity";
import NavBar from "./../features/nav/NavBar";
import ActivityDashboard from "./../features/activities/dashboard/ActivityDashboard";
import { connect } from "react-redux";
import { _UpdateActivities } from "./../redux/activities/activities.actions";
import { RootState } from "./../redux/root.reducer";
interface StateProps {
  activities: IActivity[];
}

interface DispatchProps {
  updateActivities: (activities: IActivity[]) => void;
}

type IProps = StateProps & DispatchProps;

const App = ({ activities, updateActivities }: IProps) => {
  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        updateActivities(response.data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <Container style={{ marginTop: "7rem" }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </div>
  );
};

const mapStateToProp = (state: RootState) => ({
  activities: state.activities.activities,
});

const mapDispatchToProp = (dispatch: any) => ({
  updateActivities: (activities: IActivity[]) =>
    dispatch(_UpdateActivities(activities)),
});

export default connect<StateProps, DispatchProps, any, RootState>(
  mapStateToProp,
  mapDispatchToProp
)(App);
