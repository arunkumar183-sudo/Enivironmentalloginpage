import { BrowserRouter, Routes, Route } from "react-router-dom";

import EnvironmentLogin from "./pages/enivironmentloginpage";
import EnvironmentSignup from "./pages/enivironmentalsignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnvironmentLogin />} />
        <Route path="/signup" element={<EnvironmentSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
