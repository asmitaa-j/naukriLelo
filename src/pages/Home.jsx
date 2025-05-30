import {Box, Typography, Button} from '@mui/material';
import {Link} from  'react-router-dom'; 
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home(){ 


 const { user, logout } = useContext(AuthContext);



    return user ? (
<>
 <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:'center',
      minHeight:'100vh',
      backgroundColor: '#f2f2f2', 
    //  width:"100%"
    }}>  
<Typography variant='h2' sx={{ textShadow: '4px 4px 4px rgba(42, 73, 146, 0.23)', textAlign: { xs:'center'} , width: { xs: "100%"}, mt:{xs: 3}, mb:{xs: 0, md: 0}, px:5 }}> 
   Hello, <span>{user.name} </span> </Typography> 
<Typography variant='h2' sx={{ textShadow: '4px 4px 4px rgba(42, 73, 146, 0.23)', textAlign: { xs:'center'} , width: { xs: "100%"}, mt:{xs: 3}, mb:{xs: 4}, px:5 }}> 
    Welcome to naukriLelo !!! </Typography> 
<Typography variant='h6'sx={{ textShadow: '4px 4px 4px rgba(42, 73, 146, 0.2)', textAlign: { xs:'center'}}} >
    Your one-stop solution for job seekers and recruiters.
</Typography> 

<Typography variant='h6'> What brings you here today? </Typography>
<Box sx={{
    display: 'flex',  mt: 2 , mb:4 }}> 
    <Box  sx={{m:2, bgcolor:'black', p:2, borderRadius: '8px', width:{xs:'50%', }, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <Link to="/jobsgallery" style={{ textDecoration:'none', color:' white', fontFamily:'sans-serif' , textAlign:'center'}}> Looking for a Job?</Link>
    </Box> 

    <Box sx={{m:2, bgcolor:'black', p:2, borderRadius: '8px', width:{xs:'50%'},  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
 <Link to="/jobsposting"  style={{ textDecoration:'none', color:' white', fontFamily:'sans-serif', textAlign:'center'}} > Want to Post a Job openings? </Link>
    </Box>
</Box>

<Button variant='contained' onClick={logout} sx={{ bgcolor:'black', mb: 2 , mt:1}}>Logout</Button>
   
</Box>
</>
    ) : ( 

  <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:'center',
      minHeight:'100vh',
      backgroundColor: '#f2f2f2', 
      
    }}> 

<Typography variant='h2' sx={{ textShadow: '4px 4px 4px rgba(42, 73, 146, 0.23)', textAlign: { xs:'center'} , width: { xs: '100%'}, mb:{xs: 4, md:0}}}> 
    Welcome to naukriLelo!
</Typography> 
<Typography variant='h3' sx={{ textShadow: '4px 4px 4px rgba(42, 73, 146, 0.05)', textAlign: { xs:'center'} , width: { xs: '100%'}, mt:{xs:2, md:2}, mb:{xs: 4},}}> 
    Please login or register to continue.
</Typography> 

<Button variant='contained' component={Link} to="/login"    sx={{ bgcolor:'black',  mb: 2 , mt: 2,  width:{xs:'40%', md:'100px'}}}>
      Login
       </Button>  
<Button variant='contained' component={Link} to="/register"    sx={{ bgcolor:'black',alignSelf:'center', mb: 2 , mt: 2,  width:{xs:'40%', md:'100px'}}}>
      Register
       </Button>  

  </Box>

    );
} 

export default Home; 