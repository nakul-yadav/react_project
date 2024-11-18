import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Edit = ({updateEmployee,setEdit,editId}) => {
    const [firstName,setFirstName]=useState(updateEmployee[0].firstName);
    const [lastName,setLastName]=useState(updateEmployee[0].lastName);
    const [email,setEmail]=useState(updateEmployee[0].email);
    const [salary,setSalary]=useState(updateEmployee[0].salary);
    const [date,setDate]=useState(updateEmployee[0].date);


const handleAdd=(e)=>{
    let idd=updateEmployee[0].id
e.preventDefault();
if (!firstName || !lastName || !email || !salary || !date) {
    return Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'All fields are required.',
      showConfirmButton: true,
    });
  }

    const updateData=  JSON.parse(localStorage.getItem('employeeData')).map((item,id)=>{
        if(id===editId){
            const newData = {
                idd,
                firstName,
                lastName,
                email,
                salary,
                date,
              };
                 return newData
        }
        else{
            return item
        }
    })
    localStorage.setItem('employeeData',JSON.stringify(updateData))
    setEdit(false);

 

  

  Swal.fire({
    icon: 'success',
    title: 'edit done!',
    text: `${firstName} ${lastName}'s data has been edited.`,
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
        <button>edit</button>
      </form>
    </div>
  )
}

export default Edit
