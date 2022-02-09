import { Box, Container, Paper } from "@mui/material";



const PageContainer = ({children}) => {
  return (
  <Container>
      <Box sx={{p: 2}}>
        <Paper sx={{p: 2, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}} elevation={6} >
          {children}
        </Paper>
      </Box>
    </Container>
  )
}

export default PageContainer;
