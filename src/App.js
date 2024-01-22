import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// components
import Footer from "./Footer";
import Header from "./Header";

// styles
import "./App.css";
import About from "./pages/About";
import Plan from "./pages/Plan";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={!user ? <Navigate to="/login" /> : <Home />}
              />
              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              />
              <Route
                path="/signup"
                element={user ? <Navigate to="/" /> : <Signup />}
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/plan"
                element={!user ? <Navigate to="/login" /> : <Plan />}
              />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
