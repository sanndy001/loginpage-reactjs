import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required/>
        </div>
        <br/>
        <div className="input-box">
          <input type="password" placeholder="password" required/>
        </div>
        <br/>
        <div className="remember-forgot">
          <label><input type="checkbox"/>Remember password</label>
          <a href="#">Forgot password?</a> 
        </div>
        <br/>
        <button type="submit">Login</button>
        <br/>
        <div className="register-link">
          <p>Not a member? <a href="#">Register</a> </p>
        </div>
      </form>
    </div>
      
  );
}

export default App;
