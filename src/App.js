import { Route, Routes } from "react-router-dom";
import { Footer, Header, Home, Shop } from "./Components/exporter";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/"element={<Home/>}></Route> 
        <Route path="/shop"element={<Shop/>}></Route> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
