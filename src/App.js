import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// components
import Footer from "./Footer";
import Header from "./Header";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={false ? <Navigate to="/login" /> : <Home />}
            />
            <Route
              path="/login"
              element={true ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/signup"
              element={true ? <Navigate to="/" /> : <Signup />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
