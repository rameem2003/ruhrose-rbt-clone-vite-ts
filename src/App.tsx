import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout";
import HomeNew from "./pages/HomeNew";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomeNew />} />
          {/* <Route path="/design" element={<Design />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
