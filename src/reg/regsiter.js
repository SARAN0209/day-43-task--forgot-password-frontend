import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Regsiter = () => {
  const navigate=useNavigate();
  const [formdata,setformdata]=useState({
    email:"",
    password:"",
   
   
  })
  const HandelSubmit=async(e)=>{
  
    e.preventDefault();
    const response = await axios.post('https://day-43-task-forgotpassword-backend.onrender.com/register/signup', {...formdata
    })
    console.log(response);
    alert("sign up SuccessFully");
    navigate("/")
    setformdata("");
    
  }
    return (
        <div>
            <section class="vh-100" style={{"background-color": "#eee"}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{"border-radius": "25px;"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4"
               onSubmit={(e)=>HandelSubmit(e)}
                >
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" required 
                         name="Email"
                         value={formdata.email}
                         onChange={(e)=>setformdata({...formdata,email:e.target.value})}/>
                      <label class="form-label" for="form3Example3c">Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" required 
                         name="Password"
                         value={formdata.password}
                         onChange={(e)=>setformdata({...formdata,password:e.target.value})}/>
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>
                 <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            
        </div>
    );
}

export default Regsiter;
