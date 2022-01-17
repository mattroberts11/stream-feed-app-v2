import { Box, Button, Container, Paper, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import firebase from "firebase/compat/app";
import firebaseui from "firebaseui";



const Login = () => {

  // var firebase = require('../../node_modules/firebase');
  // var firebaseui = require('../../node_modules/firebaseui');

  // const userValue = useMemo(
  //   () => ({userId, setUserId}),
  //   [userId]
  // )

  const fbui = new firebaseui.auth.AuthUI(firebase.auth());

  const UserNameInput = () => {

    const {userId, login} = useContext(UserContext);

    // const [userId, setUserId] = useState('');

    // const handleChange = (event) => login(event.target.value);
    // // console.log("USER ID", userContext.userId);
    // return (
    //   <TextField 
    //     label="User Id" 
    //     variant="outlined" 
    //     required 
    //     // value={userId ? '' : userId}  
    //     onChange={handleChange}
    //   />
    // )
    return (
      fbui.start('#firebaseui-auth-container', {
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Other config options...
      })
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
