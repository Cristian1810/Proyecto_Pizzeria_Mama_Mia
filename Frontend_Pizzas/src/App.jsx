import 'bootstrap/dist/css/bootstrap.min.css';
// Carpeta Components
import Footer from "./components/3_Footer/Footer"
import Home from "./components/2_Home/Home"
import Navbar from "./components/1_Navbar/Navbar"
import RegisterPage from "./components/1_Navbar/RegisterPage"
import LoginPage from "./components/1_Navbar/LoginPage"
import Cart from "./components/2_Home/Cart"
import Pizza from './components/2_Home/Pizza';
import ProtectedRoute from './components/2_Home/ProtectedRoute';
import PublicRoute from './components/2_Home/PublicRoute';

// Carpeta Pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterView from './Pages/RegisterView';
import LoginView from './Pages/LoginView';
import CartView from './Pages/CartView';
import HomeView from './Pages/HomeView';
import ProfileView from "./Pages/ProfileView"
import NotFound from './Pages/NotFound';
import PizzaView from './Pages/PizzaView';

// Carpeta Store
import { CartProvider } from './Store/CartContext';
import { UserProvider } from './Store/UserContext';


const App = () => {
  return (
  <>
    <BrowserRouter>
    <CartProvider>
      <UserProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/RegisterPage" element={<PublicRoute redirectTo="/"><RegisterView/></PublicRoute>} />
          <Route path="/LoginPage" element={<PublicRoute redirectTo="/"><LoginView /></PublicRoute>} />
          <Route path='/Profile' element={<ProtectedRoute redirectTo="/LoginPage"><ProfileView /></ProtectedRoute>} />
          <Route path='/Cart' element={<CartView />} />  
          <Route path='*' element={<NotFound />} />
          <Route path="/pizza/p001" element={<PizzaView />} />
        </Routes>
      </UserProvider>
    </CartProvider>
      <Footer />
    </BrowserRouter>
  
  </>
  
  
  );
  };
  export default App