import React, {useState} from "react"
import "../index.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ students, setStudent] = useState({
        stuserName:"",
        stpwd:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setStudent({
            ...students,
            [name]: value
        })
    }


    const login = () => {
        axios.post("http://localhost:8000/stlogin", students)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.students)
            history.push("/")
        })
    }

    return (
        <div className="container">
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="stuserName" value={students.stuserName} onChange={handleChange} placeholder="Enter your UserName"></input>
            <input type="password" name="stpwd" value={students.stpwd} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
        </div>
    )
}

export default Login