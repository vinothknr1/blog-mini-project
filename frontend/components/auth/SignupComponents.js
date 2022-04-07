import React from "react";
import { useState } from "react";

const SignupComponents = () =>{
    const[values,setValues]=useState({
        name: '',
        emaill:'',
        password:'',
        error:'',
        loading:false,
        message:'',
        showForm:true

    })
        const{name,email,password,error,loading,message,showForm}=values

    const handleSumbit = e =>{
        e.preventDefault()
        console.table({name,email,password,error,loading,message,showForm});
    }
    const handleChange = name => e =>{
        setValues({...values,error:false,[name]:e.target.value})
    };
    const signupForm = () => {
    return(
        <form onSubmit={handleSumbit}>
            <div className="form-group">
                <input value={name} onChange={handleChange('name')} type="text" classname="form-control" placeholder="Type your name"/>
            </div>
            <div className="form-group">
                <input value={email} onChange={handleChange('email')} type="email" classname="form-control" placeholder="Type your email"/>
            </div>
            <div className="form-group">
                <input value={password} onChange={handleChange('password')} type="password" classname="form-control" placeholder="Type your password"/>
            </div>
            <button>
                <button className="btn btn-primary">Signup</button>
            </button>
        </form>
    ) 
}
return (
    <React.Fragment>
          {signupForm()}
    </React.Fragment>
)
};

export default SignupComponents;