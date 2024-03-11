import './App.css';
import Home from "./Pages/Home"
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import LoginPage from './Components/LoginData/LoginPage'
import RegisterPage from './Components/LoginData/RegisterPage'
import ForgetPasswordPage from './Components/LoginData/ForgetPasswordPage'
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
// Routes is use when we use link property
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/loginpage' element={<LoginPage/>}></Route>
        <Route path='/forget-password' element={<ForgetPasswordPage/>}></Route>

        </Routes>
    </div>
  );
}
export default App;