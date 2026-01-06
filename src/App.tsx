import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout";
import HomeNew from "./pages/HomeNew";
import About from "./pages/About";
import Design from "./pages/Design";
import Sustainability from "./pages/Sustainability";
import ServiceDetail from "./pages/ServiceDetail";
import Error from "./pages/Error";
// import SiteMaintainancePage from "./pages/SiteMaintainancePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomeNew />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Design />} />
          <Route path="/service/:label" element={<ServiceDetail />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
