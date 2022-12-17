import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){
  const navigate=useNavigate();
  const [formdata,setformdata]=useState({
    email:"",
    password:"",
  })

let HandelSubmit= async(e)=>{
  e.preventDefault();
  

  
    const response = await axios.post('https://day-43-task-forgotpassword-backend.onrender.com/register/signin', {...formdata
    })
    console.log(response);
    if(response){
      localStorage.setItem("token",response);
      navigate('/suceess');
    }
 

  

}





    return(<>
       
        <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <h1 style={{textAlign:"center"}}>Sign In</h1>
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
                className="img-fluid" alt="Sample image"/>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form  onSubmit={(e)=>HandelSubmit(e)}>
                <div className="form-outline mb-4">
                  <input  className="form-control form-control-lg"
                   name="email"
                  value={formdata.email}
                  onChange={(e)=>setformdata({...formdata,email:e.target.value})}
                    placeholder="Enter a valid email address"  type ={"email"} required />
                  <label className="form-label" for="form3Example3">Email address</label>
                </div>
      
                <div className="form-outline mb-3">
                  <input type="password"  className="form-control form-control-lg"
                   name="password"
                   value={formdata.password}
                   onChange={(e)=>setformdata({...formdata,password:e.target.value})}
                    placeholder="Enter password" />
                  <label className="form-label" for="form3Example4">Password</label>
                </div>
      
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                  
                    <label className="form-check-label" for="form2Example3">
                     
                    </label>
                  </div>
                  <Link to={"/for"} className="text-body">Forgot password?</Link>
                </div>
      
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary btn-lg"
                    style={{"padding-left": "2.5rem"," padding-right": "2.5rem"}} >Login</button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/regi"
                      className="link-danger">Register</Link></p>
                </div>
      
              </form>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}

export default Login
