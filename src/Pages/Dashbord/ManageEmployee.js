import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfarmation from './DeleteConfarmation';
import EmployeeRow from './EmployeeRow';

const ManageEmployee = () => {
 const [deletingEmployee, setDeletingEmployee] = useState(null)


 const { data: employee, isLoading, refetch } = useQuery('employee', () => fetch('http://localhost:5000/employee', {
  headers: {
   'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  }
 }).then(res => res.json()));
 
 
 if (isLoading) {
  return <Loading/>
 }



 return (
  <div>
   <h1 className='text-xl  text-black font-bold'>Manage a Employee: {employee.length} </h1>


   <div class="overflow-x-auto">
    <table class="table w-full">

     <thead>
      <tr>
       <th></th>
       <th>avatar</th>
       <th>Name</th>
       <th>Specialty</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>

      {
       employee.map((employee, index) => <EmployeeRow
        key={employee._id}
        employee={employee}
        index={index}
        refetch={refetch}
        setDeletingEmployee={setDeletingEmployee}

       ></EmployeeRow>)
      }


     </tbody>
    </table>
   </div>


   {
    deletingEmployee && <DeleteConfarmation

    deletingEmployee={deletingEmployee}
     refetch={refetch}
     setDeletingEmployee={setDeletingEmployee}
    ></DeleteConfarmation>
   }



  </div>
 );
};

export default ManageEmployee;