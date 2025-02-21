import './Navbar.css';
import RegisterPage from './RegisterPage';

const Navbar = () => {
return (
    <div className="navbar">
        <h3 className='text-white' href="#home">Pizzería Mammá Mía!</h3>
        <a href="#home">🍕Home</a>
        <a href="#link">🔒Login</a>
        <a href="./RegisterPage">🔐Register</a>
        <a href="#contact" className='right'>🛒Total: $25.000</a>
    </div>
);
};

export default Navbar;
