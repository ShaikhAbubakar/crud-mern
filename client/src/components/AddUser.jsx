import {
  Button,
  FormControl,
  FormGroup,
  Typography,
  InputLabel,
  Input,
  styled
} from "@mui/material";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { addUser } from "../service/api.js";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const AddUser = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  async function handleClick() {
    await addUser(user);
    navigate("/AllUsers");
  }

  return (
    <Container>
      <Typography variant="h2">Add User</Typography>

      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={handleChange} name="name" value={user.name} />
      </FormControl>

      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={handleChange} name="username" value={user.username} />
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={handleChange} name="email" value={user.email} />
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={handleChange} name="phone" value={user.phone} />
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={handleClick}>
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
