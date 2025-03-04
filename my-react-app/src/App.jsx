import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles/fonts.css";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
