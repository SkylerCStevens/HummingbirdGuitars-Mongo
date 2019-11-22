import React from 'react'

const Signup = () => {
    return(
        <div>
            <h1 className="text-center">SIGNUP</h1>
            <form>
            <label htmlFor="signup-firstName" className="visuallyhidden">First Name</label>
            <input type="text" className="form-control" name="firstName" placeholder="FIRST NAME" id="signup-firstName"></input>

            <label htmlFor="signup-lastName" className="visuallyhidden">Last Name</label>
            <input type="text" className="form-control" name="lastName" placeholder="LAST NAME" id="signup-lastName"></input>

            <label htmlFor="signup-email" className="visuallyhidden">Email</label>
            <input type="email" className="form-control" name="email" placeholder="EMAIL" id="signup-email"></input>

            <label htmlFor="signup-username" className="visuallyhidden">Username</label>
            <input type="text" className="form-control" name="username" placeholder="USERNAME" id="signup-username"></input>

            <label htmlFor="signup-password" className="visuallyhidden">Password</label>
            <input type="password" className="form-control" name="password" placeholder="PASSWORD" id="signup-password"></input>

            <label htmlFor="signup-verifyPassword" className="visuallyhidden">Verify Password</label>
            <input type="password" className="form-control" name="verifyPassword" placeholder="VERIFY PASSWORD" id="signup-verifyPassword"></input>

            <input type="submit" value="SIGN UP" className="btn btn-info"></input>
            </form>
        </div>
    )
}

export default Signup;