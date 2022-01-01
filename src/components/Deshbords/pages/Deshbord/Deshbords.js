import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, Badge } from '@mui/material';
import './Deshbords.css'
import { Link, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
import useAuth from '../../../Firebase/useAuth';
import { Button } from 'react-bootstrap';
//  import DeshHome from '../DeshHome';
const drawerWidth = 240;

const Deshbords = (props) => {

  const {user,logout,admin} = useAuth();

console.log(user.email);
    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            
            <ul className="sidebarList">
              <Link to='' className="link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                Dashboard
              </li>
              </Link>
              <Link to='/Deshbords/Profile' className="link">
              <li className="sidebarListItem ">
                <LineStyleIcon className="sidebarIcon" />
                Profile
              </li>
              </Link>
              

              { admin &&   <Box>
   
                <Link to={`/Deshbords/MakeAdmin`} className="link">
              <li className="sidebarListItem">
                <TrendingUpIcon className="sidebarIcon" />
                MakeAdmin
              </li>
              </Link>
              <Link to={`/Deshbords/newUser`} className="link">
              <li className="sidebarListItem">
                <TrendingUpIcon className="sidebarIcon" />
                NewUser
              </li>
              </Link>
              
              
              
              
              <Link to={`/Deshbords/userList`} className="link">
              <li className="sidebarListItem">
                <AttachMoneyIcon className="sidebarIcon" />
                UserList
              </li>
              </Link>
    
    </Box>}









             
             

             
             
              

              
              <li className="sidebarListItem">
                <DynamicFeedIcon className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <ChatBubbleOutlineIcon className="sidebarIcon" />
                Messages
              </li>
              <li className="sidebarListItem">
                <WorkOutlineIcon className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <ReportIcon className="sidebarIcon" />
                Reports
              </li>

              {user.email ?
         

            
            
            <Button onClick={logout} style={{textDecoration:'none', color:'#6a2b36',fontSize: '15px'}} color="inherit">Logout</Button>
            
           :
          
          <NavLink style={{textDecoration:'none', color:'#6a2b36',fontSize: '15px'}} to='/Login'><Button color="inherit">Login</Button></NavLink>
          
          
        }


            </ul>
          </div>
          
          
        </div>
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex', }}>
        <CssBaseline />
        <AppBar
        // justifyContent= 'end'
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <span className="logo__des">North Bengal Rider</span>
                    </div>
                    <div className="topRight">

                        <div className="topbarIconContainer">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon color="action" />
                            </Badge>
                        </div>
                        <div className="topbarIconContainer">
                            <LanguageIcon/>
                                
                        </div>
                        <div className="topbarIconContainer">
                            <SettingsIcon/>
                                
                        </div>
                        <Avatar alt="Remy Sharp" src={user.profile} />



                    </div>
                </div>
            </div>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
        {/* <DeshHome />  */}
          <Outlet />
        </Box>
      </Box>
    );
};

export default Deshbords;