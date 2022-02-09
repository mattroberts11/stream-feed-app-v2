import { Box, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";


import PageContainer from "../components/PageContainer";

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
    <PageContainer>
      <h2>Login to your Feed</h2>
      <UserNameInput />
      <Box sx={{p: 2}}>
        <Button variant="contained">Login</Button>
      </Box>
    </PageContainer>
  )
}

export default Login;
