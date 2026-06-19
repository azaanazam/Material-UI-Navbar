import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';

// 1. Sab se pehle sabhi pages ko yahan import karein (agar aapne files banayi hain)
import Home from './pages/Home';
import Products from './pages/Products';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        {/* Yahan aapne path "/home" likha hai, agar aap chahte hain ke website khulte hi Home aaye, to path="/" use karein */}
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;