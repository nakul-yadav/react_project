import React, { useEffect, useState } from 'react'
import Dataa from '../component/data.js'
import Login from './login'
import Add from '../component/add.js'
import Signup from './signup.js'

const Home = ({login,editFunction,updateEmployee, setLogin,edit}) => {
    const [emp,setEmp]=useState(false);
    const [check,setCheck]=useState(1);
    const [employee,setEmployee]=useState(Dataa);

   useEffect(()=>{ 
    let data=JSON.parse(localStorage.getItem('employeeData'));
    if (data !== null && Object.keys(data).length !== 0) {
     setEmployee(data);
    }
    },[])

    

    const deleteItem=(id)=>{
      let dd=JSON.parse(localStorage.getItem('employeeData'));
      const arr=dd.filter((item)=>item.id!=id); 
      localStorage.setItem('employeeData',JSON.stringify(arr))
      setEmployee(arr);
    }

    const logoutFunction=()=>{
      localStorage.setItem('authenticate',false);
       setEmp(false);
    }
  
  return (

   
    
     <div className='contain-table'>
      {
         JSON.parse(localStorage.getItem('authenticate'))?
       <table className="striped-table">
        { emp?<Add employee={employee} setEmployee={setEmployee} setCheck={setCheck} setEmp={setEmp} updateEmployee={updateEmployee} />:
     <div className="App">
     <h3>Employee management central</h3>
     <div>
     <button onClick={()=>setEmp(true)}>Add employee</button>
     <button onClick={()=>logoutFunction()}>logout</button>
     </div>
     <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
     {
        employee.map((item,id)=>{
         return(
            <tr key={item.id}>
            <td>{item.id}</td>
           
            <td>{item.firstName}</td>
           
            <td>{item.lastName}</td>
           
            <td>{item.email}</td>
            
            <td>{item.salary}</td>

            <td><button onClick={()=>editFunction(item.id) }>edit</button></td>
            
            <td><button onClick={()=>deleteItem(item.id)}>delete</button></td>
            </tr>
         )
        })
     }
     </tbody>
        </div> 
}
</table>
:<Signup/>
}
{check}

    </div>
    
  )

}

export default Home
