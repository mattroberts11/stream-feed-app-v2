import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

import PageContainer from "../components/PageContainer";


const Home = () => {
  return (
    <PageContainer>
         <h2>Welcome to Gear Feeds!</h2>
        <Button variant="contained" component={Link} to={'/login'} sx={{marginRight: '5px'}}>Login</Button>
        <Button variant="contained" component={Link} to={'/register'}>Sign Up</Button>
    </PageContainer>
  );
}

export default Home;
