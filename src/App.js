import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/context/AuthProvider/AuthProvider";
import BookServices from "./Pages/BookServices/BookServices";
import AddService from "./Pages/Dashboard/AddService/AddService";
import Booklist from "./Pages/Dashboard/Booklist/Booklist";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import Profile from "./Pages/Dashboard/Profile/Profile";
import Review from "./Pages/Dashboard/Review/Review";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import AdminRoute from "./Pages/Login/PrivateRoute/AdminRoute";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/booking/:bookingId"
              element={
                <PrivateRoute>
                  <BookServices />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/bookList" element={<Booklist />} />
              <Route path="/dashboard/review" element={<Review />} />
              <Route
                path="/dashboard/mangeOrder"
                element={
                  <AdminRoute>
                    <ManageAllOrders />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/admin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/addService"
                element={
                  <AdminRoute>
                    <AddService />
                  </AdminRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
