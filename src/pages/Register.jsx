import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import {TextField, Button, Box, Typography, Select, MenuItem} from '@mui/material'; 
import { Link } from "react-router-dom";

function Register() {
 
    const [form, setForm] = useState({ username: "", email: "", password: "", role: "job_seeker" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form)
    try {
      await axios.post("http://192.168.29.249:8080/api/auth/register", form).then((res)=>{
        console.log(res)
      })
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      alert("Registration failed.");
    }
  };

    return(
<>
<Box  sx={{  height:"100vh", bgcolor:'black',  display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}} >
      <Link to="/" style={{ color:'white', marginBottom:'20px'}}> Back to Home </Link>
    <Box component="form" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width:'400px', height:{xs:'600px', md:'550px'}, bgcolor:'#f5f5f5'  , borderRadius: 2, boxShadow: 3, mb:{xs:"80px",md:0}}}>
    <Typography variant="h4" sx={{mb: 3, color:'black'}}> Register </Typography>

 <Box sx={{ mb: 2 }}>
        <TextField
          label="Name"
          name="username"
          placeholder="Enter Name"
          variant="outlined"
          fullWidth
          autoComplete="off"
          sx={{  width: '300px' }} 
          onChange= {handleChange} 
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <TextField
          label="Email"
          name="email"
          placeholder="Enter Email"
          variant="outlined"
          fullWidth
          type="email"
          autoComplete="off"
          sx={{  width: '300px' }}
          onChange= {handleChange} 
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <TextField
          label="Password"
          name="password"
          placeholder="Enter Password"
          variant="outlined"
          fullWidth
          type="password"
          sx={{  width: '300px' }} 
          onChange= {handleChange} 
        />
      </Box> 
       
      <Select  name="role" value={form.role}
          label="Role" onChange={handleChange} sx={{width:'300px', mb:2, }} >  
        <MenuItem value="job_seeker"> Job Seeker</MenuItem>
        <MenuItem value="employer"> Employer </MenuItem>
      </Select>
       
       <Button 
       type='submit'
       variant="contained"
       sx={{ bgcolor:'black', alignSelf:'flex-start', mb: 2 , ml:6}} 
        
       onClick={handleSubmit}
     >
        
       Register
       </Button> 
         
       <Typography sx={{ color:'black', alignSelf:'flex-start', ml:6}}> Already have an account?</Typography> 

       <Button variant='contained' component={Link} to="/login"    sx={{ bgcolor:'black', alignSelf:'flex-start', mb: 2 , ml:6, mt: 2}}>
      Login
       </Button>

    
    </Box>
    </Box>
    
</>

    )
}  

export default Register;