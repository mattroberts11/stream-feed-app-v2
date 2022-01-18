import { Box, Button, Container, Paper, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";




const Login = () => {
  

  const UserNameInput = () => {
    
    const {userId, login} = useContext(UserContext);
    const handleChange = (event) => login(event.target.value);
    // const [userId, setUserId] = useState('');
    console.log("USER ID", UserContext.userId);
    return (
      <TextField 
        label="User Id" 
        variant="outlined" 
        required 
        // value={userId ? '' : userId}  
        onChange={handleChange}
      />
    )
  }

  return (
    <Container>
      <Box sx={{padding: '20px'}}>
        <Paper sx={{p: 2, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}} elevation={6} >
          <h2>Login to your Feed</h2>
          <UserNameInput />
          <Box sx={{p: 2}}>
            <Button variant="contained">Login</Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}

export default Login;
