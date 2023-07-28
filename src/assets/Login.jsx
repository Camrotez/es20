import { useState } from "react"

function Login({login}){
    const [username,setUsername]= useState("")
    const [password, setPassword] = useState("")
    const changeName = ((e)=>{
        const value = e.target.value
        setUsername(value)
    })
    const changePass = ((e)=>{
        const value = e.target.value
        setPassword(value)
    })

    const onLogin = (() =>{
        login({username,password})
    }) 
     const isDisable = username === "" || password === ""
     const reset = (()=>{
        setUsername("")
        setPassword("")
     })
    return(
        <form>
            <input type="text"  onChange={changeName}/>
            <input type="password"  onChange={changePass} />
            <button disabled={isDisable} onClick={onLogin}>Login</button>
            <button onClick={reset}>Resete</button>
        </form>
    )
}
export default Login