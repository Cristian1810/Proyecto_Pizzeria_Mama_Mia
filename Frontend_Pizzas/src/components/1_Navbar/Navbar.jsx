import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
return (
    <div className="navbar">
        <h3 className='text-white' href="#home">Pizzería Mammá Mía!</h3>
        <Link to="/">🍕Home</Link>
        <Link to="/LoginPage">🔒Login</Link>
        <Link to="/RegisterPage">🔐Register</Link>
        <Link to="/Profile">👤Profile</Link>
        <Link to="/Cart" className='right'>🛒Total: $25.000</Link>
    </div>
);
};

export default Navbar;
