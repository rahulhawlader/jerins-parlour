import React from 'react';

const EmployeeRow = ({ employee, index, refetch, setDeletingEmployee }) => {
 const { name, specialty, img, email } = employee;
 
 
 return (
  <tr>
  <th>{index + 1}</th>
  <td><div class="avatar">
   <div class="w-20 rounded">
    <img src={img} alt={name} />
   </div>
  </div></td>
  <td>{name}</td>
  <td>{specialty}</td>
  <td>
   <label onClick={() => setDeletingEmployee(employee)} for="delete-confarm-modal" class="btn btn-xs btn-error">Delete</label>
  </td>
 </tr>
 );
};

export default EmployeeRow;