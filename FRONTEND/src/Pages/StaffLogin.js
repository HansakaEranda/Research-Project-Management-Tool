import React, {useState} from "react"
import "../index.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const StaffLogin = ({ setLoginStaff}) => {

    const history = useHistory()

    const [ staff, setStaff] = useState({
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


    const lclogin = () => {
        axios.post("http://localhost:8000/lclogin", staff)
        .then(res => {
            alert(res.data.message)
            setLoginStaff(res.data.staff)
            history.push("/")
        })
    }

    return (
        <div className="container">
        <div className="login">
            <h1>Staff Login</h1>
            <input type="text" name="luserName" value={staff.luserName} onChange={handleChange} placeholder="Enter your UserName"></input>
            <input type="password" name="lpwd" value={staff.lpwd} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={lclogin}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/lcregister")}>Register</div>
        </div>
        </div>
    )
}

export default StaffLogin