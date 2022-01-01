import React, { useState,useEffect } from 'react';
import { Table,Button } from 'react-bootstrap';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const UserList  = () => {
const [costomer,setcostomer]=useState([])
const [isDelete, setisDelete]=useState(null)
const [Search, setsearch] = useState('')

useEffect(() => {
    fetch(
      Search
      ? `https://mysterious-fjord-19391.herokuapp.com/users/${Search}`
      : 'https://mysterious-fjord-19391.herokuapp.com/users'
      
      
      
      
      )
    .then(res=>res.json())
    .then(data=>setcostomer(data))
}, [isDelete,costomer,Search]);

const handleDelete=(id)=>{

    fetch(`https://mysterious-fjord-19391.herokuapp.com/users/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        
        if(data.acknowledged === true){
            alert('Deleted succesfully')
             setisDelete(true)
             const remainingUser= costomer.filter(addEvent=>addEvent._id !==id)
             setcostomer(remainingUser)
           
        }else{
             setisDelete(false)  
         }
 
 
 })




}

// const handleStatus=(id)=>{
   
//     fetch(`https://mysterious-fjord-19391.herokuapp.com/users/${id}`,{
    
//     method:"PUT",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify(
//        {
//     status:"shipped"
//    }
    
//     )
//     })
    
//     .then(res=>res.json())
//     .then(data=>{
//       console.log(data)
//     })
    
    
    
//     }

    return (
        <>
        <input className="form-control me-2 mb-4" 
type="search" 
placeholder="Search" 
onChange={e=>setsearch(e.target.value)} 
aria-label="Search"/> <br />


<label htmlFor="customRange3" className="form-label">Example range</label>
<div className="range">
  <input type="range" className="form-range" min="18" max="50" step="5" id="customRange3" onChange={e=>setsearch(e.target.value)} />
</div>
        
        
        
        
        <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
          
            <th>#</th>
            <th>Name</th>
            
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            
            <th>Vehicle</th>
            <th>Role</th>
            <th>Pay</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {costomer.map(costomer=>
         <tr key={costomer._id}>
         <td>  <Checkbox {...label} /></td>
         <td>{costomer.name}</td>
         <td>{costomer.email}</td>
         <td>{costomer.phone}</td>
         <td>{costomer.address}</td>
         <td>{costomer.Vehicle}</td>
         <td>{costomer.Driving}</td>
         
         
        
        
         {costomer.Driving?<td><Link to='/Deshbords/pay'><Button variant="outline-danger">pay</Button></Link></td>:<td></td>}

         <td><Button onClick={()=>handleDelete(costomer._id)} variant="outline-danger">Cancel</Button></td>
       </tr>
         )
         
         
         
         }
          
        </tbody>
      </Table>
        
        </>
    );
};

export default UserList ;