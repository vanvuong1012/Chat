import { useContext, useRef } from "react";
import { loginCall } from "./../apiCalls";
import { Link } from 'react-router-dom';
import { AuthContext } from "./../context/AuthContext";
import { CircularProgress } from "@material-ui/core";




export default function Login() {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);
  
    const handleClick = (e) => {
      e.preventDefault();
      loginCall(
        { email: email.current.value, password: password.current.value },
        dispatch
      );
    };
  

    return (
    
            <div className="auth_page">
                <form onSubmit={handleClick}>
                    <h3 className="txt-uppercase text-center text-primary mb-4">Valo-Chat</h3>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email"
                            id="exampleInputEmail1" ref={email} />

                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            ref={password} />
                    </div>
                    <button type="submit" className="btn btn-info w-100"
                        disabled={isFetching}>
                           {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
                    </button>

                    <p className="my-2">
                        You don't have account? <Link to="/register" style={{ color: "crimson" }}>Register now</Link>
                    </p>
                </form>
            </div>
    )
}