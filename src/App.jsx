import "./App.module.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <HashRouter>
      <main>
        <ToastContainer autoClose={5000} position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="**" element={<Home />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
