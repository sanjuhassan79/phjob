import React from 'react';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Table = (props) => {


    const [_id,name,email,phone,address,vehicle]=props.item
    return (
        <div>
            

    <tr key={_id}>
    <th scope="row">  <Checkbox {...label} /></th>
    <td>{name}</td>
    <td>{email}</td>
    <td>{phone}</td>
    <td>{address}</td>
    <td>{vehicle}</td>
  </tr>
 
        </div>
    );
};

export default Table;