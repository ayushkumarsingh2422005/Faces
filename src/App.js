import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Routee } from "./Routes";
import "./locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef } from "react";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
// import { Title } from './App.style';
function App() {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div className="App">
      <div className="scroll-container" ref={scrollRef}>
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
      </div>

      {/* <Navbar/> */}
    </div>
  );
}

export default App;
