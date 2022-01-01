import React from 'react';
import './recharts.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Grid } from '@mui/material';

const Charts = ({title,data,dataKey,grid}) => {
    

    return (



<Grid container spacing={2}>
  <Grid item xs={12} md={12}>
  <div className="Charts">
            <h3 className="ChartsTilte">{title}</h3>

            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"></XAxis>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"></Line>
                        <Tooltip/>
                      {grid &&  <CartesianGrid stroke="#5550bc" strokeDasharray="5 5"/>}
                </LineChart>

            </ResponsiveContainer>
        </div>
  </Grid>
  
  
</Grid>


        
    );
};

export default Charts;