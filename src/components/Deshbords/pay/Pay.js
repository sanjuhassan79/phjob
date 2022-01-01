import { Container, Grid, } from '@mui/material';
import React, { useState,useEffect } from 'react';
import PayItem from './PayItem';



const Pay = () => {
    const [product,setProduct]=useState([])
    
useEffect(() => {
    fetch('http://localhost:5000/userss')
    .then(res=>res.json())
    .then(data=>setProduct(data))
 }, []);

 console.log(product);
    return (
        <>
      
        <Container fixed >



<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {product?.map((product, index) => (
    <Grid item xs={12} sm={12} md={4} key={index}>
  <PayItem
  key={index}
  product={product}
  
  ></PayItem>

    </Grid>
  ))}
</Grid>
        </Container>
        </>
    );
};


export default Pay;