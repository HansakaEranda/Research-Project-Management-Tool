import React, { useState } from "react"
import "../index.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const StaffRegister = () => {

    const history = useHistory()

    const [ staff, setStaff] = useState({
        lname:"",
        lregNo:"",
        lemail:"",
        lcontactNo:"",
        luserName:"",
        lpwd:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setStaff({
            ...staff,
            [name]: value
        })
    }

    const register = () => {
        const { lname, lregNo, lemail, lcontactNo, luserName, lpwd } = staff
        if( lname && lregNo && lemail && lcontactNo && luserName && lpwd){
            axios.post("http://localhost:8000/lcregister", staff)
            .then( res => {
                alert(res.data.message)
                history.push("/lclogin")
            })
        } else {
            alert("invlid input")
        }
    }

    return (
        <div className="container">
        <div className="register">
            {console.log("Staff", staff)}
            <h1>staff Register</h1>
            <input type="text" name="lname" value={staff.lname} placeholder="Enter Your Name" onChange={ handleChange }></input>
            <input type="text" name="lregNo" value={staff.lregNo} placeholder="Enter Your Register Number" onChange={ handleChange }></input>
            <input type="text" name="lemail" value={staff.lemail} placeholder="Enter Your Email" onChange={ handleChange }></input>
            <input type="text" name="lcontactNo" value={staff.lcontactNo} placeholder="Enter Your Contact Number" onChange={ handleChange }></input>
            <input type="text" name="luserName" value={staff.luserName} placeholder="Enter UserName" onChange={ handleChange }></input>
            <input type="password" name="lpwd" value={staff.lpwd} placeholder="Enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/lclogin")}>Login</div>
        </div>
        </div>
    )
}

export default StaffRegister