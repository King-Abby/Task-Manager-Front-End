import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CoverPage from "./pages/CoverPage";
import MyTask from "./pages/MyTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import NavBar from "./components/NavBar";
import {Toaster} from "react-hot-toast"


function App() {
  const baseURL = "https://task-manager-backend-1-n5hy.onrender.com";

  return (
    <>
      <Router>
        <Toaster position="top-right-corner"/>
        <NavBar />
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/tasks" element={<MyTask baseURL={baseURL} />} />
          <Route path="/new" element={<NewTask baseURL={baseURL} />} />
          <Route path="/edit/:id" element={<EditTask baseURL={baseURL} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// Netlify, Vercel, Render etc are popular free  cloud platforms for hosting web applications.

// Netlify is best for static sites and applications with a focus on simplicity and serverless function

// Vercel is optimized for frontend development especially those using react and Next.js with stronger severless and edge capabolities

// Render is a versetile platform suitable for full-stack applications, offering more flexible in terms of supported frameworks, databases and backend services.
