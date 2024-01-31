import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// hooks
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Restday from "./pages/Restday";
import Training from "./pages/Training";
import Create from "./pages/Create";
import Records from "./pages/Records";
import TrainingDetails from "./pages/TrainingDetails";
import About from "./pages/About";
import Plan from "./pages/Plan";

// components
import Footer from "./Footer";
import Header from "./Header";

// styles
import "./App.css";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter scrollRestoration="auto">
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
              <Route
                path="/restday"
                element={!user ? <Navigate to="/login" /> : <Restday />}
              />
              <Route
                path="/training"
                element={!user ? <Navigate to="/login" /> : <Training />}
              />
              <Route
                path="/training/:id"
                element={!user ? <Navigate to="/login" /> : <TrainingDetails />}
              />
              <Route
                path="/create"
                element={!user ? <Navigate to="/login" /> : <Create />}
              />
              <Route
                path="/records"
                element={!user ? <Navigate to="/login" /> : <Records />}
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
