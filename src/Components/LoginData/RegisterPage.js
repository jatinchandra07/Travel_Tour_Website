import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import './LoginData.css';

export default function SignUpPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email , setEmail]=useState('');
    const [error, setError] = useState('');

    const handleRegister = () => {
        if (username && password && email) {
            window.location.href='/'
            setError('');
        }
        else{
            setError('Please provide all details');
        }
    };
    return (
        <div className="text-center m-5-auto">
            <h2>Join Us</h2>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name"
                     value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </p>
                <p>
                    <button className="sub_btn" type="button" onClick={handleRegister} >Register</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
