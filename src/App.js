import { Route, Routes } from "react-router-dom";
import { Footer, Header, Home, Shop } from "./Components/exporter";

function App() {
  return (
    <div className='relative'>
      <Header />
      <Routes>
        <Route path="/"element={<Home/>}></Route> 
        <Route path="/shop"element={<Shop/>}></Route> 
        <Route path="/blog"element={<Blog/>}></Route> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
