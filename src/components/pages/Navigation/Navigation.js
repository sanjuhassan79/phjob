import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import useAuth from '../Firebase/useAuth';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { Divider, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';

import { useTheme } from '@mui/material';
import './Navigation.css'
// import { useSelector } from 'react-redux'

const Navigation = () => {
//   const {user,logout}=useAuth()
// const quantity = useSelector((state) => state.cart.quantity)

// const dispatch = useDispatch()
const theme=useTheme()
  const useStyke=makeStyles({

    navIcon:{
      [theme.breakpoints.up('sm')]: {
        display:'none !important'
      }
    },

    navItemContainner:{
        display:'flex',
      [theme.breakpoints.down('sm')]: {
        display:'none !important'
      }

    },
    navLogo:{
        color:'black',
      [theme.breakpoints.down('sm')]: {
       textAlign:'right'
      }
    },
    itemAlien:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start'
      
    }



  })
  const{navIcon,navItemContainner,navLogo,itemAlien}= useStyke()


  const [state, setState] = React.useState(false);


  const list =  (
    <Box
      sx={{ width:250}}
      role="presentation"
    >
      <List>
       
          <ListItem button className={itemAlien}>
          
              
          <Link to="/" className="link">
              <li className="sidebarListItem">
              Home
              </li>
              </Link>
               <Link to="/productList" className="link">
              <li className="sidebarListItem">
              Product
              </li>
              </Link>
               <Link to="/singleProduct" className="link">
              <li className="sidebarListItem">
              SingleProduct
              </li>
              </Link>
               <Link to="/register" className="link">
              <li className="sidebarListItem">
              Register
              </li>
              </Link>
               <Link to="/login" className="link">
              <li className="sidebarListItem">
              SIgn In
              </li>
              </Link>
               <Link to="/Deshbords" className="link">
              <li className="sidebarListItem">
              Deshbords
              </li>
              </Link>
               <Link to="/cart" className="link">
              <li className="sidebarListItem">
              <Badge badgeContent={44} color="primary">
                    <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
              </li>
              </Link>

          </ListItem>
        
      </List>
     
    </Box>
  );

      
    return (
        
    <>
    <Box sx={{ flexGrow: 1 }} >
    <AppBar position="static" style={{backgroundColor: '#dcedc8'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          className={navIcon}
          onClick={()=>setState(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Shop~BD
        </Typography>
        <Box className={navItemContainner} c>

        
               
               <Link to="/" className="link">
              <li className="navbarmenu">
              Home
              </li>
              </Link>
               
               
               <Link to="/register" className="link">
              <li className="navbarmenu">
              Register
              </li>
              </Link>
               <Link to="/login" className="link">
              <li className="navbarmenu">
              SIgn In
              </li>
              </Link>
               <Link to="/Deshbords" className="link">
              <li className="navbarmenu">
              Deshbords
              </li>
              </Link>
               <Link to="/cart" className="link">
              <li className="navbage">
              <Badge badgeContent={33} color="primary">
                    <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
              </li>
              </Link>



               
              


















         
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
    
  <div>
     
        <React.Fragment>
         
          <Drawer
           
            open={state}
            onClose={()=>setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
     
    </div>





    
    </>
    );
};

export default Navigation;