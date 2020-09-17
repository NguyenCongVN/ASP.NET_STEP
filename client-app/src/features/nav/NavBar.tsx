import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
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

export default NavBar;
