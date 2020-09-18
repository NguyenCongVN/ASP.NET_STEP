import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../app/models/activity";
import { RootState } from "../../redux/root.reducer";
import { connect } from "react-redux";
import { _SetEditMode } from "../../redux/activities/activities.actions";
interface IStateProps {
  selectedActivity: IActivity | null;
}

interface IDispatchProps {
  setEditMode: (editMode: boolean) => void;
}

type IProp = IStateProps & IDispatchProps;

const ActivityForm = ({ selectedActivity, setEditMode }: IProp) => {
  return (
    <Segment clearing>
      <Form>
        <Form.Input
          placeholder="Title"
          value={selectedActivity ? selectedActivity.title : ""}
        />
        <Form.TextArea
          rows={2}
          placeholder="Description"
          value={selectedActivity ? selectedActivity.description : ""}
        />
        <Form.Input
          placeholder="Category"
          value={selectedActivity ? selectedActivity.category : ""}
        />
        <Form.Input
          type="date"
          placeholder="Date"
          value={selectedActivity ? selectedActivity.date : ""}
        />

        <Form.Input
          placeholder="City"
          value={selectedActivity ? selectedActivity.city : ""}
        />
        <Form.Input
          placeholder="Venue"
          value={selectedActivity ? selectedActivity.venue : ""}
        />

        <Button type="submit" floated="right" content="Submit" positive />
        <Button
          floated="right"
          content="Cancel"
          onClick={() => {
            setEditMode(false);
          }}
        />
      </Form>
    </Segment>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedActivity: state.activities.selectedActivty,
});

const mapDispatchToProps = (dispatch: any) => ({
  setEditMode: (editMode: boolean) => dispatch(_SetEditMode(editMode)),
});

export default connect<IStateProps, IDispatchProps, any, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(ActivityForm);
