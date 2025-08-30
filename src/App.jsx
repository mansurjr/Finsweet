import React from "react";
import { Routes, Route } from "react-router-dom";
import { NAVBAR_MENU } from "./static";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-[340vh]">
      <Header />

      <main className="flex-1">
        <Routes>
          {NAVBAR_MENU.map((item, index) => (
            <Route key={index} path={item.path} element={<item.component />} />
          ))}
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
