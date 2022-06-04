import React, { useState } from "react"
import "../index.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ students, setStudents] = useState({
        stname:"",
        regNo:"",
        stemail:"",
        stuserName:"",
        stpwd:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setStudents({
            ...students,
            [name]: value
        })
    }

    const register = () => {
        const { stname, regNo, stemail, stuserName, stpwd } = students
        if( stname && regNo && stemail && stuserName && stpwd){
            axios.post("http://localhost:8000/students/save", students)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
    }

    return (
        <div className="register">
            {console.log("Students", students)}
            <h1>Register</h1>
            <input type="text" name="stname" value={students.stname} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="regNo" value={students.regNo} placeholder="Your Register Number" onChange={ handleChange }></input>
            <input type="text" name="stemail" value={students.stemail} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="text" name="stuserName" value={students.stuserName} placeholder="Your Username" onChange={ handleChange }></input>
            <input type="password" name="stpwd" value={students.stpwd} placeholder="Your Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register