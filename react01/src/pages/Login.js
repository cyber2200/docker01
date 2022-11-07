import { useDispatch, useSelector } from "react-redux";
import { updateEmail, updatePassword } from '../redux/login';
import { loginActionApi } from "../redux/login";
import { Navigate } from 'react-router-dom';

function Login() {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const loginAction = (e) => {
    e.preventDefault();
    dispatch(loginActionApi());
  }

  const emailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  }

  const passwordChange = (e) => {
    dispatch(updatePassword(e.target.value));
  }
  
  if (state.login.redirect) {
    return(
      <Navigate replace to="/dashboard" />
    )
  }

  return (
    <div className="App">
      <form onSubmit={loginAction}>
        <input id="email" type="text" placeholder="Email" value={ state.login.email } onChange={emailChange} />
        <input id="password" type="password" placeholder="password" value={ state.login.password } onChange={passwordChange} />
        <input type="submit" />
      </form>
      <div>
        { state.login.apiStatus }
      </div>
    </div>
  );
}

export default Login;