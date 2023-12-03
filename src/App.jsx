import { Route, Routes } from "react-router-dom";
import Homepages from "./pages/Homepages";
import DetailProduct from "./components/DetailProducts/DetailProducts";
import NavbarFooter from "./pages/NavbarFooter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarFooter />}>
          <Route index element={<Homepages />} />
          <Route path=":id" element={<DetailProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
