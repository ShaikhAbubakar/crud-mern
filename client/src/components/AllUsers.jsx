import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import Typography from '@mui/material/Typography'
import { Button, Container, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";

// API
import { getUsers , deleteUser} from "../service/api";

// STYLING
const StyledTypgraphy = styled(Typography)`
  margin:20px 0 15px 0;
`;

const StyledTableRow = styled(TableRow)`
  background-color:black;
  & > th {
    color:#fff;
  }
`;

const AllUsers = () => {
  
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    getAllUsers();
  },[]);

  const getAllUsers = async()=>{
    const response = await getUsers();
    setUsers(response.data);
  }

  const handleDelete = async (id) =>{
    await deleteUser(id);
    getAllUsers();
  }

  return (
    
    <Container>
      <StyledTypgraphy variant="h4" color="Black">All Users</StyledTypgraphy>
      <Table>
        <TableHead>
          <StyledTableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {
            users.map((user)=>{
              return(
                <TableRow key={user._id}>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button variant="contained" component={Link} to={`/EditUser/${user._id}`}>Edit</Button>
                    <Button variant="contained" style={{marginLeft:20,backgroundColor:'red'}} onClick={()=>handleDelete(user._id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              )
            })
          }
          
        </TableBody>
      </Table>
    </Container>
  );
};

export default AllUsers;
