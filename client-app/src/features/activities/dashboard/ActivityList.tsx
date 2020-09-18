import React from "react";
import { connect } from "react-redux";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { _SelectActivity } from "../../../redux/activities/activities.actions";
import { RootState } from "../../../redux/root.reducer";
import { selectActivityUtil } from "../../../redux/activities/activities.utils";

// interface StateProps {
//   activities: IActivity[];
// }

interface DispatchProps {
  selectActivity?: (activity: IActivity) => void;
}

interface OwnProps {
  activities: IActivity[];
}

type IProp = OwnProps & DispatchProps;

const ActivityList = ({ activities, selectActivity }: IProp) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Image
              size="tiny"
              src={
                activity
                  ? `/assets/categoryImages/${activity.category}.jpg`
                  : "/assets/placeholder.png"
              }
            />

            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city} , {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  floated="right"
                  content="View"
                  color="blue"
                  onClick={() => {
                    if (selectActivity) {
                      selectActivity(
                        selectActivityUtil(activity.id, activities)
                      );
                    }
                  }}
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  selectActivity: (activity: IActivity) => dispatch(_SelectActivity(activity)),
});

// const mapStateToProps = (rootState: RootState) => ({
//   activities: rootState.activities.activities,
// });

export default connect<undefined, DispatchProps, OwnProps, RootState>(
  null,
  mapDispatchToProps
)(ActivityList);
