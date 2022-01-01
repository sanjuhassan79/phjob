
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Register from './components/pages/Register/Register';
import JoinDriving from './components/pages/Join as a Driving/Join_as_a_Driving';
import Login from './components/pages/Login/Login';
import Deshbords from './components/Deshbords/pages/Deshbord/Deshbords';
import DeshHome from './components/Deshbords/pages/DeshHome';
import NewUser from './components/Deshbords/pages/NewUser/NewUser';
import UserList from './components/Deshbords/pages/UserList/UserList';
import User from './components/Deshbords/pages/User/User';

import MakeAdmin from './components/Deshbords/pages/MakeAdmin/MakeAdmin';
import Profile from './components/Deshbords/Profile/Profile ';
import Pay from './components/Deshbords/pay/Pay';
import PrivateRoute from './components/pages/Login/PrivateRoute';
import AdminRoute from './components/pages/Login/AdminRoute';
function App() {
  return (
 <>
  <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/JoinDriving" element={<JoinDriving />} />

        <Route path="/Deshbords" element={<PrivateRoute><Deshbords /></PrivateRoute>} >
      
      
      <Route exact  path="/Deshbords" element={<DeshHome />} />
      
      <Route path="newUser" element={<AdminRoute><NewUser /></AdminRoute>} />
      <Route path="makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
      <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="pay" element={<AdminRoute><Pay /></AdminRoute>} />
      <Route path="userList" element={<AdminRoute><UserList /></AdminRoute>} />
      <Route path="user" element={<AdminRoute><User /></AdminRoute>} />
     





  </Route>
        
      </Routes>
    </BrowserRouter>
   
 
 </>
  );
}

export default App;
