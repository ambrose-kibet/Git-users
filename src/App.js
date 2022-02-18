import "./App.css";
import Home from "./Pages/Home";
import PrivateRoute from "./Pages/PrivateRoute";
import ErrorPage from "./Pages/ErrorPage";
import LoginPage from "./Pages/LoginPage";
import Auth0Wrapper from "./Pages/Auth0Wrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Auth0Wrapper>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Auth0Wrapper>
  );
}

export default App;
