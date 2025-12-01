import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout";
import HomeNew from "./pages/HomeNew";
import About from "./pages/About";
import Design from "./pages/Design";
import Sustainability from "./pages/Sustainability";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomeNew />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Design />} />
          <Route path="/sustainability" element={<Sustainability />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
