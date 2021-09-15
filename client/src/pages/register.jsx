import { useRef } from "react";
import axios from "axios"
import { Link, useHistory } from 'react-router-dom';
//import { useHistory } from "react-router";
import '../index.css'
export default function Register() {
    const fullname = useRef();
    const email = useRef();
    const phone = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
          passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
          const user = {
            fullname: fullname.current.value,
            email: email.current.value,
            phone: phone.current.value,
            password: password.current.value,
          };
          try {
            await axios.post("/auth/register", user);
            history.push("/login");
          } catch (err) {
            console.log(err);
          }
        }
      };

    return (
        <div className="auth_page">
            <form  className="loginBox" onSubmit={handleClick}>
                    <h3 className="txt-uppercase text-center text-primary mb-4">Valo-Chat</h3>
                    <div className="form-group">
                        <label htmlFor="exampleInputFullName">Full Name</label>
                        
                        <input type="fullname" className="form-control" id="exampleInputFullName" required ref={fullname}
                           />
                        
                    </div>
                
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email" required ref={email}/>

                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInput">PhoneNumber</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required ref={phone}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"required ref={password}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword2">Password Again</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" required ref={passwordAgain}
                           />
                    </div>

                    <button type="submit" className="btn btn-info w-100">
                        Đăng ký
                    </button>

                    <p className="my-2">
                        You have an account? <Link to="/login" style={{ color: "red" }}>Login now</Link>
                    </p>
                </form>
        </div>
    )
}

// export default Register
