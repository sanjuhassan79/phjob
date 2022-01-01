import { Alert, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]=useState('')
    const [success,setSuccess]=useState(false)

    const handleOnBlur=(e)=>{
        setEmail(e.target.value)

    }
    const handleAddmin=e=>{
        const user={email}
fetch('http://localhost:5000/users/admin',{
    method:'PUT',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(user)
})
.then(res=>res.json())
.then(data=>{
if(data.modifiedCount){
    
    setSuccess(true)
    console.log(data);
}


})
e.preventDefault()
    }
    return (
        <div className="header-rev">

<Grid container spacing={2}>
  <Grid item xs={12} md={6}sx={{mx:'auto',mt:6}}>
  <h1>Make Admin</h1>
            <form onSubmit={handleAddmin}>

            <TextField 
               sx={{width:'100%',m:2}} 
               id="standard-basic" 
               label="Your Email" 
               onBlur={handleOnBlur}
               name="email"
               type="email"
               variant="standard" />
               <Button type="submit" style={{backgroundColor:'rgb(95, 46, 61)'}} sx={{width:'100%',m:2}} variant="contained">Add Admin</Button>
               
            </form>
            {success && <Alert severity="success">added successfully admin !</Alert> }
              
  </Grid>
  
  
</Grid>

           
        </div>
    );
};

export default MakeAdmin;