import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Design from "./pages/Design";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/design" element={<Design />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
