import { BrowserRouter , Route, Routes ,} from "react-router-dom";
import {Routee} from './Routes';
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
// import { Title } from './App.style';
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        <Routes>
          {Routee.map((items) => {
            return (
              <Route
                key={items.id}
                exact={items.exact}
                path={items.path}
                element={items.component}
              />
            );
          })}
        </Routes>
    </BrowserRouter>
     {/* <Navbar/> 
    <Footer/> */}
    </div>
  );
}

export default App;
