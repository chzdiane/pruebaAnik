import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import Info from "./pages/Info";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/info" element={<Info />} />
        <Route path="/character/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
