import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Login = ({setLogin}) => {
    const [email,setEmail]=useState("yadav@4");
    const [password,setPassword]=useState("naik");



    const submitForm=(e)=>{
     e.preventDefault();
     if (email === 'yadav@4' && password === 'naik') {
      localStorage.setItem('authenticate',JSON.stringify(true))
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setLogin(true);
            Swal.fire({
              icon: 'success',
              title: 'Successfully logged in!',
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } 
    }
  return (
    <div>
       <form onSubmit={submitForm}>
        <input type='email' placeholder='enter email here' name='userEmail' value={email} onClick={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='enter password here' name='userPassword' value={password} onClick={(e)=>setPassword(e.target.value)} />
        <button>login</button>
       </form>
    </div>
  )
}

export default Login
