import 'bootstrap/dist/css/bootstrap.min.css';

// Carpeta Components
import Footer from "./components/3_Footer/Footer"
import Home from "./components/2_Home/Home"
import Navbar from "./components/1_Navbar/Navbar"
import RegisterPage from "./components/1_Navbar/RegisterPage"
import LoginPage from "./components/1_Navbar/LoginPage"
import Cart from "./components/2_Home/Cart"
import Pizza from './components/2_Home/Pizza';

// Carpeta Pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterView from './Pages/RegisterView';
import LoginView from './Pages/LoginView';
import CartView from './Pages/CartView';
import HomeView from './Pages/HomeView';
import ProfileView from "./Pages/ProfileView"
import NotFound from './Pages/NotFound';
import PizzaView from './Pages/PizzaView';


const App = () => {
  return (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/RegisterPage" element={<RegisterView />} />
        <Route path="/LoginPage" element={<LoginView />} />
        <Route path='/Profile' element={<ProfileView />} />
        <Route path='/Cart' element={<CartView />} />  
        <Route path='*' element={<NotFound />} />
        <Route path="/pizza/p001" element={<PizzaView />} />
      </Routes>
      {/* <Home />  */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/*<Cart />*/}
      {/* {<Pizza />} */}
      <Footer />
    </BrowserRouter>
  
  </>
  
  
  );
  };
  export default App