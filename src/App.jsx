import "./App.module.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="**" element={<Home />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
