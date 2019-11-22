import React from 'react';

const Login = () => {
    return(
        <div>
            <h1>LOGIN</h1>
            <form>
                <label htmlFor="login-username" className="visuallyhidden">Username</label>
                <input type="text" name="username" className="form-control mb-2" id="login-username" placeholder="USERNAME"></input>

                <label htmlFor="login-password" className="visuallyhidden">Password</label>
                <input type="text" name="password" className="form-control mb-2" id="login-password" placeholder="PASSWORD"></input>

                <input type="submit" className="btn btn-info" value="LOGIN"></input>
            </form>
        </div>
    )
}

export default Login;