
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/Header";

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
     <Footer/>
    </>
  );
};


export default App;

