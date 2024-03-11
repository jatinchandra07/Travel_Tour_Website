import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import './LoginData.css';

export default function SignInPage() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username && password) {
        window.location.href='/'
      setError('');
    } else if(username && !password){
      setError('Please provide password.');
    }
    else if(!username && password){
        setError('Please provide username.');
      }
      else{
        setError('Please provide all details');
      }
  };
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" 
                     value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </p>
                <p>
                    <button className="sub_btn" type="button" onClick={handleLogin} >Login</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
