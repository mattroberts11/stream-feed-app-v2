import { Box, Button, Container, Paper } from "@mui/material";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <Container>
      <Box sx={{p: 2}}>
        <Paper sx={{p: 2, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}} elevation={6} >
          <h2>Welcome to Gear Feeds!</h2>
          <Button variant="contained" component={Link} to={'/login'} sx={{marginRight: '5px'}}>Login</Button>
          <Button variant="contained" component={Link} to={'/register'}>Sign Up</Button>
        </Paper>
      </Box>
    </Container>
  )
}

export default Home;
