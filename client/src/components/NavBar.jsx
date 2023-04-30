import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

//styling Material Components
const Bar = styled(AppBar)`
  background-color: #000;
`;

const Tabs = styled(NavLink)`
  color: #fff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 18px;
`;

function NavBar() {
  return (
    <Bar position="static">
      <Toolbar>
        <Tabs to="/">CRUD</Tabs>
        <Tabs to="/AllUsers">All Users</Tabs>
        <Tabs to="/AddUser">Add User</Tabs>
      </Toolbar>
    </Bar>
  );
}

export default NavBar;
