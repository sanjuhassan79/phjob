











// import { Input } from '@mui/material';
import { Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';



import { NavLink,useNavigate,useLocation} from 'react-router-dom';
 import useAuth from '../../Firebase/useAuth';

const Join_as_a_Driving = () => {
    const [loginData, setLoginData] = useState({});
    // const [licence, setlicence] = useState(null);
    const history=useNavigate()
    const location=useLocation()

    const {registerUser,user,authError,isLoading,signInWithGoogle}=useAuth()
console.log(registerUser);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
//   console.log(loginData);
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }

//         const formData=new FormData()

//         formData.append('loginData',loginData)
//          formData.append('licence',licence)



//  console.log(formData);


        // .email, loginData.password,loginData.name
        registerUser(loginData,history,location);
         e.preventDefault();
    }

    const handleGoogle=()=>{
        signInWithGoogle(history,location)

    }

    return (
        <Container>

            <Grid container >
                <Grid item xs={12} md={12} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                <Paper  elevation={3} sx={{width:'100%',mt:10,p:1}} > 
               
                <Typography variant="h5" gutterBottom>
                Join as a Driving Lesson Learner
      
               </Typography>
         {!isLoading &&  
              
              <form  onSubmit={handleLoginSubmit}>
                            <TextField 
                            sx={{width:'75%',m:2}} 
                            required
                            id="standard-basic" 
                            label="Join as a Driving" 
                            onBlur={handleOnBlur}
                            name="Driving"
                            variant="standard" />

                            <TextField 
                            sx={{width:'75%',m:2}} 
                            required
                            id="standard-basic" 
                            label="Your Full name" 
                            onBlur={handleOnBlur}
                            name="name"
                            variant="standard" />


                            <TextField 
                            sx={{width:'75%',m:2}} 
                            required
                            id="standard-basic" 
                            label="Your Email" 
                            onBlur={handleOnBlur}
                            name="email"
                            type="email"
                            variant="standard" />

                            <TextField
                            sx={{ width: '75%', m: 2 }}
                            required
                            id="standard-basic"
                            label="Age"
                            // type="age"
                            name="age"
                            onBlur={handleOnBlur}
                            variant="standard" />

                            <TextField
                            sx={{ width: '75%', m: 2 }}
                            required
                            id="standard-basic"
                            label="address"
                            // type="address"
                            name="address"
                            onBlur={handleOnBlur}
                            variant="standard" />

                            <TextField
                            sx={{ width: '75%', m: 2 }}
                            required
                            id="standard-basic"
                            label="phone"
                            // type="address"
                            name="phone"
                            onBlur={handleOnBlur}
                            variant="standard" />

                           

                            <TextField
                            sx={{ width: '75%', m: 2 }}
                            required
                            id="standard-basic"
                            label="area"
                            // type="address"
                            name="area"
                            onBlur={handleOnBlur}
                            variant="standard" />
                            <br />


                            <TextField
                            sx={{ width: '75%', m: 2 }}
                            required
                            id="standard-basic"
                            label="Your profile image url"
                            // type="address"
                            name="profile"
                            onBlur={handleOnBlur}
                            variant="standard" />
                            <br />


                            <TextField
                            sx={{ width: '75%', m: 2 }}
                            required
                            id="standard-basic"
                            label="nid picture url"
                            // type="address"
                            name="nid"
                            onBlur={handleOnBlur}
                            variant="standard" />


                            <br />
                            <TextField
                            sx={{ width: '75%', m: 2 }}
                            required
                            id="standard-basic"
                            label="driving licence picture url"
                            // type="address"
                            name="licence"
                            onBlur={handleOnBlur}
                            variant="standard" />
                            <br />


                            {/* <label htmlFor="contained-button-file">
                        <Input 
                        accept="image/*" 
                        id="standard-basic"
                        onBlur={e=>setlicence(e.target.files[0])}  
                        type="file" />
                        
                        </label> */}


{/* 
                            <TextField
                            required
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label=" driving licence picture"
                            type="file"
                            name="licence"
                            accept="image/*"
                            onBlur={handleOnBlur}
                            variant="standard" />

                            <TextField
                            required
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label=" nid picture"
                            type="file"
                            name="nid"
                            accept="image/*"
                            onBlur={handleOnBlur}
                            variant="standard" />

                            <TextField
                            required
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label=" Your profile image"
                            type="file"
                            name="profile"
                            accept="image/*"
                            onBlur={handleOnBlur}
                            variant="standard" /> */}
                            <br />



                            <TextField
                            required
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Vehicle type"
                            // type="address"
                            name="Vehicle"
                            onBlur={handleOnBlur}
                            variant="standard" />



                            


                            <TextField
                            required
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />


                            <TextField
                            sx={{ width: '75%', m: 2 }}
                            required
                            id="standard-basic"
                            label="Confrim password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />
                            <br />




                























               
               <Button type="submit" sx={{width:'75%',m:2}} style={{backgroundColor:'#6a2b36'}} variant="contained">Register</Button>
               <br />
               <Button onClick={handleGoogle} sx={{width:'75%',m:2}} style={{backgroundColor:'#6a2b36'}}variant="contained">Continue with Google</Button>
               <br />
               <NavLink 
               style={{textDecoration:'none'}}
               to='/Login'
               ><Button variant="text">Already Registered? please Login</Button></NavLink>
               </form>
              
               }
             {isLoading && <CircularProgress />}
               {user?.email && <Alert severity="success">Your Registration Ss Successfully</Alert> }
               {authError && <Alert severity="error">{authError}</Alert>} 
 

              </Paper> 
               
                </Grid>
              
            </Grid>
            
        </Container>
    );
};

export default Join_as_a_Driving;