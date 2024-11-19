import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Produtos from "./pages/Produtos";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contato from "./pages/Contato";
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="produtos/:id" element={<Produtos />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
