import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/register/Main";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NoPage from "./pages/NoPage";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./contexts/ProtectedRoute";

export default function App() {
  return (
    <div>
      <AuthProvider>
        {" "}
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/Dashboard"
              element={
                // <ProtectedRoute>
                <Dashboard />
                // </ProtectedRoute>
              }
            />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>{" "}
      </AuthProvider>
    </div>
  );
}
