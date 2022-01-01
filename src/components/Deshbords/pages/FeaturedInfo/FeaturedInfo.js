import { Grid } from '@mui/material';
import React from 'react';
import './FeaturedInfo.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const FeaturedInfo = () => {
    return (
        <Grid container sx={{ mx: 2 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                <Grid style={{justifyContent: "center"}} item xs={6} sm={12} md={4} >
                
                    <div className="featuredItem">
                        <span className="fraturedTitle">Revanue</span>
                        <div className="fraturedMoneyContainer">
                            <span className="fraturedMoney">$2,225</span>
                            <span className="fraturedMoneyReat">-11.4 <ArrowUpwardIcon className="featuredIcon negative"/></span>
                        </div>
                        <div className="featuredSub">Compared to last month</div>
                    </div>
                 

                    
                   
      
                    </Grid>
                <Grid item xs={6} sm={12} md={4} >
                
                    <div className="featuredItem">
                        <span className="fraturedTitle">Sale</span>
                        <div className="fraturedMoneyContainer">
                            <span className="fraturedMoney">$2,225</span>
                            <span className="fraturedMoneyReat">-2.4 <ArrowUpwardIcon className="featuredIcon negative"/></span>
                        </div>
                        <div className="featuredSub">Compared to last month</div>
                    </div>
                 

                    
                   
      
                    </Grid>
                <Grid item xs={6} sm={12} md={4} >
                
                    <div className="featuredItem">
                        <span className="fraturedTitle">Cost</span>
                        <div className="fraturedMoneyContainer">
                            <span className="fraturedMoney">$2,225</span>
                            <span className="fraturedMoneyReat">+2.4 <ArrowUpwardIcon className="featuredIcon "/></span>
                        </div>
                        <div className="featuredSub">Compared to last month</div>
                    </div>
                 

                    
                   
      
                    </Grid>
        </Grid>
    );
};

export default FeaturedInfo;