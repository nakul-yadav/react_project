import logo from './logo.svg';
import './App.css';
import Data from './component/data';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import Login from './pages/login';
import Home from './pages/home';
import employeesData from './component/data';
import Add from './component/add';
import Edit from './component/edit';

function App() {
const [login,setLogin]=useState(false);
const [updateEmployee,setUpdateEmployee]=useState(null);
const [edit,setEdit]=useState(false);
const [editId,setEditId]=useState();


useEffect(()=>{
setLogin(JSON.parse(localStorage.getItem('authenticate')))
},[])





const editFunction=(id)=>{
  const arr=  JSON.parse(localStorage.getItem('employeeData')).filter((item)=>item.id===id);
  setEditId(id);
  setUpdateEmployee(arr);
  setEdit(true);
}


return (
    <div className="App">
     
  {
    edit?<Edit updateEmployee={updateEmployee} setEdit={setEdit} editId={editId} />:""
  }
    {
      login?<Home editFunction={editFunction}/>:<Login setLogin={setLogin}/>
    }
  
    </div>
  );
}

export default App;
