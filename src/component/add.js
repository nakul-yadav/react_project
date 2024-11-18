import React, { useState,useEffect } from 'react'
import Swal from 'sweetalert2';

const Add = ({employee,setEmployee,setEmp,setCheck}) => {
    const [firstName,setFirstName]=useState();
    const [lastName,setLastName]=useState();
    const [email,setEmail]=useState();
    const [salary,setSalary]=useState();
    const [date,setDate]=useState();


   


const handleAdd=(e)=>{
  alert('hiiii')
e.preventDefault();
if (!firstName || !lastName || !email || !salary || !date) {
    return Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'All fields are required.',
      showConfirmButton: true,
    });
  }

  const id = employee.length + 1;
  const newEmployee = {
    id,
    firstName,
    lastName,
    email,
    salary,
    date,
  };


  setEmployee([...employee,newEmployee]);
  localStorage.setItem('employeeData',JSON.stringify(employee))
  setEmp(false);
 

  Swal.fire({
    icon: 'success',
    title: 'Added!',
    text: `${firstName} ${lastName}'s data has been Added.`,
    showConfirmButton: false,
    timer: 1500,
  });
}

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <button>add</button>
      </form>
    </div>
  )
}

export default Add
