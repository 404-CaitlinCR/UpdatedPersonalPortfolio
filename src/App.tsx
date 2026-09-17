import Home from "./Home"
import "./App.css"
import Navbar from "./components/nav";

function App(){
  return (
    <div className="app-container">
        <Navbar></Navbar>
      <div className="content-box">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;