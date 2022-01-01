import { Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import useAuth from '../Firebase/useAuth';
import { useNavigate,useLocation} from 'react-router-dom';
import useAuth from '../../Firebase/useAuth';
// import login from '../../../../images/login.png'
// import useAuth from '../../../Hooks/useAuth'
const Login = () => {
    const [loginData, setLoginData] = useState({});
   const history=useNavigate()
   const location=useLocation()

    const {loginUser,isLoading,user,authError,signInWithGoogle } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
  console.log(loginData);
    const handleLoginSubmit = e => {
        
       loginUser(loginData.email, loginData.password,loginData.name,history,location);
         e.preventDefault();
    }
    const handleGoogle=()=>{
        signInWithGoogle(history,location)

    }
    return (
        <Container>

            <Grid container >
                <Grid item xs={12} md={12} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                <Paper  elevation={1} sx={{width:'100%',mt:5,p:1}} > 
                <Typography variant="h5" gutterBottom>
                Login your account
      
               </Typography>
            
              
              <form  onSubmit={handleLoginSubmit}>
              
               <TextField 
               sx={{width:'75%',m:2}} 
               id="standard-basic" 
               label="Your Email" 
               onBlur={handleOnBlur}
               name="email"
               type="email"
               variant="standard" />
                 <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        
               
               <Button type="submit" sx={{width:'75%',m:2}} style={{backgroundColor:'#6a2b36'}}variant="contained">Login</Button>
               <br />
               <Button onClick={handleGoogle} sx={{width:'75%',m:2}} style={{backgroundColor:'#6a2b36'}}variant="contained">Continue with Google</Button>
               <br />
               <NavLink 
               style={{textDecoration:'none'}}
               to='/'
               ><Button variant="text">New User? please Register</Button></NavLink>
               </form>
             
               
              {isLoading && <CircularProgress />}
               {user?.email && <Alert severity="success">Your Login Is Successfully</Alert>}
               {authError && <Alert severity="error">{authError}</Alert>} 


              </Paper> 
               
                </Grid>
              
            </Grid>
            
        </Container>
    );
};

export default Login;