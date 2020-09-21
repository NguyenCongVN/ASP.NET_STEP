import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

const NavBar = ({ history }: RouteComponentProps) => {
  return (
    <Menu fixed="top" inverted style={{ fontSize: "1.4rem" }}>
      <Container>
        <Menu.Item header onClick={() => history.push("/")}>
          <img src="/assets/logo.png" alt="Logo" />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button positive content="Create activities" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default withRouter(NavBar);
