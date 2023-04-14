
import { Route, Routes } from "react-router-dom";

//Components

import Layout from "./layout";
import Home from "./pages/home";
import Register from "./pages/Sign&Register/"
import ReActiveCode from "./pages/ReActiveCode";
import ForgotPass from "./pages/forgotPass";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reactive" element={<ReActiveCode />} />
          <Route path="/forgot" element={<ForgotPass />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
