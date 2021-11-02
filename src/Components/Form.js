import axios from "axios";
import React, { useState } from "react";

function Form() {

const [form,setForm] = useState({name:"",email:"",message:""})
const [error,setError] = useState(null)
const [success,setSuccess] = useState(null)


const handleChange = (e) =>{
    setForm({...form,[e.target.name]:e.target.value})
}

const checkInputs = () =>{

    if(form.name === "" || form.message === "" || form.email === ""){
        setError({message:"All Fields are Mandatory"})

        setTimeout(() => {
                setError(null)
            }, 4000);
        return false
    }

    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!re.test(String(form.email).toLowerCase())){
        setError({message:"Enter a valid Email Address"})
        setTimeout(() => {
        setError(null)
            
        }, 4000);
        return false
    }

    
    return true

}

const sendMessage = async()=>{
    try {
        console.log(form)
        await axios.post('https://admin.srkprojects.com/web/api/client/v1/contact-us/', form)

        setSuccess({message:"You Successfully submitted your request"})
        setTimeout(() => {
           setSuccess(null)
        }, 5000);
    } catch (error) {
        setError({message:"Server Error on Submitting Submission Failed"})
        setTimeout(() => {
            setError(null)
                
            }, 4000);
        
    }
}

const handleSubmit =  (e) =>{

    e.preventDefault();

    if(checkInputs()){

        sendMessage()

    }else{
        console.log("Error on input")
    }

}

  return (
    <div className="background">
      <div className="container">
      {error && (
                    <div class="error-msg">
                    <i class="fa fa-times-circle"></i>
                   {error.message}
                  </div>
                )}

                {success && (
                    <div class="success-msg">
                    <i class="fa fa-check"></i>
                    {success.message}
                  </div>


                )}
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              
            </div>
            <form onSubmit={handleSubmit} >
            <div className="screen-body-item">
                
              <div className="app-form">
                <div className="app-form-group">
                  <input type="text"
                  value={form.name}
                  onChange={handleChange}
                  name="name"
                    className="app-form-control"
                    placeholder="NAME"
                    
                  />
                </div>
                <div className="app-form-group">
                  <input type="text" 
                  
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  className="app-form-control" placeholder="EMAIL" />
                </div>
                
                <div className="app-form-group message">
                  <input className="app-form-control"  
                  value={form.message}
                  onChange={handleChange}
                  name="message"
                  placeholder="MESSAGE" />
                </div>
                <div className="app-form-group buttons">
                 
                  <button type="submit" className="app-form-button">SEND</button>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
