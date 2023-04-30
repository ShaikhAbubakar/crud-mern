import {
  Button,
  FormControl,
  FormGroup,
  Typography,
  InputLabel,
  Input,
  styled
} from "@mui/material";
import React, { useState,useEffect } from "react";
import {useNavigate,useParams} from "react-router-dom";
import { editUser,getUser } from "../service/api.js";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
    margin-top: 10px;
    margin-bottom: 10px;
}
`;

// COMPONENT START
const EditUser = () => {

  const navigate = useNavigate();
  const {id} = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  });

  useEffect(()=>{
    getUserData();
  },[]);

  const getUserData = async()=>{
    let response = await getUser(id);
    setUser(response.data[0]);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  async function handleClick() {
    await editUser(user,id);
    navigate("/AllUsers");
  }

  return (
    <Container>
      <Typography variant="h2">Edit User</Typography>

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
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
