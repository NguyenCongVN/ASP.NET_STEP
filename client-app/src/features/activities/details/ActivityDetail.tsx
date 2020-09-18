import React from "react";
import { connect } from "react-redux";
import { Button, Card, Icon, Image, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { RootState } from "../../../redux/root.reducer";
import {
  _SelectActivity,
  _SetEditMode,
} from "../../../redux/activities/activities.actions";
interface StateProps {
  selectedActivity: IActivity | null;
}

interface DispatchProps {
  setSelectedActivity: (activity: IActivity | null) => void;
  setEditMode: (editMode: boolean) => void;
}

type IProp = StateProps & DispatchProps;

const ActivityDetail: React.FC<IProp> = ({
  selectedActivity,
  setEditMode,
  setSelectedActivity,
}) => {
  return (
    <Card fluid>
      <Image
        src={
          selectedActivity
            ? `/assets/categoryImages/${selectedActivity.category}.jpg`
            : "/assets/placeholder.png"
        }
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>
          {selectedActivity ? selectedActivity.title : "Title"}
        </Card.Header>
        <Card.Meta>
          <span>{selectedActivity ? selectedActivity.date : "Date"}</span>
        </Card.Meta>
        <Card.Description>
          {selectedActivity ? selectedActivity.description : "Description"}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            basic
            color="blue"
            content="Edit"
            onClick={() => {
              setEditMode(true);
            }}
          />
          <Button
            basic
            color="grey"
            content="Cancel"
            onClick={() => {
              setSelectedActivity(null);
              setEditMode(false);
            }}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

const mapStateToProp = (rootState: RootState) => ({
  selectedActivity: rootState.activities.selectedActivty,
});

const mapDispatchToProp = (dispatch: any) => ({
  setEditMode: (editMode: boolean) => dispatch(_SetEditMode(editMode)),
  setSelectedActivity: (activity: IActivity | null) =>
    dispatch(_SelectActivity(activity)),
});

export default connect<StateProps, DispatchProps, any, RootState>(
  mapStateToProp,
  mapDispatchToProp
)(ActivityDetail);
