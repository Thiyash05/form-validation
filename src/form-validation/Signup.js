import React, {useState} from "react";
import {useForm} from "react-hook-form";

function Signup(){
   
    const {register,handleSubmit,formState:{errors}}=useForm()

    return(
        <div>
            <section className="sign-sec">
                <div className="sign-container">
                    <h1 className="sign-title">facebook</h1>
                    <div className="sign-row">
                        <div className="sign-col">
                            <div className="sign-card">
                                <h2 className="card-title">Create a new account</h2>
                                <h5 className="card-line">It's quick and easy.</h5>
                                <hr />
                            
                                <form className="sign-form" onSubmit={ handleSubmit((e)=>{
                                    console.log(e)
                                })}>
                                <input type="text" id="sign-input" {...register("name",{required:"Name required"})} placeholder="Enter name"/>
                                {errors.name && <p className="sign-error-msg">{errors.name.message}</p>}
                                
                                
                                <input type="text" id="sign-input" {...register("email",{required:"Enter address or Phone no is required"})} placeholder="Enter address or Phone no"/>
                                 {errors.email && <p className="sign-error-msg">{errors.email.message}</p>}

                                
                                <input type="password" id="sign-input" {...register("password",{required:"Password is required",minLength:{value:8,message:"Length should be 8 character"}})} placeholder="Enter Password"/>
                                {errors.password && <p className="sign-error-msg">{errors.password.message}</p>}

                                <button className="sign-btn">SignUp</button>     
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup;