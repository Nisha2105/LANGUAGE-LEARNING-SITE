import React from 'react';
import './Signup.css';

const SignUp = () => {
return(
<>
  
  <div className="main">
    <div className="form">
      <form>
        <span>
          <h1>Sign Up</h1>
        </span>
        <div className="username">
          <input type="text" placeholder="Username" />
          <hr />
        </div>
        <br />
        <br />
        <div className="password">
          <input type="text" placeholder="Password" />
          <hr />
          <br />
          <br />
        </div>
        <p className="forget">Forget Password?</p>
        <div>
          <button className="btn" type="submit">
            <b>Sign Up</b>
          </button>
        </div>
        
      </form>
    </div>
  </div>
</>
);
}

export default SignUp;