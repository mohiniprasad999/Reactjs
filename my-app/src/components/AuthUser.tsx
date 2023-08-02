import React, { useState } from "react";
import './AuthUser.css'

interface IState {
    isLogin: boolean;
}
const AuthUser = () => {
    const [state, setState] = useState<IState>({ isLogin: false })

    const Login = (): void => {
        setState({ isLogin: true })
    }

    const Logout = (): void => {
        setState({ isLogin: false })
    }

    return (
        <div>
            {state.isLogin && state.isLogin ? (<h1>Please login for dashboard</h1>) : (<h1>Welcome</h1>)}
            {/* Conditional rendering */}
            {
                state.isLogin && state.isLogin ? (
                    <button className="logout" onClick={Logout}>Logout</button>
                ) : (
                    <button className="login" onClick={Login}>Login</button>

                )}


        </div>
    )
}
export default AuthUser