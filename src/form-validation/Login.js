import React, {useState} from "react";
import {useForm} from "react-hook-form";

function Login(){
     
    const {register,handleSubmit,formState:{errors}}=useForm()
    
    return(
        <div>
        
            <section class="sec">
                <div class="container">
                        <div class="row">
                                <div class="login-title">
                                    <h2 class="text">facebook</h2>
                                    <p>Facebook helps you connect and share with the people in your life.</p>
                                </div>
                        <form onSubmit={ handleSubmit((e)=>{
                            console.log(e)
                        })}>
                                 <div class="login-detail">
                                    <div className="card">
                                        <input type="text" id="input-1" {...register("email",{required:"Email or phone is required"})} placeholder="Enter address or Phone no"/>
                                        {errors.email && <span className="error-msg">{errors.email.message}</span>}

                                        
                                        <input type="password" id="input-2" {...register("password",{required:"Password is required",minLength:{value:8,message:"Length should be 8 character"}})} placeholder="Enter Password"/>
                                        {errors.password && <span className="error-msg">{errors.password.message}</span>}
                                        
                                        <button className="log-btn">LogIn</button>
                                        <h5>Forgotten Password</h5>
                                        <hr />
                                        <button className="create-btn">Create an account</button>
                                        
                                    </div>
                                    <div className="line">
                                        <p><span>Create a page</span> for a celebrity, brand or bussiness</p>
                                    </div>
                                </div>
                        </form>
                        </div>
                   
                </div>
			</section>		
        </div>
    )
}

export default Login;