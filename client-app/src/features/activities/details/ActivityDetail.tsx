import React from "react";
import { connect } from "react-redux";
import { Button, Card, Icon, Image, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { RootState } from "../../../redux/root.reducer";

interface StateProps {
  selectedActivity: IActivity | null;
}

type IProp = StateProps;

const ActivityDetail: React.FC<IProp> = ({ selectedActivity }) => {
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
          <Button basic color="blue" content="Edit" />
          <Button basic color="grey" content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

const mapStateToProp = (rootState: RootState) => ({
  selectedActivity: rootState.activities.selectedActivty,
});

export default connect<StateProps, any, any, any>(
  mapStateToProp,
  null
)(ActivityDetail);
