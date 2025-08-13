import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import AdminPage from "./pages/AdminPage";
import AdminLogin from "./pages/AdminLoginPage";
import GalleryPage from "./pages/GalleryPage";

const App = () => {
  const token = localStorage.getItem("token");

  return (  
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 font-roboto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={token ? <AdminPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
